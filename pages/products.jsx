import Head from 'next/head';
import Link from 'next/link';

const cerviGuardCapabilities = [
  'MDR Class I cervical cancer screening companion app positioning within the SmartClover portfolio.',
  'Secure sign-in workspace for authorized clinicians and administrators.',
  'AI-assisted support for de-identified cervical image analysis and case triage.',
  'Role-based follow-up workflows with evidence-linked review history.'
];

const aiHealthcareDirections = [
  {
    title: 'Direction 1: Classical Analytics Products',
    description:
      'Imaging and structured-data inferential/predictive analytics products for diagnosis support, including CerviGuard.'
  },
  {
    title: 'Direction 2: Generative SaaS Products',
    description:
      'Generative systems for primary prophylaxis communication, stakeholder interaction, qualitative questionnaire design, and aggregated-data analysis.'
  }
];

const Products = () => (
  <>
    <Head>
      <title>Products | SmartClover</title>
      <meta
        name="description"
        content="Explore SmartClover digital-native products across two healthcare AI directions: classical analytics (including CerviGuard MDR Class I) and generative SaaS systems for communication and qualitative research."
      />
    </Head>

    <header className="page-header">
      <span className="tagline">Products & Platforms</span>
      <h1>Digital-native products for healthcare and human development</h1>
      <p>
        SmartClover builds AI-centric product lines with SaaS/PaaS delivery models. CerviGuard is our flagship healthcare
        platform, while our creative EQ experiences remain a long-term product pillar. In healthcare AI, we intentionally
        operate both classical analytics and generative system directions.
      </p>
    </header>

    <section className="surface-card" aria-labelledby="products-directions-heading">
      <div className="section-heading">
        <h2 id="products-directions-heading">Two Healthcare AI Directions in the Product Portfolio</h2>
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

    <section className="surface-card flagship-highlight" aria-labelledby="flagship-product-heading">
      <div className="section-heading">
        <span className="flagship-kicker">Flagship Product</span>
        <h2 id="flagship-product-heading">CerviGuard is the lead product in our portfolio</h2>
      </div>
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
        consistently present a secure, human-in-the-loop operating model. A dedicated product page now documents the
        end-to-end user journey with authenticated application screenshots.
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
        <Link href="/cerviguard" className="button secondary">
          Open Dedicated Product Page
        </Link>
        <Link href="/services#cerviguard-flagship" className="button tertiary">
          Read Platform Context
        </Link>
        <Link href="/about#about-links-references" className="button tertiary">
          Links and references
        </Link>
      </div>
    </section>

    <section className="surface-card">
      <h2>Interactive learning products designed for growth</h2>
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
      <h2>Always human-in-the-loop, always product-first</h2>
      <p>
        Creativity, digitalization, and human oversight define every release. SmartClover keeps a digital-native operating
        model across both healthcare and education products, combining platform engineering with managed support.
      </p>
      <div className="cta-links">
        <Link href="/contact" className="button primary">
          Request Product Access
        </Link>
        <Link href="/values" className="button secondary">
          Read our guiding values
        </Link>
        <Link href="/services" className="button tertiary">
          Explore product operations
        </Link>
      </div>
    </section>
  </>
);

export default Products;
