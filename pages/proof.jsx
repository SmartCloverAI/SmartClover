import Head from 'next/head';
import Link from 'next/link';

const timeline = [
  {
    period: '2019-2020',
    event: 'First CerviGuard pilot phase',
    evidence:
      'Initial downloadable Win32 TensorFlow-based pilot workflow documented in MDR draft references and planning artifacts.'
  },
  {
    period: '2022',
    event: 'Research and project track consolidation',
    evidence: 'Multiple projects and research tracks were finalized before broader platform expansion.'
  },
  {
    period: '2024',
    event: 'SMARTCLOVER SRL launch phase and online-platform preparation',
    evidence: 'Company launch milestones and online product transition documented in internal/public planning artifacts.'
  },
  {
    period: '2025',
    event: 'TealGuard partnership milestone',
    evidence:
      'In 2025, SmartClover signed a partnership for the TealGuard project, focused on next-generation prophylaxis management for gynecological oncological pathologies.'
  }
];

const kpiDefinitions = [
  {
    name: 'Case review turnaround improvement',
    numerator: 'Cases completed inside target review window post-deployment',
    denominator: 'All eligible cases in selected cohort',
    window: 'Pending publication',
    method: 'Pre/post cohort comparison with fixed inclusion criteria',
    caveat: 'Workflow mix can vary by site'
  },
  {
    name: 'Follow-up adherence uplift',
    numerator: 'Cases with completed follow-up within defined interval',
    denominator: 'Cases assigned follow-up action',
    window: 'Pending publication',
    method: 'Operational follow-up completion tracking',
    caveat: 'External care-path variability applies'
  },
  {
    name: 'AI-assisted triage agreement rate',
    numerator: 'Cases where AI support category aligns with clinician final category',
    denominator: 'Cases containing both AI output and clinician adjudication',
    window: 'Pending publication',
    method: 'Blinded adjudication and reconciliation rules',
    caveat: 'Not a standalone diagnostic-accuracy claim'
  }
];

const Proof = () => (
  <>
    <Head>
      <title>Proof | SmartClover</title>
      <meta
        name="description"
        content="SmartClover proof page with timeline milestones, pilot methodology notes, and KPI disclosure template with pending-publication safeguards."
      />
    </Head>

    <header className="page-header">
      <span className="tagline">Proof</span>
      <h1>Evidence baseline for product and commercialization diligence</h1>
      <p>
        This page provides Phase 1 proof artifacts: timeline milestones, pilot context, and KPI-definition structure.
        Numeric KPI publication remains gated until denominator/date-window approvals are complete.
      </p>
    </header>

    <section className="surface-card" aria-labelledby="proof-status-heading">
      <div className="status-badge-list" id="proof-status-heading">
        <span className="status-badge">Document status: Phase 1 public baseline</span>
        <span className="status-badge">Last updated: 2026-02-17</span>
        <span className="status-badge">Owner: Product + Commercial + Data</span>
      </div>
      <p>
        Reported outcomes are cohort-specific, method-bounded, and include explicit limitations. KPI percentages will not
        be published without denominator and date-window context.
      </p>
    </section>

    <section className="surface-card" aria-labelledby="timeline-heading">
      <div className="section-heading">
        <h2 id="timeline-heading">Public milestone timeline</h2>
      </div>
      <div className="feature-grid two-up">
        {timeline.map((item) => (
          <article key={item.period} className="feature">
            <p className="kicker">{item.period}</p>
            <h3 className="feature-title">{item.event}</h3>
            <p className="feature-description">{item.evidence}</p>
          </article>
        ))}
      </div>
    </section>

    <section className="surface-card" aria-labelledby="methodology-heading">
      <div className="section-heading">
        <h2 id="methodology-heading">Pilot context and methodology notes</h2>
      </div>
      <ul>
        <li>Pilot evidence is currently published as narrative timeline plus methodological framing.</li>
        <li>Outcome publication requires fixed cohort windows and approved numerator/denominator definitions.</li>
        <li>Clinical interpretation remains clinician-led and human-in-the-loop.</li>
      </ul>
    </section>

    <section className="surface-card" aria-labelledby="kpi-heading">
      <div className="section-heading">
        <h2 id="kpi-heading">KPI disclosure template (values pending publication)</h2>
      </div>
      <div className="table-scroll">
        <table className="info-table">
          <thead>
            <tr>
              <th>KPI name</th>
              <th>Numerator</th>
              <th>Denominator</th>
              <th>Cohort window</th>
              <th>Method</th>
              <th>Caveat</th>
            </tr>
          </thead>
          <tbody>
            {kpiDefinitions.map((item) => (
              <tr key={item.name}>
                <td>{item.name}</td>
                <td>{item.numerator}</td>
                <td>{item.denominator}</td>
                <td>{item.window}</td>
                <td>{item.method}</td>
                <td>{item.caveat}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="cta-links">
        <Link href="/pricing" className="button secondary">
          Commercial Model
        </Link>
        <Link href="/regulatory" className="button secondary">
          Regulatory Layer
        </Link>
        <Link href="/contact" className="button primary">
          Request Diligence Review
        </Link>
      </div>
    </section>
  </>
);

export default Proof;
