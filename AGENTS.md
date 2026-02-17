# SmartClover / CerviGuard Agent Memory

## 1) Purpose and Durability
`AGENTS.md` is the canonical long-term operational memory for this repository.

All future agents must treat this file as both:
- a stable execution playbook, and
- an append-only memory log for critical knowledge.

Never rewrite history in the memory log. If an old entry is wrong, add a new `TYPE: correction` entry that references the older timestamped entry.

## 2) Mandatory Agent Workflow
1. Read this file before changing code or docs.
2. Review `git status` and inspect affected modules.
3. Execute changes in focused batches.
4. After each meaningful modification batch, run the mandatory loop in `## 10) BUILDER-CRITIC Loop`.
5. Append required entries to `## 11) Memory Log (append-only)`.
6. Before each commit, increment the manual footer version in `components/Layout.jsx` exactly once.
7. Validate with `npm run lint` and `npm run build` when feasible; include results in the log.

## 3) How To Run and Test (Stable Reference)
- Install deps: `npm install` (or `npm ci` in CI).
- Local dev: `npm run dev` (default `http://localhost:3000`).
- Lint: `npm run lint`.
- Production build: `npm run build`.
- Production serve (after build): `npm run start`.
- Manual verification baseline for changed UX/routes: smoke-check changed pages while running `npm run dev`.

## 4) Repository Map (Stable Reference)
- `pages/`: route entry points (marketing pages + blog routes + API routes).
- `pages/blog/`: static blog index and slug pages.
- `pages/api/host-id.js`: runtime host-id resolver endpoint.
- `components/Layout.jsx`: global layout/navigation/footer + manual release version.
- `components/ServedByComponent.tsx`: runtime host-id display with API fallback.
- `lib/posts.js`: markdown loader/parser/HTML compiler for posts.
- `posts/*.md`: blog content; required front matter keys are `title`, `date`, `excerpt`.
- `styles/globals.css`: global design system and responsive layout styling.
- `public/`: static assets, including citation `.bib` and pitch deck.

## 5) Coding Conventions (Stable Reference)
- Use 2-space indentation, single quotes, and trailing semicolons in JS/TS files.
- Keep route files as default-export page components.
- Use PascalCase for shared components and kebab-case for route filenames.
- Keep helper logic local unless reuse is clear.
- Keep TypeScript aligned with existing `tsconfig.json`; do not add compiler options without explicit discussion.

## 6) Environment and Configuration (Stable Reference)
- `_app.jsx` initializes footer host id as `unknown`.
- `components/ServedByComponent.tsx` fetches `/api/host-id` at runtime and upgrades the display when available.
- `/api/host-id` resolves: `EE_HOST_ID` -> `R1EN_HOST_ID` -> `NEXT_PUBLIC_EE_HOST_ID` -> `unknown`.
- `/api/host-id` sets `Cache-Control: no-store, max-age=0`.
- Never commit `.env*` files.

## 7) Known Pitfalls and Guardrails (Stable Reference)
- Manual versioning is easy to miss: bump footer version only once per commit in `components/Layout.jsx`.
- Host-id label may remain `unknown` if runtime env vars are not set by deployment.
- Blog rendering depends on compatible markdown stack (`remark` with `remark-html`) and valid front matter.
- Citation maintenance is manual: keep About page references and `public/docs/smartclover-cerviguard-citations.bib` synchronized.
- No active CI workflows currently exist in `.github/workflows/`; local validation is mandatory.
- Do not commit generated artifacts like `.next/`.

## 8) Versioning Policy
- Footer version is the manual release counter shown in `components/Layout.jsx`.
- Version increment cadence is per commit, not per edit.
- If one commit contains multiple local edit batches, increment once right before commit finalization.
- If a commit is split into multiple commits, each commit must include its own increment.

## 9) Memory Log Policy (Append-Only)
Record only critical/fundamental project changes and horizontal/critical insights that influence future decisions across modules, release flow, reliability, security/privacy, governance, or data handling.

