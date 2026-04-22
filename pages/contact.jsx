import Link from 'next/link';
import { useMemo, useState } from 'react';
import PageSeo, { siteUrl } from '../components/PageSeo';

const inquiryPaths = [
  {
    label: 'Book demo / Request pilot',
    title: 'Book demo / Request pilot',
    description: 'Best for clinics, hospitals, and operators evaluating CerviGuard or related deployment fit.'
  },
  {
    label: 'Research partnership',
    title: 'Research partnership',
    description: 'Best for research institutions, prevention programmes, and co-development conversations.'
  },
  {
    label: 'Investor inquiry',
    title: 'Investor inquiry',
    description: 'Best for investors, accelerators, and strategic backers evaluating SmartClover as a company.'
  },
  {
    label: 'General contact',
    title: 'General contact',
    description: 'Best for broader outreach that does not fit the primary paths above.'
  }
];

const roleOptions = [
  'Clinical lead',
  'Operations lead',
  'IT or security lead',
  'Procurement lead',
  'Research lead',
  'Investor',
  'Other'
];

const orgTypeOptions = [
  'Hospital or clinic',
  'Public health organisation',
  'Research institution',
  'Technology partner',
  'Investor or accelerator',
  'Other'
];

const deploymentOptions = [
  'Managed SaaS',
  'Private SaaS',
  'Hybrid or on-edge',
  'Not decided yet'
];

const timelineOptions = ['0-3 months', '3-6 months', '6-12 months', '12+ months', 'Exploratory only'];

const nextSteps = [
  {
    title: '1. Qualification review',
    description: 'We review the request, confirm fit, and route it to the right commercial, research, or diligence path.'
  },
  {
    title: '2. Human follow-up',
    description: 'Qualified inbound requests receive a human reply with the next proposed action, usually within one business day.'
  },
  {
    title: '3. Demo, diligence, or scoped discussion',
    description: 'The next step becomes a demo, pilot discussion, research call, or investor conversation depending on the request type.'
  }
];

const trustLinks = [
  {
    title: 'Trust center',
    description: 'Security, privacy, incident response, and data-processing orientation.',
    href: '/trust'
  },
  {
    title: 'Pricing',
    description: 'RFQ-led packaging logic and commercial framing.',
    href: '/pricing'
  },
  {
    title: 'How to buy',
    description: 'Qualification, contracting, and activation flow.',
    href: '/how-to-buy'
  }
];

const initialFormState = {
  inquiryType: inquiryPaths[0].label,
  fullName: '',
  email: '',
  organization: '',
  role: roleOptions[0],
  organizationType: orgTypeOptions[0],
  useCase: '',
  deploymentPreference: deploymentOptions[0],
  timeline: timelineOptions[0],
  complianceRequirements: '',
  consentAccepted: false,
  website: ''
};

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact SmartClover',
  url: `${siteUrl}/contact`,
  description:
    'SmartClover contact page for demo requests, pilot discussions, research partnerships, investor inquiries, and general outreach.',
  mainEntity: {
    '@type': 'Organization',
    name: 'SmartClover',
    url: siteUrl,
    email: 'andreea@smartclover.ro'
  }
};

