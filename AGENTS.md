# SmartClover / CerviGuard Agent Memory

## 1) Purpose of This File
`AGENTS.md` is the long-term operational memory for this repository.

All future agents must treat this file as:
- the canonical repository playbook, and
- an append-only memory ledger for important discoveries, changes, and insights.

Do not delete prior memory entries. If a past entry is wrong, append a correction entry.

## 2) Mandatory Agent Workflow
1. Read `AGENTS.md` before making changes.
2. Review relevant files and current `git status`.
3. Execute changes.
4. After every important discovery, change, or insight, append a memory entry to `## 11) Memory Ledger`.
5. After every modification batch, run the mandatory adversarial check in `## 10) Adversarial Change Check`.
6. Before each commit, increment the manual footer version in `components/Layout.jsx` exactly once.
7. Validate with `npm run lint` and `npm run build` when feasible.

## Versioning Policy
- Footer version is the manual release counter shown in `components/Layout.jsx`.
- Version increment cadence is per commit, not per edit.
- If one commit contains multiple local edit batches, increment once right before commit finalization.
- If a commit is split into multiple commits, each commit must include its own increment.

## 3) Project Baseline (Verified 2026-02-11)
- Framework: Next.js 14 (Pages Router) with React 18.
- Content model: static marketing pages + markdown blog posts compiled via `lib/posts.js`.
- Global layout wrapper: `components/Layout.jsx` (contains manual version string in footer).
- Host identity banner: `components/ServedByComponent.tsx` rendered from `_app.jsx`.
- Styling: single global stylesheet at `styles/globals.css`.
- Analytics: GA script in `pages/_document.jsx`.
- CI workflows: `.github/workflows/` directory exists but currently has no workflow files.

## 4) Project Structure & Module Organization
- Route components live under `pages/`; marketing pages are `.jsx`.
- Blog routes are in `pages/blog` and load markdown through `lib/posts.js`.
- Shared components live in `components/`.
- Markdown posts live in `posts/` and must include front matter: `title`, `date`, `excerpt`.
- Static assets live in `public/`.
- Global CSS overrides live in `styles/globals.css`.
- Never commit build artifacts like `.next/`.

## 5) Build, Test, and Development Commands
- `npm install` (or `npm ci` in CI) installs dependencies from `package-lock.json`.
- `npm run dev` starts local development at `http://localhost:3000`.
- `npm run build` creates the production build and type-checks.
- `npm run start` serves the production build (requires successful build first).
- `npm run lint` runs ESLint (`next/core-web-vitals` config).

## 6) Coding Style & Naming Conventions
- Use 2-space indentation, single quotes, and trailing semicolons in JS/TS files.
- Default export page components.
- Keep helper logic local when possible.
- Use PascalCase for shared components and kebab-case for route filenames.
- Keep TypeScript compatible with existing `tsconfig.json`; do not add compiler options without explicit discussion.

## 7) Testing & Verification Guidance
- No dedicated automated test harness yet.
- Required verification baseline:
  - `npm run lint`
  - `npm run build`
  - manual smoke-check in `npm run dev` for changed pages/features.
- Future tests should live beside components with `.test.tsx` suffix until a harness is standardized.

## 8) Environment & Configuration Notes
- `components/ServedByComponent.tsx` receives host id from `_app.jsx`.
- `_app.jsx` passes `unknown` as initial host id, and `components/ServedByComponent.tsx` fetches runtime host id from `/api/host-id`.
- `/api/host-id` resolves host id from `EE_HOST_ID` or `R1EN_HOST_ID` (fallback `NEXT_PUBLIC_EE_HOST_ID`, then `unknown`).
- Never commit `.env` files; document required variables in project docs/tooling.

## 9) Memory Entry Standard (Append-Only)
Each important discovery/change/insight must be appended using this format:

