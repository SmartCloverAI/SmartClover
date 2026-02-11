import Head from 'next/head';
import Link from 'next/link';

const cerviGuardCapabilities = [
  'Secure sign-in workspace for authorized clinicians and administrators.',
  'AI-assisted support for de-identified cervical image analysis and case triage.',
  'Role-based follow-up workflows with evidence-linked review history.'
];

const founderReferences = [
  {
    label: 'BMJ Open (2022): Follow-up barriers in remote Romanian communities',
    href: 'https://pubmed.ncbi.nlm.nih.gov/35197342/'
  },
  {
    label: 'Social Science & Medicine (2017): Roma women screening participation in Romania',
    href: 'https://pubmed.ncbi.nlm.nih.gov/28460211/'
  }
];

const Products = () => (
  <>
    <Head>
      <title>Products | SmartClover</title>
      <meta
        name="description"
        content="Explore SmartClover products, including the CerviGuard flagship and AI-powered learning experiences for children."
      />
    </Head>

    <header className="page-header">
      <span className="tagline">Products</span>
      <h1>Products that combine clinical safety and creative learning</h1>
      <p>
        SmartClover builds product lines for both healthcare and education. CerviGuard is our flagship healthcare
        product, while our creative EQ experiences remain a long-term product pillar.
      </p>
    </header>

    <section className="surface-card" aria-labelledby="flagship-product-heading">
      <h2 id="flagship-product-heading">Flagship healthcare product: CerviGuard</h2>
      <p>
        CerviGuard is SmartClover&apos;s flagship product for cervical cancer prevention and follow-up. The live pilot at{' '}
        <a href="https://cerviguard.link" target="_blank" rel="noopener noreferrer">
          cerviguard.link
        </a>{' '}
        and the public implementation at{' '}
        <a
          href="https://github.com/SmartCloverAI/CerviGuard"
          target="_blank"
          rel="noopener noreferrer"
        >
          SmartCloverAI/CerviGuard
        </a>{' '}
        consistently present a secure, human-in-the-loop operating model.
      </p>
      <ul>
        {cerviGuardCapabilities.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="cta-links">
        <a href="https://cerviguard.link" className="button primary" target="_blank" rel="noopener noreferrer">
          Visit CerviGuard
        </a>
        <a
          href="https://github.com/SmartCloverAI/CerviGuard"
          className="button secondary"
          target="_blank"
          rel="noopener noreferrer"
        >
          View GitHub Project
        </a>
        <Link href="/services#cerviguard-flagship" className="button tertiary">
          Read Services Context
        </Link>
      </div>
    </section>

    <section className="surface-card" aria-labelledby="founder-history-heading">
      <h2 id="founder-history-heading">Founder history behind the flagship</h2>
      <p>
        CerviGuard builds on the cervical-screening research line of founder Dr. Andreea Damian and collaborator Dr.
        Florian Nicula. Earlier publications list the founder as Andreea Itu, followed by Andreea Damian in later work.
      </p>
      <ul>
        {founderReferences.map((reference) => (
          <li key={reference.href}>
            <a href={reference.href} target="_blank" rel="noopener noreferrer">
              {reference.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="cta-links">
        <a
          href="/docs/smartclover-cerviguard-citations.bib"
          className="button secondary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open BibTeX citations
        </a>
        <Link href="/services#citations-bibtex" className="button tertiary">
          View citation library section
        </Link>
      </div>
    </section>

    <section className="surface-card">
      <h2>Interactive worlds designed for growth</h2>
      <p>
        We are particularly proud of our creative products designed to enhance emotional intelligence (EQ) in children.
        Leveraging generative AI, we create interactive and engaging digital experiences that foster emotional growth and
        creativity. Our products are designed to be both fun and educational, providing children with tools to develop
        their emotional and cognitive skills.
      </p>
      <p>
        Our focus on EQ-enhancing products stems from our belief in the importance of emotional intelligence in early
        childhood development. By integrating advanced AI technologies with educational principles, we create products
        that are not only innovative but also beneficial for children&apos;s emotional and social development.
      </p>
      <p>
        These products are perfect for parents, educators, and caregivers looking for modern educational tools. Feedback
        from classrooms and families guides each iteration so the experiences stay inclusive and uplifting.
      </p>
    </section>

    <section className="surface-card">
      <h2>Always human-in-the-loop</h2>
      <p>
        Creativity, digitalization, and human oversight define every release. Educators receive detailed insights about
        how stories evolve, while children explore safe, uplifting narratives that spark curiosity. We continue to expand
        these products with feedback from the communities who use them daily.
      </p>
      <div className="cta-links">
        <Link href="/contact" className="button primary">
          Talk to us about pilots
        </Link>
        <Link href="/values" className="button secondary">
          Read our guiding values
        </Link>
        <Link href="/services" className="button tertiary">
          Explore all services and products
        </Link>
      </div>
    </section>
  </>
);

export default Products;
