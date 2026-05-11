# SmartClover Change Log

### [2026-05-11 19:03 UTC] TYPE: change
- Author: Codex
- Summary: Added locally hosted NapkinAI visual diagrams to the DataGems and CerviGuard blog posts plus the cloud architecture and healthcare cybersecurity service pages.
- Evidence: `posts/datagems-synthetic-data-workflows.md`, `posts/cerviguard-remote-screening-foundations.md`, `pages/cloud-architecture.jsx`, `pages/cybersecurity.jsx`, `public/images/blog/`, `public/images/architecture/`, `tests/public-copy-tone.test.mjs`.
- Impact: Public content now has first-party hosted workflow and service visuals without transient NapkinAI URLs, provider-name exposure, or unsupported compliance, clinical-outcome, autonomous-security, or breach-prevention claims.
- Follow-up: Commit, push, wait for version `3.23` online, then verify the four affected routes render the local images and scoped captions.
- Related Entry: 2026-05-11 18:46 UTC TYPE: change

### [2026-05-11 19:03 UTC] ADVERSARIAL-CHECK
- Scope: NapkinAI visual batch under Task 6C.
- BUILDER Intent + Change:
  - Generated and reviewed visual candidates for DataGems workflow, CerviGuard workflow, cloud-on-edge boundaries, and healthcare cybersecurity/resilience.
  - Hosted the selected PNG assets under `public/images/...` instead of referencing expiring API download URLs.
  - Added blog image references, service-page `next/image` figures, captions, and visual styling.
- CRITIC Findings:
  - Several generated candidates were rejected for typos, generic framework drift, extra filler labels, cramped text, or over-broad AI/security phrasing.
  - Public pages must not expose NapkinAI API URLs or temporary download references.
  - Visual captions must keep the same claim boundaries as the surrounding copy.
- BUILDER Response / Refinements:
  - Regenerated the cloud-boundary visual with exact-label and provider-neutral constraints.
  - Selected visuals that preserve current product/service boundaries and added tests for local hosting and scoped visual context.
- Verification:
  - `node --test tests/public-copy-tone.test.mjs` -> pass, 15/15 tests passed.
  - `npm test` -> pass, 15/15 tests passed.
  - `npm run lint` -> pass, no ESLint warnings or errors.
  - `npm run build` -> pass, production build completed; Browserslist database warning only.
  - `file public/images/blog/datagems-workflow-napkin_v1.0.png public/images/blog/cerviguard-workflow-napkin_v1.0.png public/images/architecture/cloud-on-edge-boundaries-napkin_v1.0.png public/images/architecture/healthcare-cyber-resilience-loop-napkin_v1.0.png` -> pass, all four assets are valid PNGs.
  - `rg -n "api\\.napkin\\.ai|generated_files|download_url|/v1/visual/" posts pages components styles public/.well-known` -> pass, no matches.
  - `rg -n "approved peers|cerviguard-screening-workflow|de-identified case material|fully compliant|breach-proof|guaranteed|guarantee|DataGems anonymizes|HIPAA compliant|clinical outcomes|100 percent" posts pages components public/.well-known` -> pass, no matches.
  - `git diff --check` -> pass, no whitespace errors.
- Residual Risk: Online deployment and live route rendering checks are still required before closing version `3.23`.

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

### [2026-05-11 18:22 UTC] TYPE: change
- Author: Codex
- Summary: Removed nearby product-status narration from Home, Products, and About metadata after the `3.19` online sweep.
- Evidence: `pages/index.jsx`, `pages/products.jsx`, `pages/about.jsx`, `tests/public-copy-tone.test.mjs`, `CONTENT_REWRITE_REVIEW.md`.
- Impact: Public copy now explains that CerviGuard is the product readers review first and DataGems supports synthetic-data research workflows, instead of narrating internal commercial hierarchy.
- Follow-up: Re-validate, deploy as a new version, and verify online.
- Related Entry: 2026-05-11 18:17 UTC TYPE: change

### [2026-05-11 18:22 UTC] ADVERSARIAL-CHECK
- Scope: Nearby status wording in Home, Products, and About metadata.
- BUILDER Intent + Change:
  - Replaced `CerviGuard remains the primary commercial product` with reader-value wording.
  - Replaced `DataGems operating as a live research pilot` and related metadata with synthetic-data research workflow language.
  - Added regression tests for the exact newly discovered phrases.
