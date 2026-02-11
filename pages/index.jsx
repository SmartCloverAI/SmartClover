import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const siteUrl = 'https://smartclover.ro';
const pageTitle = 'SmartClover | Healthcare AI Services Company';
const pageDescription =
  'SmartClover delivers managed healthcare AI services that combine retrieval-augmented research, digital resilience, and creative education programmes - never traditional consultancy.';

const toJsonLd = (data) => JSON.stringify(data).replace(/</g, '\\u003c');

const missionHighlights = [
  {
    title: 'Human-in-the-Loop Design',
    description: 'Clinicians, educators, and domain experts shape every iteration with continuous feedback loops.'
  },
  {
    title: 'Data Sovereignty by Default',
    description: 'Private, decentralized edge deployments ensure sensitive data never leaves your environment.'
  },
  {
    title: 'Transparent AI Governance',
    description: 'Every recommendation retains provenance, audit logs, and evidence for rapid verification.'
  }
];

const trustMetrics = [
  {
    value: '100% Data Sovereignty',
    description: 'Client data stays inside secure environments, aligning with regulatory and patient expectations.'
  },
  {
    value: '100% Source Verification',
    description: 'Insights remain linked to primary evidence so clinical teams can validate AI-generated findings.'
  },
  {
    value: '100% Human Oversight',
    description: 'Clinicians maintain final decision authority across research, security, and education workflows.'
  }
];

const techPartners = [
  {
    title: 'NVIDIA GPUs & Deep Learning',
    description: 'Accelerated training and fine-tuning of domain-specific models unlock near real-time healthcare insights.'
  },
  {
    title: 'Your AI, Your Data Deployments',
    description:
      'On-prem and on-edge execution frameworks deliver "your AI, your Data", "your App, your Data", and "your Ai, your eSource" outcomes with ledger immutability and modern CI/CD pipelines.'
  },
  {
    title: 'Healthcare Research Alliances',
    description: 'Romanian Cancer Society and clinical partners co-design oncology research and communication initiatives.'
  }
];

const serviceIdentity = [
  {
    title: 'Dedicated Service Teams',
    description: 'Cross-functional squads own delivery from discovery to operations so you receive outcomes, not reports.'
  },
  {
    title: 'Program-Based Engagements',
    description: 'Subscription-style service tiers bundle research, monitoring, and education assets with clear SLAs rooted in "Your App, your Data" principles.'
  },
  {
    title: 'No Hourly Consultancy',
    description: 'We operate as a services company, embedding specialists directly into your workflows without ad-hoc billing.'
  }
];

const managedPrograms = [
  {
    title: 'Evidence-Linked Healthcare Research Services',
    description:
      'Retrieval-augmented research programmes that synthesise clinical notes, observational data, and medical literature into validated insights with predictive modelling built on state-of-the-art foundation models and time-series approaches for diverse healthcare use cases.',
    deliverables: [
      'Early-detection intelligence with full evidence citations',
      'Clinician co-designed annotation and review loops',
      'Story-driven reports, dashboards, and educational briefs',
      'Predictive modelling pipelines combining current SOTA architectures with multivariate time-series forecasting for clinical, operational, and educational scenarios'
    ]
  },
  {
    title: 'Digital Resilience Service for Healthcare',
    description:
      'AI-augmented monitoring that protects patient data, IoT estates, and hospital infrastructure with CRA-aligned anomaly detection and immutable ledger-backed audit trails.',
    deliverables: [
      'Noise-reduced alerting and contextual incident playbooks',
      'On-prem and on-edge deployments that preserve data residency and sovereignty',
      'Immutable ledger logging for compliance, modern CI/CD, and executive reporting'
    ]
  },
  {
    title: 'Creative Education Experience Service',
    description:
      'Generative storytelling environments that build emotional intelligence in children within governed, educator-led spaces.',
    deliverables: [
      'Adaptive narratives tuned to emotional learning goals',
      'Governed content pipelines with human review checkpoints',
      'Impact dashboards for parents, teachers, and researchers'
    ]
  }
];

