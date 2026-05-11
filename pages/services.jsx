import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import DiligenceLinksSection from '../components/DiligenceLinksSection';

const siteUrl = 'https://smartclover.ro';

const servicePrinciples = [
  {
    title: 'CerviGuard-led product work',
    description:
      'We lead with CerviGuard: structured intake, AI-assisted review, triage coordination, and clinician-led follow-up for cervical-screening teams.'
  },
  {
    title: 'Permissioned cloud-on-edge deployment',
    description:
      'Deployment conversations can include tenant boundaries, encryption controls, edge/on-prem execution, and traceable release records.'
  },
  {
    title: 'Healthcare cybersecurity and resilience',
    description:
      'Security/resilience engagements are scoped for healthcare environments and delivered with authorized/certified personnel, partner security products, and agentic engineering support.'
  }
];

const productTracks = [
  {
    title: 'CerviGuard: screening workflow product',
    description:
      'Our flagship product helps cervical-screening teams structure intake, review cases with AI support, coordinate triage, and manage follow-up.'
  },
  {
    title: 'DataGems: synthetic-data research track',
    description:
      'DataGems supports controlled synthetic-data research workflows that stay separate from CerviGuard commercial claims.'
  }
];

const serviceCapabilities = [
  {
    status: 'Flagship product',
    title: 'CerviGuard for cervical-screening teams',
    points: [
      'Draft MDR Class I self-assessment material with clinician-led oversight',
      'Secure workflow operations for case intake, triage, and follow-up',
      'Deployment options scoped through RFQ and security/legal review'
    ]
  },
  {
    status: 'Live research track',
    title: 'DataGems synthetic-data research',
    points: [
      'Controlled synthetic-data workflows for research planning',
      'Research status kept separate from clinical-product claims',
      'Partner and publication discussions scoped through research review'
    ]
  },
  {
    status: 'Service capability',
    title: 'Permissioned cloud-on-edge deployment',
    points: [
      'Cloud-on-edge and on-prem execution options for healthcare AI workloads',
      'End-to-end encrypted sensitive flows within approved deployment models',
      'Immutable anchoring and traceable deployment records for audit and security review'
    ]
  },
  {
    status: 'Service capability',
    title: 'Cybersecurity and resilience services',
    points: [
      'Healthcare-focused assessment, hardening, and resilience planning',
      'Delivery with authorized/certified personnel and partner security products where scoped',
      'Agentic engineering workflows for monitoring support, remediation support, documentation, and operational hardening'
    ]
  }
];

const Services = () => (
  <>
    <Head>
      <title>Services | SmartClover</title>
      <meta
        name="description"
        content="SmartClover services covering CerviGuard, DataGems research, permissioned cloud-on-edge deployment, and healthcare cybersecurity/resilience."
      />
      <link rel="canonical" href={`${siteUrl}/services`} />
    </Head>

    <header className="page-header">
      <span className="tagline">Services</span>
      <h1>Healthcare AI products and service capabilities</h1>
      <p>
        SmartClover leads with CerviGuard for cervical-screening workflows. We also support DataGems research,
        permissioned cloud-on-edge deployment, and cybersecurity/resilience services for healthcare organizations.
      </p>
      <div className="cta-links">
        <Link href="/cerviguard" className="button primary">
          Explore CerviGuard
        </Link>
        <Link href="/pricing" className="button secondary">
          Pricing and Packaging
        </Link>
        <Link href="/proof" className="button secondary">
          Proof and Milestones
        </Link>
      </div>
    </header>

    <section className="surface-card" aria-labelledby="services-directions-heading">
      <div className="section-heading">
        <h2 id="services-directions-heading">Product and research tracks</h2>
      </div>
      <div className="feature-grid two-up">
        {productTracks.map((track) => (
          <article key={track.title} className="feature">
            <h3 className="feature-title">{track.title}</h3>
            <p className="feature-description">{track.description}</p>
          </article>
        ))}
      </div>
    </section>

    <section className="surface-card flagship-highlight" aria-labelledby="services-flagship-heading">
      <div className="section-heading">
        <span className="flagship-kicker">Flagship Product</span>
        <h2 id="services-flagship-heading">CerviGuard is the operational starting point</h2>
      </div>
      <p>
        CerviGuard is delivered as SmartClover&apos;s primary healthcare product. The live product at{' '}
        <a href="https://cerviguard.link" target="_blank" rel="noopener noreferrer">
          cerviguard.link
        </a>{' '}
        and the public repository at{' '}
        <a href="https://github.com/SmartCloverAI/CerviGuard" target="_blank" rel="noopener noreferrer">
          SmartCloverAI/CerviGuard
        </a>{' '}
        provide implementation context for clinical and procurement teams.
      </p>
      <div className="cta-links">
        <Link href="/regulatory" className="button secondary">
          Regulatory Baseline
        </Link>
        <Link href="/trust" className="button secondary">
          Trust Center
        </Link>
        <Link href="/how-to-buy" className="button tertiary">
          Procurement Path
        </Link>
      </div>
    </section>

    <section className="surface-card" aria-labelledby="services-principles-heading">
      <div className="section-heading">
        <h2 id="services-principles-heading">Operating principles</h2>
      </div>
      <div className="feature-grid three-up">
        {servicePrinciples.map((item) => (
          <article key={item.title} className="feature">
            <h3 className="feature-title">{item.title}</h3>
            <p className="feature-description">{item.description}</p>
          </article>
        ))}
      </div>
    </section>

    <section className="surface-card" aria-labelledby="services-modules-heading">
      <div className="section-heading">
        <h2 id="services-modules-heading">Offer set and status</h2>
      </div>
      <div className="service-programs">
        {serviceCapabilities.map((capability) => (
          <article key={capability.title} className="service-program">
            <p className="kicker">{capability.status}</p>
            <h3>{capability.title}</h3>
            <ul>
              {capability.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>

    <section className="surface-card spotlight" aria-labelledby="services-rollout-heading">
      <div className="spotlight-content">
        <h2 id="services-rollout-heading">How rollouts are activated</h2>
        <p>
          Rollouts progress through qualification, legal/security review, environment readiness, and operational handoff.
          This process aligns commercial scope with governance requirements before production activation.
        </p>
        <div className="cta-links">
          <Link href="/how-to-buy" className="button secondary">
            30/60/90 Onboarding Flow
          </Link>
          <Link href="/contact" className="button primary">
            Start Qualification
          </Link>
        </div>
      </div>
      <div className="spotlight-media">
        <Image
          src="/images/partnership-handshake.png"
          alt="Healthcare and technology teams aligning on product rollout"
          width={1024}
          height={1024}
          sizes="(max-width: 879px) 100vw, 46vw"
        />
      </div>
    </section>

    <DiligenceLinksSection
      headingId="services-diligence-links"
      description="Use Pricing, How to Buy, Proof, Regulatory, and Trust pages to review scope, evidence, and next steps."
    />
  </>
);

export default Services;