- CRITIC Findings:
  - The original scan was too narrow and allowed semantically similar status wording to remain.
  - Metadata needed the same reader-value alignment as visible page copy.
- BUILDER Response / Refinements:
  - Extended tests to block nearby phrases, not just the original exact text.
  - Updated metadata and visible page copy together.
- Verification:
  - `npm test` -> pass, 12/12 tests passed.
  - `npm run lint` -> pass, no ESLint warnings or errors.
  - `npm run build` -> pass, production build completed; Browserslist database warning only.
  - `git diff --check` -> pass, no whitespace errors.
  - `rg -n "center of the company story|not the main commercial product|not presented as the main commercial product|remains a live research pilot|remains the live research pilot|remains the primary commercial product|operating as a live research pilot|publicly visible through|current company posture|company story" pages components lib posts public/.well-known` -> pass, no matches.
- Residual Risk: Blog posts and visual graph work remain separate batches.

### [2026-05-11 18:32 UTC] TYPE: change
- Author: Codex
- Summary: Published the DataGems synthetic-data workflow blog candidate and tightened unsupported DataGems inference wording on the Products page.
- Evidence: `posts/datagems-synthetic-data-workflows.md`, `pages/products.jsx`, `tests/public-copy-tone.test.mjs`, `CONTENT_REWRITE_REVIEW.md`.
- Impact: DataGems public copy now explains schema-first research workflow value, JSON/CSV exports, configured peers, and bounded research-pilot scope without internal portfolio-status narration or unsupported SLM-first positioning.
- Follow-up: Commit, push, wait for version `3.21` online, verify `/blog/datagems-synthetic-data-workflows`, then continue with existing blog review and NapkinAI visual batches.
- Related Entry: 2026-05-11 18:22 UTC TYPE: change

### [2026-05-11 18:32 UTC] ADVERSARIAL-CHECK
- Scope: DataGems blog publication and related Products page DataGems wording.
- BUILDER Intent + Change:
  - Added the approved DataGems article with source-linked synthetic-data, EHDS, and AI Act boundary context.
  - Replaced `approved peers` with `configured peers`.
  - Replaced `SLM-first generation` claims with evidence-backed internal inference path and saved external inference profile wording.
  - Added tests that block rejected draft phrases and DataGems overclaims.
- CRITIC Findings:
  - Review agents flagged internal hierarchy language, unsupported governance wording, `SLM-first` strategy claims, and too-broad CTA language.
  - The new blog route must not ship proposal notes, claim maps, reviewer questions, or temporary visual URLs.
  - Existing blog posts remain unreviewed as a separate batch.
- BUILDER Response / Refinements:
  - Public post contains only the article body and approved frontmatter.
  - The CTA is scoped to a bounded research or data-workflow pilot with one schema, one synthetic dataset, reviewable export, and documented limits.
  - Product-page DataGems copy now matches the evidence used for the blog.
- Verification:
  - `node --test tests/public-copy-tone.test.mjs` -> pass, 13/13 tests passed.
  - `npm test` -> pass, 13/13 tests passed.
  - `npm run lint` -> pass, no ESLint warnings or errors.
  - `npm run build` -> pass, production build completed and includes `/blog/datagems-synthetic-data-workflows`; Browserslist database warning only.
  - `git diff --check` -> pass, no whitespace errors.
  - `rg -n "HIPAA compliant|GDPR compliant|EHDS compliant|guarantees privacy|DataGems anonymizes patient data|DataGems is HIPAA compliant|DataGems provides differential privacy|DataGems guarantees privacy|DataGems creates clinically validated datasets|DataGems replaces real-world data|DataGems is a medical device|DataGems supports clinical diagnosis|diagnostic system|100%|guaranteed|guarantee|public profile|support evaluation|center of the company story|not the main commercial product|remains a live research pilot|publicly visible through|current company posture|human-in-the-loop|every deployment satisfies healthcare compliance|before data ever leaks|cannot silently remove|single product promise|Ratio1|approved peers|SLM-first generation|governed experimentation|governed synthetic-data|unlock|transform|seamless|revolutionary|game-changing|privacy-safe|100 percent" posts/datagems-synthetic-data-workflows.md pages/products.jsx pages components lib public/.well-known` -> pass, no matches.
