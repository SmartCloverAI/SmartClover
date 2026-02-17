import Head from 'next/head';

const Contact = () => (
  <>
    <Head>
      <title>Contact SmartClover</title>
      <meta
        name="description"
        content="Get in touch with SmartClover to discuss healthcare AI SaaS/PaaS products, managed platform operations, and digital-native pilots."
      />
    </Head>

    <header className="page-header">
      <span className="tagline">Contact</span>
      <h1>Let&apos;s build and scale purposeful healthcare AI products</h1>
      <p>
        We support healthcare operators, innovators, and investors adopting digital-native AI products. Reach out and
        we&apos;ll map the right SaaS/PaaS rollout for your clinical and operational goals.
      </p>
    </header>

    <section className="surface-card">
      <h2>Say hello</h2>
      <p>Email: <a href="mailto:andreea@smartclover.ro">andreea@smartclover.ro</a></p>
      <p>LinkedIn: <a href="https://www.linkedin.com/company/smartclover" rel="noopener noreferrer">SmartClover</a></p>
      <p>
        Prefer a call? Share a time in your email and we’ll schedule a session to walk through your goals and how our
        team can help.
      </p>
    </section>

    <section className="surface-card">
      <h2>What to expect</h2>
      <ul>
        <li>A focused product qualification call to map use cases, users, and measurable outcomes.</li>
        <li>Onboarding planning that aligns SaaS/PaaS rollout with privacy and governance requirements.</li>
        <li>Transparent timelines for activation, adoption, and ongoing managed platform operations.</li>
      </ul>
    </section>
  </>
);

export default Contact;