const Contact = () => {
  const [form, setForm] = useState(initialFormState);
  const [status, setStatus] = useState('idle');
  const [feedback, setFeedback] = useState('');
  const [mailtoUrl, setMailtoUrl] = useState('');

  const canSubmit = useMemo(() => {
    return Boolean(
      form.inquiryType.trim() &&
      form.fullName.trim() &&
      form.email.trim() &&
      form.organization.trim() &&
      form.useCase.trim() &&
      form.complianceRequirements.trim() &&
      form.consentAccepted
    );
  }, [form]);

  const updateField = (key, value) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  const chooseInquiryPath = (value) => {
    updateField('inquiryType', value);
    setFeedback('');
    setStatus('idle');

    if (typeof window !== 'undefined') {
      window.requestAnimationFrame(() => {
        document.getElementById('inquiry-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!canSubmit) {
      return;
    }

    setStatus('submitting');
    setFeedback('');
    setMailtoUrl('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      });

      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload?.error || 'Unable to submit request.');
      }

      setStatus('success');
      setFeedback(payload?.message || 'Inquiry submitted.');
      setMailtoUrl(payload?.mailtoUrl || '');
      setForm(initialFormState);
    } catch (error) {
      setStatus('error');
      setFeedback(error.message || 'Unexpected error. Please email andreea@smartclover.ro.');
    }
  };

  return (
    <>
      <PageSeo
        title="Contact SmartClover | Demo, Research, And Investor Inquiries"
        description="Contact SmartClover through a structured intake for demo requests, research partnerships, investor conversations, and trust-aware product evaluation."
        path="/contact"
        image="/images/cerviguard/cerviguard-dashboard.png"
        jsonLd={contactSchema}
      />

      <section className="hero-shell" aria-labelledby="contact-hero-title">
        <div className="contact-hero-grid">
          <div className="hero-panel">
            <div className="hero-kicker-row">
              <span className="tagline">Contact SmartClover</span>
              <span className="proof-pill">
                <strong>Primary CTA</strong> Book demo
              </span>
            </div>
            <div className="hero-copy">
              <h1 id="contact-hero-title" className="hero-title">
                One contact hub for demos, pilots, research, and investor conversations.
              </h1>
              <p>
                SmartClover routes public inbound requests through one structured hub so organizations can start
                qualification without ambiguity. The main path is still a product demo or pilot conversation, while
                research, investor, and general inquiries remain explicit.
              </p>
            </div>
            <ul className="hero-evidence-list">
              <li>
                <strong>Primary route:</strong>
                book a demo or request a pilot for CerviGuard and related deployment fit.
              </li>
              <li>
                <strong>Secondary routes:</strong>
                research partnership and investor conversations are handled through the same structured intake.
              </li>
              <li>
                <strong>Trust reinforcement:</strong>
                pricing, how-to-buy, and trust routes remain reachable from the same page.
              </li>
            </ul>
          </div>

          <div className="detail-panel">
            <div className="section-heading">
              <h2>Choose the right inquiry path first</h2>
              <p>Picking the right path helps SmartClover route the first reply and next step correctly.</p>
            </div>
            <div className="path-grid">
              {inquiryPaths.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  className={`path-card${form.inquiryType === item.label ? ' is-active' : ''}`}
                  onClick={() => chooseInquiryPath(item.label)}
                >
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="contact-layout" aria-labelledby="inquiry-form-heading">
        <div id="inquiry-form" className="contact-form-shell">
          <div className="section-heading">
            <h2 id="inquiry-form-heading">Structured inquiry form</h2>
            <p>
              Provide enough detail for routing, trust review, and follow-up. The selected inquiry path stays editable
              inside the form.
            </p>
          </div>

          <form onSubmit={onSubmit} className="contact-form" noValidate>
            <div className="field-grid">
              <label className="field-span-2">
                Inquiry type *
                <select value={form.inquiryType} onChange={(event) => updateField('inquiryType', event.target.value)} required>
                  {inquiryPaths.map((item) => (
                    <option key={item.label} value={item.label}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                Full name *
                <input
                  type="text"
                  value={form.fullName}
                  onChange={(event) => updateField('fullName', event.target.value)}
                  required
                />
              </label>

              <label>
                Work email *
                <input
                  type="email"
                  value={form.email}
                  onChange={(event) => updateField('email', event.target.value)}
                  required
                />
              </label>

              <label>
                Organization *
                <input
                  type="text"
                  value={form.organization}
                  onChange={(event) => updateField('organization', event.target.value)}
                  required
                />
              </label>

              <label>
                Role *
                <select value={form.role} onChange={(event) => updateField('role', event.target.value)}>
                  {roleOptions.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                Organization type *
                <select value={form.organizationType} onChange={(event) => updateField('organizationType', event.target.value)}>
                  {orgTypeOptions.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                Deployment preference *
                <select
                  value={form.deploymentPreference}
                  onChange={(event) => updateField('deploymentPreference', event.target.value)}
                >
                  {deploymentOptions.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                Target timeline *
                <select value={form.timeline} onChange={(event) => updateField('timeline', event.target.value)}>
                  {timelineOptions.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </label>

              <label className="field-span-2">
                Primary use case or conversation goal *
                <textarea
                  value={form.useCase}
                  onChange={(event) => updateField('useCase', event.target.value)}
                  rows={4}
                  required
                />
                <span className="field-hint">
                  Example: cervical screening pilot scope, data-governance fit, research collaboration idea, or investor diligence focus.
                </span>
              </label>

              <label className="field-span-2">
                Trust, compliance, or diligence requirements *
                <textarea
                  value={form.complianceRequirements}
                  onChange={(event) => updateField('complianceRequirements', event.target.value)}
                  rows={4}
                  required
                />
              </label>
            </div>

            <label className="hidden-field" aria-hidden="true">
              Leave this field blank
              <input
                type="text"
                autoComplete="off"
                tabIndex={-1}
                value={form.website}
                onChange={(event) => updateField('website', event.target.value)}
              />
            </label>

            <label className="checkbox-row">
              <input
                type="checkbox"
                checked={form.consentAccepted}
                onChange={(event) => updateField('consentAccepted', event.target.checked)}
              />
              <span>
                I confirm that SmartClover may use this information to reply to this inquiry and route the next step.
              </span>
            </label>

            <div className="hero-action-row">
              <button type="submit" className="button primary" disabled={!canSubmit || status === 'submitting'}>
                {status === 'submitting' ? 'Submitting...' : 'Send inquiry'}
              </button>
              <a href="mailto:andreea@smartclover.ro" className="button secondary">
                Email instead
              </a>
            </div>

            {feedback ? (
              <p className={`form-feedback ${status === 'success' ? 'success' : 'error'}`}>{feedback}</p>
            ) : null}

            {status === 'success' && mailtoUrl ? (
              <a href={mailtoUrl} className="button tertiary">
                Open pre-filled email fallback
              </a>
            ) : null}
          </form>
        </div>

        <div className="contact-side-stack">
          <aside className="contact-side-card" aria-labelledby="contact-response-heading">
            <h3 id="contact-response-heading">What happens next</h3>
            <ol className="contact-next-steps">
              {nextSteps.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}</strong>
                  <span> {item.description}</span>
                </li>
              ))}
            </ol>
            <p className="small-note">
              Response expectation: qualified inbound requests should usually receive a human reply within one business
              day during business hours in Europe/Bucharest.
            </p>
          </aside>

          <aside className="contact-side-card" aria-labelledby="contact-trust-links-heading">
            <h3 id="contact-trust-links-heading">Useful routes before or after contact</h3>
            <div className="trust-grid">
              {trustLinks.map((item) => (
                <article key={item.title} className="trust-card">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <Link href={item.href} className="button tertiary">
                    Open
                  </Link>
                </article>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};

export default Contact;
