# SmartClover Change Log

### [2026-06-30 18:47 UTC] TYPE: change
- Author: Codex + xhigh execution council + xhigh review council
- Summary: Released follow-up version `3.30` to close the live Stage 1 `/contact` no-JS fallback blocker by adding server-rendered contact form semantics, browser-form HTML fallback handling, and a static `/contact/privacy` route.
- Evidence: `pages/contact.jsx`, `pages/contact/privacy.jsx`, `pages/api/contact.js`, `pages/trust/privacy-policy.jsx`, `next.config.js`, `scripts/generate-sitemap.mjs`, `public/sitemap.xml`, `tests/public-copy-tone.test.mjs`, `tests/seo-sitemap.test.mjs`, `public/openapi.json`, `version.json`.
- Impact: Contact and privacy-request paths now remain usable when JavaScript is unavailable, manual browser-form fallback copy no longer implies delivery, and `/contact/privacy` receives the same no-transform protection as `/contact`.
- Follow-up: Commit, push, wait for version `3.30` online, verify `/contact`, `/contact/privacy`, `/api/contact`, `/trust/privacy-policy`, `/sitemap.xml`, and complete live re-review before declaring Stage 1 complete.
- Related Entry: [2026-06-30 18:11 UTC] TYPE: change

### [2026-06-30 18:47 UTC] ADVERSARIAL-CHECK
- Scope: Stage 1 contact/privacy no-JS fallback fine-tune.
- BUILDER Intent + Change:
  - Added `/api/contact` `action`/`method`, browser-submittable field names, hydration-guarded submit disabling, and a server-rendered encoded mailto fallback to the contact form.
  - Added browser-form HTML responses from `/api/contact` while preserving JSON responses for fetch clients, including action-oriented manual fallback copy.
  - Added static `/contact/privacy` route, updated privacy-policy links, added sitemap coverage, and applied no-transform headers to `/contact/privacy`.
  - Incremented `version.json` and the OpenAPI status example from `3.29` to `3.30`.
- CRITIC Findings:
  - Live UI review found `/contact` had no functional no-JS/server-rendered fallback: no form action/method, no control names, disabled submit, and an email link that pointed to `#inquiry-form`.
  - Content review found manual browser-form fallback copy could imply delivery before the user opened the email fallback.
  - Content and VC/trust review found the privacy request path depended on client-side query handling and then lacked the `/contact/privacy` no-transform header after the static route was added.
- BUILDER Response / Refinements:
  - Implemented server-rendered form semantics and HTML fallback handling, then changed manual fallback copy to `Complete contact request by email`.
  - Added `/contact/privacy` as a static privacy-selected contact route and changed privacy-policy links to that route.
  - Added `/contact/privacy` to sitemap generation and `cloudflareEmailSafeHeaders`, with regression assertions for all blocker conditions.
- Verification:
  - `/home/andrei/.vscode-server/bin/7e7950df89d055b5a378379db9ee14290772148a/node scripts/generate-sitemap.mjs && /home/andrei/.vscode-server/bin/7e7950df89d055b5a378379db9ee14290772148a/node --test tests/*.test.mjs` -> pass, 23/23 tests passed.
  - `/home/andrei/.vscode-server/bin/7e7950df89d055b5a378379db9ee14290772148a/node --check pages/api/contact.js` -> pass.
  - Direct `/api/contact` handler simulation for browser-form privacy submission -> pass; HTML fallback used action-oriented title/link and excluded commercial fields.
  - `git diff --check` -> pass.
  - Source scan for stale privacy query links, raw server-rendered contact mailto, and Cloudflare obfuscation markers -> pass.
  - `npm test`, `npm run lint`, and `npm run build` -> not run because this shell has no `npm`, `corepack`, or `node_modules`.
- Residual Risk: Live deployment propagation, rendered HTML/header verification, and live re-review remain pending until after push.

