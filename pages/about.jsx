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
      'SmartClover keeps room for original thinking, but the work has to survive contact with real buyers, researchers, and clinical operators.'
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
    title: 'Build products, not vague service sprawl.',
    description:
      'SmartClover uses product surfaces, public repositories, and defined operating boundaries instead of selling abstract AI capacity.'
  },
  {
    kicker: 'Evidence before claims',
    title: 'Named sources beat generic superlatives.',
    description:
      'The company story stays tied to citations, current product proof, and dated trust material wherever claims become high-stakes.'
  },
  {
    kicker: 'Trust-aware deployment',
    title: 'Deployment language stays grounded.',
    description:
      'Security, privacy, governance, and procurement routes remain visible so serious evaluators can pressure-test the company early.'
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
    title: 'CerviGuard became the flagship operating wedge',
    description:
      'The company moved from abstract intent into a real product surface with live workflow evidence and a public implementation trail.'
  },
  {
    kicker: 'Company shape',
    title: 'SmartClover expanded into a broader platform story',
    description:
      'DataGems, trust routes, pricing, buying, and blog surfaces keep the public company narrative broader than one page or one screenshot.'
  },
  {
    kicker: 'Current stance',
    title: 'Founder-led and diligence-aware',
    description:
      'The site now emphasizes named leadership, public artifacts, and realistic delivery posture instead of faceless AI-marketing language.'
  }
];

const aboutSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About SmartClover',
    url: `${siteUrl}/about`,
    description:
      'Founder-led healthcare AI company page covering SmartClover history, publication continuity, operating principles, and values.'
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
      title="About SmartClover | Founder-Led Healthcare AI"
      description="Founder-led healthcare AI company with public cervical screening research continuity, visible product artifacts, and accountable product-delivery principles."
      path="/about"
      image="/images/research-lab.png"
      jsonLd={aboutSchema}
    />

    <header className="page-header">
      <span className="tagline">About SmartClover</span>
      <h1>Founder-led healthcare AI with publication continuity and accountable product delivery.</h1>
      <p>
        SmartClover is built to look and act like a real company: named leadership, public research continuity, visible
        product artifacts, and trust-aware delivery language. The goal is not to sound larger than reality. The goal is
        to make the real company legible.
      </p>
    </header>

    <section className="surface-card" aria-labelledby="about-founder-heading">
      <div className="founder-grid">
        <div className="story-card">
          <p className="kicker">Founder and research continuity</p>
          <h2 id="about-founder-heading">Dr. Andreea Damian anchors the public company story.</h2>
          <p>
            SmartClover ties its public healthcare narrative to named research and a visible flagship product. Founder
            Dr. Andreea Damian appears in public literature directly and also through earlier work published under the
            name Andreea Itu. That continuity matters because it connects the company’s cervical screening direction to
            identifiable prior work instead of anonymous marketing positioning.
          </p>
          <p>
            Dr. Florian Nicula also appears in the public research continuity that informs the screening and follow-up
            context. Together, those anchors make the company’s healthcare focus easier to evaluate for clinicians,
            partners, and investors.
          </p>
          <div className="key-points">
            <span>Named people and publications are visible before any deep diligence call.</span>
            <span>The flagship product has a live public surface, not just conceptual copy.</span>
            <span>Trust, pricing, procurement, and regulatory routes remain reachable from the same public site.</span>
          </div>
        </div>

        <div className="founder-proof-list">
          <div className="visual-frame">
            <Image
              src="/images/research-lab.png"
              alt="Research and product workspace representing SmartClover's founder-led credibility"
              width={1024}
              height={1024}
              sizes="(max-width: 1080px) 100vw, 40vw"
            />
          </div>
          <div className="visual-caption">
            <strong>Public proof over abstract positioning</strong>
            <span>About now centers named research continuity, public assets, and concrete operating posture.</span>
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

    <section className="surface-card" aria-labelledby="about-history-heading">
      <div className="section-heading">
        <h2 id="about-history-heading">A public timeline that connects research, productization, and company shape</h2>
        <p>
          The site no longer asks visitors to infer history from scattered references. The main public continuity points
          are visible in one place.
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
        <h2 id="about-values-heading">Values from the old standalone route now live here, where people expect them</h2>
        <p>
          Values matter more when they are attached to a founder, a product, and a visible operating model rather than
          left on an isolated route.
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
        <h2 id="about-principles-heading">How SmartClover wants to operate</h2>
        <p>
          The company’s public tone should feel human and credible, but the underlying operating principles still need
          to be explicit.
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
