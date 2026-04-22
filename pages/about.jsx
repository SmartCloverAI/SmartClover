import Image from 'next/image';
import Link from 'next/link';
import PageSeo, { siteUrl } from '../components/PageSeo';

const founderAnchors = [
  {
    title: 'PubMed 35197342',
    description: 'BMJ Open protocol on follow-up barriers after abnormal cervical screening in remote Romanian communities.',
    href: 'https://pubmed.ncbi.nlm.nih.gov/35197342/'
  },
  {
    title: 'PubMed 28460211',
    description: 'Social Science & Medicine research on cervical screening participation in Romania.',
    href: 'https://pubmed.ncbi.nlm.nih.gov/28460211/'
  },
  {
    title: 'CerviGuard public repository',
    description: 'Implementation-facing artifact for the flagship product surface.',
    href: 'https://github.com/SmartCloverAI/CerviGuard'
  },
  {
    title: 'SmartClover citations file',
    description: 'Reusable BibTeX source for public citation continuity.',
    href: '/docs/smartclover-cerviguard-citations.bib'
  }
];

const valueCards = [
  {
    title: 'Creativity',
    description:
      'SmartClover makes room for original thinking, but each initiative still has to withstand review by buyers, researchers, and clinical operators.'
  },
  {
    title: 'Digitalization',
    description:
      'The company focuses on turning difficult workflows into maintainable digital systems rather than delivering one-off experiments.'
  },
  {
    title: 'Human-in-the-loop AI for good',
    description:
      'Clinicians, researchers, and operators remain decision owners while AI accelerates triage, communication, and analysis.'
  }
];

const operatingPrinciples = [
  {
    kicker: 'Product ownership',
    title: 'Build products with defined scope.',
    description:
      'SmartClover uses product surfaces, public repositories, and defined operating boundaries instead of presenting itself as a broad, unscoped AI consultancy.'
  },
  {
    kicker: 'Evidence before claims',
    title: 'Named sources support high-stakes claims.',
    description:
      'Citations, current product proof, and dated trust material support public claims where accuracy matters most.'
  },
  {
    kicker: 'Trust-aware deployment',
    title: 'Deployment language stays specific.',
    description:
      'Security, privacy, governance, and procurement routes remain visible so evaluators can review the company early.'
  }
];

const companyTimeline = [
  {
    kicker: 'Research continuity',
    title: 'Publication-linked cervical screening work',
    description:
      'Public research from 2017 and 2022 provides a visible continuity line into SmartClover’s healthcare focus.'
  },
  {
    kicker: 'Productization',
    title: 'CerviGuard established the flagship product line',
    description:
      'The company moved from research intent into a live product surface with workflow evidence and a public implementation trail.'
  },
  {
    kicker: 'Company shape',
    title: 'SmartClover expanded into a broader platform profile',
    description:
      'DataGems, trust routes, pricing, buying, and blog surfaces present the company as a broader operating platform.'
  },
  {
    kicker: 'Current stance',
    title: 'Named leadership and diligence readiness',
    description:
      'The public site emphasizes named leadership, public artifacts, and a realistic delivery posture across the business.'
  }
];

const aboutSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About SmartClover',
    url: `${siteUrl}/about`,
    description:
      'Healthcare AI company page covering SmartClover leadership, publication continuity, operating principles, and values.'
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Dr. Andreea Damian',
    affiliation: {
      '@type': 'Organization',
      name: 'SmartClover',
      url: siteUrl
    },
    sameAs: ['https://pubmed.ncbi.nlm.nih.gov/35197342/', 'https://pubmed.ncbi.nlm.nih.gov/28460211/']
  }
];