### [2026-06-30 18:11 UTC] TYPE: change
- Author: Codex + xhigh execution council + xhigh review council
- Summary: Completed Stage 1 of the 2026-06-30 public-trust remediation plan and prepared release version `3.29`, covering NIS2COMPASS risk wording, public route SEO metadata, sitemap generation, Cloudflare-safe contact/API email handling, and a dedicated privacy/data-subject contact path.
- Evidence: `components/PageSeo.jsx`, route files under `pages/`, `pages/contact.jsx`, `pages/api/contact.js`, `pages/docs/api.jsx`, `posts/nis2compass-verifiable-cybersecurity-proof.md`, NIS2 article images under `public/blog/images/`, `scripts/generate-sitemap.mjs`, `public/sitemap.xml`, `tests/public-copy-tone.test.mjs`, `tests/seo-sitemap.test.mjs`, `public/openapi.json`, `version.json`.
- Impact: Public pages now use centralized route metadata, the sitemap is generated from actual routes and posts, the NIS2 article no longer exposes over-strong audit/legal/compliance wording in flagged text-bearing surfaces, and privacy requests no longer reuse commercial qualification wording or commercial-only relay fields.
- Follow-up: Commit, push, wait for version `3.29` online, run live route checks, and complete the independent xhigh live-review council before advancing to Stage 2.
- Related Entry: [2026-06-15 13:43 UTC] TYPE: change

### [2026-06-30 18:11 UTC] ADVERSARIAL-CHECK
- Scope: Stage 1 public-trust defects and SEO plumbing.
- BUILDER Intent + Change:
  - Standardized public route metadata through `PageSeo`, regenerated `public/sitemap.xml` from static routes and Markdown posts, and added dependency-free sitemap generation plus parity tests.
  - Surgically corrected NIS2COMPASS text-bearing visuals, alt text, and flagged wording from achieved/audit/legal/compliance language to readiness and reviewable-evidence language under the operator-approved Stage 1 exception.
  - Added Cloudflare-safe contact/API email handling, no-transform headers for `/contact` and `/docs/api`, manual-routing feedback, a privacy/data-subject request path, and privacy-specific fallback/API relay bodies.
  - Incremented `version.json` and the OpenAPI status example from `3.28` to `3.29`.
- CRITIC Findings:
  - The review council initially blocked release because NIS2 visual/text wording could be read as over-strong compliance proof, product social metadata used a generic image, and contact/API fallbacks could be corrupted or misleading under Cloudflare email rewriting.
  - A later content pass found privacy/data-subject requests still received commercial success wording and commercial intake fields in fallback/API relay bodies.
  - The VC/trust review repeatedly flagged release governance as incomplete until `CHANGE_LOG.md`, `version.json`, and OpenAPI parity were updated.
- BUILDER Response / Refinements:
  - Replaced flagged NIS2 visual text and article references with readiness/reviewable-evidence wording, updated article `updated` metadata, and added tests blocking the risky phrases.
  - Updated contact and privacy handling so privacy requests have separate subject lines, body fields, and success copy, while manual relay stays a needs-action state.
  - Added regression tests for PageSeo adoption, centralized route Head usage, sitemap parity, NIS2 wording, contact/API email safety, privacy routing, and OpenAPI version parity.
- Verification:
  - `/home/andrei/.vscode-server/bin/7e7950df89d055b5a378379db9ee14290772148a/node scripts/generate-sitemap.mjs && /home/andrei/.vscode-server/bin/7e7950df89d055b5a378379db9ee14290772148a/node --test tests/*.test.mjs` -> pass, 22/22 tests passed.
  - `/home/andrei/.vscode-server/bin/7e7950df89d055b5a378379db9ee14290772148a/node --check pages/api/contact.js` -> pass.
  - `git diff --check` -> pass.
  - Public source scan for over-strong NIS2 wording, static mailto links, `user@example.com`, and Cloudflare obfuscation markers -> pass, no matches outside the API implementation.
  - `npm test`, `npm run lint`, and `npm run build` -> not run because this shell has no `npm`, `corepack`, or `node_modules`; the available VS Code-bundled Node binary was used for feasible tests.
- Residual Risk: Live deployment propagation and rendered-route verification remain pending until after push; direct JSX build validation could not be run without the project package manager/dependencies.

### [2026-06-15 13:43 UTC] TYPE: change
- Author: Codex
- Summary: Added NIS2COMPASS project links and readability emphasis to the NIS2COMPASS blog article, including a linked article-title token and release version `3.28`.
- Evidence: `posts/nis2compass-verifiable-cybersecurity-proof.md`, `pages/blog/[slug].jsx`, `tests/public-copy-tone.test.mjs`, `public/openapi.json`, `version.json`.
- Impact: The article now directs readers to `https://www.nis2compass.eu`, uses a callout-style opening, and highlights critical takeaways without changing the article's substantive claims.
- Follow-up: Commit, push, wait for version `3.28` online, then verify `/api/status`, article links, callout/highlight rendering, and the Further Reading entry.
- Related Entry: 2026-06-15 13:26 UTC TYPE: correction

