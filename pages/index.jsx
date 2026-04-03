import Image from 'next/image';
import Link from 'next/link';
import DiligenceLinksSection from '../components/DiligenceLinksSection';
import PageSeo, { siteUrl } from '../components/PageSeo';

const proofCards = [
  {
    kicker: 'Live product',
    title: 'CerviGuard is the flagship proof point.',
    description:
      'The live product surface, public repository, and trust routes make the cervical screening story inspectable instead of abstract.'
  },
  {
    kicker: 'Research continuity',
    title: 'Founder and clinical research signals are public.',
    description:
      'Two PubMed anchors tie the company narrative back to Romanian cervical screening and follow-up research continuity.'
  },
  {
    kicker: 'Trust routes',
    title: 'Security, privacy, proof, and regulatory material stay visible.',
    description:
      'Serious evaluators can move from the homepage into trust, proof, pricing, and buying paths without hunting for context.'
  }
];

const portfolioCards = [
  {
    kicker: 'Flagship product',
    title: 'CerviGuard',
    description:
      'A live product for structured cervical screening workflows, AI-assisted review, and clinician-led follow-up.'
  },
  {
    kicker: 'Live research pilot',
    title: 'DataGems',
    description:
      'A live research pilot for governed synthetic-data generation using SLM-first execution with optional external APIs.'
  },
  {
    kicker: 'Public research directions',
    title: 'Cancer prevention and decision support',
    description:
      'SmartClover publicly discusses cancer prevention, secondary prophylaxis, early detection, and treatment-optimization research as active directions, not as released products.'
  }
];

const timelineCards = [
  {
    kicker: '2017 publication',
    title: 'Screening participation barriers documented',
    description:
      'Social Science & Medicine published field research on Roma women and cervical screening participation in Romania, including Florian Nicula and Andreea Itu.'
  },
  {
    kicker: '2022 publication',
    title: 'Follow-up barriers researched in remote communities',
    description:
      'BMJ Open published a protocol on facilitators and barriers to follow-up after abnormal cervical screening results, including Dr. Andreea Damian.'
  },
  {
    kicker: '2024-2026 product build-out',
    title: 'CerviGuard moved into a live pilot surface',
    description:
      'The public pilot, repository, and model hub now give SmartClover a concrete flagship proof layer instead of a roadmap-only story.'
  },
  {
    kicker: 'Current company posture',
    title: 'Trust and conversion routes are public',
    description:
      'Contact, pricing, how-to-buy, proof, regulatory, and trust routes stay visible so buyers, partners, and investors can evaluate fit quickly.'
  }
];

const pathCards = [
  {
    title: 'Book demo / Request pilot',
    description: 'For clinics, hospitals, and operators evaluating CerviGuard or governed product rollout.',
    href: '/contact#inquiry-form'
  },
  {
    title: 'Research partnership',
    description: 'For institutions exploring prevention, qualitative research, or model-development collaboration.',
    href: '/contact#inquiry-form'
  },
  {
    title: 'Investor inquiry',
    description: 'For investors or accelerators reviewing SmartClover as a real healthcare AI company with public proof.',
    href: '/contact#inquiry-form'
  }
];

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'SmartClover',
  url: siteUrl,
  description:
    'Founder-led healthcare AI company building CerviGuard as a live product and DataGems as a live research pilot, grounded in public cervical screening research continuity and trust-ready delivery.',
  logo: `${siteUrl}/smartclover_logo.jpg`,
  sameAs: ['https://www.linkedin.com/company/smartclover'],
  founder: {
    '@type': 'Person',
    name: 'Dr. Andreea Damian'
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Strada Cernauti 17-21',
    addressLocality: 'Cluj-Napoca',
    addressCountry: 'RO'
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: 'andreea@smartclover.ro',
      url: `${siteUrl}/contact`
    }
  ]
};

