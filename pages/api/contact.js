const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 12;

const requestLog = new Map();

const clean = (value, maxLength = 500) => String(value || '').replace(/\s+/g, ' ').trim().slice(0, maxLength);

const getHeader = (req, name) => {
  const value = req.headers[name];
  return Array.isArray(value) ? value.join(',') : String(value || '');
};

const setResponseHeaders = (res) => {
  res.setHeader('Cache-Control', 'no-store, max-age=0, no-transform');
  res.setHeader('Vary', 'Accept');
  res.setHeader('X-Content-Type-Options', 'nosniff');
};

const wantsBrowserFormResponse = (req) => {
  const contentType = getHeader(req, 'content-type').toLowerCase();
  const accept = String(req.headers.accept || getHeader(req, 'accept')).toLowerCase();
  const fetchMode = getHeader(req, 'sec-fetch-mode').toLowerCase();
  const isFormPost =
    contentType.includes('application/x-www-form-urlencoded') || contentType.includes('multipart/form-data');

  return isFormPost && (accept.includes('text/html') || fetchMode === 'navigate') && !accept.includes('application/json');
};

const escapeHtml = (value) =>
  String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const renderHtmlResponse = ({ statusCode, message, mailtoUrl }) => {
  const title =
    statusCode >= 400
      ? 'Contact request not submitted'
      : mailtoUrl
        ? 'Complete contact request by email'
        : 'Contact request received';
  const mailFallback = mailtoUrl
    ? `<p><a href="${escapeHtml(mailtoUrl)}" rel="nofollow">Open email fallback to complete routing</a></p>`
    : '';

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapeHtml(title)}</title>
</head>
<body>
<main>
<h1>${escapeHtml(title)}</h1>
<p>${escapeHtml(message)}</p>
${mailFallback}
<p><a href="/contact#inquiry-form">Return to contact form</a></p>
</main>
</body>
</html>`;
};

const sendResponse = (req, res, statusCode, payload) => {
  setResponseHeaders(res);

  if (wantsBrowserFormResponse(req)) {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    return res.status(statusCode).send(
      renderHtmlResponse({
        statusCode,
        message: payload.message || payload.error || 'Request received.',
        mailtoUrl: payload.relayStatus === 'manual' ? payload.mailtoUrl : ''
      })
    );
  }

  return res.status(statusCode).json(payload);
};

const getClientIp = (req) => {
  const forwarded = req.headers['x-forwarded-for'];
  if (typeof forwarded === 'string' && forwarded.length > 0) {
    return forwarded.split(',')[0].trim();
  }

  return req.socket?.remoteAddress || 'unknown';
};

const isRateLimited = (ip) => {
  const now = Date.now();
  const recent = (requestLog.get(ip) || []).filter((timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS);
  recent.push(now);
  requestLog.set(ip, recent);
  return recent.length > RATE_LIMIT_MAX;
};

const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const toMailtoUrl = (recipient, subject, lines) => {
  const encodedRecipient = encodeURIComponent(recipient);
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(lines.join('\n'));
  return `mailto:${encodedRecipient}?subject=${encodedSubject}&body=${encodedBody}`;
};

const relayToWebhook = async (webhookUrl, payload) => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 6000);

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload),
      signal: controller.signal
    });

    return response.ok;
  } catch {
    return false;
  } finally {
    clearTimeout(timeout);
  }
};

export default async function handler(req, res) {
  setResponseHeaders(res);

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return sendResponse(req, res, 405, { error: 'Method not allowed.' });
  }

  const ip = getClientIp(req);
  if (isRateLimited(ip)) {
    return sendResponse(req, res, 429, { error: 'Too many requests. Please retry later.' });
  }

  const payload = req.body || {};
  const websiteTrap = clean(payload.website, 100);

  if (websiteTrap) {
    return sendResponse(req, res, 200, { message: 'Request accepted.' });
  }

  const fullName = clean(payload.fullName, 140);
  const email = clean(payload.email, 180);
  const organization = clean(payload.organization, 180);
  const inquiryType = clean(payload.inquiryType, 140);
  const role = clean(payload.role, 140);
  const organizationType = clean(payload.organizationType, 140);
  const useCase = clean(payload.useCase, 2000);
  const deploymentPreference = clean(payload.deploymentPreference, 140);
  const timeline = clean(payload.timeline, 80);
  const complianceRequirements = clean(payload.complianceRequirements, 2000);
  const consentAccepted = Boolean(payload.consentAccepted);
  const isPrivacyInquiry = inquiryType === 'Privacy or data-subject request';

  if (
    !inquiryType ||
    !fullName ||
    !email ||
    !useCase ||
    !consentAccepted ||
    (!isPrivacyInquiry && (!organization || !complianceRequirements))
  ) {
    return sendResponse(req, res, 400, { error: 'Missing required fields.' });
  }

  if (!isValidEmail(email)) {
    return sendResponse(req, res, 400, { error: 'Invalid email format.' });
  }

  const recipient = process.env.SMARTCLOVER_CONTACT_INBOX || 'andreea@smartclover.ro';
  const timestamp = new Date().toISOString();
  const subjectOrganization = organization || 'No organization provided';
  const subject = isPrivacyInquiry
    ? `SmartClover privacy request - ${fullName || 'Name not provided'}`
    : `SmartClover inquiry - ${inquiryType} - ${subjectOrganization}`;

  const privacyLines = [
    `Timestamp: ${timestamp}`,
    `Inquiry type: ${inquiryType}`,
    `Full name: ${fullName}`,
    `Email: ${email}`,
    `Organization: ${subjectOrganization}`,
    `Privacy request details: ${useCase}`,
    `Additional context: ${complianceRequirements}`,
    `Consent accepted: ${consentAccepted ? 'yes' : 'no'}`
  ];

  const commercialLines = [
    `Timestamp: ${timestamp}`,
    `Inquiry type: ${inquiryType}`,
    `Full name: ${fullName}`,
    `Email: ${email}`,
    `Organization: ${subjectOrganization}`,
    `Role: ${role}`,
    `Organization type: ${organizationType}`,
    `Use case: ${useCase}`,
    `Deployment preference: ${deploymentPreference}`,
    `Timeline: ${timeline}`,
    `Compliance requirements: ${complianceRequirements}`,
    `Consent accepted: ${consentAccepted ? 'yes' : 'no'}`
  ];
  const lines = isPrivacyInquiry ? privacyLines : commercialLines;

  const relayPayload = {
    recipient,
    subject,
    message: lines.join('\n'),
    metadata: {
      source: 'smartclover_website_contact_form',
      receivedAt: timestamp,
      ip
    }
  };

  const webhookUrl = process.env.SMARTCLOVER_CONTACT_WEBHOOK_URL;
  let relayStatus = 'manual';

  if (webhookUrl) {
    const sent = await relayToWebhook(webhookUrl, relayPayload);
    relayStatus = sent ? 'webhook' : 'manual';
  }

  const mailtoUrl = toMailtoUrl(recipient, subject, lines);

  const responseMessage =
    relayStatus === 'webhook'
      ? isPrivacyInquiry
        ? 'Privacy request received and routed.'
        : 'Qualification request received and routed.'
      : 'Automatic routing is not confirmed. Please open the email fallback to complete manual routing.';

  return sendResponse(req, res, 200, {
    message: responseMessage,
    relayStatus,
    mailtoUrl
  });
}
