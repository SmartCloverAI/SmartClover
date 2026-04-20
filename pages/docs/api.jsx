import PageSeo from '../../components/PageSeo';

const apiSections = [
  {
    id: 'mcp-server',
    route: '/mcp',
    method: 'POST',
    description:
      'Read-only Streamable HTTP MCP endpoint for SmartClover public company facts, product summaries, trust artifacts, and qualification routes. Use JSON-RPC over HTTP POST. GET requests are intentionally not upgraded to SSE.',
    example: `curl https://smartclover.ro/mcp \\
  -X POST \\
  -H 'Content-Type: application/json' \\
  -d '{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "initialize",
    "params": {
      "protocolVersion": "2025-11-25",
      "capabilities": {},
      "clientInfo": {
        "name": "example-client",
        "version": "1.0.0"
      }
    }
  }'`
  },
  {
    id: 'status-api',
    route: '/api/status',
    method: 'GET',
    description: 'Returns a lightweight health payload with the public website service status, current site version, and exposed public endpoints.',
    example: `curl https://smartclover.ro/api/status`
  },
  {
    id: 'host-id-api',
    route: '/api/host-id',
    method: 'GET',
    description: 'Returns the runtime host identifier shown in the SmartClover footer banner. This is intended for operational verification, not authentication.',
    example: `curl https://smartclover.ro/api/host-id`
  },
  {
    id: 'contact-api',
    route: '/api/contact',
    method: 'POST',
    description:
      'Accepts the same structured inquiry payload used by the public contact form for demo requests, pilot discussions, research partnerships, investor conversations, and general outreach.',
    example: `curl https://smartclover.ro/api/contact \\
  -X POST \\
  -H 'Content-Type: application/json' \\
  -d '{
    "inquiryType": "Book demo / Request pilot",
    "fullName": "Example User",
    "email": "user@example.com",
    "organization": "Example Clinic",
    "role": "Clinical lead",
    "organizationType": "Hospital or clinic",
    "useCase": "Evaluate CerviGuard for pilot deployment.",
    "deploymentPreference": "Managed SaaS",
    "timeline": "3-6 months",
    "complianceRequirements": "Need GDPR-aligned handling and procurement review.",
    "consentAccepted": true,
    "website": ""
  }'`
  }
];

const agentArtifactSections = [
  {
    id: 'server-card',
    route: '/.well-known/mcp/server-card.json',
    method: 'GET',
    description:
      'Machine-readable discovery metadata for the SmartClover read-only MCP server. Published only because the live `/mcp` endpoint exists.',
    example: `curl https://smartclover.ro/.well-known/mcp/server-card.json`
  },
  {
    id: 'llms-txt',
    route: '/llms.txt',
    method: 'GET',
    description:
      'Short plain-text map of SmartClover public routes, artifacts, and agent-facing entry points for LLM and crawler consumption.',
    example: `curl https://smartclover.ro/llms.txt`
  },
  {
    id: 'llms-full-txt',
    route: '/llms-full.txt',
    method: 'GET',
    description:
      'Extended plain-text map with compact summaries of SmartClover public company, product, trust, and qualification artifacts.',
    example: `curl https://smartclover.ro/llms-full.txt`
  }
];

const ApiDocsPage = () => (
  <>
    <PageSeo
      title="SmartClover API Docs | Public Website and MCP Surface"
      description="Reference for SmartClover's public website APIs, llms.txt artifacts, and read-only MCP endpoint."
      path="/docs/api"
      image="/images/cerviguard/cerviguard-dashboard.png"
    />

    <section className="hero-shell" aria-labelledby="api-docs-title">
      <div className="hero-grid">
        <div className="hero-panel">
          <div className="hero-kicker-row">
            <span className="tagline">Public API reference</span>
            <span className="proof-pill">
              <strong>OpenAPI</strong> published
            </span>
          </div>
          <div className="hero-copy">
            <h1 id="api-docs-title" className="hero-title">
              SmartClover exposes a small public website API surface plus a read-only MCP endpoint for public facts and trust artifacts.
            </h1>
            <p>
              This site does not currently publish protected APIs or OAuth discovery metadata. The public machine-readable
              surface is limited to operational inspection endpoints, structured contact intake, plain-text agent maps,
              and a read-only MCP server over public SmartClover materials.
            </p>
          </div>
          <div className="hero-action-row">
            <a href="/openapi.json" className="button primary">
              Open OpenAPI description
            </a>
            <a href="/.well-known/api-catalog" className="button secondary">
              Open API catalog
            </a>
            <a href="/.well-known/mcp/server-card.json" className="button tertiary">
              Open MCP server card
            </a>
          </div>
        </div>

        <div className="detail-panel">
          <div className="story-card">
            <p className="kicker">Negotiation support</p>
            <h2>Agent-facing affordances</h2>
            <p>HTML routes can return markdown when agents request <code>Accept: text/markdown</code>.</p>
            <p>
              The site also exposes <code>llms.txt</code>, <code>llms-full.txt</code>, a read-only MCP endpoint at
              <code>/mcp</code>, and a draft-style server card for discovery.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="surface-card" aria-labelledby="api-docs-endpoints">
      <div className="section-heading">
        <h2 id="api-docs-endpoints">Endpoints</h2>
        <p>Use the OpenAPI description for machine consumption and the examples below for direct manual inspection.</p>
      </div>
      <div className="story-grid">
        {apiSections.map((section) => (
          <article key={section.route} id={section.id} className="story-card">
            <p className="kicker">
              {section.method} <code>{section.route}</code>
            </p>
            <p>{section.description}</p>
            <pre>
              <code>{section.example}</code>
            </pre>
          </article>
        ))}
      </div>
    </section>

    <section className="surface-card" aria-labelledby="api-docs-agent-artifacts">
      <div className="section-heading">
        <h2 id="api-docs-agent-artifacts">Agent artifacts</h2>
        <p>These routes complement the OpenAPI surface for public discovery and read-only agent consumption.</p>
      </div>
      <div className="story-grid">
        {agentArtifactSections.map((section) => (
          <article key={section.route} id={section.id} className="story-card">
            <p className="kicker">
              {section.method} <code>{section.route}</code>
            </p>
            <p>{section.description}</p>
            <pre>
              <code>{section.example}</code>
            </pre>
          </article>
        ))}
      </div>
    </section>
  </>
);

export default ApiDocsPage;
