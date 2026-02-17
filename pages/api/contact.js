const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 12;

const requestLog = new Map();

const clean = (value, maxLength = 500) => String(value || '').replace(/\s+/g, ' ').trim().slice(0, maxLength);

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
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(lines.join('\n'));
  return `mailto:${recipient}?subject=${encodedSubject}&body=${encodedBody}`;
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
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  const ip = getClientIp(req);
  if (isRateLimited(ip)) {
    return res.status(429).json({ error: 'Too many requests. Please retry later.' });
  }

  const payload = req.body || {};
  const websiteTrap = clean(payload.website, 100);

  if (websiteTrap) {
    return res.status(200).json({ message: 'Request accepted.' });
  }

  const fullName = clean(payload.fullName, 140);
  const email = clean(payload.email, 180);
  const organization = clean(payload.organization, 180);
  const role = clean(payload.role, 140);
  const organizationType = clean(payload.organizationType, 140);
  const useCase = clean(payload.useCase, 2000);
  const deploymentPreference = clean(payload.deploymentPreference, 140);
  const timeline = clean(payload.timeline, 80);
  const complianceRequirements = clean(payload.complianceRequirements, 2000);
  const consentAccepted = Boolean(payload.consentAccepted);

  if (!fullName || !email || !organization || !useCase || !complianceRequirements || !consentAccepted) {
    return res.status(400).json({ error: 'Missing required fields.' });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({ error: 'Invalid email format.' });
  }

  const recipient = process.env.SMARTCLOVER_CONTACT_INBOX || 'andreea@smartclover.ro';
  const timestamp = new Date().toISOString();
  const subject = `SmartClover qualification request - ${organization}`;

  const lines = [
    `Timestamp: ${timestamp}`,
    `Full name: ${fullName}`,
    `Email: ${email}`,
    `Organization: ${organization}`,
    `Role: ${role}`,
    `Organization type: ${organizationType}`,
    `Use case: ${useCase}`,
    `Deployment preference: ${deploymentPreference}`,
    `Timeline: ${timeline}`,
    `Compliance requirements: ${complianceRequirements}`,
    `Consent accepted: ${consentAccepted ? 'yes' : 'no'}`
  ];

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
      ? 'Qualification request received and routed.'
      : 'Qualification request received. Use the optional pre-filled email fallback to complete manual routing.';

  return res.status(200).json({
    message: responseMessage,
    relayStatus,
    mailtoUrl
  });
}