Do not log trivial copy edits or routine formatting-only changes unless they alter a critical process/policy.
Minor-entry cleanup is allowed only as an explicit maintenance action requested by maintainers; when performed, append one `TYPE: decision` entry documenting the prune scope and rationale.

Use this entry format:

```md
### [YYYY-MM-DD HH:MM UTC] TYPE: <discovery|decision|change|insight|correction>
- Author: <agent or human>
- Summary: <critical fact/decision/change>
- Evidence: <files, commands, or external links>
- Impact: <why this changes future work>
- Follow-up: <required next step or "none">
- Related Entry: <timestamp/type of superseded entry, only for TYPE: correction>
```

## 10) Mandatory BUILDER-CRITIC Loop (After Every Meaningful Modification)
For each meaningful modification batch, complete this exact sequence:

1. `BUILDER PASS 1` (intent + change declaration)
- State intent and exact scope before/while editing.
- Summarize what was changed (files + behavior/process impact).

2. `CRITIC PASS` (adversarial break attempt)
- Assume the change is wrong and attempt to break it.
- Evaluate assumptions, regressions, security/privacy, edge cases, performance, accessibility, documentation drift, and missing tests/verification.
- List concrete findings, not vague concerns.

3. `BUILDER PASS 2` (refinement + proof)
- Resolve each critic finding or explicitly accept with rationale.
- Run verification commands and record result status (`pass`/`fail`) plus notable output.
- List residual risks.

Append the loop result to memory log with this format:

```md
### [YYYY-MM-DD HH:MM UTC] ADVERSARIAL-CHECK
- Scope: <what was modified>
- BUILDER Intent + Change:
  - <intent and applied change>
- CRITIC Findings:
  - <finding 1>
  - <finding 2>
- BUILDER Response / Refinements:
  - <fix or rationale>
  - <fix or rationale>
- Verification:
  - `<command>` -> <pass/fail + key result>
  - `<command>` -> <pass/fail + key result>
- Residual Risk: <none or concise list>
```

No modification batch is complete until this entry is appended.

## 11) Memory Log (append-only)

### [2026-02-11 00:00 UTC] TYPE: discovery
- Author: Codex
- Summary: Runtime stack is Next.js 14 Pages Router with markdown-driven blog content.
- Evidence: `package.json`, `pages/blog/index.jsx`, `pages/blog/[slug].jsx`, `lib/posts.js`, `posts/*.md`.
- Impact: Content and routing changes should preserve static-generation assumptions.
- Follow-up: none

### [2026-02-11 00:00 UTC] TYPE: discovery
- Author: Codex
- Summary: `.github/workflows/` exists but has no active workflow files.
- Evidence: directory listing of `.github/workflows/`.
- Impact: CI checks are local/manual unless workflows are added.
- Follow-up: add workflow files if automated CI is required.

### [2026-02-11 07:00 UTC] TYPE: insight
- Author: Codex
- Summary: Host id cannot be reliably read at build time from server-only env in this deployment model; runtime resolution is required.
- Evidence: runtime-only availability of `EE_HOST_ID`/`R1EN_HOST_ID` plus deployment behavior.
- Impact: Client bundle env injection alone is insufficient for footer host labeling.
- Follow-up: Preserve runtime API approach when refactoring layout or host banner logic.

### [2026-02-11 07:00 UTC] TYPE: change
- Author: Codex
- Summary: Added runtime host-id endpoint and client fetch flow while keeping `_app.jsx` free of `getInitialProps`.
- Evidence: `pages/api/host-id.js`, `components/ServedByComponent.tsx`, `pages/_app.jsx`.
- Impact: Automatic Static Optimization remains active and footer host text can still resolve from runtime server container env.
- Follow-up: none

### [2026-02-11 07:00 UTC] ADVERSARIAL-CHECK
- Scope: `pages/_app.jsx`, `pages/api/host-id.js`, `components/ServedByComponent.tsx`, `AGENTS.md`.
- CRITIC Findings:
  - Runtime fetch could fail and leave host id as `unknown`.
  - New API route could serve stale host values without strict cache control.
- BUILDER Actions:
  - Implemented robust fallback behavior in `ServedByComponent`.
  - Set `Cache-Control: no-store, max-age=0` in `/api/host-id`.
  - Ran `npm run lint` (pass) and `npm run build` (pass).
