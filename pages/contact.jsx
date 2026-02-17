import Head from 'next/head';
import { useMemo, useState } from 'react';
import Link from 'next/link';
import DiligenceLinksSection from '../components/DiligenceLinksSection';

const roleOptions = [
  'Clinical lead',
  'Operations lead',
  'IT or security lead',
  'Procurement lead',
  'Research lead',
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

const timelineOptions = [
  '0-3 months',
  '3-6 months',
  '6-12 months',
  '12+ months',
  'Exploratory only'
];

const funnelStages = [
  {
    stage: 'inquiry',
    entry: 'Qualification form is submitted and acknowledgement is sent.',
    exit: 'Qualification review is completed.'
  },
  {
    stage: 'qualified',
    entry: 'Use case and baseline compliance fit are confirmed.',
    exit: 'Demo is scheduled.'
  },
  {
    stage: 'demo',
    entry: 'Product walkthrough and scope discussion are completed.',
    exit: 'Pilot scope is approved.'
  },
  {
    stage: 'pilot',
    entry: 'Pilot starts with explicit timeline and governance gates.',
    exit: 'Scale, hold, or stop decision is logged.'
  }
];

const initialFormState = {
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

const Contact = () => {
  const [form, setForm] = useState(initialFormState);
  const [status, setStatus] = useState('idle');
  const [feedback, setFeedback] = useState('');
  const [mailtoUrl, setMailtoUrl] = useState('');

  const canSubmit = useMemo(() => {
    return Boolean(
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
      setFeedback(payload?.message || 'Qualification request submitted.');
      setMailtoUrl(payload?.mailtoUrl || '');
      setForm(initialFormState);
    } catch (error) {
      setStatus('error');
      setFeedback(error.message || 'Unexpected error. Please email andreea@smartclover.ro.');
    }
  };

  return (
    <>
      <Head>
        <title>Contact SmartClover</title>
        <meta
          name="description"
          content="Contact SmartClover through a structured qualification flow for healthcare AI SaaS/PaaS onboarding, deployment planning, and compliance review."
        />
      </Head>

      <header className="page-header">
        <span className="tagline">Contact and Qualification</span>
        <h1>Start a structured inquiry-to-pilot process</h1>
        <p>
          SmartClover routes inbound requests through a qualification funnel so clinical, operational, and procurement
          stakeholders can align scope before onboarding.
        </p>
      </header>

      <section className="surface-card" aria-labelledby="contact-sla-heading">
        <div className="section-heading">
          <h2 id="contact-sla-heading">Response-time commitment</h2>
        </div>
        <p>
          SmartClover targets first response within 1 business day for at least 99 percent of qualified inbound requests
          received during business hours (Monday-Friday, 09:00-18:00 Europe/Bucharest).
        </p>
      </section>

      <section className="surface-card" aria-labelledby="contact-form-heading">
        <div className="section-heading">
          <h2 id="contact-form-heading">Qualification form</h2>
          <p>
            Provide enough context for role-based routing and compliance-aware follow-up. Fields marked with * are
            required.
          </p>
        </div>

        <form onSubmit={onSubmit} className="contact-form" noValidate>
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
            Primary use case *
            <textarea
              value={form.useCase}
              onChange={(event) => updateField('useCase', event.target.value)}
              rows={4}
              required
            />
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

          <label>
            Compliance requirements *
            <textarea
              value={form.complianceRequirements}
              onChange={(event) => updateField('complianceRequirements', event.target.value)}
              rows={4}
              required
            />
          </label>

          <label className="hidden-field" aria-hidden="true">
            Website
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
              I confirm this request contains business contact information and I agree to SmartClover using it for
              qualification and follow-up.
            </span>
          </label>

          <div className="cta-links">
            <button type="submit" className="button primary" disabled={!canSubmit || status === 'submitting'}>
              {status === 'submitting' ? 'Submitting...' : 'Submit Qualification'}
            </button>
            <Link href="mailto:andreea@smartclover.ro" className="button secondary">
              Email Directly
            </Link>
          </div>

          {feedback ? <p className={`form-feedback ${status}`}>{feedback}</p> : null}
          {mailtoUrl ? (
            <p className="form-feedback success">
              Optional manual fallback: <a href={mailtoUrl}>open pre-filled email</a>.
            </p>
          ) : null}
        </form>
      </section>

      <section className="surface-card" aria-labelledby="funnel-heading">
        <div className="section-heading">
          <h2 id="funnel-heading">Public funnel-stage definitions</h2>
        </div>
        <div className="table-scroll">
          <table className="info-table">
            <thead>
              <tr>
                <th>Stage</th>
                <th>Entry criteria</th>
                <th>Exit criteria</th>
              </tr>
            </thead>
            <tbody>
              {funnelStages.map((stage) => (
                <tr key={stage.stage}>
                  <td>{stage.stage}</td>
                  <td>{stage.entry}</td>
                  <td>{stage.exit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <DiligenceLinksSection
        headingId="contact-diligence-links"
        description="Before submitting, review Pricing, How to Buy, Proof, Regulatory, and Trust baselines."
      />
    </>
  );
};

export default Contact;
