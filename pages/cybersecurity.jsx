import Head from 'next/head';

const Cybersecurity = () => (
  <>
    <Head>
      <title>Healthcare Cybersecurity | SmartClover</title>
      <meta
        name="description"
        content="SmartClover cybersecurity page covering healthcare security concerns, AI-assisted security direction, and product-governance controls."
      />
    </Head>

    <header className="page-header">
      <span className="tagline">Healthcare Cybersecurity</span>
      <h1>Cybersecurity context for healthcare AI products</h1>
      <p>
        Healthcare organizations handle sensitive data, connected systems, and operational workflows that need careful
        protection. SmartClover treats security as part of product design and governance, not as a separate marketing
        promise.
      </p>
    </header>

    <section className="surface-card">
      <h2>Why healthcare needs security discipline</h2>
      <p>
        Sensitive patient data, connected medical devices, and critical infrastructure make healthcare environments
        difficult to secure. Security investment has to account for privacy, clinical continuity, and operational
        resilience at the same time.
      </p>
      <p>
        AI-assisted monitoring can help teams identify unusual patterns, but it has to remain reviewable and paired with
        clear human response procedures.
      </p>
    </section>

    <section className="surface-card">
      <h2>What this track covers</h2>
      <ul>
        <li>Anomaly-detection research for clinical networks and connected devices.</li>
        <li>Risk-scoring concepts that help prioritize review by security teams.</li>
        <li>Privacy-aware data pipelines aligned with product-governance requirements.</li>
        <li>Operational playbooks that keep human review in the response path.</li>
      </ul>
      <p>
        AI does not replace cybersecurity experts. It is useful only when teams can inspect the signal, understand the
        context, and decide what action is justified.
      </p>
    </section>

    <section className="surface-card">
      <h2>Integrated with SmartClover products</h2>
      <p>
        Security controls are part of SmartClover product operations, including access control, data boundaries,
        traceability, and incident handling. Deployment planning follows &quot;your AI, your Data&quot; and &quot;your App, your
        Data&quot; principles so SaaS/PaaS healthcare workloads can be scoped around governance and resilience requirements.
      </p>
    </section>
  </>
);

export default Cybersecurity;
