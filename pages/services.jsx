import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const Services = () => (
  <>
    <Head>
      <title>Services & Products | SmartClover</title>
      <meta
        name="description"
        content="Discover SmartClover services covering healthcare AI research, AI-augmented cybersecurity, and creative EQ products for children."
      />
    </Head>

    <header className="page-header">
      <span className="tagline">Services & Products</span>
      <h1>Applied AI programmes that pair insight with security</h1>
      <p>
        We combine large language models, qualitative research, and responsible deployment practices to support
        healthcare teams and creative learning partners. Every engagement keeps humans in control and impact measurable.
      </p>
    </header>

    <section className="surface-card spotlight" id="healthcare-ai" aria-labelledby="healthcare-ai-heading">
      <div className="spotlight-content">
        <h2 id="healthcare-ai-heading">AI for Healthcare Research</h2>
        <p>
          SmartClover blends qualitative and quantitative research to deliver evidence-based insights. Using retrieval
          augmented LLMs, we process medical literature, clinical notes, and observational data at scale to support early
          detection programmes for chronic diseases such as cervical cancer.
        </p>
        <p>
          Our workflows capture provenance for every recommendation, so clinicians can review the data that shaped an
          insight. Dashboards, reports, and embedded storytelling keep multi-disciplinary teams aligned.
        </p>
        <div className="key-points">
          <span>Data ingestion pipelines for structured and unstructured medical sources.</span>
          <span>Co-designed annotation sessions with clinicians to validate AI findings.</span>
          <span>Predictive and preventative models that feed into public health initiatives.</span>
        </div>
      </div>
      <div className="spotlight-media">
        <Image
          src="/images/research-lab.png"
          alt="Healthcare researchers reviewing advanced analytics"
          width={1024}
          height={1024}
        />
      </div>
    </section>

    <section className="surface-card spotlight" id="cybersecurity" aria-labelledby="cybersecurity-heading">
      <div className="spotlight-content">
        <h2 id="cybersecurity-heading">Cybersecurity for Healthcare</h2>
        <p>
          The average healthcare breach now costs over $10M. We build AI-augmented monitoring that reduces alert noise,
          detects anomalies across medical IoT, and gives security teams the context they need to act quickly.
        </p>
        <p>
          Our engineers pair machine learning with operational playbooks so humans remain the final decision-makers.
          Every deployment balances compliance, patient privacy, and the practical realities of clinical environments.
        </p>
        <div className="key-points">
          <span>Behavioural baselines for EHR platforms, medical devices, and staff workflows.</span>
          <span>Incident response simulations that pair AI suggestions with expert review.</span>
          <span>Transparent reporting that satisfies regulators and reinforces patient trust.</span>
        </div>
      </div>
      <div className="spotlight-media">
        <Image
          src="/images/governance-network.png"
          alt="Secure healthcare data network visual"
          width={896}
          height={1152}
        />
      </div>
    </section>

    <section className="surface-card split" id="creative-products" aria-labelledby="creative-products-heading">
      <div className="spotlight-content">
        <h2 id="creative-products-heading">Creative Products for Emotional Intelligence</h2>
        <p>
          Our generative storytelling tools help children develop emotional intelligence. We collaborate with educators to
          design playful, inclusive experiences where AI sparks curiosity while adults steer the journey.
        </p>
        <div className="key-points">
          <span>Interactive narratives that adapt to a child’s responses.</span>
          <span>Insight dashboards that keep parents and teachers informed.</span>
          <span>Content governance that ensures safety, accessibility, and cultural sensitivity.</span>
        </div>
      </div>
      <div className="spotlight-media stacked-media">
        <Image
          src="/images/eq-learning-tablet.png"
          alt="Children using an interactive emotional learning game"
          width={1216}
          height={832}
        />
        <Image
          src="/images/eq-learning-child.png"
          alt="Child engaging with an educational AI application"
          width={1216}
          height={832}
        />
      </div>
    </section>

    <section className="surface-card spotlight" id="engagement" aria-labelledby="engagement-heading">
      <div className="spotlight-content">
        <h2 id="engagement-heading">How we work</h2>
        <p>
          SmartClover engagements begin with discovery workshops to map success metrics, stakeholders, and data
          requirements. We prototype rapidly, validate with domain experts, and deploy on infrastructure that reflects the
          sensitivity of the workloads.
        </p>
        <p>
          Ratio1’s Worker App Runner powers many of our deployments, giving clients verifiable updates while keeping
          infrastructure aligned with clinical governance. Learn more about the platform in our{' '}
          <Link href="/decentralized">Your AI, your eSource</Link> section.
        </p>
      </div>
      <div className="spotlight-media">
        <Image
          src="/images/partnership-handshake.png"
          alt="Healthcare and technology experts collaborating"
          width={1024}
          height={1024}
        />
      </div>
    </section>
  </>
);

export default Services;
