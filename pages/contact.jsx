import Head from 'next/head';

const Contact = () => (
  <>
    <Head>
      <title>Contact SmartClover</title>
      <meta
        name="description"
        content="Get in touch with SmartClover to discuss healthcare AI projects, cybersecurity engagements, and creative product collaborations."
      />
    </Head>

    <header className="page-header">
      <span className="tagline">Contact</span>
      <h1>Let’s collaborate on purposeful AI</h1>
      <p>
        We partner with healthcare teams, educators, innovators, and investors who believe in human-centred AI. Reach
        out and we’ll start shaping the next experiment together.
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
        <li>A short discovery conversation to map the challenge and success metrics.</li>
        <li>Collaborative scoping that keeps people, privacy, and impact in focus.</li>
        <li>Transparent timelines for pilots, research sprints, or full deployments.</li>
      </ul>
    </section>
  </>
);

export default Contact;
