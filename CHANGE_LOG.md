# SmartClover Change Log

### [2026-05-11 18:10 UTC] TYPE: change
- Author: Codex
- Summary: Added content governance artifacts and completed the first introspection/reader-value copy sweep for Home, About, and Products.
- Evidence: `CONTENT_INVENTORY.md`, `CONTENT_REDACTION_REGISTER.md`, `CONTENT_REWRITE_REVIEW.md`, `pages/index.jsx`, `pages/about.jsx`, `pages/products.jsx`, `tests/public-copy-tone.test.mjs`.
- Impact: Future content batches now have inventory, redaction memory, target-list discipline, and tests that block status-management copy such as `center of the company story`, `not the main commercial product`, and `publicly visible through`.
- Follow-up: Continue with DataGems blog review and existing blog review as separate batches.
- Related Entry: none

### [2026-05-11 18:10 UTC] ADVERSARIAL-CHECK
- Scope: Introspection and reader-value sweep for Home, About, Products, governance artifacts, and copy-tone tests.
- BUILDER Intent + Change:
  - Replaced analyst-style status narration with reader-value language for CerviGuard and DataGems.
  - Added `CONTENT_INVENTORY.md`, `CONTENT_REDACTION_REGISTER.md`, and `CONTENT_REWRITE_REVIEW.md`.
  - Added regression tests for introspective phrasing and positive assertions for reader-value product language.
- CRITIC Findings:
  - The governance files are new and should not be treated as proof that all later batches are complete.
  - The first sweep does not yet fix older blog posts or publish the DataGems article.
  - Visual graph work remains planned but not generated.
- BUILDER Response / Refinements:
  - Kept this commit scoped to the target-list rows and governance setup.
  - Recorded remaining blog and visual work as follow-up in `CONTENT_REWRITE_REVIEW.md` and `CONTENT_FIX_PLAN.md`.
  - Ran local tests, lint, build, source scans, and diff checks before versioning.
- Verification:
  - `node --test tests/public-copy-tone.test.mjs` -> pass, 12/12 tests passed.
  - `npm test` -> pass, 12/12 tests passed.
  - `npm run lint` -> pass, no ESLint warnings or errors.
  - `npm run build` -> pass, production build completed; Browserslist database warning only.
  - `git diff --check` -> pass, no whitespace errors.
  - `rg -n "center of the company story|not the main commercial product|remains a live research pilot|publicly visible through|current company posture|not presented as the main commercial product|company story" pages components lib posts public/.well-known` -> pass, no matches.
- Residual Risk: Existing blog posts, DataGems publication, NapkinAI visuals, and online verification remain separate execution batches.
