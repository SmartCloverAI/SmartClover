# SmartClover / CerviGuard Agent Playbook

## 1) Purpose and Canonical Artifacts
`AGENTS.md` is the canonical durable execution playbook for this repository.

`CHANGE_LOG.md` is the canonical append-only critical memory log.

`RESEARCH.md` is the canonical source-backed research brief for major refactor, content, design, prompt, and template decisions.

`PLAN.md` is the canonical execution plan for the current SmartClover website refactor.

All future agents must treat these files as follows:
- `AGENTS.md`: durable operating rules.
- `CHANGE_LOG.md`: critical project history only.
- `RESEARCH.md`: current external research and justified directional choices.
- `PLAN.md`: current execution scope, priorities, and acceptance criteria.

Never rewrite history in `CHANGE_LOG.md`. If an old entry is wrong, append a new `TYPE: correction` entry that references the older timestamped entry.

## 2) Mandatory Reading Order
Before changing code or docs:
1. Read `AGENTS.md` and `CHANGE_LOG.md`.
2. If the task touches site structure, design, content, imagery, SEO, or refactor planning, also read `RESEARCH.md` and `PLAN.md` if they exist.
3. Run `git status --short --branch`.
4. Inspect the affected modules before proposing or applying edits.

If the task is strategic and `RESEARCH.md` or `PLAN.md` is missing or stale, update or create it before making broad refactor decisions.

## 3) Mandatory Execution Workflow
1. Read the required docs in `## 2`.
2. Review `git status` and confirm whether the worktree is already dirty.
3. Identify whether the task is:
   - tactical: localized fix or small update, or
   - structural: design/content/refactor work with cross-page impact.
4. For structural work, confirm in `PLAN.md`:
   - target pages or modules,
   - template baseline or inspiration set,
   - evidence requirements for claims,
   - image strategy and missing assets,
   - verification criteria.
   If product content, screenshots, workflows, or product-detail claims are affected, access the authenticated CerviGuard and DataGems applications during development before finalizing copy or visuals.
5. Execute changes in focused batches.
6. After each meaningful modification batch, run the exact loop in `## 16) BUILDER-CRITIC Loop`.
7. Append required `TYPE:*` and `ADVERSARIAL-CHECK` entries to `CHANGE_LOG.md`.
8. Before each commit, increment the release version in `version.json` exactly once.
9. Validate with `npm run lint` and `npm run build` when feasible, and record results in `CHANGE_LOG.md`.

## 4) Repository and Runtime Snapshot
- Framework: Next.js 14 Pages Router.
- Routes live in `pages/`.
- Blog routes live in `pages/blog/`.
- Global layout lives in `components/Layout.jsx`.
- Release version source lives in `version.json`.
- Runtime host-id display lives in `components/ServedByComponent.tsx`.
- Runtime host-id API lives in `pages/api/host-id.js`.
- Markdown loading and compilation live in `lib/posts.js`.
- Global design system styles currently live in `styles/globals.css`.
- Static assets live in `public/`.

Current architectural guardrail:
- Preserve Automatic Static Optimization unless there is an explicit, recorded reason to change it.
- Do not introduce `getInitialProps` in `pages/_app.jsx`.

## 5) How To Run and Validate
- Install deps: `npm install` or `npm ci`.
- Local dev: `npm run dev`.
- Lint: `npm run lint`.
- Production build: `npm run build`.
- Production serve: `npm run start`.
- Manual verification baseline for changed UX/routes: smoke-check changed pages in desktop and mobile layouts while running `npm run dev`.

When shell, hero, image, metadata, or navigation behavior changes, also verify:
- key pages load without layout breakage,
- navigation works across mobile and desktop,
- hero images and screenshots are crisp and correctly cropped,
- metadata and structured data still match the page purpose.

## 6) Coding and Documentation Conventions
- Use 2-space indentation, single quotes, and trailing semicolons in JS/TS files.
- Keep route files as default-export page components.
- Use PascalCase for shared components and kebab-case for route filenames.
- Keep helper logic local unless reuse is clear.
- Keep TypeScript aligned with existing `tsconfig.json`; do not add compiler options without explicit discussion.
- Prefer ASCII unless a file already uses Unicode and there is a clear reason.
- Keep documentation concise, decision-oriented, and source-backed.

