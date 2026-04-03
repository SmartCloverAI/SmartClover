# SmartClover Migration Register

Prepared: 2026-04-03
Purpose: execution tracker for route preservation, merge work, and retirement sequencing during the website refactor.

Action labels:
- `preserve_and_rebuild`: keep route, replace presentation, preserve purpose.
- `merge_into_destination`: absorb useful content into the destination route before redirect or retirement.
- `retain_subpage`: keep subpage accessible while improving parent-hub navigation.
- `hold_until_destination_ready`: do not retire yet because destination work is incomplete.

| Route | Decision | Destination | Migration action | Content to preserve or absorb | Status |
| --- | --- | --- | --- | --- | --- |
| `/` | keep | `/` | `preserve_and_rebuild` | Company positioning, flagship proof, research signal, investor path, main CTA | in progress |
| `/about` | keep | `/about` | `preserve_and_rebuild` | Founder credibility, publication continuity, company story, values, timeline/history | in progress |
| `/cerviguard` | keep | `/cerviguard` | `preserve_and_rebuild` | Flagship screenshots, workflow, live app link, repo links, research and MDR posture | pending |
| `/products` | keep | `/products` | `preserve_and_rebuild` | Portfolio split, DataGems framing, architecture/deployment/governance/cyber content | pending |
| `/trust` | keep | `/trust` | `preserve_and_rebuild` | Main diligence hub, trust route map, merged proof/regulatory context | pending |
| `/contact` | keep | `/contact` | `preserve_and_rebuild` | Segmented inquiry paths, response expectations, trust reinforcement | in progress |
| `/pricing` | keep | `/pricing` | `preserve_and_rebuild` | RFQ-led commercial framing, packaging logic, onward paths | pending |
| `/how-to-buy` | keep | `/how-to-buy` | `preserve_and_rebuild` | Procurement and onboarding journey, checkpoint framing | pending |
| `/blog` | keep | `/blog` | `preserve_and_rebuild` | Credibility-oriented editorial index and article templates | pending |
| `/blog/[slug]` | keep | `/blog/[slug]` | `preserve_and_rebuild` | Publication metadata, structured data, internal-route support | pending |
| `/proof` | merge | `/trust` | `merge_into_destination` | Timeline milestones, proof framing, public artifact orientation | pending |
| `/regulatory` | merge | `/trust` | `merge_into_destination` | MDR posture, publishable regulatory summary, draft-status labeling | pending |
| `/services` | merge | `/products` | `merge_into_destination` | Product-operations framing, module catalogue, rollout logic | pending |
| `/cloud-architecture` | merge | `/products` | `merge_into_destination` | Deployment model and platform architecture explanation | pending |
| `/decentralized` | merge | `/products` | `merge_into_destination` | Governance and decentralized-delivery framing | pending |
| `/cybersecurity` | merge | `/products` | `merge_into_destination` | Resilience and cybersecurity posture language that adds buyer value | pending |
| `/values` | merge | `/about` | `merge_into_destination` | Creativity, digitalization, human-in-the-loop AI values material | in progress |
| `/trust/privacy-policy` | keep | `/trust/privacy-policy` | `retain_subpage` | Draft privacy baseline | pending |
| `/trust/terms-of-service` | keep | `/trust/terms-of-service` | `retain_subpage` | Draft terms baseline | pending |
| `/trust/data-processing` | keep | `/trust/data-processing` | `retain_subpage` | Draft DPA posture summary | pending |
| `/trust/security` | keep | `/trust/security` | `retain_subpage` | Publication-safe security baseline | pending |
| `/trust/incident-response` | keep | `/trust/incident-response` | `retain_subpage` | Draft incident response baseline | pending |

## Current Gaps Blocking Full Migration Completion

| Destination area | Missing asset or dependency | Impact | Next step |
| --- | --- | --- | --- |
| Home and About | founder photo | Reduces human credibility proof near the top of the site | obtain approved founder photo or keep non-photo credibility treatment |
| Home and CerviGuard | custom workflow diagram | Limits product-proof clarity | create a publishable workflow diagram from authenticated product flows |
| Trust and Products | architecture diagram | Weakens deployment-model explanation | create a deployment diagram grounded in current platform reality |
| Redirect/retire stage | redirect map | Old routes cannot be safely retired yet | implement redirects only after destination content and internal links are verified |