const About = () => (
  <>
    <PageSeo
      title="About SmartClover | Leadership and Publication Continuity"
      description="Healthcare AI company with public cervical screening research continuity, visible product artifacts, and accountable product-delivery principles."
      path="/about"
      image="/images/research-lab.png"
      jsonLd={aboutSchema}
    />

    <header className="page-header">
      <span className="tagline">About SmartClover</span>
      <h1>Leadership, publication continuity, and accountable product delivery.</h1>
      <p>
        SmartClover is led by identifiable leadership and supported by public research continuity, visible product
        artifacts, and governance materials. This page summarizes the company&apos;s operating context, evidence base, and
        delivery posture.
      </p>
    </header>

    <section className="surface-card" aria-labelledby="about-founder-heading">
      <div className="founder-grid">
        <div className="story-card">
          <p className="kicker">Leadership and research continuity</p>
          <h2 id="about-founder-heading">Leadership and publications support the public record.</h2>
          <p>
            SmartClover links its public healthcare positioning to named research and a visible flagship product.
            Dr. Andreea Damian appears in public literature directly and also through earlier work published under the
            name Andreea Itu. That continuity connects the company&apos;s cervical screening direction to identifiable prior
            work.
          </p>
          <p>
            Dr. Florian Nicula also appears in the public research record that informs the screening and follow-up
            context. Together, these references give clinicians, partners, and investors a clearer basis for evaluation.
          </p>
          <div className="key-points">
            <span>Named leadership and publications are visible before deeper diligence.</span>
            <span>The flagship product has a live public surface with supporting artifacts.</span>
            <span>Trust, pricing, procurement, and regulatory routes remain reachable from the same public site.</span>
          </div>
        </div>

        <div className="founder-proof-list">
          <div className="visual-frame">
            <Image
              src="/images/research-lab.png"
              alt="Research and product workspace representing SmartClover leadership and publication continuity"
              width={1024}
              height={1024}
              sizes="(max-width: 1080px) 100vw, 40vw"
            />
          </div>
          <div className="visual-caption">
            <strong>Public evidence and operating context</strong>
            <span>This section brings together research continuity, public assets, and operating context in one place.</span>
          </div>
          <ul className="list-reset">
            {founderAnchors.map((item) => (
              <li key={item.title}>
                <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                  {item.title}
                </a>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    <section className="surface-card" aria-labelledby="about-gep-heading">
      <div className="section-heading">
        <h2 id="about-gep-heading">Leadership representation is backed by public policy and accountability.</h2>
        <p>
          SmartClover is led by a female founder and CEO. The public Gender Equality Plan documents commitments on
          recruitment, leadership, organisational culture, monitoring, training, and measures against gender-based
          violence and sexual harassment.
        </p>
      </div>
      <div className="story-grid">
        <article className="story-card">
          <p className="kicker">Public governance artifact</p>
          <h3>Gender Equality Plan 2026-2028</h3>
          <p>
            The plan is published as a formal document and as a readable public route so partners, funders, and future
            team members can review SmartClover&apos;s equality commitments in the open.
          </p>
        </article>
        <article className="story-card">
          <p className="kicker">Why it matters</p>
          <h3>Leadership identity is supported by process.</h3>
          <p>
            SmartClover links leadership credibility to concrete governance: annual monitoring, inclusive recruitment
            practice, awareness training, and a defined reporting route for misconduct concerns.
          </p>
        </article>
      </div>
      <div className="cta-links">
        <Link href="/gender-equality-plan" className="button secondary">
          Open Gender Equality Plan
        </Link>
        <a
          href="/docs/SmartClover_Gender_Equality_Plan_2026_2028.pdf"
          className="button tertiary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download GEP PDF
        </a>
      </div>
    </section>

    <section className="surface-card" aria-labelledby="about-history-heading">
      <div className="section-heading">
        <h2 id="about-history-heading">Public timeline connecting research, productization, and company development</h2>
        <p>
          The main public continuity points are presented in one place.
        </p>
      </div>
      <div className="timeline-grid">
        {companyTimeline.map((item) => (
          <article key={item.title} className="timeline-card">
            <p className="kicker">{item.kicker}</p>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>

    <section className="surface-card" aria-labelledby="about-values-heading">
      <div className="section-heading">
        <h2 id="about-values-heading">Core values integrated into the business overview</h2>
        <p>
          Values matter most when they are attached to leadership, products, and a visible operating model.
        </p>
      </div>
      <div className="story-grid">
        {valueCards.map((item) => (
          <article key={item.title} className="story-card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>

    <section className="surface-card" aria-labelledby="about-principles-heading">
      <div className="section-heading">
        <h2 id="about-principles-heading">Operating principles</h2>
        <p>
          SmartClover states these principles publicly so partners can understand how products are built, deployed, and
          governed.
        </p>
      </div>
      <div className="story-grid">
        {operatingPrinciples.map((item) => (
          <article key={item.title} className="story-card">
            <p className="kicker">{item.kicker}</p>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>

    <section className="surface-card" aria-labelledby="about-next-step-heading">
      <div className="section-heading">
        <h2 id="about-next-step-heading">Where to go next</h2>
        <p>
          About establishes confidence. CerviGuard, Trust, and Contact turn that confidence into product evaluation,
          diligence, and conversation.
        </p>
      </div>
      <div className="inline-link-row">
        <Link href="/cerviguard" className="button primary">
          Explore CerviGuard
        </Link>
        <Link href="/trust" className="button secondary">
          Open trust center
        </Link>
        <Link href="/contact#inquiry-form" className="button tertiary">
          Start a conversation
        </Link>
      </div>
    </section>
  </>
);

export default About;
