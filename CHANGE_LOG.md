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

### [2026-05-11 18:17 UTC] TYPE: change
- Author: Codex
- Summary: Fixed a footer status-management phrase found during online verification of version `3.18`.
- Evidence: `components/Layout.jsx`, `tests/public-copy-tone.test.mjs`, `CONTENT_REWRITE_REVIEW.md`.
- Impact: The footer now follows the same reader-value rule as Home, About, and Products, and tests block `DataGems remains the live research pilot`.
- Follow-up: Re-validate, deploy as a new version, and verify online.
- Related Entry: 2026-05-11 18:10 UTC TYPE: change

### [2026-05-11 18:17 UTC] ADVERSARIAL-CHECK
- Scope: Footer reader-value follow-up after online verification.
- BUILDER Intent + Change:
  - Replaced footer copy that described DataGems by internal status with copy that explains its research-workflow role.
  - Added `remains the live research pilot` to the tone regression test.
- CRITIC Findings:
  - This was not caught by the first source scan because the phrase differed from the original target by one article.
  - The footer appears on every route, so stale footer language has broad public impact.
- BUILDER Response / Refinements:
  - Extended the banned fragment list to cover both `remains a live research pilot` and `remains the live research pilot`.
  - Added positive footer assertions for CerviGuard and DataGems reader-value language.
- Verification:
  - `npm test` -> pass, 12/12 tests passed.
  - `npm run lint` -> pass, no ESLint warnings or errors.
  - `npm run build` -> pass, production build completed; Browserslist database warning only.
  - `git diff --check` -> pass, no whitespace errors.
  - `rg -n "center of the company story|not the main commercial product|not presented as the main commercial product|remains a live research pilot|remains the live research pilot|publicly visible through|current company posture|company story" pages components lib posts public/.well-known` -> pass, no matches.
- Residual Risk: Broader blog and visual work remain separate batches.
