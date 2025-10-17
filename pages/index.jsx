import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const missionHighlights = [
  {
    title: 'Advanced Data Science',
    description: 'Cutting-edge machine learning and generative AI models tailored for healthcare applications.'
  },
  {
    title: 'Clinician Collaboration',
    description: 'Working directly with healthcare professionals to ensure practical, real-world solutions.'
  },
  {
    title: 'Human-in-the-Loop AI',
    description: 'Technology that enhances human capabilities rather than replacing them, keeping clinicians central.'
  }
];

const dataSolutions = [
  {
    title: 'Data Analysis',
    description: 'Machine learning algorithms uncover deep insights and recommendations for data-driven teams.'
  },
  {
    title: 'Predictive Analytics',
    description: 'Custom models forecast trends and outcomes, giving providers and partners a confident edge.'
  },
  {
    title: 'Custom Solutions',
    description: 'Tailored architectures designed to handle unique healthcare data science challenges.'
  }
];

const governancePillars = [
  {
    title: 'Governance Control',
    description: 'Applications stay anchored to your policies, eliminating run-time surprises and shadow AI.'
  },
  {
    title: 'Data Ownership',
    description: 'Data never leaves your defined trust boundary; clinicians and security leaders retain custody.'
  },
  {
    title: 'Permissioned Access',
    description: 'Edge nodes execute workloads you approve, with transparent audit trails for every event.'
  }
];

const Home = () => (
  <>
    <Head>
      <title>SmartClover | Boutique AI Studio for Healthcare</title>
      <meta
        name="description"
        content="SmartClover delivers human-centered healthcare AI through clinician collaboration, ethical data science, and resilient deployment."
      />
    </Head>

    <header className="surface-card hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <span className="tagline">Creativity · Digitalization · Human-in-the-loop AI</span>
        <h1 id="hero-title">SmartClover</h1>
        <p>
          Boutique AI studio delivering human-centered healthcare solutions through creativity, digitalization, and
          ethical AI innovation.
        </p>
        <div className="cta-links">
          <Link href="#contact" className="button primary">
            Get Started
          </Link>
          <Link href="/services" className="button secondary">
            Learn More
          </Link>
        </div>
      </div>
      <div className="hero-media">
        <Image
          src="/images/hero-gradient-workspace.png"
          alt="Modern healthcare technology interface with AI elements"
          width={620}
          height={620}
          priority
        />
      </div>
    </header>

    <section className="surface-card mission" aria-labelledby="mission-title">
      <div className="section-heading">
        <h2 id="mission-title">Our Mission</h2>
        <p>We pair advanced computation with clinician partnership to deliver ethical, practical healthcare AI.</p>
      </div>
      <div className="pillars-grid">
        {missionHighlights.map((highlight) => (
          <div key={highlight.title} className="pillar-card">
            <h3>{highlight.title}</h3>
            <p>{highlight.description}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="surface-card spotlight" aria-labelledby="research-heading">
      <div className="spotlight-media">
        <Image
          src="/images/research-lab.png"
          alt="Healthcare researchers reviewing advanced analytics"
          width={620}
          height={620}
        />
      </div>
      <div className="spotlight-content">
        <h2 id="research-heading">Healthcare Research Services</h2>
        <p>
          Advanced Large Language Models with augmented data retrieval provide thorough, insightful healthcare research
          with a specialised focus on cancer prevention for academic institutions.
        </p>
        <ul>
          <li>Augmented analysis pipelines surface evidence-backed insights clinicians can trust.</li>
          <li>Collaborative workflows keep humans central, aligning every recommendation with care standards.</li>
        </ul>
        <div className="cta-links">
          <Link href="/blog" className="button secondary">
            Explore Research Updates
          </Link>
        </div>
      </div>
    </section>

    <section className="surface-card" aria-labelledby="data-heading">
      <div className="section-heading">
        <h2 id="data-heading">AI-Powered Data Solutions</h2>
        <p>We design resilient analytics engines that move from descriptive dashboards to predictive foresight.</p>
      </div>
      <Image
        src="/images/analytics-dashboard.png"
        alt="Futuristic healthcare analytics dashboard"
        width={640}
        height={300}
        className="section-illustration"
      />
      <div className="feature-grid three-up">
        {dataSolutions.map((item) => (
          <div key={item.title} className="feature">
            <h3 className="feature-title">{item.title}</h3>
            <p className="feature-description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="surface-card spotlight" aria-labelledby="governance-heading">
      <div className="spotlight-media">
        <Image
          src="/images/governance-network.png"
          alt="Secure healthcare data network with encrypted connections"
          width={620}
          height={620}
        />
      </div>
      <div className="spotlight-content">
        <h2 id="governance-heading">Your AI, Your Data</h2>
        <p>We keep workloads transparent and permissioned so healthcare leaders retain full governance.</p>
        <div className="feature-grid three-up compact">
          {governancePillars.map((item) => (
            <div key={item.title} className="feature">
              <h3 className="feature-title">{item.title}</h3>
              <p className="feature-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="surface-card spotlight closing" id="contact" aria-labelledby="collaborate-heading">
      <div className="spotlight-media">
        <Image
          src="/images/partnership-handshake.png"
          alt="Healthcare and technology experts collaborating"
          width={560}
          height={560}
        />
      </div>
      <div className="spotlight-content">
        <h2 id="collaborate-heading">Ready to Innovate Together?</h2>
        <p>
          We believe in the power of collaboration and welcome clients, partners, and innovators exploring the next wave
          of healthcare AI.
        </p>
        <div className="cta-links">
          <Link href="mailto:andreea@smartclover.ai" className="button primary">
            Contact Us
          </Link>
          <Link href="/services" className="button secondary">
            View Portfolio
          </Link>
        </div>
      </div>
    </section>
  </>
);

export default Home;
