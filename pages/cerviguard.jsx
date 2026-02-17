import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const siteUrl = 'https://smartclover.ro';
const pageTitle = 'CerviGuard | SmartClover Healthcare AI Platform';
const pageDescription =
  'CerviGuard is SmartClover\'s AI-centric cervical screening platform delivered through digital-native SaaS/PaaS models with secure workflows, transparent clinical signals, and human-in-the-loop decisions.';

const toJsonLd = (data) => JSON.stringify(data).replace(/</g, '\\u003c');

const featurePillars = [
  {
    title: 'Clinical Workflow Platform',
    description:
      'Structured case intake, triage prioritization, and follow-up tracking keep screening operations consistent across distributed teams.'
  },
  {
    title: 'AI-Assisted Decision Support',
    description:
      'Transformation-zone and lesion signals are surfaced with confidence outputs, while clinicians remain in final control.'
  },
  {
    title: 'Digital-Native Delivery',
    description:
      'CerviGuard supports managed SaaS workspaces, private SaaS environments, and PaaS/API-led integrations.'
  }
];

const screenshotGallery = [
  {
    title: 'Secure sign-in workspace',
    description:
      'Role-based access ensures only authorized users can enter the pilot environment and operate case workflows.',
    src: '/images/cerviguard/cerviguard-login.png',
    alt: 'CerviGuard secure sign-in screen',
    width: 1600,
    height: 1100
  },
  {
    title: 'Operational dashboard',
    description:
      'A live operational overview summarizes completed analyses and risk distribution for rapid daily triage.',
    src: '/images/cerviguard/cerviguard-dashboard.png',
    alt: 'CerviGuard dashboard view with case overview cards',
    width: 1600,
    height: 1100
  },
  {
    title: 'Case history management',
    description:
      'The case log provides searchable status tracking and direct access to each analysis record for follow-up.',
    src: '/images/cerviguard/cerviguard-cases-list.png',
    alt: 'CerviGuard case history table with status and actions',
    width: 1600,
    height: 1613
  },
  {
    title: 'New case onboarding',
    description:
      'De-identified cervical image upload and notes are captured through a guided intake flow with privacy guardrails.',
    src: '/images/cerviguard/cerviguard-add-case.png',
    alt: 'CerviGuard add-case form for image upload and notes',
    width: 1600,
    height: 1100
  },
  {
    title: 'AI analysis detail',
    description:
      'Per-case analysis displays metadata and confidence-scored signals to support transparent, reviewable decision making.',
    src: '/images/cerviguard/cerviguard-case-detail.png',
    alt: 'CerviGuard case detail page with AI analysis metadata',
    width: 1600,
    height: 1100
  },
  {
    title: 'User profile and security',
    description:
      'Account-level profile and password controls support traceable access governance in regulated environments.',
    src: '/images/cerviguard/cerviguard-profile.png',
    alt: 'CerviGuard profile page with account and security settings',
    width: 1600,
    height: 1100
  }
];

const workflowSteps = [
  {
    title: '1. Intake',
    description: 'Teams upload de-identified imagery and contextual notes through a secure case-entry workflow.'
  },
  {
    title: '2. AI processing',
    description:
      'CerviGuard computes transformation-zone and lesion-class probabilities, then writes traceable metadata.'
  },
  {
    title: '3. Clinical review',
    description:
      'Clinicians inspect predictions, confidence ranges, and image context before confirming next actions.'
  },
  {
    title: '4. Follow-up operations',
    description: 'Case status and history remain visible for triage queues, escalation, and longitudinal coordination.'
  }
];

const deploymentModes = [
  {
    title: 'Managed SaaS Workspace',
    description: 'SmartClover operates the platform as a managed SaaS product with secured pilot onboarding.'
  },
  {
    title: 'Private SaaS Environment',
    description:
      'Healthcare organizations can run isolated deployments with residency, policy, and governance controls.'
  },
  {
    title: 'PaaS and API Extensions',
    description:
      'Engineering teams can integrate CerviGuard workflows into broader digital health ecosystems through PaaS interfaces.'
  }
];

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'CerviGuard',
  applicationCategory: 'HealthApplication',
  operatingSystem: 'Web',
  url: `${siteUrl}/cerviguard`,
  creator: {
    '@type': 'Organization',
    name: 'SmartClover',
    url: siteUrl
  },
  description: pageDescription,
  featureList: [
    'Secure authentication and role-based access',
    'De-identified cervical image case intake',
    'AI-assisted transformation-zone and lesion classification',
    'Case tracking and follow-up workflows',
    'Audit-ready metadata and human-in-the-loop review'
  ],
  screenshot: screenshotGallery.map((shot) => `${siteUrl}${shot.src}`),
  offers: deploymentModes.map((mode) => ({
    '@type': 'Offer',
    description: mode.description
  }))
};

