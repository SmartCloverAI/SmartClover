const SITE_URL = 'https://smartclover.ro';
const MCP_ENDPOINT_URL = `${SITE_URL}/mcp`;
const MCP_SERVER_CARD_URL = `${SITE_URL}/.well-known/mcp/server-card.json`;

const resourceDefinitions = [
  {
    uri: 'smartclover://facts/company-profile',
    name: 'company_profile',
    title: 'SmartClover Company Overview',
    description: 'Founder-led healthcare AI company overview covering CerviGuard, DataGems, research context, and public routes.',
    mimeType: 'text/markdown',
    canonicalUrl: `${SITE_URL}/about`,
    llmsSummary:
      'Founder-led healthcare AI company overview covering CerviGuard, DataGems, research context, and routes for clinics, partners, and investors.',
    text: `# SmartClover Company Overview

Canonical URL: ${SITE_URL}/about

SmartClover is a founder-led healthcare AI company based in Cluj-Napoca, Romania.

## What SmartClover does

- Builds healthcare AI products instead of offering vague generic AI capacity.
- Keeps clinicians and operators directly involved in high-impact decisions.
- Publishes trust, pricing, buying, and product routes for clinics, research teams, procurement reviewers, and investors.

## Product and research context

- CerviGuard is the flagship live product.
- DataGems is the live research pilot.
- PubMed references provide context on cervical screening participation and follow-up research in Romania.

## Canonical public routes

- Company overview: ${SITE_URL}/about
- Homepage: ${SITE_URL}/
- Product portfolio: ${SITE_URL}/products
- Trust center: ${SITE_URL}/trust
`
  },
  {
    uri: 'smartclover://deployment/edge-model',
    name: 'edge_deployment_model',
    title: 'SmartClover Deployment Model',
    description: 'Public description of the your AI, your Data hybrid cloud-edge deployment model.',
    mimeType: 'text/markdown',
    canonicalUrl: `${SITE_URL}/decentralized`,
    llmsSummary:
      'Hybrid cloud-edge deployment model where workloads run on designated on-prem or on-edge infrastructure with ledger-backed delivery evidence.',
    text: `# SmartClover Deployment Model

Canonical URL: ${SITE_URL}/decentralized

SmartClover describes its deployment model as "your AI, your Data" and "your App, your Data".

## Public claims

- Workloads can run on infrastructure designated by the customer or operating partner.
- Clinical and research data is intended to stay within approved residency and governance boundaries.
- Delivery records are intended to support review of deployment activity and release history.

## Supporting routes

- Deployment overview: ${SITE_URL}/decentralized
- Cloud architecture: ${SITE_URL}/cloud-architecture
- Security trust baseline: ${SITE_URL}/trust/security
`
  },
  {
    uri: 'smartclover://products/cerviguard',
    name: 'cerviguard_product',
    title: 'CerviGuard Product Summary',
    description: 'Flagship live product summary for SmartClover cervical screening workflow platform.',
    mimeType: 'text/markdown',
    canonicalUrl: `${SITE_URL}/cerviguard`,
    llmsSummary:
      'Flagship live product page covering structured intake, AI-assisted case review, clinician review, follow-up operations, and public product evidence.',
    text: `# CerviGuard Product Summary

Canonical URL: ${SITE_URL}/cerviguard

CerviGuard is SmartClover's flagship live product for structured cervical screening operations.

## Publicly described workflow

1. Secure sign-in for authorized users.
2. De-identified image and note intake.
3. AI-assisted analysis with metadata and confidence values for clinician review.
4. Clinician review before next-step decisions.
5. Follow-up operations and case history management.

## Product links

- Product page: ${SITE_URL}/cerviguard
- Live product surface: https://cerviguard.link
- Public repository: https://github.com/SmartCloverAI/CerviGuard
- Public model/profile references: https://huggingface.co/smartclover
`
  },
  {
    uri: 'smartclover://products/datagems',
    name: 'datagems_product',
    title: 'DataGems Research Pilot Summary',
    description: 'Live research pilot summary for the DataGems synthetic-data workspace.',
    mimeType: 'text/markdown',
    canonicalUrl: `${SITE_URL}/products`,
    llmsSummary:
      'Live research pilot for distributed-decentralized synthetic-data generation using SLM-first execution with optional external APIs.',
    text: `# DataGems Research Pilot Summary

Canonical URL: ${SITE_URL}/products

DataGems is SmartClover's live research pilot for distributed-decentralized synthetic-data generation.

## Publicly described workflow

- Authenticated workspace access.
- Generation job drafting with schema and instruction fields.
- Distributed execution across partner-operated nodes.
- Peer-level execution status, result CID tracking, and timestamps.

## Product links

- Portfolio page: ${SITE_URL}/products
- Live workspace: https://datagems.app
`
  },
  {
    uri: 'smartclover://trust/security',
    name: 'security_trust',
    title: 'Security Trust Summary',
    description: 'Public security baseline for SmartClover.',
    mimeType: 'text/markdown',
    canonicalUrl: `${SITE_URL}/trust/security`,
    llmsSummary:
      'Security baseline covering deployment choices, access boundaries, audit orientation, and trust routes.',
    text: `# Security Trust Summary

Canonical URL: ${SITE_URL}/trust/security

Use the SmartClover security route for public baseline claims about security posture and delivery controls.

## Related trust routes

- Security: ${SITE_URL}/trust/security
- Incident response: ${SITE_URL}/trust/incident-response
- Data processing: ${SITE_URL}/trust/data-processing
- Privacy policy: ${SITE_URL}/trust/privacy-policy
`
  },
  {
    uri: 'smartclover://trust/privacy-policy',
    name: 'privacy_policy',
    title: 'Privacy Policy Summary',
    description: 'Public privacy route for SmartClover website and contact-intake processing.',
    mimeType: 'text/markdown',
    canonicalUrl: `${SITE_URL}/trust/privacy-policy`,
    llmsSummary:
      'Privacy policy route for website usage and public contact-intake data handling.',
    text: `# Privacy Policy Summary

Canonical URL: ${SITE_URL}/trust/privacy-policy

Use the privacy policy route for public statements about website privacy and public inquiry handling.

## Related routes

- Privacy policy: ${SITE_URL}/trust/privacy-policy
- Trust center: ${SITE_URL}/trust
- Contact and qualification: ${SITE_URL}/contact
`
  },
  {
    uri: 'smartclover://trust/incident-response',
    name: 'incident_response',
    title: 'Incident Response Summary',
    description: 'Public incident response baseline for SmartClover trust review.',
    mimeType: 'text/markdown',
    canonicalUrl: `${SITE_URL}/trust/incident-response`,
    llmsSummary:
      'Incident response route for public handling expectations, communication baselines, and trust review.',
    text: `# Incident Response Summary

Canonical URL: ${SITE_URL}/trust/incident-response

Use the incident response route for public baseline information about how SmartClover frames incident handling and notification posture.
`
  },
  {
    uri: 'smartclover://trust/data-processing',
    name: 'data_processing',
    title: 'Data Processing Summary',
    description: 'Public data-processing route for SmartClover trust pages.',
    mimeType: 'text/markdown',
    canonicalUrl: `${SITE_URL}/trust/data-processing`,
    llmsSummary:
      'Data-processing route for questions about processing scope, governance, and trust review.',
    text: `# Data Processing Summary

Canonical URL: ${SITE_URL}/trust/data-processing

Use the data-processing route for public questions around processing scope and customer-facing governance framing.
`
  },
  {
    uri: 'smartclover://contact/qualification',
    name: 'commercial_qualification',
    title: 'Qualification and Buying Summary',
    description: 'Public qualification, pricing, and buying flow for demos, pilots, and commercial review.',
    mimeType: 'text/markdown',
    canonicalUrl: `${SITE_URL}/contact`,
    llmsSummary:
      'Qualification and buying surface covering structured inquiry, RFQ-led pricing, and onboarding flow.',
    text: `# Qualification and Buying Summary

Canonical URL: ${SITE_URL}/contact

SmartClover uses a structured public qualification flow for demos, pilots, partnerships, investor inquiries, and general contact.

## Commercial support routes

- Contact and qualification: ${SITE_URL}/contact
- Pricing: ${SITE_URL}/pricing
- How to buy: ${SITE_URL}/how-to-buy
- Proof timeline: ${SITE_URL}/proof
`
  }
];