- Residual Risk: If runtime environment omits both `EE_HOST_ID` and `R1EN_HOST_ID`, host id remains `unknown` by design.

### [2026-02-11 08:11 UTC] TYPE: discovery
- Author: Codex
- Summary: Prior citation mapping for cervical-screening references was incorrect; PMIDs `35999375`, `28347409`, and `31304013` did not match the claimed studies.
- Evidence: DOI-to-PubMed verification for `10.1136/bmjopen-2021-053954` -> `PMID 35197342`; `10.1016/j.socscimed.2017.04.040` -> `PMID 28460211`.
- Impact: Public research references required correction to avoid misattribution and credibility risk.
- Follow-up: Validate DOI/PMID pairings before publishing future citation updates.

### [2026-02-11 08:11 UTC] TYPE: insight
- Author: Codex
- Summary: Founder publication history spans name continuity from Andreea Itu (2017 author list) to Dr. Andreea Damian (2022 protocol), with Dr. Florian Nicula as documented collaborator.
- Evidence: `https://pubmed.ncbi.nlm.nih.gov/28460211/`; `https://pubmed.ncbi.nlm.nih.gov/35197342/`; `https://doi.org/10.1016/j.socscimed.2017.04.040`.
- Impact: Founder and research narrative must explicitly explain publication-name continuity.
- Follow-up: none

### [2026-02-11 08:11 UTC] TYPE: change
- Author: Codex
- Summary: Corrected citation set and founder continuity narrative across core product/service/about/research content.
- Evidence: `pages/services.jsx`, `pages/products.jsx`, `pages/about.jsx`, `posts/healthcare-ai-research.md`.
- Impact: Public-facing claims are aligned to verified research records and reduce attribution risk.
- Follow-up: Keep references synchronized with future content updates.

### [2026-02-11 08:11 UTC] ADVERSARIAL-CHECK
- Scope: citation and founder-history corrections across core pages/posts.
- CRITIC Findings:
  - Citation claims could remain overstated if DOI/PMID mapping was still wrong.
  - Founder story could remain ambiguous without explicit name continuity.
- BUILDER Actions:
  - Replaced incorrect references with DOI/PMID-verified links.
  - Added explicit continuity language linking Andreea Itu to Dr. Andreea Damian.
  - Ran `npm run lint` (pass) and `npm run build` (pass).
- Residual Risk: External publisher pages may change availability; DOI and PubMed anchors remain primary verification sources.

### [2026-02-11 20:03 UTC] TYPE: discovery
- Author: Codex
- Summary: Blog markdown rendering degraded globally because `remark@14` with `remark-html@16` left markdown uncompiled.
- Evidence: dependency mismatch in `package.json` and runtime rendering symptoms on blog pages.
- Impact: All blog detail pages could show raw markdown until dependency compatibility was restored.
- Follow-up: Keep `remark` and `remark-html` major versions compatible during upgrades.

### [2026-02-11 20:03 UTC] TYPE: change
- Author: Codex
- Summary: Upgraded `remark` to a compatible major version and preserved markdown-to-HTML conversion flow.
- Evidence: `package.json`, `package-lock.json`.
- Impact: Blog posts render as HTML instead of raw markdown syntax.
- Follow-up: none

### [2026-02-11 20:03 UTC] ADVERSARIAL-CHECK
- Scope: markdown tooling compatibility (`package.json`, `package-lock.json`).
- CRITIC Findings:
  - Dependency updates could introduce regressions outside blog rendering.
  - A targeted fix might miss pre-existing blog posts.
- BUILDER Actions:
  - Validated markdown output on multiple posts after dependency update.
  - Ran `npm run lint` (pass) and `npm run build` (pass).
- Residual Risk: Future dependency upgrades may silently alter markdown semantics; verify sample posts during maintenance.