const Home = () => (
  <>
    <PageSeo
      title="SmartClover | Healthcare AI With Live Product Proof"
      description="SmartClover is a founder-led healthcare AI company building CerviGuard as a live product and DataGems as a live research pilot, with public trust routes and publication-linked research continuity."
      path="/"
      image="/images/cerviguard/cerviguard-dashboard.png"
      jsonLd={organizationSchema}
    />

    <section className="hero-shell" aria-labelledby="home-hero-title">
      <div className="hero-grid">
        <div className="hero-panel">
          <div className="hero-kicker-row">
            <span className="tagline">Founder-led healthcare AI company</span>
            <span className="proof-pill">
              <strong>CerviGuard</strong> live product
            </span>
            <span className="proof-pill">
              <strong>DataGems</strong> live research pilot
            </span>
          </div>

          <div className="hero-copy">
            <h1 id="home-hero-title" className="hero-title">
              Live cervical screening software, active research pilots, and public trust routes.
            </h1>
            <p>
              SmartClover is a Cluj-Napoca healthcare AI company building CerviGuard as its flagship live product and
              DataGems as a live research pilot. The company narrative is tied to public cervical screening research,
              visible product surfaces, and a trust-ready buying path rather than anonymous AI-marketing claims.
            </p>
          </div>

          <div className="hero-action-row">
            <Link href="/contact#inquiry-form" className="button primary">
              Book demo
            </Link>
            <Link href="/cerviguard" className="button secondary">
              Explore CerviGuard
            </Link>
            <Link href="/trust" className="button tertiary">
              Open trust center
            </Link>
          </div>

          <ul className="hero-evidence-list">
            <li>
              <strong>Product proof:</strong>
              live product surface at{' '}
              <a href="https://cerviguard.link" target="_blank" rel="noopener noreferrer">
                cerviguard.link
              </a>{' '}
              plus public repository and model hub references.
            </li>
            <li>
              <strong>Research continuity:</strong>
              PubMed anchors from 2017 and 2022 tie the company story back to cervical screening and follow-up work.
            </li>
            <li>
              <strong>Trust orientation:</strong>
              privacy, security, incident response, pricing, buying, proof, and regulatory routes remain public.
            </li>
          </ul>
        </div>

        <div className="detail-panel">
          <div className="visual-frame">
            <Image
              src="/images/cerviguard/cerviguard-dashboard.png"
              alt="CerviGuard dashboard showing case distribution and operational overview"
              width={1600}
              height={1100}
              priority
              sizes="(max-width: 1080px) 100vw, 42vw"
            />
          </div>
          <div className="visual-caption">
            <strong>Authentic flagship proof</strong>
            <span>
              The homepage now leads with a real CerviGuard product surface instead of decorative placeholder imagery.
            </span>
          </div>

          <div className="metric-grid">
            <article className="metric-card">
              <strong>1</strong>
              <p>flagship live product publicly visible through CerviGuard.</p>
            </article>
            <article className="metric-card">
              <strong>1</strong>
              <p>live research pilot publicly visible through DataGems.</p>
            </article>
            <article className="metric-card">
              <strong>2</strong>
              <p>publication anchors already visible through public PubMed references.</p>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section className="surface-card proof-panel" aria-labelledby="home-proof-heading">
      <div className="section-heading">
        <h2 id="home-proof-heading">Why the first screen now carries real proof</h2>
        <p>
          The homepage has one job: establish that SmartClover is a real healthcare AI company with a real flagship
          product, research continuity, and a visible diligence path.
        </p>
      </div>
      <div className="story-grid">
        {proofCards.map((item) => (
          <article key={item.title} className="story-card">
            <p className="kicker">{item.kicker}</p>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>

    <section className="surface-card" aria-labelledby="home-portfolio-heading">
      <div className="section-heading">
        <h2 id="home-portfolio-heading">A flagship-first company that still looks like a company</h2>
        <p>
          CerviGuard remains the strongest proof point, but the wider platform, research, and diligence surfaces stay
          visible so SmartClover does not read like a single-page shell.
        </p>
      </div>
      <div className="story-grid">
        {portfolioCards.map((item) => (
          <article key={item.title} className="story-card">
            <p className="kicker">{item.kicker}</p>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
      <div className="inline-link-row">
        <Link href="/products" className="button secondary">
          View product portfolio
        </Link>
        <Link href="/pricing" className="button tertiary">
          See pricing approach
        </Link>
      </div>
    </section>

    <section className="surface-card" aria-labelledby="home-credibility-heading">
      <div className="founder-grid">
        <div className="story-card">
          <p className="kicker">Founder and research credibility</p>
          <h2 id="home-credibility-heading">SmartClover ties product work to named people, publications, and public artifacts.</h2>
          <p>
            The company narrative is anchored to founder Dr. Andreea Damian, publication continuity that includes
            earlier work published as Andreea Itu, and cervical screening research involving Dr. Florian Nicula. That is
            materially stronger than generic “AI for healthcare” copy without named accountability.
          </p>
          <div className="key-points">
            <span>PubMed 35197342 links directly to Romanian follow-up research in remote communities.</span>
            <span>PubMed 28460211 links directly to barriers in cervical screening participation in Romania.</span>
            <span>CerviGuard, GitHub, Hugging Face, and trust routes keep the company inspectable.</span>
          </div>
          <div className="inline-link-row">
            <a href="https://pubmed.ncbi.nlm.nih.gov/35197342/" target="_blank" rel="noopener noreferrer" className="button secondary">
              Open 2022 PubMed record
            </a>
            <a href="https://pubmed.ncbi.nlm.nih.gov/28460211/" target="_blank" rel="noopener noreferrer" className="button tertiary">
              Open 2017 PubMed record
            </a>
          </div>
        </div>

        <div className="detail-panel">
          <div className="visual-frame">
            <Image
              src="/images/research-lab.png"
              alt="Research workspace supporting SmartClover's publication-linked credibility"
              width={1024}
              height={1024}
              sizes="(max-width: 1080px) 100vw, 40vw"
            />
          </div>
          <div className="visual-caption">
            <strong>Named credibility, not anonymous branding</strong>
            <span>The company story stays tied to research continuity, public routes, and accountable operators.</span>
          </div>
        </div>
      </div>
    </section>

    <section className="surface-card" aria-labelledby="home-timeline-heading">
      <div className="section-heading">
        <h2 id="home-timeline-heading">A compact public timeline for serious visitors</h2>
        <p>
          Instead of vague origin language, the homepage now shows the public milestones that connect research,
          productization, and diligence-ready company behavior.
        </p>
      </div>
      <div className="timeline-grid">
        {timelineCards.map((item) => (
          <article key={item.title} className="timeline-card">
            <p className="kicker">{item.kicker}</p>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>

    <section className="surface-card" aria-labelledby="home-paths-heading">
      <div className="section-heading">
        <h2 id="home-paths-heading">Clear next steps for buyers, partners, and investors</h2>
        <p>
          The site keeps one primary CTA, but it still makes the audience-specific paths explicit for serious
          conversations.
        </p>
      </div>
      <div className="path-grid">
        {pathCards.map((item) => (
          <article key={item.title} className="path-card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <Link href={item.href} className="button tertiary">
              Go to contact hub
            </Link>
          </article>
        ))}
      </div>
    </section>

    <DiligenceLinksSection
      headingId="home-diligence-links"
      heading="Public diligence and buying routes"
      description="Use these routes to review proof, regulatory posture, trust, pricing, and procurement context before outreach."
    />
  </>
);

export default Home;
