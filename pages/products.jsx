import Head from 'next/head';
import Link from 'next/link';
import DiligenceLinksSection from '../components/DiligenceLinksSection';

const portfolioTracks = [
  {
    status: 'Primary wedge (active)',
    title: 'CerviGuard clinical platform',
    description:
      'MDR Class I companion-app positioning for cervical-screening workflows, with human-in-the-loop clinical decisions.'
  },
  {
    status: 'Roadmap expansion',
    title: 'Digital resilience module track',
    description: 'Cybersecurity and operational-resilience modules sequenced after primary healthcare wedge scaling.'
  },
  {
    status: 'Roadmap expansion',
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
    title: 'Direction 2: Generative SaaS systems',
    description:
      'SaaS products for prophylaxis communication, stakeholder interaction, qualitative questionnaire design, and aggregated insight analysis.'
  }
];

const Products = () => (
  <>
    <Head>
      <title>Products & More | SmartClover</title>
      <meta
        name="description"
        content="SmartClover product portfolio with primary CerviGuard wedge and roadmap module tracks, aligned to healthcare AI commercialization sequence."
      />
    </Head>

    <header className="page-header">
      <span className="tagline">Products & More</span>
      <h1>Product portfolio with one compact diligence hub</h1>
      <p>
        SmartClover leads with CerviGuard as the active healthcare wedge. Adjacent tracks are preserved as roadmap
        expansion modules to keep operational focus and proof density, while commercial and compliance pages are grouped
        in one section.
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
        <h2 id="products-portfolio-heading">Active wedge plus roadmap tracks</h2>
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

    <section className="surface-card" aria-labelledby="products-proof-heading">
      <div className="section-heading">
        <h2 id="products-proof-heading">Flagship product evidence context</h2>
      </div>
      <p>
        The live pilot at <a href="https://cerviguard.link" target="_blank" rel="noopener noreferrer">cerviguard.link</a>{' '}
        and public repository at{' '}
        <a href="https://github.com/SmartCloverAI/CerviGuard" target="_blank" rel="noopener noreferrer">
          SmartCloverAI/CerviGuard
        </a>{' '}
        are complemented by dedicated pricing, onboarding, proof, regulatory, and trust pages grouped below.
      </p>
    </section>

    <DiligenceLinksSection
      headingId="products-more-links"
      heading="Products & More"
      description="Review Pricing, How to Buy, Proof, Regulatory, and Trust from one compact section before starting qualification."
    />
  </>
);

export default Products;