## 7) Durable Prompt and Agent Practices
These rules are durable and should guide future agent-driven work in this repo:

- Define success criteria before prompt tuning. Do not "improve prompts" without knowing what success means.
- Prefer reusable prompt templates with explicit variables over one-off prompt blobs.
- Version major prompt structures and decision changes in durable docs instead of leaving them implicit in chat history.
- For reasoning-capable models, prefer direct instructions, clear delimiters, and explicit constraints over "think step by step" prompting.
- Use zero-shot first, then add few-shot examples only when the task clearly benefits from examples.
- Keep agents focused. One agent should own one clear responsibility or write scope.
- Limit agent/tool permissions to what the task actually needs.
- When project subagents exist under `.claude/agents/`, keep them narrow, reusable, and checked into version control.
- Preserve traceability. Important prompt, template, evidence, and design choices belong in repo artifacts, not only transient terminal output.
- Keep one deliberate builder pass and one adversarial critic pass per meaningful batch.

## 8) SmartClover Refactor Non-Negotiables
For website refactor work, the following are mandatory:

- Template-first, not blank-canvas-first.
- Evidence-first copy, especially for healthcare, research, regulatory, cybersecurity, and product-status claims.
- Authentic or high-trust visuals over generic AI-looking marketing art.
- Elegant, modern design with restraint. Clean does not mean bland; polished does not mean noisy.
- Strong mobile behavior and readability.
- Accessibility and performance are product requirements, not polish items.

## 9) Template and Design Workflow
Modern template choice is a critical architectural input, not a late-stage decoration.

Before a major redesign or cross-page rewrite:
1. Select one primary code template baseline.
2. Optionally select up to two inspiration references for motion, page composition, or trust presentation.
3. Record the choice in `PLAN.md`.
4. Do not mix several unrelated visual languages in the same refactor batch.

Default preference order:
- First: code-native Next.js templates and component systems that fit this repo.
- Second: external inspiration from Framer/Webflow templates for layout and motion cues.
- Third: fully custom design only when the chosen baseline clearly cannot support the required structure.

Template selection criteria:
- production-ready page collection,
- strong marketing and trust sections,
- blog and legal/trust page compatibility,
- responsive behavior,
- clean component reuse,
- SEO friendliness,
- low migration risk relative to current Next.js codebase.

If a template requires paid licensing or a new CMS dependency, document that tradeoff in `PLAN.md` before implementation.

## 10) Content, Claims, and Source Discipline
- Every material healthcare, research, security, regulatory, or product claim must be backed by a verifiable source or first-party evidence artifact.
- Prefer primary sources when available: product repos, product URLs, regulatory docs, DOI/PMID records, standards docs, or first-party screenshots.
- When SmartClover-controlled applications are available, prefer authenticated first-party application evidence over stale website copy or unauthenticated marketing captures.
- If a claim cannot be verified, downgrade it, qualify it, or remove it.
- Avoid vague superlatives such as "state-of-the-art", "leading", or "advanced" unless the comparison basis is explicit and defensible.
- Favor people-first, easy-to-read, well-organized content over keyword-heavy copy.
- Link to relevant corroborating sources where trust matters.
- Keep dates visible when claims are time-sensitive.

## 11) Image and Media Discipline
- Prefer this visual-source order:
  1. authentic product screenshots captured from current authenticated CerviGuard and DataGems sessions when relevant,
  2. custom diagrams based on real workflows,
  3. licensed editorial or documentary photography,
  4. carefully selected stock,
  5. generative imagery only for clearly non-evidentiary supporting visuals.
- For SmartClover website refactor work, authenticated CerviGuard and DataGems sessions are mandatory first-party visual sources when those products or workflows are described.
- Do not use low-credibility generic AI imagery as proof on flagship, trust, regulatory, or product-detail pages.
- Every non-decorative image must have meaningful alt text.
- Every important image must be responsive, sharp on high-density displays, and appropriately cropped for mobile.
- Use `next/image` for site images unless there is a documented reason not to.
- Treat hero images and product visuals as likely LCP candidates and optimize accordingly.
- Do not hide content-critical images only in CSS backgrounds.

