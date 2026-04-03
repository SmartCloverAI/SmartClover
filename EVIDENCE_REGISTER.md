# SmartClover Evidence Register

Prepared: 2026-04-03
Purpose: initial execution artifact for the refactor batches defined in `PLAN.md`.

Notes:
- `verified` means the claim can appear in primary copy.
- `qualified` means the claim can appear only with explicit scope, caveat, or dated context.
- `remove` means it should not appear in launch copy.
- Authenticated screenshot captures referenced below were created on 2026-04-03 and saved under `WORK/evidence-captures/2026-04-03/`. Those files are intentionally git-ignored and require manual visual/sensitivity review before any public publication refresh.

## Screenshot Inventory And Gaps

| Artifact | Source type | Source link / artifact | Status | Notes |
| --- | --- | --- | --- | --- |
| CerviGuard login screen | authenticated screenshot | `WORK/evidence-captures/2026-04-03/cerviguard-login.png` | verified | Login flow remains live and accessible. |
| CerviGuard dashboard | authenticated screenshot | `WORK/evidence-captures/2026-04-03/cerviguard-dashboard-authenticated.png` | verified | Confirms current dashboard route and authenticated product reality. |
| CerviGuard case list | authenticated screenshot | `WORK/evidence-captures/2026-04-03/cerviguard-cases-authenticated.png` | qualified | Contains real in-app records; curate before public reuse. |
| CerviGuard add case form | authenticated screenshot | `WORK/evidence-captures/2026-04-03/cerviguard-add-case-authenticated.png` | verified | Supports workflow description for intake. |
| CerviGuard profile/settings | authenticated screenshot | `WORK/evidence-captures/2026-04-03/cerviguard-profile-authenticated.png` | verified | Supports governance and account-control copy. |
| DataGems login screen | authenticated screenshot | `WORK/evidence-captures/2026-04-03/datagems-login.png` | verified | Confirms live pilot access surface. |
| DataGems dashboard | authenticated screenshot | `WORK/evidence-captures/2026-04-03/datagems-dashboard-authenticated.png` | qualified | Public refresh should review partner/job details before publication. |
| Founder photo | required launch visual | not yet in repo | remove | Missing asset; do not imply founder portrait proof until provided. |
| Workflow diagram | required launch visual | not yet in repo | qualified | Product workflow can be described in copy, but a custom diagram is still missing. |
| Architecture diagram | required launch visual | not yet in repo | qualified | Existing governance/network image is illustrative, not a true deployment diagram. |
| Timeline/history visual | required launch visual | not yet in repo | qualified | History can be represented with text/timeline cards until a dedicated visual is created. |

## Page Claim Register

| Page | Claim | Source type | Source link / artifact | Status | Notes |
| --- | --- | --- | --- | --- | --- |
| `/` | SmartClover is a healthcare AI company with a live flagship product. | first-party product evidence | `https://cerviguard.link`; `WORK/evidence-captures/2026-04-03/cerviguard-dashboard-authenticated.png` | verified | Home copy can state product reality directly. |
| `/` | SmartClover has identifiable research continuity tied to cervical screening work. | primary literature | `https://pubmed.ncbi.nlm.nih.gov/35197342/`; `https://pubmed.ncbi.nlm.nih.gov/28460211/` | verified | Use dated, specific references rather than broad superlatives. |
| `/` | Founder-led company history and leadership are visible. | first-party company statement plus publication continuity | `pages/about.jsx`; `public/docs/smartclover-cerviguard-citations.bib` | qualified | Founder bio can be strong; founder portrait remains a visual gap. |
| `/about` | Dr. Andreea Damian published earlier work as Andreea Itu. | primary literature continuity | `https://pubmed.ncbi.nlm.nih.gov/28460211/`; `https://pubmed.ncbi.nlm.nih.gov/35197342/` | verified | Must stay precise to avoid attribution drift. |
| `/about` | SmartClover combines product execution, research grounding, and accountable deployment. | first-party company positioning | `README.md`; current route copy; public products/trust routes | qualified | Safe as positioning, but not as quantified traction. |
| `/cerviguard` | CerviGuard is a live product. | authenticated product evidence | `https://cerviguard.link`; `WORK/evidence-captures/2026-04-03/cerviguard-dashboard-authenticated.png` | verified | Use exact status wording `live product`. |
| `/cerviguard` | CerviGuard supports secure intake, case review, and follow-up workflows. | authenticated product evidence | `WORK/evidence-captures/2026-04-03/cerviguard-add-case-authenticated.png`; `WORK/evidence-captures/2026-04-03/cerviguard-cases-authenticated.png`; `WORK/evidence-captures/2026-04-03/cerviguard-profile-authenticated.png` | verified | Keep human-in-the-loop framing explicit. |
| `/cerviguard` | CerviGuard is positioned as MDR Class I. | first-party regulatory artifact | `public/docs/CerviGuard_MDR_Class_I_Self_Assessment_Draft.pdf`; `pages/regulatory.jsx` | qualified | Keep `Draft` language where appropriate; do not imply approval. |
| `/products` | DataGems is a live research pilot. | authenticated product evidence | `https://datagems.app`; `WORK/evidence-captures/2026-04-03/datagems-dashboard-authenticated.png` | verified | Use exact status wording `live research pilot`. |
| `/products` | DataGems uses SLM-first synthetic-data generation with optional external APIs. | first-party product copy plus authenticated app | `pages/products.jsx`; `WORK/evidence-captures/2026-04-03/datagems-dashboard-authenticated.png` | qualified | Describe as current product framing, not a benchmarked superiority claim. |
| `/trust` | SmartClover publishes draft privacy, security, incident response, terms, and data-processing baselines. | first-party policy routes | `pages/trust/index.jsx`; `pages/trust/privacy-policy.jsx`; `pages/trust/security.jsx`; `pages/trust/incident-response.jsx`; `pages/trust/data-processing.jsx`; `pages/trust/terms-of-service.jsx` | verified | Draft labeling and dates must remain visible. |
| `/contact` | SmartClover supports structured demo, pilot, research, investor, and general inquiries. | first-party process and contact flow | `pages/contact.jsx`; `pages/api/contact.js` | verified | Response expectations should stay framed as operational targets, not SLAs unless contractually backed. |
| `/pricing` | SmartClover uses RFQ-led pricing rather than public list pricing. | first-party commercial policy | `pages/pricing.jsx` | verified | Avoid adding numeric pricing without explicit commercial approval. |
| `/how-to-buy` | SmartClover uses a structured qualification, contracting, and activation flow. | first-party operating process | `pages/how-to-buy.jsx` | verified | Keep public wording high-level and realistic. |
| `/blog` | Blog posts support credibility with product and research context. | first-party editorial content | `posts/*.md`; `pages/blog/index.jsx`; `pages/blog/[slug].jsx` | verified | Posts should link back into product/trust context where relevant. |

