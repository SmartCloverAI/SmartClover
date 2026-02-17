import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import DiligenceLinksSection from '../components/DiligenceLinksSection';

const siteUrl = 'https://smartclover.ro';
const pageTitle = 'SmartClover | AI-Centric Healthcare SaaS/PaaS Product Company';
const pageDescription =
  'SmartClover is an AI-centric healthcare product company operating two directions: classical imaging and structured-data inferential/predictive analytics (including the MDR Class I CerviGuard companion app), and generative SaaS systems for prophylaxis communication plus qualitative research automation.';

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
    value: 'Data sovereignty controls',
    description: 'Client data stays inside secure environments, aligning with regulatory and patient expectations.'
  },
  {
    value: 'Evidence-linked outputs',
    description: 'Insights remain linked to primary evidence so clinical teams can validate AI-generated findings.'
  },
  {
    value: 'Human decision authority',
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
      'On-prem and on-edge execution frameworks deliver "your AI, your Data", "your App, your Data", and "your AI, your eSource" outcomes with ledger immutability and modern CI/CD pipelines.'
  },
  {
    title: 'Healthcare Research Network',
    description: 'Romanian Cancer Society and clinical research institutions inform oncology product evidence and communication.'
  }
];

const serviceIdentity = [
  {
    title: 'Own Product Portfolio',
    description: 'SmartClover builds and operates its own production applications instead of one-off implementations.'
  },
  {
    title: 'SaaS/PaaS Revenue Model',
    description: 'Subscription access and platform integrations pair governed usage with transparent operating SLAs.'
  },
  {
    title: 'Continuous Platform Operations',
    description: 'Dedicated platform operations keep SmartClover products secure, reliable, and continuously improving.'
  }
];

const aiHealthcareDirections = [
  {
    title: 'Direction 1: Classical Imaging + Structured Data Analytics',
    description:
      'SmartClover deploys classical inferential and predictive AI for imaging and structured clinical datasets to support diagnosis and triage workflows.',
    points: [
      'Includes CerviGuard, our MDR Class I cervical cancer screening companion app',
      'Combines imaging signals with structured data for transparent clinical support',
      'Keeps clinicians in final control of every high-impact decision'
    ]
  },
  {
    title: 'Direction 2: Generative Healthcare Systems',
    description:
      'SmartClover builds generative systems delivered via SaaS for primary prophylaxis communication, stakeholder interaction, and qualitative research operations.',
    points: [
      'Designs qualitative study questionnaires with domain-aware prompting',
      'Analyzes aggregated qualitative datasets with evidence-linked outputs',
      'Supports communication and engagement workflows for prevention programmes'
    ]
  }
];

