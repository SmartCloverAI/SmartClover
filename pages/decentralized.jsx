import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const Decentralized = () => (
  <>
    <Head>
      <title>Your AI, your eSource | SmartClover</title>
      <meta
        name="description"
        content="SmartClover keeps healthcare AI and research platforms inside your governance boundary with verifiable deployment controls and audit-ready evidence."
      />
    </Head>

    <header className="page-header">
      <span className="tagline">Your AI, your eSource</span>
      <h1>Keep regulated AI under your direction</h1>
      <p>
        SmartClover pairs distributed ledger-based delivery with human-guided governance so research teams retain control of
        sensitive data, adapt models responsibly, and share evidence with regulators and sponsors.
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
          Deployments run on Ratio1 Worker App Runner nodes that you designate, so AI services operate on infrastructure
          that matches your residency, privacy, and procurement requirements. You always know where eSource data is
          processed.
        </p>
        <div className="key-points">
          <span>Restrict workloads to infrastructure that passes your clinical governance reviews.</span>
          <span>Role-based controls decide which teams can push updates and who signs off on changes.</span>
          <span>Automated delivery never takes custody of your data or credentials.</span>
        </div>
      </div>
      <div className="spotlight-media">
        <Image
          src="/images/governance-network.png"
          alt="Healthcare data stewardship illustration"
          width={896}
          height={1152}
        />
      </div>
    </section>

    <section className="surface-card spotlight" aria-labelledby="decentralized-immutability">
      <div className="spotlight-content">
        <h2 id="decentralized-immutability">Audit-ready evidence without extra busywork</h2>
        <p>
          Every deployment writes to an append-only delivery public ledger log, producing timestamps and build fingerprints ready for
          clinical audits or security reviews. Investigators see exactly what ran and why decisions were made.
        </p>
        <div className="key-points">
          <span>Trace updates from research notebooks to production models with human-readable context.</span>
          <span>Healthcare compliance teams receive exportable evidence for sponsor and regulator reviews.</span>
          <span>Every build artifact is fingerprinted, preventing unexpected changes from reaching production.</span>
        </div>
      </div>
      <div className="spotlight-media">
        <Image
          src="/images/analytics-dashboard.png"
          alt="Audit dashboard timeline visual"
          width={640}
          height={822}
        />
      </div>
    </section>

    <section className="surface-card spotlight" aria-labelledby="decentralized-governance-model">
      <div className="spotlight-content">
        <h2 id="decentralized-governance-model">Policy automation with human oversight</h2>
        <p>
          Policy templates encode participation rules while SmartClover facilitators ensure they reflect sponsor and
          regulator obligations. Teams collaborate confidently without handing control to a central vendor.
        </p>
        <div className="key-points">
          <span>Human approvals stay in the loop for high-impact releases and model changes.</span>
          <span>Stakeholders can independently verify compliance across participating sites.</span>
          <span>Redundant nodes keep services responsive during maintenance or regional outages.</span>
        </div>
        <div className="cta-links">
          <Link href="/contact" className="button secondary">
            Talk with SmartClover about deployment options
          </Link>
          <Link href="/blog/ratio1-worker-runner" className="button secondary">
            Read how we deploy on Worker App Runner
          </Link>
        </div>
      </div>
      <div className="spotlight-media">
        <Image
          src="/images/partnership-handshake.png"
          alt="Clinicians and technologists collaborating on AI governance"
          width={1024}
          height={1024}
        />
      </div>
    </section>
  </>
);

export default Decentralized;
