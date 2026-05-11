import Image from 'next/image';
import Link from 'next/link';
import DiligenceLinksSection from '../components/DiligenceLinksSection';
import PageSeo, { siteUrl } from '../components/PageSeo';

const proofCards = [
  {
    kicker: 'Live product',
    title: 'CerviGuard is the flagship product.',
    description:
      'The live product surface, public repository, and trust routes make the cervical screening workflow visible from the first visit.'
  },
  {
    kicker: 'Research context',
    title: 'Cervical-screening research is easy to find.',
    description:
      'Two PubMed references are linked for visitors who want context on cervical screening participation and follow-up work in Romania.'
  },
  {
    kicker: 'Trust routes',
    title: 'Security, privacy, proof, and regulatory material stay visible.',
    description:
      'Visitors can move from the homepage into trust, proof, pricing, and buying paths without leaving the public site.'
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
      'A live research pilot for synthetic-data generation using SLM-first execution with optional external APIs.'
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
      'Social Science & Medicine published field research on Roma women and cervical screening participation in Romania.'
  },
  {
    kicker: '2022 publication',
    title: 'Follow-up barriers researched in remote communities',
    description:
      'BMJ Open published a protocol on facilitators and barriers to follow-up after abnormal cervical screening results in remote Romanian communities.'
  },
  {
    kicker: '2024-2026 product build-out',
    title: 'CerviGuard moved into a live product surface',
    description:
      'The public product surface, repository, and model hub provide a concrete flagship proof layer with supporting artifacts.'
  },
  {
    kicker: 'Current company posture',
    title: 'Clear routes for buyers, partners, and investors',
    description:
      'Contact, pricing, how-to-buy, proof, regulatory, and trust routes help each visitor decide where to start.'
  }
];

const pathCards = [
  {
    title: 'Book demo / Request pilot',
    description: 'For clinics, hospitals, and operators evaluating CerviGuard or a scoped product rollout.',
    href: '/contact#inquiry-form'
  },
  {
    title: 'Research partnership',
    description: 'For institutions exploring prevention, qualitative research, or model-development collaboration.',
    href: '/contact#inquiry-form'
  },
  {
    title: 'Investor inquiry',
    description: 'For investors or accelerators reviewing SmartClover\'s healthcare AI platform, public proof, and commercial readiness.',
    href: '/contact#inquiry-form'
  }
];

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'SmartClover',
  url: siteUrl,
  description:
    'Healthcare AI company building CerviGuard for cervical-screening workflows, with DataGems as a live research pilot and public trust routes for clinics, partners, and investors.',
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
      description="SmartClover builds CerviGuard, a live product for cervical-screening teams, with DataGems as a live research pilot and public trust routes for clinics, partners, and investors."
      path="/"
      image="/images/cerviguard/cerviguard-dashboard.png"
      jsonLd={organizationSchema}
    />

    <section className="hero-shell" aria-labelledby="home-hero-title">
      <div className="hero-grid">
        <div className="hero-panel">
          <div className="hero-kicker-row">
            <span className="tagline">Healthcare AI company</span>
            <span className="proof-pill">
              <strong>CerviGuard</strong> live product
            </span>
            <span className="proof-pill">
              <strong>DataGems</strong> live research pilot
            </span>
          </div>

          <div className="hero-copy">
            <h1 id="home-hero-title" className="hero-title">
              Clinician-led AI workflow software for cervical screening.
            </h1>
            <p>
              SmartClover builds CerviGuard, a live product for cervical-screening teams that need structured intake,
              AI-assisted review, triage coordination, and clinician-led follow-up in one workflow. DataGems
              supports the broader research track as a live pilot for synthetic-data work.
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
              <strong>Research context:</strong>
              PubMed references from 2017 and 2022 provide context on cervical screening participation and follow-up work.
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
            <span>The live CerviGuard workspace shows case review, operational oversight, and clinician-led follow-up workflows.</span>
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
        <h2 id="home-proof-heading">Product evidence and working routes</h2>
        <p>
          SmartClover links the live CerviGuard workflow to research context, trust material, and direct
          commercial paths for clinics, research partners, and investors.
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
        <h2 id="home-portfolio-heading">A flagship product within a broader company platform</h2>
        <p>
          CerviGuard remains the primary commercial product, while the wider platform, research, and trust surfaces keep
          the full company offering visible.
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
          <h2 id="home-credibility-heading">Built around cervical-screening work, not generic AI positioning.</h2>
          <p>
            Founder Dr. Andreea Damian leads SmartClover from Cluj-Napoca with CerviGuard as the flagship product.
            The research links below are kept as context for the cervical-screening problem space; current product
            details come from CerviGuard, product, and trust pages.
          </p>
          <div className="key-points">
            <span>PubMed 35197342 covers follow-up barriers after abnormal cervical screening results.</span>
            <span>PubMed 28460211 covers barriers to cervical screening participation in Romania.</span>
            <span>CerviGuard, GitHub, Hugging Face, and trust routes are available before outreach.</span>
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
              alt="Research workspace representing SmartClover's cervical-screening context"
              width={1024}
              height={1024}
              sizes="(max-width: 1080px) 100vw, 40vw"
            />
          </div>
          <div className="visual-caption">
            <strong>Research context and product proof</strong>
            <span>Research links, product access, and trust materials give visitors concrete places to continue.</span>
          </div>
        </div>
      </div>
    </section>

    <section className="surface-card" aria-labelledby="home-timeline-heading">
      <div className="section-heading">
        <h2 id="home-timeline-heading">Public timeline of research, productization, and company development</h2>
        <p>The homepage shows the public milestones that connect research, productization, and transparent company execution.</p>
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
        <p>The site keeps one primary CTA while making audience-specific entry points clear for buyers, partners, and investors.</p>
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
      heading="Trust, proof, and buying routes"
      description="Use these routes to review proof, regulatory posture, trust, pricing, and procurement context before outreach."
    />
  </>
);

export default Home;