```md
### [YYYY-MM-DD HH:MM UTC] TYPE: <discovery|change|insight>
- Author: <agent or human>
- Summary: <what was learned or changed>
- Evidence: <file paths and key lines/sections>
- Impact: <why this matters for future work>
- Follow-up: <required next step, or "none">
```

Important means anything that affects architecture, process, reliability, security, data handling, release flow, or future agent decisions.

## 10) Adversarial Change Check (Mandatory After Every Modification Batch)
After each modification batch, the agent must complete this exact sequence:

1. `CRITIC` phase (radical reverse role):
- Assume the change is wrong.
- Actively search for regressions, blind spots, and weak assumptions.
- Evaluate: correctness, security, privacy, accessibility, performance, maintainability, documentation drift, and test coverage gaps.
- Record concrete findings.

2. `BUILDER` phase (return to implementation role):
- Address each critic finding with refinements or explicit rationale for acceptance.
- Re-run relevant validation (`lint`, `build`, targeted manual checks).
- Record residual risks, if any.

3. Append check result to memory ledger using:

```md
### [YYYY-MM-DD HH:MM UTC] ADVERSARIAL-CHECK
- Scope: <what was modified>
- CRITIC Findings:
  - <finding 1>
  - <finding 2>
- BUILDER Actions:
  - <fix/refinement 1>
  - <fix/refinement 2>
- Residual Risk: <none or concise list>
```

No modification is complete until this adversarial entry is added.

## 11) Memory Ledger

### [2026-02-11 00:00 UTC] TYPE: discovery
- Author: Codex
- Summary: Footer manual version is maintained in `components/Layout.jsx`; `components/Layout.tsx` does not exist.
- Evidence: `components/Layout.jsx` contains `v1.7` in footer; repository has no `components/Layout.tsx`.
- Impact: All future version bumps must target `components/Layout.jsx`.
- Follow-up: Keep this rule synchronized if layout file is renamed.

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

### [2026-02-11 06:47 UTC] TYPE: change
- Author: Codex
- Summary: Rewrote `AGENTS.md` as append-only long-term memory, added mandatory adversarial CRITIC->BUILDER process, and rewrote `README.md` for CerviGuard with usability/features before technical details.
- Evidence: `AGENTS.md`, `README.md`.
- Impact: Future agents now have a persistent memory protocol and explicit post-change adversarial review standard.
- Follow-up: Ensure future changes always append `change` and `ADVERSARIAL-CHECK` entries.

### [2026-02-11 06:47 UTC] TYPE: change
- Author: Codex
- Summary: Incremented footer manual version from `v1.7` to `v1.8`.
- Evidence: `components/Layout.jsx`.
- Impact: Repository versioning convention remains aligned with documentation updates.
- Follow-up: Continue incrementing on each modification batch.

### [2026-02-11 06:47 UTC] ADVERSARIAL-CHECK
- Scope: `AGENTS.md`, `README.md`, `components/Layout.jsx`.
- CRITIC Findings:
  - Memory protocol required explicit `change` and `ADVERSARIAL-CHECK` ledger entries for this modification batch.
  - Documentation edits needed verification to avoid breaking project quality gates.
- BUILDER Actions:
  - Added the required `change` and `ADVERSARIAL-CHECK` memory entries to `AGENTS.md`.
  - Ran `npm run lint` (pass) and `npm run build` (pass).
- Residual Risk: Existing Next.js warning remains: `_app.jsx` uses `getInitialProps`, opting out of Automatic Static Optimization for non-`getStaticProps` pages.

### [2026-02-11 06:56 UTC] TYPE: change
- Author: Codex
- Summary: Removed `App.getInitialProps` from `_app.jsx` and switched host id source to `NEXT_PUBLIC_EE_HOST_ID` only, with `unknown` fallback.
- Evidence: `pages/_app.jsx`.
- Impact: Automatic Static Optimization is restored for eligible pages, and host id is now client-exposed env only.
- Follow-up: Ensure deployment injects `NEXT_PUBLIC_EE_HOST_ID` when host labeling is required.

