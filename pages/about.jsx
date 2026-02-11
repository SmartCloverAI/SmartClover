import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const founderHistory = [
  {
    period: '2017',
    title: 'Community-level cervical screening participation research',
    detail:
      'Dr. Florian Nicula co-authored the Social Science & Medicine qualitative study on Roma women\'s screening participation in Romania. The same author list includes Andreea Itu, the publication name used by SmartClover founder Dr. Andreea Damian in earlier work.',
    links: [
      {
        label: 'PubMed PMID 28460211',
        href: 'https://pubmed.ncbi.nlm.nih.gov/28460211/'
      },
      {
        label: 'DOI 10.1016/j.socscimed.2017.04.040',
        href: 'https://doi.org/10.1016/j.socscimed.2017.04.040'
      }
    ]
  },
  {
    period: '2022',
    title: 'Follow-up barriers protocol in remote Romanian communities',
    detail:
      'Dr. Andreea Damian co-authored the BMJ Open qualitative study protocol on facilitators and barriers after abnormal cervical screening, grounding SmartClover follow-up workflow design in field-informed evidence.',
    links: [
      {
        label: 'PubMed PMID 35197342',
        href: 'https://pubmed.ncbi.nlm.nih.gov/35197342/'
      },
      {
        label: 'BMJ Open article',
        href: 'https://bmjopen.bmj.com/content/12/2/e053954'
      }
    ]
  },
  {
    period: '2024-2026',
    title: 'CerviGuard pilot implementation',
    detail:
      'The SmartClover CerviGuard Pilot translates this research line into a secure clinical console co-authored by Andreea D, Cristian Bleotiu, Vitalii Toderian, and Florian Nicula.',
    links: [
      {
        label: 'cerviguard.link',
        href: 'https://cerviguard.link'
      },
      {
        label: 'GitHub: SmartCloverAI/CerviGuard',
        href: 'https://github.com/SmartCloverAI/CerviGuard'
      }
    ]
  }
];

const citationRecords = [
  {
    key: 'cerviguard_pilot',
    title: 'SmartClover CerviGuard Pilot (2024-2026)',
    links: [
      { label: 'GitHub', href: 'https://github.com/SmartCloverAI/CerviGuard' },
      { label: 'Website', href: 'https://cerviguard.link' }
    ]
  },
  {
    key: 'Nyanchokae053954',
    title:
      'Understanding facilitators and barriers to follow-up after abnormal cervical cancer screening examination among women living in remote areas of Romania (BMJ Open, 2022)',
    links: [
      { label: 'PubMed PMID 35197342', href: 'https://pubmed.ncbi.nlm.nih.gov/35197342/' },
      { label: 'DOI 10.1136/bmjopen-2021-053954', href: 'https://doi.org/10.1136/bmjopen-2021-053954' }
    ]
  },
  {
    key: 'ANDREASSEN201748',
    title:
      'Controversies about cervical cancer screening: A qualitative study of Roma women\'s (non)participation in cervical cancer screening in Romania (Social Science & Medicine, 2017)',
    links: [
      { label: 'PubMed PMID 28460211', href: 'https://pubmed.ncbi.nlm.nih.gov/28460211/' },
      { label: 'DOI 10.1016/j.socscimed.2017.04.040', href: 'https://doi.org/10.1016/j.socscimed.2017.04.040' }
    ]
  }
];

