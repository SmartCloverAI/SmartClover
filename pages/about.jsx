import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const referenceGroups = [
  {
    title: 'Products, platforms, and models',
    description: 'Public entry points for SmartClover healthcare SaaS/PaaS products and model releases.',
    links: [
      {
        label: 'CerviGuard product walkthrough',
        href: '/cerviguard'
      },
      {
        label: 'CerviGuard live workspace',
        href: 'https://cerviguard.link'
      },
      {
        label: 'CerviGuard source repository',
        href: 'https://github.com/SmartCloverAI/CerviGuard'
      },
      {
        label: 'SmartClover on Hugging Face',
        href: 'https://huggingface.co/smartclover'
      }
    ]
  },
  {
    title: 'Research references',
    description:
      'Founder publication continuity spans Dr. Andreea Damian (published earlier as Andreea Itu) and Dr. Florian Nicula.',
    links: [
      {
        label: 'PubMed 35197342 (BMJ Open, 2022)',
        href: 'https://pubmed.ncbi.nlm.nih.gov/35197342/'
      },
      {
        label: 'PubMed 28460211 (Social Science & Medicine, 2017)',
        href: 'https://pubmed.ncbi.nlm.nih.gov/28460211/'
      }
    ]
  }
];

const aiHealthcareDirections = [
  {
    title: 'Direction 1: Classical Imaging + Structured Data Analytics',
    description:
      'Clinical inferential and predictive analytics across imaging and structured datasets, anchored by CerviGuard as an MDR Class I cervical cancer screening companion app.'
  },
  {
    title: 'Direction 2: Generative SaaS + Qualitative Research Automation',
    description:
      'Generative systems for primary prophylaxis communication, stakeholder interaction, questionnaire design, and aggregated qualitative-data analysis.'
  }
];

const About = () => (
  <>
    <Head>
      <title>About SmartClover | AI-Centric Healthcare Product Company</title>
      <meta
        name="description"
        content="SmartClover is an AI-centric healthcare product company blending two healthcare AI directions: classical imaging/structured analytics and generative SaaS systems for communication plus qualitative research."
      />
    </Head>

    <header className="page-header">
      <span className="tagline">About SmartClover</span>
      <h1>People-first AI, delivered through products and accountable operations</h1>
      <p>
        SmartClover is an AI-centric healthcare product company that pairs deep technical execution with domain evidence.
        We build practical SaaS/PaaS systems where clinicians and operational teams remain in control of outcomes across
        two healthcare AI directions: classical analytics and generative systems.
      </p>
    </header>

    <section className="surface-card spotlight" aria-labelledby="about-story">
      <div className="spotlight-content">
        <h2 id="about-story">Our story</h2>
        <p>
          SmartClover was founded to close the gap between ambitious AI ideas and reliable real-world deployment. Our
          team combines research discipline, product thinking, and operational ownership so healthcare organizations
          receive maintained product capabilities instead of one-off deliverables.
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

    <section className="surface-card" aria-labelledby="about-directions-heading">
      <div className="section-heading">
        <h2 id="about-directions-heading">Our Two Healthcare AI Directions</h2>
        <p>
          SmartClover&apos;s digital-product roadmap keeps both classical and generative AI capabilities active across the
          healthcare portfolio.
        </p>
      </div>
      <div className="feature-grid two-up">
        {aiHealthcareDirections.map((direction) => (
          <article key={direction.title} className="feature">
            <h3 className="feature-title">{direction.title}</h3>
            <p className="feature-description">{direction.description}</p>
          </article>
        ))}
      </div>
    </section>

    <section className="surface-card spotlight" aria-labelledby="about-values">
      <div className="spotlight-content">
        <h2 id="about-values">Our values guide every build</h2>
        <p>
          Creativity, digitalization, and human-in-the-loop AI for good are the anchors of SmartClover. They shape how we
          explore emerging technology and how we evolve product roadmaps.
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
          so SaaS/PaaS applications run on-prem and on-edge, close to the clinical and educational teams who depend on
          them.
        </p>
        <p>
          Immutable ledgers, modern CI/CD, and deterministic rollout controls keep every platform release resilient beyond a
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

    <section className="surface-card" id="about-links-references" aria-labelledby="links-references-heading">
      <div className="section-heading">
        <h2 id="links-references-heading">Links and references</h2>
        <p>
          This section keeps public product, model, and research references in one concise place for enterprise due
          diligence.
        </p>
      </div>
      <div className="service-programs">
        {referenceGroups.map((group) => (
          <article key={group.title} className="service-program">
            <h3>{group.title}</h3>
            <p>{group.description}</p>
            <ul className="list-reset reference-link-list">
              {group.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </article>
        ))}
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
        <Link href="/services#cerviguard-flagship" className="button tertiary">
          View flagship product details
        </Link>
      </div>
    </section>
  </>
);

export default About;
