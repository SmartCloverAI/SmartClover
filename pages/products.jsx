import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import DiligenceLinksSection from '../components/DiligenceLinksSection';

const portfolioTracks = [
  {
    status: 'Live product',
    title: 'CerviGuard clinical platform',
    description:
      'Cervical-screening workflow product with draft MDR Class I self-assessment material and clinician-reviewed AI outputs.'
  },
  {
    status: 'Live research pilot',
    title: 'DataGems synthetic-data workspace',
    description:
      'Synthetic-data research workspace for schema drafting, configured generation jobs, peer-level status, and JSON/CSV exports.'
  },
  {
    status: 'Service capability',
    title: 'Permissioned cloud-on-edge deployment',
    description:
      'Deployment support for healthcare AI workloads that need tenant boundaries, encryption controls, edge/on-prem execution, and traceable release records.'
  },
  {
    status: 'Service capability',
    title: 'Healthcare cybersecurity and resilience',
    description:
      'Security/resilience services for healthcare organizations, delivered with authorized/certified personnel, partner security products, and agentic engineering workflows where scoped.'
  }
];

const healthcareDirections = [
  {
    title: 'Direction 1: Classical analytics products',
    description:
      'Imaging and structured-data inferential/predictive analytics for screening, triage support, and follow-up coordination.'
  },
  {
    title: 'Direction 2: Research and communication tools',
    description:
      'Tools for prevention communication, qualitative questionnaire design, synthetic-data research, and aggregated insight analysis.'
  }
];

const dataGemsHighlights = [
  {
    title: 'Privacy-centered distributed execution',
    description:
      'DataGems supports synthetic-data generation across distributed nodes without relying on a single centralized runtime.'
  },
  {
    title: 'Internal and external inference options',
    description:
      'DataGems can use its internal inference path or saved external inference profiles when a scoped research workflow needs a different model.'
  }
];

const dataGemsShots = [
  {
    src: '/images/datagems/datagems-screen-dashboard.png',
    width: 903,
    height: 583,
    alt: 'DataGems dashboard with totals for jobs, records, active runs, and failures.',
    title: 'Dashboard metrics',
    description: 'Operational overview for generated records, running jobs, failure counts, and last job timing.'
  },
  {
    src: '/images/datagems/datagems-screen-job-form.png',
    width: 903,
    height: 584,
    alt: 'DataGems generation job form with fields for title, description, instructions, and record count.',
    title: 'Generation job setup',
    description: 'Job drafting flow with schema guidance, instruction fields, and configured generation controls.'
  },
  {
    src: '/images/datagems/datagems-screen-schema-peer-stats.png',
    width: 903,
    height: 583,
    alt: 'DataGems schema output view and peer statistics table for distributed job execution.',
    title: 'Schema output and peer stats',
    description: 'Generated schema payload plus peer-level execution status, result CID tracking, and timestamps.'
  },
  {
    src: '/images/datagems/datagems-screen-sign-in.png',
    width: 903,
    height: 491,
    alt: 'DataGems sign-in and account creation interface.',
    title: 'Workspace sign-in',
    description: 'Provides basic tenant authenticated access before running distributed synthetic-data generation jobs.'
  }
];