### [2026-02-11 06:56 UTC] TYPE: change
- Author: Codex
- Summary: Incremented footer manual version from `v1.8` to `v1.9`.
- Evidence: `components/Layout.jsx`.
- Impact: Versioning rule remains consistent after this modification batch.
- Follow-up: Continue incrementing on each modification batch.

### [2026-02-11 06:56 UTC] ADVERSARIAL-CHECK
- Scope: `pages/_app.jsx`, `AGENTS.md`, `components/Layout.jsx`.
- CRITIC Findings:
  - Removing `getInitialProps` can break host id propagation if it still depends on server-only `EE_HOST_ID`.
  - Environment documentation could drift if `_app.jsx` behavior changes but guidance does not.
- BUILDER Actions:
  - Set host id in `_app.jsx` using `process.env.NEXT_PUBLIC_EE_HOST_ID ?? 'unknown'`.
  - Updated environment notes in `AGENTS.md` to match runtime behavior.
  - Ran `npm run lint` (pass) and `npm run build` (pass); build now reports static routes without the previous auto-optimization warning.
- Residual Risk: `EE_HOST_ID` (server-only) is no longer read by `_app.jsx`; environments must expose `NEXT_PUBLIC_EE_HOST_ID` for non-`unknown` footer host text.

### [2026-02-11 07:00 UTC] TYPE: insight
- Author: Codex
- Summary: Host id cannot be reliably read at build time from server-only env in this deployment model; runtime resolution is required.
- Evidence: user requirement + runtime-only availability of `EE_HOST_ID`/`R1EN_HOST_ID`.
- Impact: Client bundle env injection alone is insufficient for footer host labeling.
- Follow-up: Preserve runtime API approach when refactoring layout or host banner logic.

### [2026-02-11 07:00 UTC] TYPE: change
- Author: Codex
- Summary: Added runtime host-id endpoint and client fetch flow while keeping `_app.jsx` free of `getInitialProps`.
- Evidence: `pages/api/host-id.js`, `components/ServedByComponent.tsx`, `pages/_app.jsx`.
- Impact: Automatic Static Optimization remains active and footer host text can still resolve from runtime server container env.
- Follow-up: none

### [2026-02-11 07:00 UTC] TYPE: change
- Author: Codex
- Summary: Incremented footer manual version from `v1.9` to `v2.0`.
- Evidence: `components/Layout.jsx`.
- Impact: Versioning rule remains consistent after this modification batch.
- Follow-up: Continue incrementing on each modification batch.

### [2026-02-11 07:00 UTC] TYPE: insight
- Author: Codex
- Summary: Previous 06:56 note about `NEXT_PUBLIC_EE_HOST_ID` being required for non-`unknown` host label is superseded by runtime API resolution.
- Evidence: `pages/api/host-id.js`, `components/ServedByComponent.tsx`.
- Impact: Future agents should treat runtime env as primary source for host id.
- Follow-up: none

### [2026-02-11 07:00 UTC] ADVERSARIAL-CHECK
- Scope: `pages/_app.jsx`, `pages/api/host-id.js`, `components/ServedByComponent.tsx`, `AGENTS.md`, `components/Layout.jsx`.
- CRITIC Findings:
  - Runtime fetch could fail and leave host id as `unknown`.
  - New API route could add stale/cached host values if caching headers are not strict.
  - Documentation could conflict with the previous `NEXT_PUBLIC`-only entry.
- BUILDER Actions:
  - Implemented robust fallback behavior in `ServedByComponent` and kept `unknown` fallback.
  - Set `Cache-Control: no-store, max-age=0` in `/api/host-id`.
  - Appended correction insight and updated environment section in `AGENTS.md`.
  - Ran `npm run lint` (pass) and `npm run build` (pass).
- Residual Risk: If runtime environment omits both `EE_HOST_ID` and `R1EN_HOST_ID`, host id remains `unknown` by design.

