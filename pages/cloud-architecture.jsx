import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const serviceMap = [
  {
    domain: 'Compute and orchestration',
    baseline: 'Permissioned cloud-on-edge and on-prem workers with hybrid coordination components.',
    deploymentRationale:
      'Cloud coordination is scoped to orchestration, release control, observability, and operational governance.'
  },
  {
    domain: 'Data and storage boundaries',
    baseline: 'Clinical payload data remains tenant-local and encrypted within the approved deployment model.',
    deploymentRationale:
      'Control-plane metadata may use managed storage patterns without centralizing clinical payload data.'
  },
  {
    domain: 'AI and model operations',
    baseline: 'AI-assisted workflows run within authorized boundaries with human approval gates.',
    deploymentRationale:
      'Model lifecycle coordination is enabled only where the contract and deployment boundary approve it.'
  },
  {
    domain: 'Security and identity',
    baseline: 'Role-based access, encryption control, and policy-constrained service communication.',
    deploymentRationale:
      'Identity, key, and policy controls are selected per environment and reviewed during onboarding.'
  },
  {
    domain: 'Observability and audit',
    baseline: 'Append-only operational traces with immutable anchoring for audit integrity.',
    deploymentRationale:
      'Operational telemetry supports reliability review, security review, and release traceability.'
  }
];

const reliabilityRows = [
  {
    area: 'Availability posture',
    note: 'Resilience is built through distributed node design and tenant-boundary execution.'
  },
  {
    area: 'SLO/SLA model',
    note: 'Targets are defined per package and environment tier in RFQ and onboarding artifacts.'
  },
  {
    area: 'Backup and recovery',
    note: 'Backup and recovery controls are tenant-scoped, encryption-protected, and contract-defined.'
  },
  {
    area: 'Incident handling',
    note: 'Severity-based incident flow with traceable lifecycle and corrective-action tracking.'
  }
];

const costDrivers = [
  'Edge-local execution reduces repeated high-volume clinical data transfer overhead.',
  'Tenant-local clinical payload handling limits central storage growth pressure.',
  'Hybrid cloud components are scoped to coordination, governance, and observability.',
  'Capacity planning is tied to RFQ-defined workload envelopes and deployment tier.'
];

const CloudArchitecture = () => (
  <>
    <Head>
      <title>Cloud Architecture | SmartClover</title>
      <meta
        name="description"
        content="SmartClover cloud architecture baseline describing permissioned cloud-on-edge services, tenancy boundaries, encryption, reliability posture, and traceable deployment records."
      />
    </Head>

    <header className="page-header">
      <span className="tagline">Cloud Architecture</span>
      <h1>Permissioned cloud-on-edge services for healthcare AI workloads</h1>
      <p>
        SmartClover supports tenant-designated edge and on-prem execution with hybrid cloud coordination. The model keeps
        healthcare data boundaries explicit while cloud services support orchestration, observability, and release
        control.
      </p>
    </header>

    <section className="surface-card" aria-labelledby="cloud-status-heading">
      <div className="status-badge-list" id="cloud-status-heading">
        <span className="status-badge">Document status: Draft for architecture/security review</span>
        <span className="status-badge">Last updated: 2026-05-11</span>
        <span className="status-badge">Owner: Architecture + Security</span>
      </div>
      <blockquote>
        SmartClover uses a permissioned cloud-on-edge architecture: clinical workloads run in authorized edge/on-prem
        boundaries, sensitive flows are end-to-end encrypted, clinical payload data is not centralized by default, and
        immutable trace events are anchored for auditable integrity.
      </blockquote>
    </section>

    <section className="surface-card visual-card" aria-labelledby="cloud-boundaries-heading">
      <div className="section-heading">
        <h2 id="cloud-boundaries-heading">Deployment boundaries</h2>
      </div>
      <figure className="content-visual">
        <Image
          src="/images/architecture/cloud-on-edge-boundaries-napkin_v1.0.png"
          alt="Provider-neutral cloud-on-edge boundary diagram showing healthcare team and data, permissioned edge workers, cloud coordination, and immutable anchoring."
          width={3216}
          height={2712}
          sizes="(max-width: 960px) 100vw, 900px"
        />
        <figcaption>
          A provider-neutral view of how healthcare users, permissioned edge workers, cloud coordination, and traceable
          deployment records fit together.
        </figcaption>
      </figure>
    </section>

    <section className="surface-card" aria-labelledby="service-map-heading">
      <div className="section-heading">
        <h2 id="service-map-heading">Service map (public baseline)</h2>
      </div>
      <div className="table-scroll">
        <table className="info-table">
          <thead>
            <tr>
              <th>Domain</th>
              <th>Current architecture baseline</th>
              <th>Deployment rationale</th>
            </tr>
          </thead>
          <tbody>
            {serviceMap.map((item) => (
              <tr key={item.domain}>
                <td>{item.domain}</td>
                <td>{item.baseline}</td>
                <td>{item.deploymentRationale}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>

    <section className="surface-card" aria-labelledby="tenancy-heading">
      <div className="section-heading">
        <h2 id="tenancy-heading">Tenancy and data-boundary model</h2>
      </div>
      <ul>
        <li>Tenant isolation uses permissioned boundaries and policy-constrained access paths.</li>
        <li>Data residency follows tenant-selected deployment boundaries (on-edge/on-prem or approved hybrid segment).</li>
        <li>No default cross-tenant clinical data sharing is enabled.</li>
        <li>Clinical payload storage remains local to authorized tenant boundaries.</li>
      </ul>
    </section>

    <section className="surface-card" aria-labelledby="reliability-heading">
      <div className="section-heading">
        <h2 id="reliability-heading">Reliability and recovery posture</h2>
      </div>
      <div className="table-scroll">
        <table className="info-table">
          <thead>
            <tr>
              <th>Control area</th>
              <th>Public statement</th>
            </tr>
          </thead>
          <tbody>
            {reliabilityRows.map((row) => (
              <tr key={row.area}>
                <td>{row.area}</td>
                <td>{row.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>

    <section className="surface-card" aria-labelledby="cost-heading">
      <div className="section-heading">
        <h2 id="cost-heading">Cost-performance rationale</h2>
      </div>
      <ul>
        {costDrivers.map((driver) => (
          <li key={driver}>{driver}</li>
        ))}
      </ul>
      <div className="cta-links">
        <Link href="/decentralized" className="button secondary">
          Cloud-On-Edge Context
        </Link>
        <Link href="/trust/security" className="button secondary">
          Security Baseline
        </Link>
        <Link href="/contact" className="button primary">
          Discuss Deployment Fit
        </Link>
      </div>
    </section>
  </>
);

export default CloudArchitecture;