const Products = () => (
  <>
    <Head>
      <title>Products | SmartClover</title>
      <meta
        name="description"
        content="SmartClover product and service portfolio covering CerviGuard, DataGems research, permissioned cloud-on-edge deployment, and healthcare cybersecurity/resilience."
      />
    </Head>

    <header className="page-header">
      <span className="tagline">Products</span>
      <h1>Product portfolio led by CerviGuard</h1>
      <p>
        SmartClover&apos;s product portfolio is led by CerviGuard. DataGems supports synthetic-data research workflows,
        while service capabilities cover permissioned cloud-on-edge deployment and healthcare cybersecurity/resilience.
      </p>
      <div className="cta-links">
        <Link href="/cerviguard" className="button primary">
          Open CerviGuard
        </Link>
        <Link href="#products-more-links" className="button secondary">
          Review product routes
        </Link>
        <Link href="/contact" className="button tertiary">
          Contact
        </Link>
      </div>
    </header>

    <section className="surface-card" aria-labelledby="products-directions-heading">
      <div className="section-heading">
        <h2 id="products-directions-heading">Two healthcare AI product directions</h2>
      </div>
      <div className="feature-grid two-up">
        {healthcareDirections.map((direction) => (
          <article key={direction.title} className="feature">
            <h3 className="feature-title">{direction.title}</h3>
            <p className="feature-description">{direction.description}</p>
          </article>
        ))}
      </div>
    </section>

    <section className="surface-card flagship-highlight" aria-labelledby="products-portfolio-heading">
      <div className="section-heading">
        <span className="flagship-kicker">Portfolio Status</span>
        <h2 id="products-portfolio-heading">Product, research, and service capabilities</h2>
      </div>
      <div className="service-programs">
        {portfolioTracks.map((track) => (
          <article key={track.title} className="service-program">
            <p className="kicker">{track.status}</p>
            <h3>{track.title}</h3>
            <p>{track.description}</p>
          </article>
        ))}
      </div>
    </section>

    <section className="surface-card datagems-spotlight" aria-labelledby="products-datagems-heading">
      <div className="section-heading">
        <h2 id="products-datagems-heading">DataGems features in practice</h2>
        <p>
          DataGems helps research and data teams shape synthetic-data workflows, test schemas, track generation jobs,
          and export reviewable results across distributed environments. We discuss inference configuration, job design,
          and output review with research and data partners.
        </p>
      </div>
      <div className="cta-links">
        <a href="https://datagems.app" className="button primary" target="_blank" rel="noopener noreferrer">
          Open DataGems
        </a>
        <a
          href="https://github.com/SmartCloverAI/DataGems"
          className="icon-link-button"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open DataGems GitHub repository"
          title="Open DataGems GitHub repository"
        >
          <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
            <path d="M8 0a8 8 0 0 0-2.53 15.59c.4.07.55-.17.55-.38l-.01-1.49c-2.24.49-2.71-1.08-2.71-1.08-.36-.93-.89-1.18-.89-1.18-.73-.5.05-.49.05-.49.8.06 1.23.82 1.23.82.72 1.22 1.87.87 2.33.66.07-.52.28-.87.5-1.07-1.79-.2-3.67-.89-3.67-3.96 0-.87.31-1.58.82-2.13-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.81a7.6 7.6 0 0 1 4 0c1.53-1.02 2.2-.81 2.2-.81.44 1.1.16 1.92.08 2.12.51.55.82 1.26.82 2.13 0 3.08-1.89 3.76-3.69 3.96.29.25.55.74.55 1.5l-.01 2.22c0 .21.14.45.55.38A8 8 0 0 0 8 0Z" />
          </svg>
        </a>
      </div>
      <div className="feature-grid two-up datagems-card-grid">
        {dataGemsHighlights.map((item) => (
          <article key={item.title} className="feature">
            <h3 className="feature-title">{item.title}</h3>
            <p className="feature-description">{item.description}</p>
          </article>
        ))}
      </div>
      <div className="datagems-shot-grid">
        {dataGemsShots.map((shot) => (
          <article key={shot.src} className="datagems-shot-card">
            <div className="datagems-shot-media">
              <Image
                src={shot.src}
                alt={shot.alt}
                width={shot.width}
                height={shot.height}
                sizes="(max-width: 879px) 100vw, 46vw"
              />
            </div>
            <div className="datagems-shot-meta">
              <h3>{shot.title}</h3>
              <p>{shot.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>

    <DiligenceLinksSection
      headingId="products-more-links"
      heading="Commercial and trust routes"
      description="Review pricing, buying steps, proof, regulatory context, and trust material before starting qualification."
    />
  </>
);

export default Products;