### [2026-06-15 13:43 UTC] ADVERSARIAL-CHECK
- Scope: NIS2COMPASS article link and readability pass.
- BUILDER Intent + Change:
  - Converted body references to `NIS2COMPASS` into links to `https://www.nis2compass.eu` and added the project link to Further Reading.
  - Converted the opening paragraph into a Markdown blockquote callout and added selective bold emphasis for key takeaways.
  - Added a scoped article-title renderer so the `NIS2COMPASS` token in the article H1 links to the project website.
- CRITIC Findings:
  - Title text is rendered outside Markdown, so body-only linking would leave the visible H1 mention unlinked.
  - Image alt text contains NIS2COMPASS mentions; wrapping images in links makes the visual/alt context point to the project without changing the supplied image assets.
  - Overuse of emphasis could make the article noisy; emphasis was kept to key decision, evidence, AI-boundary, privacy, and outcome sentences.
- BUILDER Response / Refinements:
  - Added tests that remove linked body mentions and fail if unlinked `NIS2COMPASS` remains in the article body outside image alt text.
  - Added test coverage for the callout, bold takeaways, Further Reading link, and H1 title-link renderer.
  - Bumped `version.json` and `public/openapi.json` once to `3.28` for this release.
- Verification:
  - `node --test tests/public-copy-tone.test.mjs` -> pass, 17/17 tests passed.
  - `npm test` -> pass, 17/17 tests passed.
  - `npm run lint` -> pass, no ESLint warnings or errors.
  - `npm run build` -> pass, production build completed and generated `/blog/nis2compass-verifiable-cybersecurity-proof`.
  - `git diff --check` -> pass, no whitespace errors.
- Residual Risk: Online deployment propagation and live route rendering still need verification after push.

### [2026-06-15 13:26 UTC] TYPE: correction
- Author: Codex
- Summary: Restored the NIS2COMPASS blog article as a verbatim publication of `_raw/article.zip/article_1.md` after the operator clarified that supplied material must not be silently processed or humanized.
- Evidence: `posts/nis2compass-verifiable-cybersecurity-proof.md`, `pages/blog/index.jsx`, `pages/blog/[slug].jsx`, `public/blog/images/`, `tests/public-copy-tone.test.mjs`, `public/openapi.json`, `version.json`.
- Impact: Future article integrations must preserve operator-supplied publication material verbatim unless the operator explicitly chooses processed/reviewed/humanized publication. The blog template now supports `subtitle` as a metadata fallback so source frontmatter does not need to be rewritten only to satisfy the index/meta description.
- Follow-up: Commit, push, wait for version `3.27` online, then verify `/api/status`, the NIS2COMPASS route, the blog index summary, and all three original image assets.
- Related Entry: 2026-06-15 10:26 UTC TYPE: change

### [2026-06-15 13:26 UTC] ADVERSARIAL-CHECK
- Scope: Verbatim NIS2COMPASS article correction.
- BUILDER Intent + Change:
  - Replaced the processed NIS2COMPASS post with the exact Markdown supplied in `_raw/article.zip/article_1.md`.
  - Hosted the original image filenames under `public/blog/images/` so the article's relative `images/...` links render without changing the article body.
  - Added `subtitle` fallback support to the blog index and article metadata, updated the regression test to require verbatim article anchors, and bumped the release version to `3.27`.
- CRITIC Findings:
  - The earlier `3.26` release silently rewrote the article and omitted the supplied hero image, which violated the operator's intended publication mode.
  - Preserving the raw Markdown restores stronger claim language and the original "Achieving NIS2 Compliance" hero image; this is now an explicit operator decision, not an agent editorial decision.
  - Relative image paths would fail unless hosted under the route-compatible `/blog/images/` public path.
