import Head from 'next/head';
import Link from 'next/link';

const controls = [
  {
    title: 'Permissioned access',
    detail: 'Role-based authorization governs who can access workflows, environments, and high-impact operations.'
  },
  {
    title: 'End-to-end encryption',
    detail: 'Sensitive flows are protected with encryption controls across transit and approved storage boundaries.'
  },
  {
    title: 'Data-boundary control',
    detail: 'Clinical payload storage remains tenant-scoped with no centralized clinical payload repository.'
  },
  {
    title: 'Immutable traceability',
    detail: 'Operational events are recorded with append-only traceability to support audit integrity and investigations.'
  },
  {
    title: 'Vulnerability and patch process',
    detail: 'Security issues are triaged, prioritized, and tracked through controlled remediation workflows.'
  }
];

const Security = () => (
  <>
    <Head>
      <title>Security | SmartClover Trust Center</title>
      <meta
        name="description"
        content="Draft SmartClover security baseline covering access control, encryption, data boundaries, and immutable traceability with non-certification claim discipline."
      />
    </Head>

    <header className="page-header">
      <span className="tagline">Trust Center</span>
      <h1>Security overview (Draft baseline)</h1>
      <p>
        This page summarizes publication-safe security controls for procurement orientation. It intentionally avoids
        unsupported certification claims.
      </p>
    </header>

    <section className="surface-card" aria-labelledby="security-status-heading">
      <div className="status-badge-list" id="security-status-heading">
        <span className="status-badge">Document status: Draft for security/legal review</span>
        <span className="status-badge">Last updated: 2026-02-17</span>
        <span className="status-badge">Owner: Security + Legal</span>
      </div>
      <blockquote>
        Security controls are aligned with applicable NIS2/CRA expectations and are implemented through permissioned
        access, end-to-end encryption, and immutable traceability. This statement is not a certification claim.
      </blockquote>
    </section>

    <section className="surface-card" aria-labelledby="control-heading">
      <div className="section-heading">
        <h2 id="control-heading">Security control baseline</h2>
      </div>
      <div className="feature-grid two-up">
        {controls.map((control) => (
          <article key={control.title} className="feature">
            <h3 className="feature-title">{control.title}</h3>
            <p className="feature-description">{control.detail}</p>
          </article>
        ))}
      </div>
    </section>

    <section className="surface-card" aria-labelledby="security-limit-heading">
      <div className="section-heading">
        <h2 id="security-limit-heading">Disclosure limitations</h2>
      </div>
      <ul>
        <li>Detailed topology, key-management internals, and sensitive architecture specifics are not publicly disclosed.</li>
        <li>Control implementation detail is shared under procurement and security review channels.</li>
        <li>Regulatory or certification conclusions are not implied unless formally published with evidence.</li>
      </ul>
      <div className="cta-links">
        <Link href="/cloud-architecture" className="button secondary">
          Cloud and Boundary Model
        </Link>
        <Link href="/trust/incident-response" className="button secondary">
          Incident Process
        </Link>
        <Link href="/contact" className="button primary">
          Request Security Review
        </Link>
      </div>
    </section>
  </>
);

export default Security;
