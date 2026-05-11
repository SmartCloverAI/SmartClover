import Head from 'next/head';
import Link from 'next/link';

const Cybersecurity = () => (
  <>
    <Head>
      <title>Healthcare Cybersecurity | SmartClover</title>
      <meta
        name="description"
        content="SmartClover cybersecurity and resilience services for healthcare organizations, delivered with authorized/certified personnel, partner products, and agentic engineering workflows."
      />
    </Head>

    <header className="page-header">
      <span className="tagline">Healthcare Cybersecurity</span>
      <h1>Cybersecurity and resilience services for healthcare organizations</h1>
      <p>
        SmartClover supports healthcare teams that need security assessment, deployment hardening, resilience planning,
        and operational follow-through around AI-enabled workflows. Engagements are delivered with authorized/certified
        personnel, partner security products, and agentic engineering workflows scoped to the environment.
      </p>
    </header>

    <section className="surface-card">
      <h2>Healthcare security scope</h2>
      <p>
        Sensitive patient data, connected medical devices, and critical infrastructure make healthcare environments
        difficult to secure. Security investment has to account for privacy, clinical continuity, and operational
        resilience at the same time.
      </p>
      <p>
        We keep this work connected to real deployment boundaries: who can access systems, where sensitive flows run,
        which partner controls are in scope, and how response procedures remain reviewable by authorized teams.
      </p>
    </section>

    <section className="surface-card">
      <h2>What the service can include</h2>
      <ul>
        <li>Healthcare-focused security assessment and resilience planning.</li>
        <li>Partner security product selection, configuration support, and workflow integration.</li>
        <li>Agentic engineering workflows for monitoring support, documentation, remediation support, and hardening.</li>
        <li>Risk review for cloud-on-edge, SaaS/PaaS, and tenant-boundary deployment models.</li>
        <li>Operational playbooks that keep authorized human review in the response path.</li>
      </ul>
      <p>
        AI-assisted security work does not replace cybersecurity experts. It is useful only when teams can inspect the
        signal, understand the context, and decide what action is justified.
      </p>
    </section>

    <section className="surface-card">
      <h2>Integrated with deployment and product work</h2>
      <p>
        Security controls are part of SmartClover product operations, including access control, data boundaries,
        traceability, and incident handling. Deployment planning follows &quot;your AI, your Data&quot; and &quot;your App, your
        Data&quot; principles so healthcare workloads can be scoped around permissioned cloud-on-edge infrastructure,
        encryption controls, resilience requirements, and traceable deployment records.
      </p>
      <div className="cta-links">
        <Link href="/cloud-architecture" className="button secondary">
          Review Cloud Architecture
        </Link>
        <Link href="/trust/security" className="button secondary">
          Security Baseline
        </Link>
        <Link href="/contact" className="button primary">
          Discuss Security Scope
        </Link>
      </div>
    </section>
  </>
);

export default Cybersecurity;