- BUILDER Response / Refinements:
  - Confirmed `diff -u /tmp/smartclover-article/article_1.md posts/nis2compass-verifiable-cybersecurity-proof.md` produced no output, proving the Markdown file is identical to the supplied source.
  - Kept only mechanical platform changes outside the article source: subtitle metadata fallback, asset placement, version metadata, and tests.
  - Deleted the previous processed-copy NIS2COMPASS image assets under `public/images/blog/` because the verbatim article uses the original relative image filenames.
- Verification:
  - `node --test tests/public-copy-tone.test.mjs` -> pass, 17/17 tests passed.
  - `npm test` -> pass, 17/17 tests passed.
  - `npm run lint` -> pass, no ESLint warnings or errors.
  - `npm run build` -> pass, production build completed and generated `/blog/nis2compass-verifiable-cybersecurity-proof`.
  - `git diff --check` -> pass, no whitespace errors.
- Residual Risk: Online deployment propagation and live route rendering still need verification after push.

### [2026-06-15 10:26 UTC] TYPE: change
- Author: Codex
- Summary: Published the NIS2COMPASS blog article from the supplied article package with scoped readiness-evidence language, local visual assets, and release version `3.26`.
- Evidence: `posts/nis2compass-verifiable-cybersecurity-proof.md`, `public/images/blog/nis2compass-collaboration-flow.png`, `public/images/blog/nis2compass-evidence-flow.png`, `tests/public-copy-tone.test.mjs`, `public/openapi.json`, `version.json`.
- Impact: The public blog now announces the SmartClover and AI STM Learning NIS2COMPASS work without relying on package-local image paths, compliance-certification claims, or AI-generated-sounding audit guarantee language.
- Follow-up: Commit, push, wait for version `3.26` online, then verify `/api/status` and the new blog route.
- Related Entry: 2026-05-11 19:32 UTC TYPE: change

### [2026-06-15 10:26 UTC] ADVERSARIAL-CHECK
- Scope: NIS2COMPASS blog launch.
- BUILDER Intent + Change:
  - Converted the supplied article into a public SmartClover blog post with a clear NIS2 readiness-evidence frame.
  - Hosted the selected collaboration and evidence-flow images locally under `public/images/blog/`.
  - Added regression coverage for the new post, local assets, version-schema alignment, and risky compliance phrases.
- CRITIC Findings:
  - The supplied hero image included embedded "Achieving NIS2 Compliance" wording, which could read as an achieved compliance claim; it was not used in the public post.
  - The raw article contained phrases such as "may still fail the compliance test", "legally meaningful", and "audit-ready proof"; those were replaced with reviewable-evidence language.
  - Blog Markdown cannot safely reference package-local `images/...` paths because rendered article URLs live under `/blog/`; all public image references must be absolute site paths.
- BUILDER Response / Refinements:
  - Reframed the announcement as a project and methodology overview, added an explicit "not legal advice" statement, and kept AI support subordinate to human review.
  - Added `tests/public-copy-tone.test.mjs` coverage for required NIS2COMPASS anchors and rejected overclaim/package-local fragments.
  - Bumped `version.json` and `public/openapi.json` once to `3.26` for this release.
- Verification:
  - `node --test tests/public-copy-tone.test.mjs` -> pass, 17/17 tests passed.
  - `npm test` -> pass, 17/17 tests passed.
  - `npm run lint` -> pass, no ESLint warnings or errors.
  - `npm run build` -> pass, production build completed and generated `/blog/nis2compass-verifiable-cybersecurity-proof`.
  - `git diff --check` -> pass, no whitespace errors.
- Residual Risk: Online deployment propagation and live route rendering still need verification after push.

### [2026-05-11 19:32 UTC] TYPE: change
- Author: Codex
- Summary: Added the machine-readable status cleanup review and closure note to the content rewrite review log.
- Evidence: `CONTENT_REWRITE_REVIEW.md`, `public/openapi.json`, `version.json`.
- Impact: The review trail now records the final machine-readable cleanup batch and states the remaining PDF/deck risk explicitly.
- Follow-up: Commit, push, wait for version `3.25` online, then verify `/api/status` and `/openapi.json`.
- Related Entry: 2026-05-11 19:24 UTC TYPE: change

### [2026-05-11 19:32 UTC] ADVERSARIAL-CHECK
- Scope: Review-log closure for content-fix execution.
- BUILDER Intent + Change:
  - Added a `CONTENT_REWRITE_REVIEW.md` batch record for machine-readable status cleanup.
  - Added a closure note that keeps PDF/deck review open instead of falsely closing the whole content plan.
  - Updated the OpenAPI status version example and site version for this documentation batch.
