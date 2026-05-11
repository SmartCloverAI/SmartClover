import Head from 'next/head';

const Values = () => (
  <>
    <Head>
      <title>Our Values | SmartClover</title>
      <meta
        name="description"
        content="Creativity, digitalization, and responsible AI for good guide every SmartClover product and platform release."
      />
    </Head>

    <header className="page-header">
      <span className="tagline">Values</span>
      <h1>Principles that keep technology human</h1>
      <p>
        Creativity, digitalization, and responsible AI for good shape how SmartClover scopes products, reviews claims,
        and manages platform operations.
      </p>
    </header>

    <section className="surface-card">
      <h2>Creativity</h2>
      <p>
        SmartClover explores new ideas with a clear operating boundary. Healthcare tools, research workflows, and
        creative education concepts are tested responsibly before they are presented as products.
      </p>
    </section>

    <section className="surface-card">
      <h2>Digitalization</h2>
      <p>
        Digital workflows should reduce administrative burden without weakening data integrity, accessibility, or
        long-term maintainability.
      </p>
    </section>

    <section className="surface-card">
      <h2>Clinician-led AI for good</h2>
      <p>
        Clinicians, researchers, and operators remain responsible for high-impact decisions. SmartClover uses AI to
        support expert review, with impact judged by usefulness, transparency, and trust.
      </p>
    </section>
  </>
);

export default Values;