### [2026-02-11 07:25 UTC] TYPE: insight
- Author: Codex
- Summary: Version increment rule is now explicitly defined as per commit, replacing per modification-batch wording.
- Evidence: `AGENTS.md` workflow step 6 and `Versioning Policy` section.
- Impact: Future agents can align version bumps with commit boundaries and avoid ambiguous bump timing.
- Follow-up: Apply this rule consistently in all future commits.

### [2026-02-11 07:25 UTC] TYPE: change
- Author: Codex
- Summary: Incremented footer manual version from `v2.0` to `v2.1`.
- Evidence: `components/Layout.jsx`.
- Impact: Version counter reflects this documentation policy change.
- Follow-up: Increment once per commit going forward.

### [2026-02-11 07:25 UTC] ADVERSARIAL-CHECK
- Scope: `AGENTS.md`, `components/Layout.jsx`.
- CRITIC Findings:
  - Previous wording could cause more than one version bump before a single commit.
  - Policy clarity was incomplete for multi-edit local sessions.
- BUILDER Actions:
  - Replaced workflow step with per-commit requirement.
  - Added explicit `Versioning Policy` rules in `AGENTS.md`.
  - Bumped footer version to `v2.1`.
  - Ran `npm run lint` (pass) and `npm run build` (pass).
- Residual Risk: Teams that do large uncommitted sessions may still need discipline to remember final pre-commit bump.

### [2026-02-11 07:58 UTC] TYPE: discovery
- Author: Codex
- Summary: Verified current external sources for CerviGuard positioning and prior cervical-screening research attribution for Dr. Andreea Damian and Dr. Florian Nicula.
- Evidence: `https://cerviguard.link/`; `https://github.com/SmartCloverAI/CerviGuard`; `https://pubmed.ncbi.nlm.nih.gov/35999375/`; `https://pubmed.ncbi.nlm.nih.gov/28347409/`; `https://pubmed.ncbi.nlm.nih.gov/31304013/`.
- Impact: Site messaging can now reference flagship product details and prior research with stable, externally verifiable citations.
- Follow-up: Re-validate links periodically as publications and product docs evolve.

### [2026-02-11 07:58 UTC] TYPE: change
- Author: Codex
- Summary: Added a dedicated CerviGuard flagship section in Services & Products content, added source-linked research foundation coverage for Dr. Andreea Damian and Dr. Florian Nicula, and standardized key terminology across pages.
- Evidence: `pages/services.jsx`; `pages/products.jsx`; `posts/healthcare-ai-research.md`; `pages/index.jsx`; `pages/about.jsx`; `pages/values.jsx`; `pages/cybersecurity.jsx`; `README.md`.
- Impact: Product/service narrative is clearer, research attribution is explicit and evidence-linked, and wording consistency is improved across primary marketing pages.
- Follow-up: none

### [2026-02-11 07:58 UTC] ADVERSARIAL-CHECK
- Scope: `pages/services.jsx`, `pages/products.jsx`, `posts/healthcare-ai-research.md`, `pages/index.jsx`, `pages/about.jsx`, `pages/values.jsx`, `pages/cybersecurity.jsx`, `README.md`, `AGENTS.md`.
- CRITIC Findings:
  - New research attribution could overstate individual contributions without direct publication links.
  - Adding flagship-product messaging only in one location could create navigation-level inconsistency.
  - Text consistency updates risked introducing style drift or broken JSX.
  - Build validation might fail due environment-specific filesystem behavior rather than code defects.
- BUILDER Actions:
  - Added direct PubMed links for cited studies and tied each statement to specific publication records.
  - Added CerviGuard flagship coverage in both `pages/services.jsx` and `pages/products.jsx`.
  - Standardized high-visibility wording (`your AI`, `digitalization`, contact email consistency) and reviewed changed JSX output.
  - Ran `npm run lint` (pass) and `npm run build` (fails with `EXDEV: cross-device link not permitted` during `.next` file rename after static page generation).