const managedPrograms = [
  {
    status: 'Primary wedge',
    title: 'Evidence-Linked Healthcare Research Platform',
    description:
      'Retrieval-augmented product modules that synthesize clinical notes, observational data, and medical literature into validated insights with predictive modelling built on state-of-the-art foundation models and time-series approaches.',
    deliverables: [
      'Early-detection intelligence with full evidence citations',
      'Clinician co-designed annotation and review loops',
      'Story-driven reports, dashboards, and educational briefs',
      'Predictive modelling pipelines combining current SOTA architectures with multivariate time-series forecasting for clinical, operational, and educational scenarios'
    ]
  },
  {
    status: 'Roadmap expansion track',
    title: 'Digital Resilience Platform for Healthcare',
    description:
      'AI-augmented monitoring roadmap that protects patient data, IoT estates, and hospital infrastructure with CRA-aligned anomaly detection and immutable ledger-backed audit trails.',
    deliverables: [
      'Noise-reduced alerting and contextual incident playbooks',
      'On-prem and on-edge deployments that preserve data residency and sovereignty',
      'Immutable ledger logging for compliance, modern CI/CD, and executive reporting'
    ]
  },
  {
    status: 'Roadmap expansion track',
    title: 'Creative Education Experience Platform',
    description:
      'Generative storytelling roadmap for emotional intelligence in children within governed, educator-led spaces.',
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
      'No. SmartClover is a healthcare AI product company delivering SaaS/PaaS platforms and managed product operations, not consultancy or outsourcing.'
  },
  {
    question: 'How are SmartClover products delivered?',
    answer:
      'Each product line is delivered through SaaS or private deployment tracks with managed platform operations and governance reviews.'
  },
  {
    question: 'What are SmartClover\'s two AI healthcare directions?',
    answer:
      'Direction one is classical imaging + structured-data inferential and predictive analytics, including the MDR Class I CerviGuard companion app. Direction two is generative SaaS systems for primary prophylaxis communication, stakeholder interaction, questionnaire design, and aggregated qualitative-data analysis.'
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
    title: 'Predictive Intelligence',
    description: 'Domain-tuned models forecast trends and outcomes for healthcare product workflows.'
  },
  {
    title: 'Reusable AI Modules',
    description: 'Productized modules accelerate rollout across screening, monitoring, and reporting scenarios.'
  }
];

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'SmartClover',
  url: siteUrl,
  description:
    'SmartClover is an AI-centric healthcare product company running two directions: classical imaging and structured-data analytics (including CerviGuard MDR Class I) plus generative SaaS systems for communication and qualitative research automation.',
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
    name: 'SmartClover Healthcare AI Product Portfolio',
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
      <meta name="keywords" content="healthcare AI SaaS, healthcare AI PaaS, AI healthcare products, SmartClover, human-in-the-loop AI" />
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
        <span className="tagline">Healthcare AI Products · Human-in-the-Loop · Sovereign Deployments</span>
        <h1 id="hero-title">SmartClover</h1>
        <p>
          SmartClover is an AI-centric healthcare product company. We build and operate digital-native SaaS/PaaS
          applications for research, resilience, and prevention workflows while preserving sovereign deployment controls
          through &quot;your AI, your Data&quot;, &quot;your App, your Data&quot;, and &quot;your AI, your eSource&quot; principles. In healthcare AI we
          run two directions: classical imaging + structured-data predictive analytics, and generative SaaS systems for
          prophylaxis communication plus qualitative research automation.
        </p>
        <div className="cta-links">
          <Link href="#contact" className="button primary">
            Request Demo
          </Link>
          <Link href="/services" className="button secondary">
            Learn More
          </Link>
          <Link href="/cerviguard" className="button secondary">
            Explore CerviGuard
          </Link>
          <Link href="/products" className="button secondary">
            Products & More
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
          sizes="(max-width: 879px) 100vw, 46vw"
          priority
        />
      </div>
    </header>

    <section className="surface-card mission" aria-labelledby="mission-title">
      <div className="section-heading">
        <h2 id="mission-title">Our Mission</h2>
        <p>We pair responsible computation with domain evidence so AI becomes a trusted product layer in healthcare.</p>
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
        <h2 id="service-company-heading">Digital Product Operating Model</h2>
        <p>
          SmartClover delivers outcomes through a product-first model. Every deployment combines platform engineering,
          operations, and accountable governance anchored in &quot;your AI, your Data&quot;, &quot;your App, your Data&quot;, and &quot;your AI,
          your eSource&quot; principles.
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
        <p>Every SmartClover deployment is governed by documented controls and publication-safe trust commitments.</p>
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

    <section className="surface-card" aria-labelledby="ai-directions-heading">
      <div className="section-heading">
        <h2 id="ai-directions-heading">Two Healthcare AI Product Directions</h2>
        <p>
          SmartClover&apos;s digital-product strategy combines classical clinical analytics with generative SaaS systems for
          prevention communication and research intelligence.
        </p>
      </div>
      <div className="feature-grid two-up">
        {aiHealthcareDirections.map((direction) => (
          <article key={direction.title} className="feature">
            <h3 className="feature-title">{direction.title}</h3>
            <p className="feature-description">{direction.description}</p>
            <ul>
              {direction.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>

    <section className="surface-card" aria-labelledby="service-programs-heading">
      <div className="section-heading">
        <h2 id="service-programs-heading">AI Product Platform Modules</h2>
        <p>
          CerviGuard and healthcare analytics remain the active primary wedge. Additional modules are sequenced as phased
          roadmap tracks to preserve delivery focus.
        </p>
      </div>
      <div className="service-programs">
        {managedPrograms.map((program) => (
          <article key={program.title} className="service-program">
            <p className="kicker">{program.status}</p>
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
          sizes="(max-width: 879px) 100vw, 46vw"
        />
      </div>
      <div className="spotlight-content">
        <h2 id="research-heading">Healthcare Research Product Layer</h2>
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

    <DiligenceLinksSection
      headingId="home-diligence-links"
      description="Enterprise buyers can review Pricing, How to Buy, Proof, Regulatory, and Trust from one compact section."
    />

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
        sizes="(max-width: 879px) 100vw, 860px"
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
          sizes="(max-width: 879px) 100vw, 46vw"
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
        <h2 id="partnership-heading">Technology Foundations & Research Network</h2>
        <p>Infrastructure providers and research institutions reinforce ethical, sovereign healthcare AI across product lines.</p>
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
        <h2 id="faq-heading">SmartClover Product FAQs</h2>
        <p>Clear, crawler-friendly answers to how our healthcare AI products and platforms operate.</p>
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
          alt="Healthcare and technology teams reviewing AI product outcomes"
          width={560}
          height={560}
          sizes="(max-width: 879px) 100vw, 44vw"
        />
      </div>
      <div className="spotlight-content">
        <h2 id="collaborate-heading">Ready to Launch with SmartClover Products?</h2>
        <p>
          Evaluate CerviGuard and other SmartClover AI product lines with a rollout model that matches your governance,
          deployment, and clinical workflow requirements.
        </p>
        <div className="cta-links">
          <Link href="mailto:andreea@smartclover.ro" className="button primary">
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