const toMetadata = ({ uri, name, title, description, mimeType }) => ({
  uri,
  name,
  title,
  description,
  mimeType
});

export const PUBLIC_MCP_RESOURCE_INDEX = resourceDefinitions.map(toMetadata);

export const getPublicMcpResources = () => PUBLIC_MCP_RESOURCE_INDEX;

export const readPublicMcpResource = (uri) => {
  const resource = resourceDefinitions.find((entry) => entry.uri === uri);

  if (!resource) {
    return null;
  }

  return {
    uri: resource.uri,
    mimeType: resource.mimeType,
    text: resource.text
  };
};

export const buildLlmsTxt = () => `# SmartClover

SmartClover is a founder-led healthcare AI company building CerviGuard as its flagship live product and DataGems as a live research pilot.

## Public routes

- Homepage: ${SITE_URL}/
- Company overview: ${SITE_URL}/about
- CerviGuard: ${SITE_URL}/cerviguard
- Products: ${SITE_URL}/products
- Trust center: ${SITE_URL}/trust
- Contact: ${SITE_URL}/contact

## Product links

- CerviGuard live product surface: https://cerviguard.link
- CerviGuard repository: https://github.com/SmartCloverAI/CerviGuard
- SmartClover model/profile hub: https://huggingface.co/smartclover

## Agent-facing access

- Markdown negotiation: send \`Accept: text/markdown\` to HTML routes on ${SITE_URL}
- Public API docs: ${SITE_URL}/docs/api
- OpenAPI description: ${SITE_URL}/openapi.json
- API catalog: ${SITE_URL}/.well-known/api-catalog
- MCP server card: ${MCP_SERVER_CARD_URL}
- Read-only MCP endpoint: ${MCP_ENDPOINT_URL}
`;

export const buildLlmsFullTxt = () => {
  const resourceSections = resourceDefinitions
    .map(
      (resource) => `## ${resource.title}

URL: ${resource.canonicalUrl}

${resource.llmsSummary}`
    )
    .join('\n\n');

  return `${buildLlmsTxt()}

## Resource summaries

${resourceSections}
`;
};

export const buildMcpServerCard = ({ siteVersion = '0.0.0' } = {}) => ({
  version: '1.0',
  protocolVersion: '2025-11-25',
  serverInfo: {
    name: 'smartclover-public-site',
    title: 'SmartClover Public Site',
    version: siteVersion
  },
  description:
    'Read-only MCP server for SmartClover public company facts, product summaries, trust artifacts, and qualification routes.',
  documentationUrl: `${SITE_URL}/docs/api#mcp-server`,
  transport: {
    type: 'streamable-http',
    endpoint: MCP_ENDPOINT_URL
  },
  capabilities: {
    prompts: {
      listChanged: false
    },
    resources: {
      listChanged: false,
      subscribe: false
    },
    tools: {
      listChanged: false
    }
  },
  prompts: [],
  resources: PUBLIC_MCP_RESOURCE_INDEX,
  tools: []
});
