import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const Decentralized = () => (
  <>
    <Head>
      <title>Permissioned Cloud-On-Edge Deployment | SmartClover</title>
      <meta
        name="description"
        content="SmartClover describes permissioned cloud-on-edge healthcare AI deployment with explicit data boundaries, traceable deployment records, and immutable anchoring."
      />
    </Head>

    <header className="page-header">
      <span className="tagline">Permissioned Cloud-On-Edge</span>
      <h1>Keep healthcare AI workloads under your boundary</h1>
      <p>
        SmartClover uses provider-neutral permissioned cloud-on-edge deployment patterns so healthcare and research
        teams can keep sensitive workloads within approved boundaries while cloud coordination supports release control,
        observability, and traceable deployment records.
      </p>
      <p>
        <i>
          Note: Within regulated research, eSource denotes the electronic source data captured at point of care, while the
          patient health record (PHR) aggregates that longitudinal evidence for sponsors and clinicians.
        </i>
      </p>
    </header>

    <section className="surface-card spotlight" aria-labelledby="decentralized-governance">
      <div className="spotlight-content">
        <h2 id="decentralized-governance">Clinical data stays within your boundary</h2>
        <p>
          Deployments run on &quot;your AI, your Data&quot; and &quot;your App, your Data&quot; boundaries that you designate, so AI
          product platforms can operate on approved on-prem and on-edge infrastructure with cloud coordination layers
          matched to residency, privacy, and procurement requirements. The goal is to keep eSource processing locations
          explicit.
        </p>
        <div className="key-points">
          <span>Restrict workloads to infrastructure that passes your clinical governance reviews.</span>
          <span>Role-based controls decide which teams can push updates and who signs off on changes.</span>
          <span>Delivery automation is designed to avoid taking custody of clinical payload data or credentials.</span>
        </div>
      </div>
      <div className="spotlight-media">
        <Image
          src="/images/governance-network.png"
          alt="Healthcare data stewardship illustration"
          width={896}
          height={1152}
          sizes="(max-width: 879px) 100vw, 46vw"
        />
      </div>
    </section>

    <section className="surface-card spotlight" aria-labelledby="decentralized-immutability">
      <div className="spotlight-content">
        <h2 id="decentralized-immutability">Audit evidence from deployment traces</h2>
        <p>
          Deployment events can be written to append-only records with immutable anchoring, producing timestamps and
          build fingerprints for security review, audit preparation, and release investigation. Teams can review what was
          released, when it changed, and which approval context applied.
        </p>
        <div className="key-points">
          <span>Trace updates from source artifacts to production models with human-readable context.</span>
          <span>Security and compliance teams receive exportable deployment evidence for internal or sponsor review.</span>
          <span>Build artifacts are fingerprinted to help prevent unexpected changes from reaching production.</span>
        </div>
      </div>
      <div className="spotlight-media">
        <Image
          src="/images/analytics-dashboard.png"
          alt="Audit dashboard timeline visual"
          width={640}
          height={822}
          sizes="(max-width: 879px) 100vw, 46vw"
        />
      </div>
    </section>

    <section className="surface-card spotlight" aria-labelledby="decentralized-governance-model">
      <div className="spotlight-content">
        <h2 id="decentralized-governance-model">Policy automation with human oversight</h2>
        <p>
          Policy templates are built into product releases so participation rules remain aligned with sponsor
          requirements, local governance, and security constraints. Teams operate under defined rules without
          surrendering control to a central data silo.
        </p>
        <div className="key-points">
          <span>Human approval remains required for high-impact releases and model changes.</span>
          <span>Participating teams can review deployment evidence across sites.</span>
          <span>Redundant nodes support product responsiveness during maintenance or regional outages.</span>
        </div>
        <div className="cta-links">
          <Link href="/contact" className="button secondary">
            Talk with SmartClover about deployment options
          </Link>
          <Link href="/cloud-architecture" className="button secondary">
            Review Cloud-On-Edge Model
          </Link>
          <Link href="/trust/security" className="button tertiary">
            Security Baseline
          </Link>
          <Link href="/blog" className="button secondary">
            Read how we deploy with ledger immutability
          </Link>
        </div>
      </div>
      <div className="spotlight-media">
        <Image
          src="/images/partnership-handshake.png"
          alt="Clinicians and technologists reviewing decentralized AI governance controls"
          width={1024}
          height={1024}
          sizes="(max-width: 879px) 100vw, 46vw"
        />
      </div>
    </section>
  </>
);

export default Decentralized;
