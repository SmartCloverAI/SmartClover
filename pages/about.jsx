import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

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

    <section className="surface-card" aria-labelledby="about-founder-history">
      <h2 id="about-founder-history">Founder history behind CerviGuard</h2>
      <p>
        Founder Dr. Andreea Damian has contributed to cervical-screening research in Romania across multiple phases,
        including publications where her earlier name appears as Andreea Itu. This research path now informs the
        CerviGuard flagship product.
      </p>
      <ul>
        <li>
          2017: Social Science &amp; Medicine qualitative study on Roma women&apos;s screening participation, co-authored with
          Dr. Florian Nicula (
          <a href="https://pubmed.ncbi.nlm.nih.gov/28460211/" target="_blank" rel="noopener noreferrer">
            PubMed
          </a>
          ,{' '}
          <a href="https://doi.org/10.1016/j.socscimed.2017.04.040" target="_blank" rel="noopener noreferrer">
            DOI
          </a>
          ).
        </li>
        <li>
          2022: BMJ Open protocol on facilitators and barriers to follow-up after abnormal screening results, with Dr.
          Andreea Damian as co-author (
          <a href="https://pubmed.ncbi.nlm.nih.gov/35197342/" target="_blank" rel="noopener noreferrer">
            PubMed
          </a>
          ,{' '}
          <a href="https://bmjopen.bmj.com/content/12/2/e053954" target="_blank" rel="noopener noreferrer">
            BMJ Open
          </a>
          ).
        </li>
        <li>
          2024-2026: SmartClover CerviGuard Pilot evolves this line into a live secure product (
          <a href="https://cerviguard.link" target="_blank" rel="noopener noreferrer">
            cerviguard.link
          </a>
          ,{' '}
          <a href="https://github.com/SmartCloverAI/CerviGuard" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          ).
        </li>
      </ul>
      <div className="cta-links">
        <Link href="/services#cerviguard-flagship" className="button primary">
          View flagship service details
        </Link>
        <Link href="/products" className="button secondary">
          View product overview
        </Link>
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
  </>
);

export default About;
