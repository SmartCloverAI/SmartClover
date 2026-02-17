import Head from 'next/head';
import Link from 'next/link';

const declarationFields = [
  { field: 'Manufacturer', value: 'SMARTCLOVER SRL' },
  { field: 'Product', value: 'CerviGuard' },
  { field: 'Jurisdiction scope', value: 'European Union and Romania' },
  { field: 'Classification statement', value: 'Positioned under MDR Rule 11 as Class I (draft rationale)' },
  { field: 'Declaration identifier', value: 'Pending publication after legal/regulatory sign-off' },
  { field: 'Public draft artifact', value: 'CerviGuard MDR Class I Self-Assessment Draft (PDF)' }
];

const monitoringSteps = [
  'Capture and triage product complaints through controlled intake channels.',
  'Assess severity and potential patient-safety impact with documented review ownership.',
  'Trigger corrective actions, release controls, and communication workflow when needed.',
  'Maintain traceable records for post-market follow-up and regulatory review readiness.'
];

const Regulatory = () => (
  <>
    <Head>
      <title>Regulatory | SmartClover</title>
      <meta
        name="description"
        content="Regulatory overview for CerviGuard intended use, MDR Class I positioning, jurisdiction scope, and post-market process summary with pending-publication safeguards."
      />
    </Head>

    <header className="page-header">
      <span className="tagline">Regulatory</span>
      <h1>CerviGuard regulatory posture and publication status</h1>
      <p>
        SmartClover publishes regulatory information with claim-to-artifact discipline. Statements on this page are
        constrained to currently publishable information and explicitly mark pending-publication fields.
      </p>
    </header>

    <section className="surface-card" aria-labelledby="reg-status-heading">
      <div className="status-badge-list" id="reg-status-heading">
        <span className="status-badge">Document status: Draft for legal/regulatory review</span>
        <span className="status-badge">Last updated: 2026-02-17</span>
        <span className="status-badge">Owner: Regulatory + Legal</span>
      </div>
      <p>
        CerviGuard is positioned under MDR Class I with detailed declaration identifiers pending publication and final
        legal/regulatory sign-off.
      </p>
    </section>

    <section className="surface-card" aria-labelledby="intended-use-heading">
      <div className="section-heading">
        <h2 id="intended-use-heading">Intended use</h2>
      </div>
      <blockquote>
        CerviGuard is intended as a cervical screening companion software application that supports structured case
        intake, AI-assisted triage support, and follow-up coordination under clinician oversight. It is not intended for
        autonomous diagnosis or autonomous therapeutic decision-making.
      </blockquote>
    </section>

    <section className="surface-card" aria-labelledby="declaration-heading">
      <div className="section-heading">
        <h2 id="declaration-heading">Regulatory declaration summary</h2>
      </div>
      <div className="table-scroll">
        <table className="info-table">
          <thead>
            <tr>
              <th>Field</th>
              <th>Current public value</th>
            </tr>
          </thead>
          <tbody>
            {declarationFields.map((item) => (
              <tr key={item.field}>
                <td>{item.field}</td>
                <td>{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="cta-links">
        <a
          href="/docs/CerviGuard_MDR_Class_I_Self_Assessment_Draft.pdf"
          className="button secondary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open MDR Draft PDF
        </a>
        <Link href="/cerviguard" className="button tertiary">
          Review Product Context
        </Link>
      </div>
    </section>

    <section className="surface-card" aria-labelledby="post-market-heading">
      <div className="section-heading">
        <h2 id="post-market-heading">Complaint and post-market process</h2>
      </div>
      <ul>
        {monitoringSteps.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>

    <section className="surface-card" aria-labelledby="limitations-heading">
      <div className="section-heading">
        <h2 id="limitations-heading">Publication limitations</h2>
      </div>
      <p>
        Final declaration identifiers, document numbering, and release metadata are intentionally withheld until legal and
        regulatory publication approval is completed.
      </p>
      <div className="cta-links">
        <Link href="/trust" className="button secondary">
          Trust and Policy Baseline
        </Link>
        <Link href="/contact" className="button primary">
          Contact Regulatory Team
        </Link>
      </div>
    </section>
  </>
);

export default Regulatory;