const faqItems = [
  {
    question: 'Is SmartClover a consultancy?',
    answer:
      'No. SmartClover is a healthcare AI services company delivering managed programmes with defined service levels, embedded teams, and owned outcomes rather than advice-only engagements.'
  },
  {
    question: 'How are SmartClover services delivered?',
    answer:
      'Each programme runs as an ongoing service tier that bundles research operations, automation pipelines, and governance reviews so organisations receive maintained AI assets.'
  },
  {
    question: 'Can AI crawlers and datasets reuse SmartClover content?',
    answer:
      'Yes. This site exposes machine-readable structured data, rich text, and transparent licensing statements so responsible AI crawlers can extract accurate context.'
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

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'SmartClover',
  url: siteUrl,
  description:
    'SmartClover is a healthcare AI services company providing managed research, resilience, and education programmes - not a consultancy.',
  logo: `${siteUrl}/smartclover_logo.jpg`,
  sameAs: ['https://www.linkedin.com/company/smartclover'],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Strada Cernauti 17-21',
    addressLocality: 'Cluj-Napoca',
    addressCountry: 'RO'
  },
  makesOffer: managedPrograms.map((program) => ({
    '@type': 'Service',
    name: program.title,
    description: program.description
  })),
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'SmartClover Managed AI Services',
    itemListElement: managedPrograms.map((program) => ({
      '@type': 'OfferCatalog',
      name: program.title,
      itemListElement: program.deliverables.map((item) => ({
        '@type': 'Service',
        name: item
      }))
    }))
  }
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question.trim(),
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer
    }
  }))
};

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
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta
        name="robots"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <meta name="keywords" content="healthcare AI services, managed AI programmes, SmartClover, human-in-the-loop AI" />
      <meta name="author" content="SmartClover" />
      <link rel="canonical" href={`${siteUrl}/`} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={`${siteUrl}/`} />
      <meta property="og:image" content={`${siteUrl}/images/hero-gradient-workspace.png`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={`${siteUrl}/images/hero-gradient-workspace.png`} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(faqSchema) }} />
    </Head>

    <header className="surface-card hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <span className="tagline">Healthcare AI Services · Human-in-the-Loop · Sovereign Deployments</span>
        <h1 id="hero-title">SmartClover</h1>
        <p>
          SmartClover is a healthcare AI services company delivering managed research, resilience, and learning
          programmes - not a consultancy. We embed specialists alongside your teams to operate ethical, sovereign AI rooted
          in &quot;your AI, your Data&quot;, &quot;your App, your Data&quot;, and &quot;your Ai, your eSource&quot; principles across on-prem and
          on-edge environments.
        </p>
        <div className="cta-links">
          <Link href="#contact" className="button primary">
            Get Started
          </Link>
          <Link href="/services" className="button secondary">
            Learn More
          </Link>
          <Link
            href="/docs/SmartClover_1pagepitchdeck.pdf"
            className="button tertiary"
            target="_blank"
            rel="noopener"
          >
            Download One-Pager
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
        <p>We pair responsible computation with domain collaboration so AI becomes a trusted partner in healthcare.</p>
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

    <section className="surface-card" aria-labelledby="service-company-heading">
      <div className="section-heading">
        <h2 id="service-company-heading">Services Company Promise</h2>
        <p>
          We deliver outcomes through managed services. Every engagement provides staffed operations, automation assets,
          and shared accountability anchored in &quot;your AI, your Data&quot;, &quot;your App, your Data&quot;, and &quot;your Ai, your eSource&quot;
          principles instead of ad-hoc consultancy deliverables.
        </p>
      </div>
      <div className="feature-grid three-up">
        {serviceIdentity.map((item) => (
          <div key={item.title} className="feature">
            <h3 className="feature-title">{item.title}</h3>
            <p className="feature-description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="surface-card" aria-labelledby="trust-heading">
      <div className="section-heading">
        <h2 id="trust-heading">Trust Commitments</h2>
        <p>Every SmartClover engagement stays aligned with the guarantees outlined in our healthcare one-pager.</p>
      </div>
      <div className="stat-blocks">
        {trustMetrics.map((metric) => (
          <div key={metric.value} className="stat">
            {metric.value}
            <small>{metric.description}</small>
          </div>
        ))}
      </div>
    </section>

    <section className="surface-card" aria-labelledby="service-programs-heading">
      <div className="section-heading">
        <h2 id="service-programs-heading">Managed AI Service Programmes</h2>
        <p>
          Structured service tiers combine automation, qualitative insight, governance, and on-prem/on-edge pipelines so
          healthcare teams receive continuously operated AI capabilities with ledger immutability and modern CI/CD.
        </p>
      </div>
      <div className="service-programs">
        {managedPrograms.map((program) => (
          <article key={program.title} className="service-program">
            <h3>{program.title}</h3>
            <p>{program.description}</p>
            <ul>
              {program.deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
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
          Retrieval-augmented large language models surface evidence-backed healthcare research with a specialised focus
          on early detection and prevention programmes for chronic diseases.
        </p>
        <ul>
          <li>Augmented analysis pipelines link every insight to source data so clinicians can verify recommendations.</li>
          <li>Co-designed workflows keep humans central, aligning recommendations with care standards and policy.</li>
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
        <p>
          We keep workloads transparent, permissioned, and evidence-linked with ledger immutability, modern CI/CD, and
          on-prem/on-edge execution so healthcare leaders retain full governance.
        </p>
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

    <section className="surface-card" aria-labelledby="partnership-heading">
      <div className="section-heading">
        <h2 id="partnership-heading">Technology & Partnerships</h2>
        <p>We collaborate with infrastructure and clinical partners who reinforce ethical, sovereign healthcare AI.</p>
      </div>
      <div className="pillars-grid">
        {techPartners.map((partner) => (
          <div key={partner.title} className="pillar-card">
            <h3>{partner.title}</h3>
            <p>{partner.description}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="surface-card" aria-labelledby="faq-heading">
      <div className="section-heading">
        <h2 id="faq-heading">SmartClover Services FAQs</h2>
        <p>Clear, crawler-friendly answers to how our healthcare AI services operate.</p>
      </div>
      <dl className="faq-list">
        {faqItems.map((item) => (
          <div key={item.question} className="faq-item">
            <dt>{item.question}</dt>
            <dd>{item.answer}</dd>
          </div>
        ))}
      </dl>
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