### [2026-02-16 21:40 UTC] TYPE: change
- Author: Codex
- Summary: Refactored `AGENTS.md` into a durable playbook with stable reference sections and mandatory `BUILDER -> CRITIC -> BUILDER` structure.
- Evidence: `AGENTS.md` sections `1)` through `10)`.
- Impact: Change governance and operational guidance became explicit and reusable for future agents.
- Follow-up: Keep guidance synchronized with repository evolution.

### [2026-02-16 21:40 UTC] TYPE: change
- Author: Codex
- Summary: Rewrote `README.md` to prioritize usability guidance before technical details and aligned all instructions with current repo behavior.
- Evidence: `README.md`.
- Impact: Onboarding and operator usage are clearer and less error-prone.
- Follow-up: Keep quickstart/config/troubleshooting sections in sync with runtime behavior.

### [2026-02-16 21:40 UTC] ADVERSARIAL-CHECK
- Scope: `AGENTS.md`, `README.md`.
- BUILDER Intent + Change:
  - Reorganized `AGENTS.md` into a stable long-term playbook and critical-memory protocol.
  - Rewrote `README.md` to place usability-first guidance before technical internals.
- CRITIC Findings:
  - Documentation could drift from real behavior if scripts/routes/env handling were not verified.
  - README could overstate unsupported capabilities.
- BUILDER Response / Refinements:
  - Verified docs against `package.json`, route/module layout, and runtime host-id flow.
  - Limited claims to existing implementation and retained critical disclaimers.
- Verification:
  - `npm run lint` -> pass.
  - `npm run build` -> pass.
- Residual Risk: External resources referenced in citations may change outside repository control.

### [2026-02-16 21:42 UTC] TYPE: decision
- Author: Codex
- Summary: Pruned historical minor entries from memory log and retained only critical architectural/process/reliability/security/citation-integrity events, per maintainer request.
- Evidence: `AGENTS.md` memory log compaction from many entries to a critical-only subset.
- Impact: Memory log now has higher signal and is easier for future agents to use for consequential decisions.
- Follow-up: Reject minor-entry logging going forward unless it changes a critical process or system behavior.

### [2026-02-16 21:44 UTC] ADVERSARIAL-CHECK
- Scope: `AGENTS.md` memory-log compaction and policy tightening.
- BUILDER Intent + Change:
  - Remove minor historical entries and preserve only critical modifications/insights.
  - Tighten policy text so future memory logging stays critical-only.
- CRITIC Findings:
  - Pruning could remove context needed for future debugging or decision traceability.
  - New policy could conflict with strict append-only expectations if compaction is not explicitly governed.
- BUILDER Response / Refinements:
  - Retained all architecture/process/reliability/citation-integrity turning points and removed only low-signal entries (version bumps, routine content/layout reshuffles).
  - Added explicit policy language allowing minor-entry cleanup only as maintainer-requested maintenance with a logged `TYPE: decision` record.
- Verification:
  - `npm run lint` -> pass (`next lint` reported no warnings/errors).
  - `npm run build` -> pass (Next.js build completed; static and SSG routes generated successfully).
- Residual Risk: Some fine-grained historical detail is intentionally dropped; forensic analysis may rely more on git history for non-critical changes.

### [2026-02-17 06:49 UTC] TYPE: change
- Author: Codex
- Summary: Added a dedicated top-menu `CerviGuard` product page with authenticated live-application screenshots, workflow narrative, and SaaS/PaaS deployment positioning.
- Evidence: `components/Layout.jsx`, `pages/cerviguard.jsx`, `styles/globals.css`, `public/images/cerviguard/*.png`, commands: `node scripts/capture-cerviguard-screenshots.js`, `npm run lint`, `npm run build`.
- Impact: The site now contains a first-class flagship product section with concrete UI evidence instead of scattered references.
- Follow-up: Refresh screenshots and copy when the live CerviGuard UI/flows materially change.

### [2026-02-17 06:49 UTC] ADVERSARIAL-CHECK
- Scope: new dedicated CerviGuard section, navigation exposure, and screenshot-backed product presentation (`components/Layout.jsx`, `pages/cerviguard.jsx`, `styles/globals.css`, `public/images/cerviguard/*`).
- BUILDER Intent + Change:
  - Created a standalone `CerviGuard` route and linked it in top navigation.
  - Captured authenticated screenshots from `https://cerviguard.link` (login, dashboard, cases, add case, case detail, profile) and integrated them into a structured product walkthrough.
  - Added new presentation styles for gallery cards, workflow blocks, and flagship product hero layout.
