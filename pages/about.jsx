import Head from 'next/head';
import Image from 'next/image';

const About = () => (
  <>
    <Head>
      <title>About SmartClover | Human-centred AI Studio</title>
      <meta
        name="description"
        content="SmartClover is a boutique studio blending creativity with human-in-the-loop AI to deliver ethical products, healthcare research, and decentralized services."
      />
    </Head>

    <header className="page-header">
      <span className="tagline">About SmartClover</span>
      <h1>People-first AI, crafted in a boutique studio</h1>
      <p>
        SmartClover is a small yet innovative company specialising in the creation of digital products powered by
        advanced Data Science including generative deep learning and domain specific models. We pair technical rigour with creativity so AI becomes a
        trusted partner for clinicians, educators, communities and more.
      </p>
    </header>

    <section className="surface-card spotlight" aria-labelledby="about-story">
      <div className="spotlight-content">
        <h2 id="about-story">Our story</h2>
        <p>
          Founded by a small yet passionate team about creativity, AI for good, and practical real-world data science, SmartClover
          is dedicated to pushing the boundaries of what is possible with modern tech. We deliver unique solutions
          by blending human insight with cutting-edge Deep Learning models, ensuring every project feels intuitive and respectful of the
          people who rely on it.
        </p>
        <p>
          From early prototypes to production deployments, we keep experts in the loop, documenting decisions and
          creating digital experiences that feel accessible and honest.
        </p>
      </div>
      <div className="spotlight-media">
        <Image
          src="/images/hero-gradient-workspace.png"
          alt="SmartClover design workspace with AI interfaces"
          width={896}
          height={1152}
        />
      </div>
    </section>

    <section className="surface-card spotlight" aria-labelledby="about-values">
      <div className="spotlight-content">
        <h2 id="about-values">Our values guide every build</h2>
        <p>
          Creativity, digitalisation, and human-in-the-loop AI for good are the anchors of SmartClover. They shape how we
          explore emerging technology and how we collaborate with partners.
        </p>
        <div className="key-points">
          <span>Creativity keeps us curious, imaginative, and ready to experiment with empathy.</span>
          <span>Digitalisation transforms complex processes into clear, resilient experiences.</span>
          <span>
            Human-in-the-loop AI ensures clinicians, educators, and researchers retain control over the systems they use.
          </span>
        </div>
      </div>
      <div className="spotlight-media">
        <Image
          src="/images/eq-learning-tablet.png"
          alt="Children exploring an interactive emotional learning experience"
          width={1216}
          height={832}
        />
      </div>
    </section>

    <section className="surface-card spotlight" aria-labelledby="about-deployments">
      <div className="spotlight-content">
        <h2 id="about-deployments">Your AI, your Data deployment model</h2>
        <p>
          SmartClover delivers &quot;your AI, your Data&quot;, &quot;your App, your Data&quot;, and &quot;your Ai, your eSource&quot; infrastructure
          so applications run on-prem and on-edge, close to the clinical and educational teams who depend on them.
        </p>
        <p>
          Immutable ledgers, modern CI/CD, and deterministic rollout controls keep every service resilient beyond a
          single data centre while preserving the sovereignty of the organisations that generate the data.
        </p>
      </div>
      <div className="spotlight-media">
        <Image
          src="/images/governance-network.png"
          alt="Decentralised network visual representing governance"
          width={896}
          height={1152}
        />
      </div>
    </section>
  </>
);

export default About;
