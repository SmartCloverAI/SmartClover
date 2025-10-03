import Head from 'next/head';

const Values = () => (
  <>
    <Head>
      <title>Our Values | SmartClover</title>
      <meta
        name="description"
        content="Creativity, digitalisation, and human-in-the-loop AI for good guide every SmartClover engagement."
      />
    </Head>

    <header className="page-header">
      <span className="tagline">Values</span>
      <h1>Principles that keep technology human</h1>
      <p>
        Creativity, digitalisation, and human-in-the-loop AI for good are more than words-they are commitments that
        shape our products, services, and partnerships.
      </p>
    </header>

    <section className="surface-card">
      <h2>Creativity</h2>
      <p>
        We explore new ideas with curiosity and craft. Whether building AI tools for hospitals or stories for children,
        we experiment responsibly so every solution feels inspiring and intuitive.
      </p>
    </section>

    <section className="surface-card">
      <h2>Digitalisation</h2>
      <p>
        Digital experiences should feel frictionless. We transform traditional processes into seamless workflows that
        respect data integrity, accessibility, and long-term maintainability.
      </p>
    </section>

    <section className="surface-card">
      <h2>Human-in-the-loop AI for good</h2>
      <p>
        Humans stay at the helm of decision making. Our models are transparent, interpretable, and designed to augment
        experts, never to replace them. Impact is measured not only in metrics but also in trust.
      </p>
    </section>
  </>
);

export default Values;