- CRITIC Findings:
  - Dedicated page could read as marketing-only if it lacked verifiable product evidence.
  - Screenshot capture could leak credentials or stale operational context.
  - New route/nav/style additions could regress build stability.
- BUILDER Response / Refinements:
  - Included real authenticated screenshots and date-stamped capture context on-page.
  - Removed capture scripts containing credentials after image generation; no credentials were committed.
  - Kept the section linked to live app and repository references for external validation.
- Verification:
  - `npm run lint` -> pass (`next lint` reported no warnings/errors).
  - `npm run build` -> fail in sandbox first (`EXDEV` cross-device rename); rerun outside sandbox -> pass (full Next.js static build succeeded with `/cerviguard` route generated).
- Residual Risk: The live CerviGuard interface may evolve; screenshot set should be periodically refreshed to avoid documentation drift.

### [2026-02-17 06:56 UTC] TYPE: change
- Author: Codex
- Summary: Refactored core site messaging to consistently position SmartClover as an AI-centric healthcare product/services company with a digital-native SaaS/PaaS business model.
- Evidence: `pages/index.jsx`, `pages/services.jsx`, `pages/products.jsx`, `pages/about.jsx`, `pages/contact.jsx`, `pages/decentralized.jsx`, `pages/cybersecurity.jsx`, `pages/values.jsx`, `pages/blog/index.jsx`.
- Impact: Company narrative now consistently emphasizes productized healthcare platforms plus managed operations, reducing ambiguity about business model and delivery identity.
- Follow-up: Keep future content changes aligned with the product/services SaaS/PaaS positioning baseline.

### [2026-02-17 06:56 UTC] ADVERSARIAL-CHECK
- Scope: site-wide positioning alignment across homepage, service/product/about/contact/supporting pages.
- BUILDER Intent + Change:
  - Rewrote metadata and copy to foreground AI-centric product delivery, SaaS/PaaS deployment, and digital-native operations.
  - Added clear cross-link paths to the dedicated `CerviGuard` page from product and services content.
- CRITIC Findings:
  - Messaging updates could leave contradictory legacy phrasing that still implies a services-only or consultancy identity.
  - Broad copy edits across many routes could introduce broken structure or regressions.
- BUILDER Response / Refinements:
  - Reviewed and updated high-impact routes (`/`, `/services`, `/products`, `/about`, `/contact`) plus supporting routes (`/decentralized`, `/cybersecurity`, `/values`, `/blog`) to keep positioning consistent.
  - Preserved human-in-the-loop and governance language while elevating product/platform clarity.
- Verification:
  - `npm run lint` -> pass (`next lint` reported no warnings/errors).
  - `npm run build` -> pass (Next.js build completed; all static routes including `/cerviguard` generated successfully).
- Residual Risk: Remaining blog post content may still use older wording patterns and may require future editorial harmonization.

### [2026-02-17 06:56 UTC] TYPE: change
- Author: Codex
- Summary: Standardized the README citation section to explicit BibTeX entries for all listed references/resources.
- Evidence: `README.md` section `## Citations` rewritten with `@article`/`@misc` blocks; validation via `npm run lint` and `npm run build`.
- Impact: Citation content is now directly copyable for academic/research workflows without requiring manual conversion from prose links.
- Follow-up: Keep README BibTeX entries synchronized with `public/docs/smartclover-cerviguard-citations.bib` when references evolve.

### [2026-02-17 06:56 UTC] ADVERSARIAL-CHECK
- Scope: `README.md` citation formatting (`## Citations`) and memory-log update.
- BUILDER Intent + Change:
  - Replace link-style citation bullets with BibTeX-formatted entries for each citation/resource.
  - Preserve existing reference coverage (two PubMed-backed papers + CerviGuard public resources).
