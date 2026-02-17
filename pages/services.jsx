import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const siteUrl = 'https://smartclover.ro';
const pageTitle = 'SmartClover Product Operations | Healthcare AI SaaS/PaaS';
const pageDescription =
  'SmartClover delivers healthcare AI product operations through digital-native SaaS/PaaS applications and managed platform modules.';

const toJsonLd = (data) => JSON.stringify(data).replace(/</g, '\\u003c');

const servicePrinciples = [
  {
    title: 'Outcome-Owned Product Delivery',
    description: 'We ship and operate AI applications, data pipelines, and governance rituals with measurable KPIs.'
  },
  {
    title: 'Built-In Cross-Disciplinary Expertise',
    description: 'Researchers, engineers, and clinicians shape SmartClover releases with cadences that keep every workload "your App, your Data".'
  },
  {
    title: 'Transparent SaaS/PaaS SLAs',
    description: 'Every programme defines product uptime, review cycles, reporting depth, and escalation paths while protecting "your AI, your eSource".'
  }
];

const serviceProgramSummaries = [
  {
    title: 'Evidence-Linked Healthcare Research Platform',
    description:
      'Retrieval-augmented research that validates every insight with source citations, clinician co-review, and predictive modelling built on state-of-the-art foundation models plus time-series pipelines for varied healthcare use cases.',
    deliverables: [
      'Continuous monitoring of clinical and observational datasets',
      'Qualitative synthesis pipelines grounded in clinician-reviewed datasets',
      'Insight libraries and explainable research narratives',
      'Predictive modelling workflows combining SOTA architectures with multivariate time-series forecasting for clinical, operational, and educational scenarios'
    ]
  },
  {
    title: 'Digital Resilience Platform for Healthcare',
    description:
      'AI-augmented monitoring that protects hospital ecosystems with CRA-aligned anomaly detection, ledger immutability, and modern CI/CD automation.',
    deliverables: [
      'Proactive IoT and infrastructure telemetry baselines',
      'Playbook-driven incident triage with human approval gates',
      'On-prem and on-edge pipelines that provide immutable ledger evidence and executive-ready reporting'
    ]
  },
  {
    title: 'Creative Education Experience Platform',
    description:
      'Generative storytelling environments that advance emotional intelligence while safeguarding learners and content.',
    deliverables: [
      'Adaptive narrative engines moderated by educators',
      'Content governance pipelines with human checkpoints',
      'Impact dashboards for families, schools, and researchers'
    ]
  }
];

const cerviGuardHighlights = [
  'Secure pilot login for authorized clinicians and administrators.',
  'De-identified cervical image intake with AI-assisted transformation-zone and lesion classification.',
  'Role-based case management for triage, follow-up, and audit-ready decision support.'
];

const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'SmartClover Healthcare AI Product Services',
  url: `${siteUrl}/services`,
  provider: {
    '@type': 'Organization',
    name: 'SmartClover',
    url: siteUrl
  },
  serviceType: 'Managed healthcare AI product services',
  areaServed: {
    '@type': 'Place',
    name: 'Europe and global healthcare operators'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'SmartClover Product Service Programmes',
    itemListElement: serviceProgramSummaries.map((service) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service.title,
        description: service.description
      }
    }))
  }
};

