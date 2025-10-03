import Head from 'next/head';
import Link from 'next/link';

const Products = () => (
  <>
    <Head>
      <title>Creative Products | SmartClover</title>
      <meta
        name="description"
        content="Explore SmartClover's AI-powered creative products that nurture emotional intelligence for children and support educators."
      />
    </Head>

    <header className="page-header">
      <span className="tagline">Creative Products</span>
      <h1>Playful experiences that grow emotional intelligence</h1>
      <p>
        Our AI-powered EQ tools for children remain a core pillar of SmartClover. We pair generative storytelling with
        careful pedagogy to help young minds thrive.
      </p>
    </header>

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
        that are not only innovative but also beneficial for children’s emotional and social development.
      </p>
      <p>
        These products are perfect for parents, educators, and caregivers looking for modern educational tools. Feedback
        from classrooms and families guides each iteration so the experiences stay inclusive and uplifting.
      </p>
    </section>

    <section className="surface-card">
      <h2>Always human-in-the-loop</h2>
      <p>
        Creativity, digitalisation, and human oversight define every release. Educators receive detailed insights about
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
      </div>
    </section>
  </>
);

export default Products;