- Residual Risk: Online deployment and blog URL verification are still required for version `3.21`; prior blog posts and NapkinAI graphics remain separate planned batches.

### [2026-05-11 18:46 UTC] TYPE: change
- Author: Codex
- Summary: Completed the existing-blog review batch for CerviGuard field context, healthcare AI research, cybersecurity/resilience, and cloud-on-edge deployment posts.
- Evidence: `posts/cerviguard-remote-screening-foundations.md`, `posts/healthcare-ai-research.md`, `posts/cybersecurity-healthcare-ledger.md`, `posts/on-prem-ledger-ci-cd.md`, `tests/public-copy-tone.test.mjs`, `CONTENT_REWRITE_REVIEW.md`.
- Impact: Older posts now avoid unsupported current-model/data claims, outcome-adjacent CerviGuard phrasing, broad cybersecurity promises, and HTML break formatting while preserving scoped cloud-on-edge and cybersecurity differentiators.
- Follow-up: Commit, push, wait for version `3.22` online, verify all changed blog URLs, then continue with the NapkinAI visual batch.
- Related Entry: 2026-05-11 18:32 UTC TYPE: change

### [2026-05-11 18:46 UTC] ADVERSARIAL-CHECK
- Scope: Existing blog posts under Task 6B.
- BUILDER Intent + Change:
  - Rewrote `healthcare-ai-research.md` from unsupported RAG/data claims into source-linked evidence and research-boundary language.
  - Tightened `cerviguard-remote-screening-foundations.md` around workflow value rather than prevention/outcome claims.
  - Rewrote `cybersecurity-healthcare-ledger.md` and `on-prem-ledger-ci-cd.md` with scoped architecture, security, and service language.
  - Added internal links to product, cloud, cybersecurity, proof, and trust pages.
- CRITIC Findings:
  - Review agents flagged remaining outcome-adjacent CerviGuard claims, broad `secure clinical system` wording, and missing evidence mapping for cloud/cyber differentiators.
  - Posts needed reader-value routing links and `Last reviewed` dates.
- BUILDER Response / Refinements:
  - Added an evidence map in `CONTENT_REWRITE_REVIEW.md` for cervical-screening references, CerviGuard workflow, cloud-on-edge service capability, architecture claims, and cybersecurity/resilience service scope.
  - Preserved user-confirmed true differentiators while tying them to approved deployment models, scoped engagements, and contract/environment boundaries.
  - Added tests that block the old unsupported fragments and require scoped blog language.
- Verification:
  - `node --test tests/public-copy-tone.test.mjs` -> pass, 14/14 tests passed.
  - `npm test` -> pass, 14/14 tests passed.
  - `npm run lint` -> pass, no ESLint warnings or errors.
  - `npm run build` -> pass, production build completed; Browserslist database warning only.
  - `git diff --check` -> pass, no whitespace errors.
  - `rg -n "process large datasets, identify patterns|We train retrieval-augmented models|community health records similar to those documented|SmartClover's knowledge graph|Each answer includes the underlying|clinicians in the loop|policy-controlled AI deployment with ledger-backed controls|role-based policy bundles define|approved edge/on-prem workers|flagship healthcare AI project for cervical cancer prevention|AI-assisted interpretation|reduce missed follow-up signals|SmartClover uses AI in research workflows|DataGems belongs in the research track|cybersecurity dashboards|SmartClover's role is to help keep those questions visible|This deployment model aligns with our operating principle|de-identified cervical image intake|secure clinical system|SLM-first generation|approved peers|Ratio1|guaranteed|every deployment satisfies healthcare compliance|before data ever leaks|cannot silently remove|single product promise|unlock|transform|seamless|revolutionary|game-changing|privacy-safe|100 percent|100%" posts` -> pass, no matches.
- Residual Risk: Online deployment and blog URL verification are still required for version `3.22`; NapkinAI visuals remain a separate planned batch.