- Residual Risk: Production build status remains unconfirmed in this environment because of the `EXDEV` filesystem rename failure; functional correctness of content changes is still supported by passing lint and successful compile/static-page generation stages before the rename step.

### [2026-02-11 08:11 UTC] TYPE: discovery
- Author: Codex
- Summary: Previous citation mapping for cervical-screening references was incorrect; PMIDs `35999375`, `28347409`, and `31304013` do not match the claimed studies.
- Evidence: DOI-to-PubMed verification via NCBI E-utilities for `10.1136/bmjopen-2021-053954` -> `PMID 35197342`; `10.1016/j.socscimed.2017.04.040` -> `PMID 28460211`; direct checks on `https://pubmed.ncbi.nlm.nih.gov/35999375/` and `https://pubmed.ncbi.nlm.nih.gov/31304013/`.
- Impact: All public-facing research references needed correction to avoid misattribution and credibility risk.
- Follow-up: Validate any future DOI/PMID pairings before publishing content updates.

### [2026-02-11 08:11 UTC] TYPE: insight
- Author: Codex
- Summary: Founder publication history spans name continuity from Andreea Itu (2017 paper author list) to Dr. Andreea Damian (2022 BMJ Open protocol), with Dr. Florian Nicula as a documented collaborator in the 2017 study.
- Evidence: `https://pubmed.ncbi.nlm.nih.gov/28460211/`; `https://pubmed.ncbi.nlm.nih.gov/35197342/`; `https://doi.org/10.1016/j.socscimed.2017.04.040`.
- Impact: Founder narrative should explicitly explain the publication-name continuity when presenting prior research.
- Follow-up: none

### [2026-02-11 08:11 UTC] TYPE: change
- Author: Codex
- Summary: Reworked Services and Products flagship sections to reflect current CerviGuard positioning, added founder-history continuity coverage with corrected online references, and refined About page narrative around founder-led research progression.
- Evidence: `pages/services.jsx`; `pages/products.jsx`; `pages/about.jsx`.
- Impact: Products/services messaging now consistently presents CerviGuard as flagship and ties it to verifiable prior research by Dr. Andreea Damian and Dr. Florian Nicula.
- Follow-up: none

### [2026-02-11 08:11 UTC] TYPE: change
- Author: Codex
- Summary: Standardized terminology drift (`decentralized`/`digitalization`), corrected healthcare research blog citations, and refreshed global visual styling for a more modern, consistent presentation.
- Evidence: `pages/blog/index.jsx`; `posts/healthcare-ai-research.md`; `posts/cybersecurity-healthcare-ledger.md`; `posts/on-prem-ledger-ci-cd.md`; `styles/globals.css`.
- Impact: Cross-page text consistency improved and visible styling now aligns better with a modern marketing presentation.
- Follow-up: none

### [2026-02-11 08:11 UTC] ADVERSARIAL-CHECK
- Scope: `pages/services.jsx`, `pages/products.jsx`, `pages/about.jsx`, `pages/blog/index.jsx`, `posts/healthcare-ai-research.md`, `posts/cybersecurity-healthcare-ledger.md`, `posts/on-prem-ledger-ci-cd.md`, `styles/globals.css`, `AGENTS.md`.
- CRITIC Findings:
  - Research references could still overstate prior work if DOI/PMID mappings were not verified against authoritative metadata.
  - Updated founder story could be ambiguous without explicit name continuity between Andreea Itu and Dr. Andreea Damian.
  - Global styling changes could reduce readability/responsiveness if not validated on actual routes.
  - Smoke-check scripts could report false negatives if an occupied default port is assumed.
