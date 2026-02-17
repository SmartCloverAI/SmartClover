import Head from 'next/head';
import Link from 'next/link';

const trustRoutes = [
  {
    href: '/trust/privacy-policy',
    title: 'Privacy Policy',
    description: 'Data categories, lawful basis, retention, and data-subject rights workflow.'
  },
  {
    href: '/trust/terms-of-service',
    title: 'Terms of Service',
    description: 'Service boundaries, customer obligations, support model, and liability framing.'
  },
  {
    href: '/trust/data-processing',
    title: 'Data Processing',
    description: 'GDPR role model by deployment mode and processor/controller posture notes.'
  },
  {
    href: '/trust/security',
    title: 'Security Overview',
    description: 'Permissioned access, encryption, traceability, and disclosure boundaries.'
  },
  {
    href: '/trust/incident-response',
    title: 'Incident Response',
    description: 'Severity model, response lifecycle, and corrective-action governance.'
  }
];

const TrustCenter = () => (
  <>
    <Head>
      <title>Trust Center | SmartClover</title>
      <meta
        name="description"
        content="SmartClover trust center with draft legal and security baseline documents for enterprise healthcare diligence workflows."
      />
    </Head>

    <header className="page-header">
      <span className="tagline">Trust Center</span>
      <h1>Trust, legal, and security baseline</h1>
      <p>
        This trust center provides procurement-oriented baseline documents for privacy, terms, data processing, security,
        and incident response. Draft labels are used where legal review is still in progress.
      </p>
    </header>

    <section className="surface-card" aria-labelledby="trust-status-heading">
      <div className="status-badge-list" id="trust-status-heading">
        <span className="status-badge">Document status: Draft set for legal/privacy/security review</span>
        <span className="status-badge">Last updated: 2026-02-17</span>
        <span className="status-badge">Owner: Legal + Privacy + Security</span>
      </div>
      <p>
        Use these pages for diligence orientation. Final policy text and contractual roles are confirmed during legal
        review and RFQ onboarding.
      </p>
    </section>

    <section className="surface-card" aria-labelledby="trust-docs-heading">
      <div className="section-heading">
        <h2 id="trust-docs-heading">Trust documentation</h2>
      </div>
      <div className="feature-grid three-up">
        {trustRoutes.map((route) => (
          <article key={route.href} className="feature">
            <h3 className="feature-title">{route.title}</h3>
            <p className="feature-description">{route.description}</p>
            <Link href={route.href} className="button secondary">
              Open
            </Link>
          </article>
        ))}
      </div>
    </section>

    <section className="surface-card" aria-labelledby="consent-heading">
      <div className="section-heading">
        <h2 id="consent-heading">Analytics and consent transparency</h2>
      </div>
      <p>
        SmartClover only enables optional analytics after explicit user consent. Preferences can be changed at any time
        through the site-level cookie settings control.
      </p>
      <div className="cta-links">
        <Link href="/proof" className="button secondary">
          Review Proof Page
        </Link>
        <Link href="/contact" className="button primary">
          Ask Trust Questions
        </Link>
      </div>
    </section>
  </>
);

export default TrustCenter;
