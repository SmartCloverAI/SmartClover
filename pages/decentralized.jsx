import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const Decentralized = () => (
  <>
    <Head>
      <title>Why Decentralized? | SmartClover x Ratio1</title>
      <meta
        name="description"
        content="Discover how Ratio1's decentralized edge network keeps SmartClover applications resilient, private, and in the hands of the people who use them."
      />
    </Head>

    <header className="page-header">
      <span className="tagline">Why Decentralized?</span>
      <h1>Own your AI, protect your data</h1>
      <p>
        Ratio1’s Deeploy architecture keeps SmartClover solutions under the control of the organisations that operate
        them. Decentralisation is how we guarantee sovereignty, resilience, and verifiable accountability for healthcare
        and cybersecurity workloads.
      </p>
    </header>

    <section className="surface-card spotlight" aria-labelledby="decentralized-governance">
      <div className="spotlight-content">
        <h2 id="decentralized-governance">Your AI, your data</h2>
        <p>
          Deploying on Ratio1 means applications stay anchored to your governance policies. Workloads run on edge nodes
          you permission, eliminating the lock-in that comes with centralised cloud providers and ensuring there is no
          censorship layer between your teams and their tools.
        </p>
        <div className="key-points">
          <span>Data never leaves the trust boundary you define-ownership stays with clinicians and security leaders.</span>
          <span>Permissioned access controls decide which nodes execute workloads and who can audit them.</span>
          <span>Worker App Runner, powered by Deeploy, automates delivery from Git without taking control of your assets.</span>
        </div>
      </div>
      <div className="spotlight-media">
        <Image
          src="/images/governance-network.png"
          alt="Decentralised governance network illustration"
          width={896}
          height={1152}
        />
      </div>
    </section>

    <section className="surface-card spotlight" aria-labelledby="decentralized-immutability">
      <div className="spotlight-content">
        <h2 id="decentralized-immutability">Immutability for healthcare and cybersecurity incidents</h2>
        <p>
          Blockchain-backed scheduling records every deployment event. When an investigation happens-whether for a
          clinical audit or a cybersecurity incident-you have an immutable ledger that proves what ran, when, and on which
          node. That transparency is critical for regulated environments.
        </p>
        <div className="key-points">
          <span>Incident responders can reference tamper-evident logs to trace actions and contain threats.</span>
          <span>Healthcare compliance teams gain verifiable evidence for audits and reporting obligations.</span>
          <span>Every build artifact is fingerprinted, preventing silent changes from slipping into production.</span>
        </div>
      </div>
      <div className="spotlight-media">
        <Image
          src="/images/analytics-dashboard.png"
          alt="Immutable analytics timeline visual"
          width={640}
          height={822}
        />
      </div>
    </section>

    <section className="surface-card spotlight" aria-labelledby="decentralized-governance-model">
      <div className="spotlight-content">
        <h2 id="decentralized-governance-model">Trustless, permissioned governance</h2>
        <p>
          Ratio1’s trustless model enforces good data governance by design. Smart contracts coordinate deployment while
          your organisation sets the rules for participation. It is decentralised yet permissioned, so sensitive workloads
          gain resilience without losing oversight.
        </p>
        <div className="key-points">
          <span>No single party can alter workloads or censor access once policies are set.</span>
          <span>Stakeholders can independently verify compliance with governance requirements.</span>
          <span>Edge redundancy keeps services online even if one node is compromised.</span>
        </div>
        <div className="cta-links">
          <Link href="https://ratio1.ai/roadmap" className="button secondary">
            Explore Ratio1’s Deeploy roadmap
          </Link>
          <Link href="/blog/ratio1-worker-runner" className="button secondary">
            Read how we deploy on Worker App Runner
          </Link>
        </div>
      </div>
      <div className="spotlight-media">
        <Image
          src="/images/partnership-handshake.png"
          alt="Partnership handshake illustrating collaborative governance"
          width={1024}
          height={1024}
        />
      </div>
    </section>
  </>
);

export default Decentralized;
