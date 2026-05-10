# SmartClover Public Content Inventory

Prepared: 2026-05-10
Purpose: execution artifact for `CONTENT_FIX_PLAN.md`. Use this inventory before any public copy, metadata, PDF, or machine-readable content change.

## Human-Facing Routes

| Surface | File | Current role | First review priority |
| --- | --- | --- | --- |
| Home | `pages/index.jsx` | Primary company entry point, CerviGuard proof, product/research/trust routing. | Critical |
| About | `pages/about.jsx` | Founder-led company context, research references, values, operating principles. | Critical |
| CerviGuard | `pages/cerviguard.jsx` | Flagship product page and workflow proof. | High |
| Products | `pages/products.jsx` | CerviGuard, DataGems, and broader product portfolio. | High |
| Contact | `pages/contact.jsx` | Demo, pilot, research, investor, and general inquiry hub. | High |
| Trust center | `pages/trust/index.jsx` | Public trust route index. | High |
| Security | `pages/trust/security.jsx` | Security baseline. | High |
| Data processing | `pages/trust/data-processing.jsx` | Public data-processing baseline. | High |
| Privacy policy | `pages/trust/privacy-policy.jsx` | Public privacy policy. | High |
| Incident response | `pages/trust/incident-response.jsx` | Incident response baseline. | Medium |
| Terms | `pages/trust/terms-of-service.jsx` | Terms baseline. | Medium |
| Proof | `pages/proof.jsx` | Proof artifacts and early-stage KPI framing. | High |
| Regulatory | `pages/regulatory.jsx` | Draft MDR/self-assessment context. | High |
| Pricing | `pages/pricing.jsx` | RFQ-led pricing explanation. | Medium |
| How to buy | `pages/how-to-buy.jsx` | Procurement and activation path. | Medium |
| Blog index | `pages/blog/index.jsx` | Editorial index. | Medium |
| Blog posts | `posts/*.md` | Editorial/research/support content. | Medium |
| Gender Equality Plan | `pages/gender-equality-plan.jsx` | Public governance artifact. | Low |
| Legacy services | `pages/services.jsx` | Legacy route to merge into product narrative. | Medium |
| Cloud architecture | `pages/cloud-architecture.jsx` | Legacy architecture route. | Medium |
| Decentralized | `pages/decentralized.jsx` | Deployment model route. | Medium |
| Cybersecurity | `pages/cybersecurity.jsx` | Legacy cybersecurity route. | Medium |
| Values | `pages/values.jsx` | Legacy values route. | Low |
| API docs | `pages/docs/api.jsx` | Public API and MCP documentation. | Medium |

## Shared Components

| Surface | File | Content risk |
| --- | --- | --- |
| Layout/navigation/footer | `components/Layout.jsx` | Footer positioning, repeated claims, version display. |
| SEO metadata | `components/PageSeo.jsx` plus each page's `PageSeo` props | Stale titles/descriptions and AI-like summaries. |
| Diligence links | `components/DiligenceLinksSection.jsx` | Overuse of diligence/evaluator wording. |
| Consent banner | `components/ConsentManager.jsx` | Privacy and consent wording. |
| MCP provider | `components/WebMcpProvider.jsx` | Machine-readable discovery copy. |

## Machine-Readable And API Surfaces

| Surface | File | Content risk |
| --- | --- | --- |
| Agent/MCP/LLMS artifacts | `lib/agent-artifacts.mjs` | Stale positioning, banned phrases, machine-readable credibility theater. |
| MCP server | `lib/mcp-server.mjs` | Resource and tool metadata drift. |
| API status | `pages/api/status.js` | Deployed version validation. |
| LLMS endpoint | `pages/api/llms.js` | Public machine-readable summaries. |
| MCP endpoint | `pages/api/mcp.js` | Resource payload alignment. |
| MCP server card | `pages/api/mcp-server-card.js` | Version and description alignment. |
| Markdown endpoint | `pages/api/markdown.js` | Route markdown output alignment. |
| OpenAPI | `public/openapi.json` | API descriptions and version metadata. |
| API catalog | `public/.well-known/api-catalog` | Public API catalog language. |
| Agent skills index | `public/.well-known/agent-skills/index.json` | Public agent-skill descriptions. |
| Robots | `public/robots.txt` | Discovery policy. |
| Sitemap | `public/sitemap.xml` | Route coverage and stale URLs. |

## Public Files And PDFs

| Surface | File | Content risk |
| --- | --- | --- |
| One-page pitch deck | `public/docs/SmartClover_1pagepitchdeck.pdf` | Stale positioning and unsupported claims. |
| MDR draft PDF | `public/docs/CerviGuard_MDR_Class_I_Self_Assessment_Draft.pdf` | Must remain clearly draft-qualified. |
| Gender Equality Plan PDF | `public/docs/SmartClover_Gender_Equality_Plan_2026_2028.pdf` | Must match the web route. |
| Citations BibTeX | `public/docs/smartclover-cerviguard-citations.bib` | Neutral citation context only. |
| Public images | `public/images/**` | Alt text and surrounding copy must not treat illustrative images as proof. |

## Batch Rule

Every rewrite batch must record:

- which inventory rows changed;
- whether human-facing, metadata, API, LLMS, MCP, PDF, or image-alt text changed;
- which tests protect the change;
- which online URLs were checked after deployment.