const About = () => (
  <>
    <Head>
      <title>About SmartClover | Human-Centered AI Services</title>
      <meta
        name="description"
        content="SmartClover is a healthcare AI services company blending human-in-the-loop product delivery, evidence-linked research, and sovereign deployment."
      />
    </Head>

    <header className="page-header">
      <span className="tagline">About SmartClover</span>
      <h1>People-first AI, delivered as accountable services</h1>
      <p>
        SmartClover is a healthcare AI services company that pairs deep technical execution with domain collaboration. We
        build practical systems where clinicians, educators, and operational teams remain in control of outcomes.
      </p>
    </header>

    <section className="surface-card spotlight" aria-labelledby="about-story">
      <div className="spotlight-content">
        <h2 id="about-story">Our story</h2>
        <p>
          SmartClover was founded to close the gap between ambitious AI ideas and reliable real-world deployment. Our
          team combines research discipline, product thinking, and operational ownership so partners receive maintained
          capabilities instead of ad-hoc consulting output.
        </p>
        <p>
          From early prototypes to production operations, we keep experts in the loop, document key decisions, and build
          products that are transparent, auditable, and useful under real constraints.
        </p>
      </div>
      <div className="spotlight-media">
        <Image
          src="/images/hero-gradient-workspace.png"
          alt="SmartClover design workspace with AI interfaces"
          width={896}
          height={1152}
        />
      </div>
    </section>

    <section className="surface-card spotlight" aria-labelledby="about-values">
      <div className="spotlight-content">
        <h2 id="about-values">Our values guide every build</h2>
        <p>
          Creativity, digitalization, and human-in-the-loop AI for good are the anchors of SmartClover. They shape how we
          explore emerging technology and how we collaborate with partners.
        </p>
        <div className="key-points">
          <span>Creativity keeps us curious, imaginative, and ready to experiment with empathy.</span>
          <span>Digitalization transforms complex processes into clear, resilient experiences.</span>
          <span>
            Human-in-the-loop AI ensures clinicians, educators, and researchers retain control over the systems they use.
          </span>
        </div>
      </div>
      <div className="spotlight-media">
        <Image
          src="/images/eq-learning-tablet.png"
          alt="Children exploring an interactive emotional learning experience"
          width={1216}
          height={832}
        />
      </div>
    </section>

    <section className="surface-card spotlight" aria-labelledby="about-deployments">
      <div className="spotlight-content">
        <h2 id="about-deployments">Your AI, your Data deployment model</h2>
        <p>
          SmartClover delivers &quot;your AI, your Data&quot;, &quot;your App, your Data&quot;, and &quot;your AI, your eSource&quot; infrastructure
          so applications run on-prem and on-edge, close to the clinical and educational teams who depend on them.
        </p>
        <p>
          Immutable ledgers, modern CI/CD, and deterministic rollout controls keep every service resilient beyond a
          single data centre while preserving the sovereignty of the organisations that generate the data.
        </p>
      </div>
      <div className="spotlight-media">
        <Image
          src="/images/governance-network.png"
          alt="Decentralized network visual representing governance"
          width={896}
          height={1152}
        />
      </div>
    </section>

    <section className="surface-card" id="about-founder-history" aria-labelledby="founder-history-heading">
      <div className="section-heading">
        <h2 id="founder-history-heading">Founder history behind CerviGuard</h2>
        <p>
          Founder Dr. Andreea Damian has contributed to cervical-screening research in Romania across multiple phases,
          including publications where her earlier name appears as Andreea Itu. This research path now informs the
          CerviGuard flagship product.
        </p>
      </div>
      <div className="service-programs">
        {founderHistory.map((entry) => (
          <article key={entry.title} className="service-program">
            <h3>{`${entry.period} · ${entry.title}`}</h3>
            <p>{entry.detail}</p>
            <div className="cta-links">
              {entry.links.map((link) => (
                <a key={link.href} href={link.href} className="button tertiary" target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
      <div className="cta-links">
        <Link href="/services#cerviguard-flagship" className="button primary">
          View flagship service details
        </Link>
        <Link href="/products" className="button secondary">
          View product overview
        </Link>
      </div>
    </section>

    <section className="surface-card" id="about-citations-bibtex" aria-labelledby="citations-heading">
      <div className="section-heading">
        <h2 id="citations-heading">Citation library (BibTeX)</h2>
        <p>
          We publish CerviGuard and founder-history references in reusable BibTeX format for academic writing, due
          diligence, and transparent reference management.
        </p>
      </div>
      <div className="cta-links">
        <a
          href="/docs/smartclover-cerviguard-citations.bib"
          className="button primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open BibTeX file
        </a>
        <a href="/docs/smartclover-cerviguard-citations.bib" className="button secondary" download>
          Download .bib
        </a>
      </div>
      <div className="service-programs">
        {citationRecords.map((record) => (
          <article key={record.key} className="service-program">
            <h3>{record.key}</h3>
            <p>{record.title}</p>
            <div className="cta-links">
              {record.links.map((link) => (
                <a key={link.href} href={link.href} className="button tertiary" target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  </>
);

export default About;