- CRITIC Findings:
  - Without this entry, the changelog would show the machine-readable cleanup but the content rewrite review log would not.
  - The plan should not be marked closed while public PDF/deck review remains pending.
- BUILDER Response / Refinements:
  - Kept the closure wording narrow: website-content batches are deployed; PDF/deck work remains active.
- Verification:
  - `node --test tests/public-copy-tone.test.mjs` -> pass, 16/16 tests passed.
  - `npm test` -> pass, 16/16 tests passed.
  - `npm run lint` -> pass, no ESLint warnings or errors.
  - `npm run build` -> pass, production build completed; Browserslist database warning only.
  - `git diff --check` -> pass, no whitespace errors.
- Residual Risk: Online `/api/status` and `/openapi.json` checks are still required after deployment.

### [2026-05-11 19:24 UTC] TYPE: change
- Author: Codex
- Summary: Aligned the OpenAPI status schema example with the current public site version and added a regression test for future version bumps.
- Evidence: `public/openapi.json`, `tests/public-copy-tone.test.mjs`, `version.json`.
- Impact: Machine-readable API documentation no longer carries a stale site-version example after content deployments.
- Follow-up: Commit, push, wait for version `3.24` online, then verify `/api/status` and `/openapi.json`.
- Related Entry: 2026-05-11 19:03 UTC TYPE: change

### [2026-05-11 19:24 UTC] ADVERSARIAL-CHECK
- Scope: Machine-readable public API consistency after content and visual batches.
- BUILDER Intent + Change:
  - Scanned API and well-known public artifacts for evaluator-language, redaction regressions, unsupported claims, and provider-specific wording.
  - Updated the `StatusResponse.version.example` value in `public/openapi.json`.
  - Added a test that requires the OpenAPI status version example to match `version.json`.
- CRITIC Findings:
  - No banned evaluator-language was found in `lib`, `pages/api`, `public/.well-known`, or `public/openapi.json`.
  - The OpenAPI version example was stale (`3.8`) and could confuse automated consumers comparing `/api/status` to documentation.
- BUILDER Response / Refinements:
  - Kept the change narrow to the stale status example and test coverage.
- Verification:
  - `node --test tests/public-copy-tone.test.mjs` -> pass, 16/16 tests passed.
  - `npm test` -> pass, 16/16 tests passed.
  - `npm run lint` -> pass, no ESLint warnings or errors.
  - `npm run build` -> pass, production build completed; Browserslist database warning only.
  - `rg -n "named accountability|public profile references|support evaluation|stakeholders|product maturity|trust-ready|diligence-ready|company profile|visible product artifacts|public record|identifiable prior work|center of the company story|not the main commercial product|remains a live research pilot|current company posture|publicly visible through|company story|boutique AI studio|100%|guaranteed|certified (product|platform|company|compliance)|approved MDR|final MDR" lib pages/api public/.well-known public/openapi.json` -> pass, no matches.
  - `git diff --check` -> pass, no whitespace errors.
- Residual Risk: Online `/openapi.json` and `/api/status` checks are still required after deployment.

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

### [2026-07-01 04:36 UTC] TYPE: change
- Author: Codex + xhigh Stage 2 implementation council
- Summary: Upgraded the SmartClover blog into a clinical evidence journal system with featured index hierarchy, richer article metadata, article heroes, long-article TOC, figure-aware Markdown rendering, related reading, and Blog/Article JSON-LD.
- Evidence: `lib/posts.js`, `pages/blog/index.jsx`, `pages/blog/[slug].jsx`, `styles/refactor.css`, `tests/blog-editorial.test.mjs`, `version.json`, `public/openapi.json`; commands `node --test tests/*.test.mjs`, `node --test tests/blog-editorial.test.mjs`, `node --test tests/seo-sitemap.test.mjs`, `node --check lib/posts.js`, `node --check tests/blog-editorial.test.mjs`, `git diff --check`, CSS balance/source checks.
- Impact: Stage 2 now gives blog readers a stronger editorial path without rewriting operator-supplied article bodies; the NIS2COMPASS article can expose its author, partner, updated date, hero image, long-article contents, and related context while preserving claim discipline.
- Follow-up: Commit and push version `3.31`, wait for deployment, verify `/blog` and key article routes online, then run an independent xhigh live review council before closing Stage 2.
- Related Entry: [2026-05-11 18:46 UTC] TYPE: change

