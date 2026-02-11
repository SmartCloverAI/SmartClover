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
6. After every modification batch, increment the manual footer version in `components/Layout.jsx`.
7. Validate with `npm run lint` and `npm run build` when feasible.

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