- CRITIC Findings:
  - BibTeX conversion could accidentally omit key identifiers (DOI/PMID/URL).
  - README citations could diverge from the canonical `.bib` file over time.
- BUILDER Response / Refinements:
  - Included DOI/PMID/URL fields for literature citations and explicit `@misc` entries for product/model resources.
  - Kept the canonical citation file path visible in README to reinforce synchronization.
- Verification:
  - `npm run lint` -> pass (`next lint` reported no warnings/errors).
  - `npm run build` -> pass (Next.js build completed with all routes generated).
- Residual Risk: The newly added `smartclover_models` BibTeX entry exists in README but is not yet mirrored in `public/docs/smartclover-cerviguard-citations.bib`.

### [2026-02-17 07:15 UTC] TYPE: change
- Author: Codex
- Summary: Reframed site-wide messaging to remove outsourcing/software-development cues and reinforce SmartClover as an AI-centric healthcare product company delivering own SaaS/PaaS platforms.
- Evidence: `components/Layout.jsx`, `pages/index.jsx`, `pages/services.jsx`, `pages/products.jsx`, `pages/about.jsx`, `pages/contact.jsx`, `pages/decentralized.jsx`, `pages/cybersecurity.jsx`, `pages/values.jsx`, `pages/blog/index.jsx`.
- Impact: Public narrative now consistently communicates product-led platform ownership and digital-native business model rather than bespoke service delivery.
- Follow-up: Keep future copy updates aligned with product-led positioning across new pages/posts.

### [2026-02-17 07:15 UTC] ADVERSARIAL-CHECK
- Scope: site-wide wording/context alignment for product-led SaaS/PaaS positioning.
- BUILDER Intent + Change:
  - Removed wording that implied custom software development, discovery-led consultancy, or outsourcing-style execution.
  - Updated navigation and core route copy to foreground owned product portfolio, platform operations, and rollout/onboarding language.
- CRITIC Findings:
  - Multiple pages still contained legacy cues such as “discovery workshops”, “custom/tailored solutions”, “engagements”, and partner-centric service framing.
  - Menu/context labels still leaned toward generic services framing.
- BUILDER Response / Refinements:
  - Rewrote affected sections on home/services/about/contact/products and supporting routes to product/portfolio/operations language.
  - Updated top-menu label to `Products & Platform Ops` and tightened CTA/section wording around product access and rollouts.
  - Kept one explicit FAQ statement clarifying SmartClover is not consultancy/outsourcing to avoid ambiguity.
- Verification:
  - `npm run lint` -> pass (`next lint` reported no warnings/errors).
  - `npm run build` -> pass (Next.js build completed successfully; all routes generated).
- Residual Risk: Some older blog-post prose may still use “service” in technical architecture context (non-outsourcing usage), which may warrant later editorial harmonization.

### [2026-02-17 07:19 UTC] TYPE: change
- Author: Codex
- Summary: Updated top navigation label from `Products & Platform Ops` to `Products & More` and verified no active `Services & Products` wording remained in site routes.
- Evidence: `components/Layout.jsx`; scan command `rg -n "Services & Products|Product & Product Ops|Products & Platform Ops" pages components`.
- Impact: Navigation wording is shorter and less operationally heavy while preserving product-first positioning.
- Follow-up: none

### [2026-02-17 07:19 UTC] ADVERSARIAL-CHECK
- Scope: top-menu wording update and label consistency check.
- BUILDER Intent + Change:
  - Replace menu label with `Products & More`.
  - Confirm requested legacy labels were not still present in active pages.
- CRITIC Findings:
  - A menu rename could fail to compile if route/nav rendering assumptions break.
  - Requested legacy phrases might still appear elsewhere and create inconsistency.
- BUILDER Response / Refinements:
  - Updated `components/Layout.jsx` nav link label only (no route/path changes).
  - Ran targeted `rg` checks to confirm legacy phrases are absent from active route/components files.
- Verification:
  - `npm run lint` -> pass (`next lint` reported no warnings/errors).
  - `npm run build` -> pass (Next.js production build completed with all routes generated).
- Residual Risk: `AGENTS.md` historical entries still mention older menu labels by design (append-only history).