### [2026-07-01 04:36 UTC] ADVERSARIAL-CHECK
- Scope: Stage 2 blog/editorial system implementation.
- BUILDER Intent + Change:
  - Used two xhigh visual/artwork reviewers, one xhigh UI/UX implementation reviewer, and one xhigh content-quality reviewer to select the clinical evidence journal direction before build work.
  - Enriched the Markdown data layer with normalized summaries, topics, tags, author/partner metadata, hero-image metadata, reading time, TOC entries, related posts, local image dimensions, lazy image attributes, and local image-path safety checks.
  - Replaced the blog index with a featured article, topic labels, thumbnails, reading metadata, and Blog JSON-LD.
  - Replaced the article template with an editorial hero, metadata strip, summary/key-points box, TOC for long posts, figure-aware Markdown body, related reading, NIS2COMPASS title linking, and BlogPosting JSON-LD.
  - Added scoped clinical-journal CSS and a focused `tests/blog-editorial.test.mjs` regression file.
  - Incremented the release version from `3.30` to `3.31` and updated the OpenAPI status example.
- CRITIC Findings:
  - The first implementation pass risked duplicating the hero image because the article template and Markdown body could both render the same first image.
  - Markdown captions would remain only presentational if image paragraphs were not converted into article figures.
  - Existing public-copy tests depended on NIS2COMPASS subtitle fallback behavior and title linking, so the new templates had to preserve those source-level safeguards.
  - Local build validation is blocked because `npm` is unavailable and `node_modules` is absent in this checkout.
- BUILDER Response / Refinements:
  - Added rendered-HTML figure conversion for Markdown images and moved matching first-image captions into hero metadata.
  - Removed duplicate hero figures from rendered body HTML without changing source Markdown.
  - Kept article summaries sourced from `summary`, `excerpt`, or `subtitle` only; no NIS2COMPASS body prose was rewritten.
  - Preserved NIS2COMPASS title linking and existing project-link tests.
  - Added dependency-aware blog tests that run source checks locally and skip only integration checks requiring missing installed packages.
- Verification:
  - `node --test tests/*.test.mjs` -> pass, 24 passed and 3 dependency-backed blog integration checks skipped because `gray-matter`, `remark`, and `remark-html` are not installed.
  - `node --test tests/blog-editorial.test.mjs` -> pass, 1 passed and 3 dependency-backed checks skipped for the same missing packages.
  - `node --test tests/seo-sitemap.test.mjs` -> pass, 3/3.
  - `node --check lib/posts.js` -> pass.
  - `node --check tests/blog-editorial.test.mjs` -> pass.
  - CSS balance/source checks -> pass.
  - `git diff --check` -> pass.
  - `npm --version` -> fail, `npm` is not installed in this shell, so `npm run lint` and `npm run build` could not be run locally.
- Residual Risk: Full Next.js lint/build and browser visual QA must be confirmed through deployment or another environment with `npm` and installed dependencies; live Stage 2 council review remains required after version `3.31` is online.

### [2026-07-01 04:50 UTC] TYPE: change
- Author: Codex + xhigh live review council
- Summary: Applied the Stage 2 live-review fix patch for blog topic classification, explicit-summary discipline, TOC anchors, Markdown image attributes, duplicate hero/body images, and NIS2 inline figure captions.
- Evidence: `lib/posts.js`, `tests/blog-editorial.test.mjs`, `version.json`, `public/openapi.json`; live council findings against `/blog`, `/blog/nis2compass-verifiable-cybersecurity-proof`, and `/blog/datagems-synthetic-data-workflows`.
- Impact: The blog editorial system no longer mislabels NIS2 or CerviGuard content, avoids body-derived summary text, makes TOC links match rendered heading IDs, and keeps DataGems/NIS2 diagrams from duplicating or losing lazy-loading metadata.
- Follow-up: Commit and push version `3.32`, wait for deployment, re-check live blog routes, and rerun an independent xhigh live review council on the fixed release.
- Related Entry: [2026-07-01 04:36 UTC] TYPE: change

