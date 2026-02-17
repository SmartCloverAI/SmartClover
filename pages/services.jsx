import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import DiligenceLinksSection from '../components/DiligenceLinksSection';

const siteUrl = 'https://smartclover.ro';

const servicePrinciples = [
  {
    title: 'Product-owned delivery',
    description: 'SmartClover operates owned healthcare products instead of project-by-project custom builds.'
  },
  {
    title: 'Governed SaaS/PaaS rollout',
    description: 'Each rollout defines scope boundaries, security/legal checkpoints, and measurable activation gates.'
  },
  {
    title: 'Human-in-the-loop operations',
    description: 'Clinical teams remain decision owners while AI supports triage, follow-up, and operational consistency.'
  }
];

const aiDirections = [
  {
    title: 'Direction 1: Classical imaging + structured analytics',
    description:
      'CerviGuard anchors this direction with inferential and predictive analytics for cervical-screening workflows.'
  },
  {
    title: 'Direction 2: Generative SaaS systems',
    description:
      'Generative systems support prophylaxis communication, stakeholder interaction, questionnaire design, and qualitative-data analysis.'
  }
];

const modules = [
  {
    status: 'Primary wedge (active)',
    title: 'CerviGuard and clinical analytics operations',
    points: [
      'MDR Class I companion-app positioning with clinician-led oversight',
      'Secure workflow operations for case intake, triage, and follow-up',
      'Governance-aligned deployment options across managed SaaS/private/hybrid tracks'
    ]
  },
  {
    status: 'Roadmap expansion',
    title: 'Digital resilience module track',
    points: [
      'Healthcare cybersecurity monitoring and governance workflows',
      'Traceability-focused operations aligned with CRA/NIS2-oriented controls',
      'Phased integration after primary cervical-screening commercialization milestones'
    ]
  },
  {
    status: 'Roadmap expansion',
    title: 'Creative education module track',
    points: [
      'Generative storytelling flows for emotional-intelligence programmes',
      'Educator-governed content pipelines and safety checkpoints',
      'Phased release sequence after healthcare-core scaling objectives'
    ]
  }
];

const Services = () => (
  <>
    <Head>
      <title>Services and Product Operations | SmartClover</title>
      <meta
        name="description"
        content="SmartClover healthcare AI product operations page covering primary CerviGuard wedge, roadmap tracks, and enterprise onboarding model for SaaS/PaaS delivery."
      />
      <link rel="canonical" href={`${siteUrl}/services`} />
    </Head>

    <header className="page-header">
      <span className="tagline">Product Operations</span>
      <h1>Healthcare AI product operations with a primary CerviGuard wedge</h1>
      <p>
        SmartClover commercial operations prioritize CerviGuard and associated clinical analytics workflows. Additional
        modules are staged as roadmap expansions to preserve execution focus and measurable adoption.
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
        <h2 id="services-directions-heading">Two AI directions, one commercialization sequence</h2>
      </div>
      <div className="feature-grid two-up">
        {aiDirections.map((direction) => (
          <article key={direction.title} className="feature">
            <h3 className="feature-title">{direction.title}</h3>
            <p className="feature-description">{direction.description}</p>
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
        CerviGuard is delivered as SmartClover&apos;s primary healthcare platform. The live pilot at{' '}
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
        <h2 id="services-modules-heading">Module catalogue with status labels</h2>
      </div>
      <div className="service-programs">
        {modules.map((module) => (
          <article key={module.title} className="service-program">
            <p className="kicker">{module.status}</p>
            <h3>{module.title}</h3>
            <ul>
              {module.points.map((point) => (
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
        />
      </div>
    </section>

    <DiligenceLinksSection
      headingId="services-diligence-links"
      description="Evaluate Pricing, How to Buy, Proof, Regulatory, and Trust directly from the services context."
    />
  </>
);

export default Services;