## 12) Page Quality Checklist
Each important page should have:
- one clear page purpose,
- a precise audience and CTA,
- evidence or proof near the top of the page,
- readable structure with meaningful headings,
- trustworthy metadata and social preview coverage,
- at least one high-quality visual or proof artifact,
- mobile-safe spacing and typography,
- working internal links to deeper trust/proof material,
- no unsupported claims.

Pages that usually deserve highest polish:
- home,
- flagship product page,
- about/company credibility page,
- trust/proof/regulatory pages,
- contact and qualification flow,
- blog index and article template.

## 13) Environment and Configuration Guardrails
- `pages/_app.jsx` initializes footer host id as `unknown`.
- `components/ServedByComponent.tsx` fetches `/api/host-id` at runtime and upgrades the display when available.
- `/api/host-id` resolves: `EE_HOST_ID` -> `R1EN_HOST_ID` -> `NEXT_PUBLIC_EE_HOST_ID` -> `unknown`.
- `/api/host-id` sets `Cache-Control: no-store, max-age=0`.
- Local `.env` contains development credentials for authenticated access to the CerviGuard and DataGems applications.
- Never commit `.env*` files.
- Never print, paste, or store `.env` secrets in docs, screenshots, logs, commits, or generated artifacts.

Known pitfalls:
- Manual versioning is easy to miss: bump `version.json` only once per commit.
- Host-id label may remain `unknown` if runtime env vars are not set by deployment.
- Blog rendering depends on compatible `remark` and `remark-html` versions plus valid front matter.
- Citation maintenance is manual: keep page claims and `public/docs/smartclover-cerviguard-citations.bib` synchronized.
- Authenticated app screenshots can accidentally expose sensitive account, test, or patient-like data if not reviewed and curated before publication.
- No active CI workflows currently exist in `.github/workflows/`; local validation is mandatory.
- Do not commit generated artifacts such as `.next/`.

## 14) Versioning Policy
- Footer version is sourced from `version.json` and rendered in `components/Layout.jsx`.
- Version increment cadence is per commit, not per edit.
- If one commit contains multiple local edit batches, increment once right before commit finalization.
- If a commit is split into multiple commits, each commit must include its own increment.

## 15) Critical Change Log Policy
Record only critical or horizontal changes and insights that affect future work across modules, release flow, reliability, security/privacy, governance, data handling, evidence policy, template direction, or refactor process.

Do not log trivial copy edits or routine formatting-only changes unless they alter a critical policy or process.

Use this entry format in `CHANGE_LOG.md`:

```md
### [YYYY-MM-DD HH:MM UTC] TYPE: <discovery|decision|change|insight|correction>
- Author: <agent or human>
- Summary: <critical fact/decision/change>
- Evidence: <files, commands, or external links>
- Impact: <why this changes future work>
- Follow-up: <required next step or "none">
- Related Entry: <timestamp/type of superseded entry, only for TYPE: correction>
```

## 16) Mandatory BUILDER-CRITIC Loop (After Every Meaningful Modification)
For each meaningful modification batch, complete this exact sequence:

1. `BUILDER PASS 1` (intent + change declaration)
- State intent and exact scope before or while editing.
- Summarize what was changed, including files and behavior/process impact.

2. `CRITIC PASS` (adversarial break attempt)
- Assume the change is wrong and attempt to break it.
- Evaluate assumptions, regressions, security/privacy, edge cases, performance, accessibility, documentation drift, template drift, source drift, and missing tests/verification.
- List concrete findings, not vague concerns.

3. `BUILDER PASS 2` (refinement + proof)
- Resolve each critic finding or explicitly accept it with rationale.
- Run verification commands and record result status (`pass` or `fail`) plus notable output.
- List residual risks.

Append the loop result to `CHANGE_LOG.md` with this format:

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

## 17) Memory Location
- Historical memory entries were intentionally pruned from `AGENTS.md` and moved to `CHANGE_LOG.md`.
- Keep `AGENTS.md` focused on durable workflow and decision rules.
- Keep `RESEARCH.md` focused on source-backed external guidance and current template/design direction.
- Keep `PLAN.md` focused on execution order, acceptance criteria, and outstanding dependencies for the active refactor.