### [2026-07-01 04:50 UTC] ADVERSARIAL-CHECK
- Scope: Stage 2 post-deploy live-review corrections.
- BUILDER Intent + Change:
  - Added slug-level editorial defaults for topic labels, tags, and non-placeholder hero images.
  - Removed body-derived summary fallback so article summary UI uses explicit metadata only.
  - Matched TOC IDs to the `remark-html` rendered heading prefix.
  - Added rendered-HTML image post-processing for `loading="lazy"` and `decoding="async"`.
  - Converted inline Markdown image/caption paragraphs to `article-figure`, removed duplicate hero figures, and added caption defaults for NIS2 inline diagrams.
  - Incremented the release version from `3.31` to `3.32` and updated the OpenAPI status example.
- CRITIC Findings:
  - The xhigh visual reviewer found visible topic-chip misclassification, repeated fallback thumbnails, missing NIS2 inline captions, and weak DataGems scan structure.
  - The xhigh content reviewer found NIS2 miscategorized as `Research Data` and summary sourcing not enforced by the data layer.
  - The xhigh UI/UX reviewer found broken TOC anchors because rendered headings were prefixed with `user-content-`, DataGems hero/body image duplication, and missing runtime image attributes.
- BUILDER Response / Refinements:
  - Fixed topic/thumbnail defaults without editing article prose or changing operator-supplied NIS2 body content.
  - Removed the first-content summary fallback and kept summary/dek logic tied to explicit front matter fields.
  - Made TOC IDs use the rendered heading prefix and updated regression expectations.
  - Added an image HTML post-process step after `remark-html` so lazy/decoding attributes survive sanitization.
  - Added figure conversion patterns that handle inline image plus italic-caption paragraphs.
- Verification:
  - `node --test tests/*.test.mjs` -> pass, 24 passed and 3 dependency-backed blog integration checks skipped because `gray-matter`, `remark`, and `remark-html` are not installed.
  - `node --check lib/posts.js` -> pass.
  - `node --check tests/blog-editorial.test.mjs` -> pass.
  - `git diff --check` -> pass.
  - `npm --version` -> fail, `npm` is not installed in this shell, so `npm run lint` and `npm run build` could not be run locally.
- Residual Risk: Live deployment and council re-review are still required before closing Stage 2 because the decisive failures were visible only after a deployed build with installed Markdown dependencies.

### [2026-07-01 05:00 UTC] TYPE: change
- Author: Codex
- Summary: Linked the generated NIS2COMPASS mention inside the renderer-injected collaboration figure caption, resolving the only non-blocking content-review advisory from the fixed-release council.
- Evidence: `lib/posts.js`, `version.json`, `public/openapi.json`; live council advisory from the `3.32` content-quality re-review.
- Impact: Generated figure-caption text now follows the same project-linking rule as the operator-supplied NIS2COMPASS article body without editing article Markdown prose.
- Follow-up: Commit and push version `3.33`, wait for deployment, and verify the generated caption link online.
- Related Entry: [2026-07-01 04:50 UTC] TYPE: change

### [2026-07-01 05:00 UTC] ADVERSARIAL-CHECK
- Scope: Stage 2 final generated-caption link advisory.
- BUILDER Intent + Change:
  - Updated the generated NIS2 collaboration-flow caption so `NIS2COMPASS` links to `https://www.nis2compass.eu`.
  - Left `posts/nis2compass-verifiable-cybersecurity-proof.md` unchanged.
  - Incremented the release version from `3.32` to `3.33` and updated the OpenAPI status example.
- CRITIC Findings:
  - The `3.32` council passed closure but noted one generated caption mention was not linked.
  - Changing generated caption HTML must not weaken source-controlled verbatim-publication discipline for the NIS2 article body.
- BUILDER Response / Refinements:
  - Made the fix only in `lib/posts.js` caption defaults, where the generated text originates.
  - Kept the operator-supplied article source untouched.
- Verification:
  - `node --test tests/*.test.mjs` -> pass, 24 passed and 3 dependency-backed blog integration checks skipped because `gray-matter`, `remark`, and `remark-html` are not installed.
  - `node --check lib/posts.js` -> pass.
  - `git diff --check` -> pass.
  - `npm --version` -> fail, `npm` is not installed in this shell, so `npm run lint` and `npm run build` could not be run locally.
- Residual Risk: Live deployment verification remains required for version `3.33`.
