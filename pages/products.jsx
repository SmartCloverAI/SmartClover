import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import DiligenceLinksSection from '../components/DiligenceLinksSection';

const portfolioTracks = [
  {
    status: 'Active product',
    title: 'CerviGuard clinical platform',
    description:
      'MDR Class I companion-app positioning for cervical-screening workflows, with human-in-the-loop clinical decisions.'
  },
  {
    status: 'Active product',
    title: 'DataGems synthetic-data workspace',
    description:
      'Distributed-decentralized synthetic-data application using SLM-first generation with optional external APIs.'
  },
  {
    status: 'Roadmap track',
    title: 'Digital resilience module track',
    description: 'Cybersecurity and operational-resilience modules sequenced after core healthcare-product scaling.'
  },
  {
    status: 'Roadmap track',
    title: 'Creative education module track',
    description: 'EQ-focused generative learning products positioned as phased portfolio expansion.'
  }
];

const healthcareDirections = [
  {
    title: 'Direction 1: Classical analytics products',
    description:
      'Imaging and structured-data inferential/predictive analytics for screening, triage support, and follow-up coordination.'
  },
  {
    title: 'Direction 2: Generative SaaS/PaaS systems',
    description:
      'SaaS (including on-edge) products for prophylaxis communication, stakeholder interaction, qualitative questionnaire design, and aggregated insight analysis.'
  }
];

const dataGemsHighlights = [
  {
    title: 'Privacy centered distributed-decentralized execution',
    description:
      'DataGems allows partners to execute synthetic-data generation processes across distributed nodes, thereby eliminating the reliance on a singular, centralized runtime environment. SmartClover operates as a client utilizing the services offered by our partners through this system, with the partners contributing confidential data and expertise to the DataGems platform.'
  },
  {
    title: 'Low-power low-compute SLM-first generation',
    description:
      'The system uses SLMs by default and can integrate external APIs when needed to produce high-quality synthetic data for domain-specific model training and test-data preparation, enabling multiple "live data factory" services providers.'
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
    description: 'Job drafting flow with schema guidance, instruction fields, and advanced generation controls.'
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
      <title>Products & More | SmartClover</title>
      <meta
        name="description"
        content="SmartClover product portfolio with active CerviGuard and DataGems apps, including distributed-decentralized SLM-driven synthetic data generation with optional external APIs."
      />
    </Head>

    <header className="page-header">
      <span className="tagline">Products & More</span>
      <h1>Product portfolio with one compact diligence hub</h1>
      <p>
        SmartClover currently operates and actively develops CerviGuard, our flagship product, and provides specialized 
        Data Science and Advanced Analytics services to a diverse portfolio of partners across various industries.
      </p>
      <div className="cta-links">
        <Link href="/cerviguard" className="button primary">
          Open CerviGuard
        </Link>
        <Link href="#products-more-links" className="button secondary">
          Open Products & More
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
        <h2 id="products-portfolio-heading">Active products and roadmap tracks</h2>
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
          SmartClover is a significant consumer and procurer of synthetic data for its proprietary products, which led to 
          the establishment of DataGems, a pilot application for distributed-decentralized synthetic data generation, enabling 
          our partners to utilize SLMs, with optional external API integration, to produce high-quality data primarily for 
          domain-specific model training and also for test-data preparation in subsequent systems. SmartClover collaborates 
          closely with partners to establish and execute DataGems generation jobs, operating as the solution architect and producer, 
          while the partner functions as the "live data factory" services provider. Commercial deployment of DataGems is exclusively 
          available to our data creation partners.
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
      heading="Products & More"
      description="Review Pricing, How to Buy, Proof, Regulatory, and Trust from one compact section before starting qualification."
    />
  </>
);

export default Products;