const CerviGuard = () => (
  <>
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta
        name="robots"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <meta
        name="keywords"
        content="CerviGuard, healthcare AI platform, cervical screening software, SaaS healthcare, PaaS healthcare"
      />
      <link rel="canonical" href={`${siteUrl}/cerviguard`} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={`${siteUrl}/cerviguard`} />
      <meta property="og:image" content={`${siteUrl}/images/cerviguard/cerviguard-dashboard.png`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={`${siteUrl}/images/cerviguard/cerviguard-dashboard.png`} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(softwareSchema) }} />
    </Head>

    <header className="page-header">
      <span className="tagline">CerviGuard</span>
      <h1>CerviGuard: AI-centric cervical screening platform for digital-native care teams</h1>
      <p>
        CerviGuard is SmartClover&apos;s flagship healthcare application for structured screening intake, AI-assisted analysis,
        and clinician-led follow-up. It is designed as a product platform with SaaS/PaaS delivery options for modern
        healthcare operators.
      </p>
    </header>

    <section className="surface-card flagship-highlight cerviguard-hero" aria-labelledby="cerviguard-hero-heading">
      <div className="cerviguard-hero-copy">
        <span className="flagship-kicker">Flagship Healthcare Product</span>
        <h2 id="cerviguard-hero-heading">Built for secure, high-trust cervical screening operations</h2>
        <p>
          The live pilot at{' '}
          <a href="https://cerviguard.link" target="_blank" rel="noopener noreferrer">
            cerviguard.link
          </a>{' '}
          demonstrates an end-to-end workflow from secure login to AI-assisted case review and follow-up management.
        </p>
        <div className="key-points">
          <span>Clinical teams stay in command with human-in-the-loop review at every high-impact decision.</span>
          <span>Role-based access and case traceability support accountable operations in regulated settings.</span>
          <span>Product delivery supports SaaS and PaaS models without sacrificing data governance control.</span>
        </div>
        <div className="cta-links">
          <a href="https://cerviguard.link" className="button primary" target="_blank" rel="noopener noreferrer">
            Open Live Pilot
          </a>
          <a
            href="https://github.com/SmartCloverAI/CerviGuard"
            className="button secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore GitHub Project
          </a>
          <Link href="/contact" className="button tertiary">
            Request Product Demo
          </Link>
        </div>
      </div>
      <div className="cerviguard-hero-media">
        <Image
          src="/images/cerviguard/cerviguard-dashboard.png"
          alt="CerviGuard dashboard showing analysis and triage overview"
          width={1600}
          height={1100}
          priority
        />
      </div>
    </section>

    <section className="surface-card" aria-labelledby="cerviguard-pillars-heading">
      <div className="section-heading">
        <h2 id="cerviguard-pillars-heading">Platform highlights</h2>
        <p>CerviGuard combines product-grade UX, explainable AI outputs, and deployment flexibility for healthcare teams.</p>
      </div>
      <div className="feature-grid three-up">
        {featurePillars.map((item) => (
          <article key={item.title} className="feature">
            <h3 className="feature-title">{item.title}</h3>
            <p className="feature-description">{item.description}</p>
          </article>
        ))}
      </div>
    </section>

    <section className="surface-card cerviguard-gallery" aria-labelledby="cerviguard-gallery-heading">
      <div className="section-heading">
        <h2 id="cerviguard-gallery-heading">Inside the live application</h2>
        <p>
          Screens below were captured from the live pilot on February 17, 2026 using a demo account configured with
          de-identified training and pilot data.
        </p>
      </div>
      <div className="cerviguard-shot-grid">
        {screenshotGallery.map((shot) => (
          <article key={shot.src} className="cerviguard-shot-card">
            <div className="cerviguard-shot-media">
              <Image src={shot.src} alt={shot.alt} width={shot.width} height={shot.height} />
            </div>
            <div className="cerviguard-shot-meta">
              <h3>{shot.title}</h3>
              <p>{shot.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>

    <section className="surface-card" aria-labelledby="cerviguard-workflow-heading">
      <div className="section-heading">
        <h2 id="cerviguard-workflow-heading">Workflow from case intake to clinical follow-up</h2>
        <p>Every stage is structured for operational clarity, transparent signals, and accountable human oversight.</p>
      </div>
      <div className="cerviguard-flow-grid">
        {workflowSteps.map((step) => (
          <article key={step.title} className="cerviguard-flow-step">
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </section>

    <section className="surface-card" aria-labelledby="cerviguard-deployment-heading">
      <div className="section-heading">
        <h2 id="cerviguard-deployment-heading">Digital-native SaaS/PaaS deployment model</h2>
        <p>
          SmartClover positions CerviGuard as both a product and platform, enabling rapid adoption while preserving
          governance and integration control.
        </p>
      </div>
      <div className="feature-grid three-up">
        {deploymentModes.map((mode) => (
          <article key={mode.title} className="feature">
            <h3 className="feature-title">{mode.title}</h3>
            <p className="feature-description">{mode.description}</p>
          </article>
        ))}
      </div>
    </section>

    <section className="surface-card spotlight closing" aria-labelledby="cerviguard-cta-heading">
      <div className="spotlight-content">
        <h2 id="cerviguard-cta-heading">Need CerviGuard for your screening program?</h2>
        <p>
          SmartClover can deliver CerviGuard as a managed SaaS workspace, a private deployment, or a PaaS-integrated
          product track aligned with your healthcare operations.
        </p>
        <div className="cta-links">
          <Link href="/contact" className="button primary">
            Talk to Product Team
          </Link>
          <Link href="/services" className="button secondary">
            Review Platform Operating Model
          </Link>
          <a
            href="https://github.com/SmartCloverAI/CerviGuard"
            className="button tertiary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Review Technical Repository
          </a>
        </div>
      </div>
      <div className="spotlight-media">
        <Image
          src="/images/cerviguard/cerviguard-profile.png"
          alt="CerviGuard profile controls supporting secure account operations"
          width={1600}
          height={1100}
        />
      </div>
    </section>
  </>
);

export default CerviGuard;
