import Head from 'next/head';

const Cybersecurity = () => (
  <>
    <Head>
      <title>Healthcare Cybersecurity | SmartClover</title>
      <meta
        name="description"
        content="SmartClover protects healthcare organisations with AI-enhanced cybersecurity services that detect threats, secure medical data, and reduce false alarms."
      />
    </Head>

    <header className="page-header">
      <span className="tagline">Healthcare Cybersecurity</span>
      <h1>AI-enhanced defence for patient data and clinical systems</h1>
      <p>
        The healthcare sector is a prime target for cyber attacks. We use AI to strengthen defences, reduce noise, and
        keep clinicians focused on patient care.
      </p>
    </header>

    <section className="surface-card">
      <h2>Why healthcare needs adaptive security</h2>
      <p>
        Sensitive patient data, connected medical devices, and critical infrastructure make hospitals uniquely valuable
        to attackers. Industry reports place the average cost of a healthcare breach around $10.9M, underscoring the need
        for resilient security investments.
      </p>
      <p>
        Traditional monitoring floods teams with false alarms. Our AI-assisted sensors learn normal behaviour, surface
        anomalies that matter, and shorten the time to respond.
      </p>
    </section>

    <section className="surface-card">
      <h2>What we deliver</h2>
      <ul>
        <li>Machine learning models for anomaly detection across clinical networks and IoT devices.</li>
        <li>Continuous risk scoring that prioritises investigations for SOC engineers.</li>
        <li>Privacy-first data pipelines aligned with patient safety regulations.</li>
        <li>Operational playbooks that keep humans in charge of decision making.</li>
      </ul>
      <p>
        AI does not replace cybersecurity experts-it equips them with sharper, more contextualised intelligence so they
        can protect patients and staff.
      </p>
    </section>

    <section className="surface-card">
      <h2>Integrated with SmartClover services</h2>
      <p>
        Our cybersecurity practice supports broader SmartClover engagements, from healthcare analytics platforms to
        creative digital products that require strong privacy guarantees. Deployments on Ratio1’s edge network further
        enhance resilience by distributing workloads away from single points of failure.
      </p>
    </section>
  </>
);

export default Cybersecurity;