const Services = () => (
  <>
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta
        name="robots"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <meta name="keywords" content="healthcare AI product services, healthcare SaaS operations, healthcare PaaS integrations, SmartClover" />
      <meta name="author" content="SmartClover" />
      <link rel="canonical" href={`${siteUrl}/services`} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={`${siteUrl}/services`} />
      <meta property="og:image" content={`${siteUrl}/images/hero-gradient-workspace.png`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={`${siteUrl}/images/hero-gradient-workspace.png`} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(servicesSchema) }} />
    </Head>

    <header className="page-header">
      <span className="tagline">Product Operations</span>
      <h1>Healthcare AI product operations for SmartClover SaaS/PaaS platforms</h1>
      <p>
        SmartClover operates digital-native SaaS/PaaS products for retrieval-augmented research, digital resilience, and
        clinical decision-support workflows with accountable governance and continuous platform evolution.
      </p>
      <div className="cta-links">
        <Link
          href="/docs/SmartClover_1pagepitchdeck.pdf"
          className="button secondary"
          target="_blank"
          rel="noopener"
        >
          Download One-Pager
        </Link>
      </div>
    </header>

    <section className="surface-card flagship-highlight" id="cerviguard-flagship" aria-labelledby="cerviguard-heading">
      <div className="section-heading">
        <span className="flagship-kicker">Flagship Product Platform</span>
        <h2 id="cerviguard-heading">CerviGuard leads our healthcare product portfolio</h2>
        <p>
          CerviGuard is SmartClover&apos;s flagship product for cervical cancer prevention and follow-up, delivered as a
          secure healthcare AI platform with clinicians in final control.
        </p>
      </div>
      <article className="service-program">
        <h3>Current product focus</h3>
        <p>
          As of February 17, 2026, the live product experience at{' '}
          <a href="https://cerviguard.link" target="_blank" rel="noopener noreferrer">
            cerviguard.link
          </a>{' '}
          presents CerviGuard as a secure-access workspace for authorized pilot accounts with clinical case management
          workflows. The public codebase at{' '}
          <a href="https://github.com/SmartCloverAI/CerviGuard" target="_blank" rel="noopener noreferrer">
            SmartCloverAI/CerviGuard
          </a>{' '}
          documents local setup, role-based operations, and deployment architecture.
        </p>
        <p>
          The repository describes a TRL 6 pilot that has already been used in a small-scale oncological context with
          de-identified images, while keeping clinicians in final control of decisions.
        </p>
        <ul>
          {cerviGuardHighlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="cta-links">
          <a href="https://cerviguard.link" className="button primary" target="_blank" rel="noopener noreferrer">
            Visit CerviGuard
          </a>
          <Link href="/cerviguard" className="button secondary">
            Explore Product Walkthrough
          </Link>
          <a
            href="https://github.com/SmartCloverAI/CerviGuard"
            className="button secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            View GitHub Project
          </a>
          <Link href="/about#about-links-references" className="button tertiary">
            Links and references
          </Link>
        </div>
      </article>
    </section>

    <section className="surface-card" aria-labelledby="service-principles-heading">
      <div className="section-heading">
        <h2 id="service-principles-heading">What Makes SmartClover Product-Led</h2>
        <p>
          SmartClover runs a product-led operating model focused on owned platforms, defined release cadences, and
          maintained AI capabilities with accountable ownership.
        </p>
      </div>
      <div className="feature-grid three-up">
        {servicePrinciples.map((principle) => (
          <div key={principle.title} className="feature">
            <h3 className="feature-title">{principle.title}</h3>
            <p className="feature-description">{principle.description}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="surface-card" aria-labelledby="service-catalog-heading">
      <div className="section-heading">
        <h2 id="service-catalog-heading">Product Module Catalogue Overview</h2>
        <p>
          Every module combines application engineering, automation, qualitative research, and governance reviews under a
          productized SaaS/PaaS model.
        </p>
      </div>
      <div className="service-programs">
        {serviceProgramSummaries.map((service) => (
          <article key={service.title} className="service-program">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <ul>
              {service.deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>

    <section className="surface-card spotlight" id="healthcare-ai" aria-labelledby="healthcare-ai-heading">
      <div className="spotlight-content">
        <h2 id="healthcare-ai-heading">AI for Healthcare Research</h2>
        <p>
          SmartClover blends qualitative and quantitative research to deliver evidence-based insights. Using retrieval
          augmented LLMs, we process medical literature, clinical notes, and observational data at scale to support early
          detection programmes for chronic diseases such as cervical cancer.
        </p>
        <p>
          Our workflows capture provenance for every recommendation, so clinicians can review the data that shaped an
          insight. Dashboards, reports, and embedded storytelling keep multi-disciplinary teams aligned while immutable
          audit logs document every decision point.
        </p>
        <div className="key-points">
          <span>Data ingestion pipelines for structured and unstructured medical sources.</span>
          <span>Co-designed annotation sessions with clinicians to validate AI findings.</span>
          <span>Predictive and preventative models with evidence citations ready for public health initiatives.</span>
        </div>
      </div>
      <div className="spotlight-media">
        <Image
          src="/images/research-lab.png"
          alt="Healthcare researchers reviewing advanced analytics"
          width={1024}
          height={1024}
        />
      </div>
    </section>

    <section className="surface-card spotlight" id="cybersecurity" aria-labelledby="cybersecurity-heading">
      <div className="spotlight-content">
        <h2 id="cybersecurity-heading">Cybersecurity for Healthcare</h2>
        <p>
          The average healthcare breach now costs over $10M. We build AI-augmented monitoring that reduces alert noise,
          detects anomalies across medical IoT, and gives security teams the context they need to act quickly while
          staying aligned with EU CRA rules.
        </p>
        <p>
          Our engineers pair machine learning with operational playbooks so humans remain the final decision-makers.
          Every deployment balances compliance, patient privacy, and the practical realities of clinical environments.
        </p>
        <div className="key-points">
          <span>CRA-aligned behavioural baselines for EHR platforms, medical devices, and staff workflows.</span>
          <span>Incident response simulations that pair AI suggestions with expert review.</span>
          <span>Transparent reporting that satisfies regulators and reinforces patient trust.</span>
        </div>
      </div>
      <div className="spotlight-media">
        <Image
          src="/images/governance-network.png"
          alt="Secure healthcare data network visual"
          width={896}
          height={1152}
        />
      </div>
    </section>

    <section className="surface-card split" id="creative-products" aria-labelledby="creative-products-heading">
      <div className="spotlight-content">
        <h2 id="creative-products-heading">Creative Products for Emotional Intelligence</h2>
        <p>
          Our generative storytelling tools help children develop emotional intelligence. Product roadmaps are informed by
          educator feedback so experiences stay playful, inclusive, and safe while adults steer the journey.
        </p>
        <div className="key-points">
          <span>Interactive narratives that adapt to a child’s responses.</span>
          <span>Insight dashboards that keep parents and teachers informed.</span>
          <span>Content governance that ensures safety, accessibility, and cultural sensitivity.</span>
        </div>
      </div>
      <div className="spotlight-media stacked-media">
        <Image
          src="/images/eq-learning-tablet.png"
          alt="Children using an interactive emotional learning game"
          width={1216}
          height={832}
        />
        <Image
          src="/images/eq-learning-child.png"
          alt="Child engaging with an educational AI application"
          width={1216}
          height={832}
        />
      </div>
    </section>

    <section className="surface-card spotlight" id="engagement" aria-labelledby="engagement-heading">
      <div className="spotlight-content">
        <h2 id="engagement-heading">How product rollouts work</h2>
        <p>
          Rollouts begin with product qualification and onboarding checkpoints that map regulatory scope, user flows, and
          data requirements. From there, teams activate the relevant SmartClover product modules and governance settings.
        </p>
        <p>
          Deployments follow our &quot;your AI, your Data&quot;, &quot;your App, your Data&quot;, and &quot;your AI, your eSource&quot; principles -
          executing on-prem and on-edge with ledger immutability and modern CI/CD that keeps infrastructure aligned with
          clinical governance. Learn more about the approach in our{' '}
          <Link href="/decentralized">Your AI, your eSource</Link> section.
        </p>
      </div>
      <div className="spotlight-media">
        <Image
          src="/images/partnership-handshake.png"
          alt="Healthcare and technology teams aligning on product rollout"
          width={1024}
          height={1024}
        />
      </div>
    </section>
  </>
);

export default Services;