- BUILDER Actions:
  - Replaced incorrect research links with DOI/PMID-verified references (`PMID 35197342` and `PMID 28460211`) and removed unrelated PubMed IDs from content.
  - Added explicit founder-history continuity language and aligned it in Services, Products, About, and healthcare research content.
  - Ran `npm run lint` (pass) and `npm run build` (pass) after edits.
  - Ran manual smoke checks with `npm run dev -- -p 3002` and confirmed HTTP `200` on `/`, `/services`, `/products`, `/about`, and `/blog`.
- Residual Risk: Some publisher pages (e.g., BMJ/ScienceDirect) may use anti-bot/cookie gates for automated fetches; DOI and PubMed links remain stable verification anchors.

### [2026-02-11 08:25 UTC] TYPE: change
- Author: Codex
- Summary: Added an explicit citation library section with BibTeX links in Services, surfaced direct BibTeX access in Products, and published a downloadable `.bib` citation file.
- Evidence: `pages/services.jsx`; `pages/products.jsx`; `public/docs/smartclover-cerviguard-citations.bib`.
- Impact: Visitors can now clearly access reusable references for founder research continuity and CerviGuard documentation without searching source files.
- Follow-up: Keep `.bib` entries synchronized when citations are updated in page content.

### [2026-02-11 08:25 UTC] ADVERSARIAL-CHECK
- Scope: `pages/services.jsx`, `pages/products.jsx`, `public/docs/smartclover-cerviguard-citations.bib`, `AGENTS.md`.
- CRITIC Findings:
  - Citation links could remain discoverable only in one route if not mirrored from product-facing pages.
  - BibTeX metadata might drift from on-page reference links over time.
  - New section/button markup could introduce lint/build regressions.
- BUILDER Actions:
  - Added BibTeX section to Services and a direct BibTeX CTA in Products for navigation-level discoverability.
  - Centralized references into `public/docs/smartclover-cerviguard-citations.bib` and linked that file directly from both pages.
  - Ran `npm run lint` (pass) and `npm run build` (pass).
- Residual Risk: Citation maintenance is still manual; future reference edits must update both page text and the `.bib` file.

### [2026-02-11 11:23 UTC] TYPE: change
- Author: Codex
- Summary: Relocated founder history and citation library ownership to the bottom of the About page and removed both sections from Services.
- Evidence: `pages/about.jsx`; `pages/services.jsx`; `pages/products.jsx`.
- Impact: About is now the single canonical route for founder timeline and BibTeX citation access, reducing duplicated research blocks in service marketing content.
- Follow-up: Keep About and `public/docs/smartclover-cerviguard-citations.bib` synchronized when citation metadata changes.

### [2026-02-11 11:23 UTC] TYPE: change
- Author: Codex
- Summary: Repositioned and restyled CerviGuard as a top-of-page flagship highlight in both Services and Products.
- Evidence: `pages/services.jsx`; `pages/products.jsx`; `styles/globals.css`.
- Impact: Flagship positioning is now immediate and visually prioritized instead of appearing mid-flow in long-form service content.
- Follow-up: none

### [2026-02-11 11:23 UTC] ADVERSARIAL-CHECK
- Scope: `pages/about.jsx`, `pages/services.jsx`, `pages/products.jsx`, `styles/globals.css`, `AGENTS.md`.
- CRITIC Findings:
  - Moving founder/citation sections could leave stale links or fragment IDs on other pages.
  - Flagship content might still feel secondary if only copy changed but section order stayed deep in the page.
  - New visual highlight styles could regress readability or break responsive rendering.
- BUILDER Actions:
  - Removed Services citation/founder sections, added About-bottom anchors (`about-founder-history`, `about-citations-bibtex`), and repointed cross-page CTAs.
  - Moved CerviGuard into top-priority sections on Services and Products and added a shared `flagship-highlight` visual treatment.
  - Ran `npm run lint` (pass), `npm run build` (pass), and manual smoke checks via `npm run dev -- -p 3002` with HTTP `200` for `/`, `/services`, `/products`, and `/about`.
- Residual Risk: Citation maintenance remains manual; future edits must update both About content and the `.bib` file together.
