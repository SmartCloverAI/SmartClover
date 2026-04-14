# SmartClover / CerviGuard Critical Change Log (append-only)

Record only critical/fundamental changes and major insights.
If an old entry is wrong, append a `TYPE: correction` entry instead of editing history.

## Entry Format

```md
### [YYYY-MM-DD HH:MM UTC] TYPE: <discovery|decision|change|insight|correction>
- Author: <agent or human>
- Summary: <critical fact/decision/change>
- Evidence: <files, commands, or external links>
- Impact: <why this changes future work>
- Follow-up: <required next step or "none">
- Related Entry: <timestamp/type of superseded entry, only for TYPE: correction>
```

### [2026-02-11 00:00 UTC] TYPE: discovery
- Author: Codex
- Summary: Runtime stack is Next.js 14 Pages Router with markdown-driven blog content.
- Evidence: `package.json`, `pages/blog/index.jsx`, `pages/blog/[slug].jsx`, `lib/posts.js`, `posts/*.md`.
- Impact: Content and routing changes must preserve static-generation assumptions.
- Follow-up: none

### [2026-02-11 07:00 UTC] TYPE: insight
- Author: Codex
- Summary: Host id cannot be reliably read at build time from server-only env in this deployment model; runtime resolution is required.
- Evidence: runtime behavior plus environment availability constraints documented in host-id implementation changes.
- Impact: Client bundle env injection alone is insufficient for footer host labeling.
- Follow-up: Preserve runtime API approach when refactoring layout or host banner logic.

### [2026-02-11 07:00 UTC] TYPE: change
- Author: Codex
- Summary: Added runtime host-id endpoint and client fetch flow while keeping `_app.jsx` free of `getInitialProps`.
- Evidence: `pages/api/host-id.js`, `components/ServedByComponent.tsx`, `pages/_app.jsx`.
- Impact: Automatic Static Optimization remains active and footer host text can still resolve from runtime server container env.
- Follow-up: none

### [2026-02-11 08:11 UTC] TYPE: change
- Author: Codex
- Summary: Corrected citation mappings and founder continuity narrative to align public claims with verified DOI/PMID records.
- Evidence: `pages/services.jsx`, `pages/products.jsx`, `pages/about.jsx`, `posts/healthcare-ai-research.md`, DOI/PubMed verification.
- Impact: Reduced attribution and credibility risk in research-facing content.
- Follow-up: Validate DOI/PMID pairings before publishing future citation updates.

### [2026-02-11 20:03 UTC] TYPE: change
- Author: Codex
- Summary: Resolved blog markdown rendering break by restoring compatibility between `remark` and `remark-html` major versions.
- Evidence: `package.json`, `package-lock.json`.
- Impact: Blog posts render compiled HTML instead of raw markdown syntax.
- Follow-up: Re-verify sample posts on future markdown dependency upgrades.

### [2026-02-17 06:49 UTC] TYPE: change
- Author: Codex
- Summary: Added a dedicated top-menu `CerviGuard` page with authenticated live-application screenshots and workflow narrative.
- Evidence: `components/Layout.jsx`, `pages/cerviguard.jsx`, `styles/globals.css`, `public/images/cerviguard/*.png`.
- Impact: Product evidence and flagship presentation moved from scattered mentions to a first-class route.
- Follow-up: Refresh screenshots when the live CerviGuard UI materially changes.

### [2026-02-17 07:36 UTC] TYPE: change
- Author: Codex
- Summary: Standardized cross-page messaging around SmartClover's two-direction healthcare AI strategy: classical inferential/predictive track plus generative SaaS communication/research track.
- Evidence: `pages/index.jsx`, `pages/services.jsx`, `pages/about.jsx`, `pages/products.jsx`, `pages/cerviguard.jsx`, `pages/contact.jsx`.
- Impact: Company narrative now communicates portfolio logic consistently across core routes.
- Follow-up: Keep new product copy aligned with this two-direction framing.

### [2026-02-17 08:12 UTC] TYPE: insight
- Author: Codex
- Summary: Formal due-diligence evaluation identified commercialization-proof, regulatory-evidence, and trust-asset gaps in the public website narrative.
- Evidence: `EVALUATION.md` plus rendered route checks.
- Impact: Future web and GTM updates should prioritize quantified traction, regulatory substantiation, and procurement-grade trust artifacts.
- Follow-up: Execute remediation backlog with evidence-gated claims.

### [2026-02-17 08:17 UTC] TYPE: change
- Author: Codex
- Summary: Added `UPGRADE.md` as a prioritized remediation plan mapping evaluation findings to concrete implementation batches and blockers.
- Evidence: `UPGRADE.md`, `EVALUATION.md`.
- Impact: Website remediation can proceed in staged, evidence-aware execution.
- Follow-up: Resolve remaining blocker clarifications before blocked batches.

### [2026-02-18 06:15 UTC] TYPE: change
- Author: Codex
- Summary: Canonicalized user-facing routing to `/products`, fixed orphan hash navigation, and reduced repeated slogan density on high-traffic routes.
- Evidence: `next.config.js`, `components/Layout.jsx`, `pages/index.jsx`, `pages/about.jsx`, `pages/services.jsx`, `pages/cerviguard.jsx`, `pages/values.jsx`, `pages/pricing.jsx`, `pages/cybersecurity.jsx`.
- Impact: Navigation consistency and readability improved while preserving canonical product-hub flow.
- Follow-up: Consider retiring duplicate `/services` source route when appropriate.

### [2026-02-21 00:55 UTC] TYPE: change
- Author: Codex
- Summary: Integrated and re-scoped DataGems within `/products` using explicit distributed-decentralized, SLM-first capability framing with optional external API integration and visual product evidence.
- Evidence: `pages/products.jsx`, `styles/globals.css`, `public/images/datagems/*`.
- Impact: DataGems presentation now reflects intended technical scope and product role.
- Follow-up: Refresh screenshots and scope text when DataGems capabilities evolve.

### [2026-02-23 10:52 UTC] TYPE: change
- Author: Codex
- Summary: Fixed production build blocker in `/products` by escaping unescaped JSX quotes that triggered `react/no-unescaped-entities`.
- Evidence: `pages/products.jsx`; verification commands `npm run lint`, `npm run build`.
- Impact: `next build` no longer fails on the DataGems description block.
- Follow-up: none


### [2026-02-23 10:59 UTC] TYPE: decision
- Author: Codex
- Summary: Pruned all historical memory entries from `AGENTS.md` and moved critical-only project memory into a dedicated `CHANGE_LOG.md` file.
- Evidence: `AGENTS.md` (playbook-only rewrite), `CHANGE_LOG.md` (critical-history baseline), commands `npm run lint`, `npm run build`.
- Impact: Operational instructions and long-term critical history are now separated, reducing playbook noise and enforcing critical-only logging discipline.
- Follow-up: Record all future critical `TYPE:*` and `ADVERSARIAL-CHECK` entries only in `CHANGE_LOG.md`.

### [2026-02-23 10:59 UTC] ADVERSARIAL-CHECK
- Scope: memory-log migration from `AGENTS.md` to `CHANGE_LOG.md` and policy realignment (`AGENTS.md`, `CHANGE_LOG.md`).
- BUILDER Intent + Change:
  - Rewrote `AGENTS.md` to keep durable workflow/playbook guidance only.
  - Created `CHANGE_LOG.md` and migrated a pruned set of major changes and important insights.
  - Updated workflow/policy sections to make `CHANGE_LOG.md` the append-only memory target.
- CRITIC Findings:
  - Migration could accidentally discard critical architectural/process context if pruning is too aggressive.
  - Workflow drift risk exists if instructions still reference logging in `AGENTS.md`.
- BUILDER Response / Refinements:
  - Kept key foundational events (runtime host-id architecture, citation integrity corrections, markdown compatibility repair, CerviGuard page launch, strategy reframing, diligence and remediation artifacts, routing canonicalization, DataGems scope alignment).
  - Updated all relevant policy/workflow sections in `AGENTS.md` to point logging operations to `CHANGE_LOG.md`.
  - Re-ran lint/build to ensure documentation changes introduced no incidental repository regressions.
- Verification:
  - `npm run lint` -> pass (`next lint` reported no warnings/errors).
  - `npm run build` -> pass (Next.js production build completed; all routes generated).
- Residual Risk: Pruned non-critical fine-grained chronology now lives only in git history, not in the new critical log.

### [2026-04-03 03:43 UTC] TYPE: insight
- Author: Codex
- Summary: Current 2025 and early-2026 guidance points toward versioned prompt templates, eval-backed prompt iteration, focused subagents, and template-first website refactors anchored on modern Next.js plus high-trust visual proof.
- Evidence: `RESEARCH.md`; https://developers.openai.com/api/docs/guides/prompting ; https://developers.openai.com/api/docs/guides/reasoning-best-practices ; https://developers.openai.com/api/docs/guides/agents-sdk ; https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview ; https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/prompt-templates-and-variables ; https://code.claude.com/docs/en/sub-agents ; https://tailwindcss.com/plus/templates ; https://vercel.com/templates/next.js/basehub-marketing-website ; https://www.framer.com/marketplace/templates/feature/ ; https://www.framer.com/marketplace/templates/heallthier/ ; https://webflow.com/templates/html/mediai-website-template ; https://developers.google.com/search/docs/fundamentals/seo-starter-guide ; https://nextjs.org/docs/pages/api-reference/components/image ; https://web.dev/articles/optimize-lcp
- Impact: Future SmartClover refactor work should be template-led, evidence-gated, and organized around narrower agent roles plus stronger content/image quality bars.
- Follow-up: Choose and record one primary template baseline before broad UI implementation.

### [2026-04-03 03:43 UTC] TYPE: change
- Author: Codex
- Summary: Rewrote `AGENTS.md` for a faster source-aware refactor workflow, added `RESEARCH.md` and `PLAN.md`, and created project subagent artifacts for source verification, template curation, and adversarial page review.
- Evidence: `AGENTS.md`, `RESEARCH.md`, `PLAN.md`, `.claude/agents/source-verifier.md`, `.claude/agents/template-curator.md`, `.claude/agents/page-critic.md`.
- Impact: Future agents now have durable, repo-local scaffolding for research-backed planning, template selection, claim verification, and page-level quality control.
- Follow-up: Use `PLAN.md` to drive the first implementation batches on Home and CerviGuard after template approval.

### [2026-04-03 03:43 UTC] ADVERSARIAL-CHECK
- Scope: refactor-process documentation overhaul and new planning/research/subagent artifacts (`AGENTS.md`, `RESEARCH.md`, `PLAN.md`, `.claude/agents/*`).
- BUILDER Intent + Change:
  - Reworked `AGENTS.md` to make the website-refactor workflow more efficient, template-first, and source-aware.
  - Added `RESEARCH.md` to capture current prompt-engineering, agentic-web-dev, template, SEO, image, and performance guidance.
  - Added `PLAN.md` to define SmartClover's refactor direction, page priorities, evidence rules, image strategy, and phased delivery.
  - Added focused subagent definitions for source verification, template curation, and adversarial page review.
- CRITIC Findings:
  - The playbook could over-assume a Tailwind migration or drift from the current Next.js Pages Router reality.
  - Internal doc references and external research links could become incorrect or stale.
  - New subagent artifacts could be too generic to materially improve future work.
- BUILDER Response / Refinements:
  - Kept Next.js Pages Router constraints and Automatic Static Optimization guardrails explicit in `AGENTS.md`.
  - Clarified in `PLAN.md` that Next.js plus Tailwind is a planning recommendation, not an already-approved migration.
  - Fixed the internal `BUILDER-CRITIC` section reference in `AGENTS.md` and tightened source links in `RESEARCH.md`.
  - Kept subagents narrow and repo-specific so they map directly to SmartClover's real review needs.
- Verification:
  - `npm run lint` -> pass (`next lint` reported no warnings or errors).
  - `npm run build` -> pass (Next.js production build completed successfully; all routes generated).
- Residual Risk: Template marketplaces and external docs change over time; `RESEARCH.md` and the selected template baseline will need periodic refresh before implementation batches.

### [2026-04-03 04:11 UTC] TYPE: discovery
- Author: Codex
- Summary: Live `smartclover.ro` confirms the site is shipping as a static Next.js export on the existing Deeploy / Ratio1.ai path, with working public diligence routes, Cloudflare Managed Content Signals, and uneven metadata coverage across core pages.
- Evidence: `PLAN.md`; live checks `curl -I -L -s https://smartclover.ro/`, `curl -I -L -s https://smartclover.ro/trust`, `curl -A 'Mozilla/5.0' -s https://smartclover.ro/...`; observed `__NEXT_DATA__` `nextExport` / `autoExport`, live `robots.txt`, live footer `v2.9` and host id `unknown`.
- Impact: Template selection should preserve static-export compatibility, avoid unnecessary hosted CMS coupling, and prioritize metadata parity on `About`, `Products`, and `Blog`.
- Follow-up: Use the live deployment constraints as the baseline filter for all future refactor decisions.

### [2026-04-03 04:11 UTC] TYPE: decision
- Author: Codex
- Summary: Selected Tailwind Plus `Oatmeal` as the single primary template baseline for the SmartClover refactor because it best fits the live site's static Next.js deployment, many-route information architecture, and need for a flexible high-trust design system without adding CMS coupling.
- Evidence: `PLAN.md`; https://tailwindcss.com/plus/kits/oatmeal ; https://tailwindcss.com/plus/templates/radiant ; live-site checks against `https://smartclover.ro/`, `/cerviguard`, `/products`, `/about`, `/trust`, `/blog`.
- Impact: Future implementation should adapt one code-native Tailwind Plus kit into the existing Pages Router and markdown-blog setup instead of pursuing a Vercel/BaseHub-style starter or a hosted-template migration.
- Follow-up: Confirm Tailwind Plus licensing, then extract the `Oatmeal` design tokens and section primitives for the shell plus Home/CerviGuard implementation batch.

### [2026-04-03 04:11 UTC] ADVERSARIAL-CHECK
- Scope: live-site-informed template-baseline decision and `PLAN.md` update (`PLAN.md`, `CHANGE_LOG.md`).
- BUILDER Intent + Change:
  - Audited the public `smartclover.ro` deployment to capture real route availability, metadata behavior, hosting constraints, and current diligence structure.
  - Replaced the generic template recommendation in `PLAN.md` with one explicit primary baseline: Tailwind Plus `Oatmeal`.
  - Added live-site findings, deployment constraints, metadata observations, and revised next steps to `PLAN.md`.
- CRITIC Findings:
  - A template choice made without the live deployment context could accidentally introduce CMS or hosting assumptions that do not fit Deeploy.
  - `Oatmeal` introduces Tailwind into a non-Tailwind codebase and could create mixed-style debt if adopted loosely.
  - The live fetch method is constrained by Cloudflare bot defenses, so evidence should rely on browser-like requests and observed HTML rather than naive scraping.
- BUILDER Response / Refinements:
  - Chose a code-native kit that stays compatible with static export and explicitly rejected BaseHub and Sanity-coupled options as the primary baseline.
  - Added `PLAN.md` constraints to preserve the markdown blog and keep deployment unchanged during the refactor.
  - Logged live deployment findings including metadata gaps and `robots.txt` content-signal posture so the next implementation batch starts from the public truth, not local assumptions.
- Verification:
  - `npm run lint` -> pass (`next lint` reported no warnings or errors).
  - `npm run build` -> pass (Next.js production build completed successfully; all routes generated).
- Residual Risk: `Oatmeal` is still a paid Tailwind Plus asset and will require disciplined adaptation to avoid partial Tailwind adoption or design inconsistency during migration.

### [2026-04-03 04:25 UTC] TYPE: correction
- Author: Codex
- Summary: Corrected the planning interpretation of the live `robots.txt` posture: the live site currently serves `ai-train=no`, but the intended SmartClover policy is `ai-train=yes`, so this must be treated as a deployment mismatch rather than a desired steady state.
- Evidence: user correction in-session; live `https://smartclover.ro/robots.txt`; `PLAN.md`.
- Impact: Future planning should not preserve the current `ai-train=no` value as policy; deployment work should align the public robots policy with the intended training-permitted setting.
- Follow-up: update the live `robots.txt` or Cloudflare Managed Content Signals to publish `ai-train=yes`.
- Related Entry: [2026-04-03 04:11 UTC] TYPE: discovery

### [2026-04-03 04:25 UTC] ADVERSARIAL-CHECK
- Scope: planning correction for live-versus-intended `robots.txt` AI training signal (`PLAN.md`, `CHANGE_LOG.md`).
- BUILDER Intent + Change:
  - Updated `PLAN.md` so it distinguishes between the live observed `ai-train=no` value and the intended `ai-train=yes` policy.
  - Added a correction entry instead of rewriting the earlier discovery record.
- CRITIC Findings:
  - Leaving the old wording unqualified would incorrectly encode a deployment bug as an intended policy.
  - Because `robots.txt` is not present in the repo, future implementers could wrongly search the codebase instead of the edge configuration.
- BUILDER Response / Refinements:
  - Clarified the mismatch directly in `PLAN.md`.
  - Recorded the issue as a `TYPE: correction` in `CHANGE_LOG.md` to preserve history while fixing interpretation.
  - Kept the required action explicit: update Cloudflare Managed Content Signals or the live `robots.txt` source.
- Verification:
  - `npm run lint` -> pass (`next lint` reported no warnings or errors).
  - `npm run build` -> pass (Next.js production build completed successfully; all routes generated).
- Residual Risk: The public site will continue to advertise `ai-train=no` until the deployment-layer configuration is changed outside this repo.

### [2026-04-03 04:31 UTC] TYPE: correction
- Author: Codex
- Summary: Superseded the paid-template baseline decision with a no-cost primary baseline: Vercel `Portfolio Starter Kit`, chosen for static-export compatibility, markdown/metadata strengths, and alignment with the explicit no-cost constraint.
- Evidence: `PLAN.md`; user instruction for a no-cost path; repo evidence showing markdown blog and static-export-compatible Next.js setup.
- Impact: Future refactor work should not assume Tailwind Plus licensing and should instead reuse a free baseline while still keeping strong discoverability and machine-readable metadata goals.
- Follow-up: Use `Portfolio Starter Kit` as the primary adaptation reference and keep paid Tailwind templates as non-blocking inspiration only if publicly reviewable.
- Related Entry: [2026-04-03 04:11 UTC] TYPE: decision

### [2026-04-03 04:31 UTC] TYPE: decision
- Author: Codex
- Summary: Elevated discoverability and AI-friendliness to explicit refactor policy: SmartClover wants `search=yes`, `ai-input=yes`, `ai-train=yes`, broad crawler friendliness, strong metadata parity, sitemap support, and machine-readable structured data across core pages.
- Evidence: `PLAN.md`; live `robots.txt` mismatch; local repo evidence showing incomplete canonical/OG/JSON-LD coverage outside Home and CerviGuard.
- Impact: The refactor now treats crawler access, AI training permission, and machine-readable metadata as first-class product requirements rather than optional SEO polish.
- Follow-up: Implement `robots.txt`, sitemap, canonical, OG/Twitter, and JSON-LD parity as part of the refactor and align live edge configuration with repo policy.

### [2026-04-03 04:31 UTC] ADVERSARIAL-CHECK
- Scope: no-cost baseline switch and discoverability-policy expansion in `PLAN.md` plus required log updates in `CHANGE_LOG.md`.
- BUILDER Intent + Change:
  - Replaced the paid `Oatmeal` baseline with the free `Portfolio Starter Kit` baseline.
  - Re-reviewed the plan for consistency under the no-cost constraint.

### [2026-04-14 07:22 UTC] TYPE: decision
- Author: Codex
- Summary: Approved a SmartClover-specific Gender Equality Plan design with a canonical `/gender-equality-plan` route, `/gep` alias, signed PDF artifact, and founder/trust/footer distribution model.
- Evidence: `docs/superpowers/specs/2026-04-14-gender-equality-plan-design.md`; approved user decisions for signatory, title, language, period, and placement.
- Impact: GEP implementation can now proceed from a durable design artifact instead of ad hoc page copy, reducing compliance drift between web route, PDF, and site navigation.
- Follow-up: write the implementation plan, then build the public page, PDF pipeline, and multi-location links.

### [2026-04-14 07:22 UTC] ADVERSARIAL-CHECK
- Scope: Gender Equality Plan design specification and planning record (`docs/superpowers/specs/2026-04-14-gender-equality-plan-design.md`, `CHANGE_LOG.md`).
- BUILDER Intent + Change:
  - Wrote the approved SmartClover GEP design into a durable repo spec.
  - Locked the route, PDF artifact, content structure, measures, targets, and site placement decisions.
- CRITIC Findings:
  - Early draft wording still contained two vague phrases that could leave implementation choices underspecified.
  - A generic university-style GEP structure would have been a poor fit for a small founder-led healthcare company.
- BUILDER Response / Refinements:
  - Replaced vague footer-placement wording with the explicit `Public Artifacts` footer group target.
  - Replaced vague data-handling wording with `lawfully recorded with minimal necessary handling`.
  - Kept targets process-based and proportionate to SmartClover's likely scale rather than inventing quota-style commitments.

### [2026-04-14 11:48 UTC] TYPE: change
- Author: Codex
- Summary: Published the canonical public Gender Equality Plan route at `/gender-equality-plan` and added a permanent `/gep` redirect to it.
- Evidence: `next.config.js`, `pages/gender-equality-plan.jsx`, `version.json`; verification commands `npm run build`, `rg -n "source: '/gep'|destination: '/gender-equality-plan'" next.config.js`, `npx next build --no-lint`.
- Impact: The GEP now has a stable public URL with a short redirect alias, and the page renders directly from the checked-in markdown source.
- Follow-up: Keep the markdown source and public route aligned if the plan text is revised.

### [2026-04-14 11:48 UTC] ADVERSARIAL-CHECK
- Scope: canonical GEP route and `/gep` redirect batch (`next.config.js`, `pages/gender-equality-plan.jsx`, `CHANGE_LOG.md`, `version.json`).
- BUILDER Intent + Change:
  - Added a permanent redirect from `/gep` to `/gender-equality-plan`.
  - Added a static page that reads `docs/GENDER_EQUALITY_PLAN_2026_2028.md` at build time and exposes the plan as public HTML with SEO metadata.
  - Bumped the repository version from `3.3` to `3.4`.
- CRITIC Findings:
  - `npm run build` still surfaces the pre-existing ESLint config failure (`Failed to load config "next" to extend from`), which could be mistaken for a regression if the baseline is not noted.
  - The public page depends on front-matter fields in the markdown file; any future rename there would break static generation.
- BUILDER Response / Refinements:
  - Verified the new route with `npx next build --no-lint`, which completed successfully and included `/gender-equality-plan` in the generated routes.
  - Confirmed the redirect string in `next.config.js` with `rg`.
  - Kept the page implementation narrow and source-driven instead of adding PDF generation or navigation changes.
- Verification:
  - `npm run build` -> logged the existing ESLint config load failure, then completed the production build successfully.
  - `rg -n "source: '/gep'|destination: '/gender-equality-plan'" next.config.js` -> matched the redirect on lines 12-13.
  - `npx next build --no-lint` -> pass, with `/gender-equality-plan` generated as an SSG page.
- Residual Risk: The repo still has the shared ESLint `next` config resolution issue, so standard build output remains noisy until that baseline problem is fixed separately.

### [2026-04-14 11:54 UTC] TYPE: change
- Author: Codex
- Summary: Added a deterministic Playwright-based PDF generator and published the public GEP PDF artifact at `/docs/SmartClover_Gender_Equality_Plan_2026_2028.pdf`.
- Evidence: `scripts/generate-gep-pdf.mjs`, `package.json`, `package-lock.json`, `public/docs/SmartClover_Gender_Equality_Plan_2026_2028.pdf`; commands `npm install --save-dev playwright`, `npx playwright install chromium`, `npm run generate:gep-pdf`, `test -f public/docs/SmartClover_Gender_Equality_Plan_2026_2028.pdf && ls -lh public/docs/SmartClover_Gender_Equality_Plan_2026_2028.pdf`.
- Impact: The public GEP page CTA now resolves to a generated asset instead of a missing file, and the PDF can be regenerated deterministically from the markdown source.
- Follow-up: Re-run the generator whenever the source markdown changes.

### [2026-04-14 11:54 UTC] ADVERSARIAL-CHECK
- Scope: public GEP PDF pipeline batch (`scripts/generate-gep-pdf.mjs`, `package.json`, `package-lock.json`, `public/docs/SmartClover_Gender_Equality_Plan_2026_2028.pdf`, `CHANGE_LOG.md`, `version.json`).
- BUILDER Intent + Change:
  - Installed Playwright as a dev dependency and added a package script for deterministic GEP PDF generation.
  - Generated the public PDF artifact from `docs/GENDER_EQUALITY_PLAN_2026_2028.md` and stored it under `public/docs`.
  - Bumped the repository version from `3.4` to `3.5`.
- CRITIC Findings:
  - The generator writes a preview HTML file to `/tmp`, which could be overlooked in future cleanup or debugging sessions.
  - The PDF pipeline depends on the markdown front matter remaining stable; changes to title or path metadata could alter the output or break the CTA.
- BUILDER Response / Refinements:
  - Kept the implementation deterministic and source-driven rather than introducing runtime fetches or browser navigation.
  - Verified the generated PDF exists at the exact public path linked by the page.
  - Limited package.json editing to the scripts addition while letting npm manage the dependency and lockfile updates.
- Verification:
  - `npm run generate:gep-pdf` -> pass, generated `public/docs/SmartClover_Gender_Equality_Plan_2026_2028.pdf`.
  - `test -f public/docs/SmartClover_Gender_Equality_Plan_2026_2028.pdf && ls -lh public/docs/SmartClover_Gender_Equality_Plan_2026_2028.pdf` -> pass, file present at 65K.
- Residual Risk: The preview HTML in `/tmp` is intentionally transient; if future debugging needs it, it must be regenerated locally.

### [2026-04-14 12:02 UTC] TYPE: change
- Author: Codex
- Summary: Hardened the GEP PDF generator so repeated runs produce byte-identical output and automated Chromium installation is part of the executable workflow.
- Evidence: `scripts/generate-gep-pdf.mjs`, `package.json`, `package-lock.json`, `public/docs/SmartClover_Gender_Equality_Plan_2026_2028.pdf`; verification commands `npm run generate:gep-pdf`, `sha256sum public/docs/SmartClover_Gender_Equality_Plan_2026_2028.pdf`, `cmp -s public/docs/SmartClover_Gender_Equality_Plan_2026_2028.pdf /tmp/gep-before.pdf && echo same`.
- Impact: The public PDF can now be regenerated safely without hash drift, and clean checkouts no longer depend on a remembered manual browser-install step.
- Follow-up: Regenerate the PDF only when the markdown source changes.

### [2026-04-14 12:02 UTC] ADVERSARIAL-CHECK
- Scope: reproducibility and runnable-flow refinement for the GEP PDF pipeline (`scripts/generate-gep-pdf.mjs`, `package.json`, `package-lock.json`, `public/docs/SmartClover_Gender_Equality_Plan_2026_2028.pdf`, `CHANGE_LOG.md`, `version.json`).
- BUILDER Intent + Change:
  - Added a post-render normalization pass using `pdf-lib` to rewrite Chromium output with fixed metadata and stable serialization.
  - Moved Chromium installation into the `pregenerate:gep-pdf` npm lifecycle step so `npm run generate:gep-pdf` is self-sufficient.
  - Removed the hardcoded `/tmp` preview artifact because it was only a debugging aid.
- CRITIC Findings:
  - A PDF rewrite layer introduces another moving part, so it needed an actual hash comparison rather than a visual check.
  - The new pre-script adds a browser-install step to every run path, which is slightly slower but avoids hidden setup state.
- BUILDER Response / Refinements:
  - Verified identical SHA-256 hashes across two consecutive generation runs.
  - Confirmed `cmp -s` reported the generated file and the saved first-run copy as identical.
  - Kept the implementation local to the repo by using a declared npm dependency instead of a global Python package.
- Verification:
  - First hash: `203692f099a6a50e190c1f6d34d46764c8074159abd37c46bda4b0b723be5b97`
  - Second hash: `203692f099a6a50e190c1f6d34d46764c8074159abd37c46bda4b0b723be5b97`
  - `cmp -s public/docs/SmartClover_Gender_Equality_Plan_2026_2028.pdf /tmp/gep-before.pdf && echo same` -> `same`
- Residual Risk: The pre-script still shells out to Playwright's browser installer; if Chromium packaging changes upstream, this step may need a refresh.

### [2026-04-14 12:06 UTC] TYPE: change
- Author: Codex
- Summary: Surfaced the public GEP across the About page, Trust center, and footer public-artifacts navigation.
- Evidence: `components/Layout.jsx`, `pages/about.jsx`, `pages/trust/index.jsx`, `CHANGE_LOG.md`, `version.json`; live checks against `http://localhost:3000/about`, `http://localhost:3000/trust`, `http://localhost:3000/gender-equality-plan`, and `http://localhost:3000/gep`.
- Impact: The GEP is now discoverable from the main company narrative, the trust surface, and the footer artifact list instead of only through the direct route.
- Follow-up: Keep these placement links aligned with any future route or PDF path changes.

### [2026-04-14 12:06 UTC] ADVERSARIAL-CHECK
- Scope: GEP placement batch across About, Trust, and footer navigation (`components/Layout.jsx`, `pages/about.jsx`, `pages/trust/index.jsx`, `CHANGE_LOG.md`, `version.json`).
- BUILDER Intent + Change:
  - Added the GEP and GEP PDF to the footer's `Public Artifacts` group.
  - Added a trust-center card for the public GEP.
  - Added an About-page section that frames the public GEP as the policy complement to founder-led credibility.
  - Bumped the repository version from `3.6` to `3.7`.
- CRITIC Findings:
  - Footer and About copy both reference the same public artifact, so a future rename would need coordinated updates to avoid a dead link.
  - The new About section is intentionally opinionated; if the company story changes, it should be revised alongside the GEP copy rather than left stale.
- BUILDER Response / Refinements:
  - Verified the placement in a live dev server rather than relying on static source inspection alone.
  - Confirmed `/gep` still redirects to `/gender-equality-plan`.
  - Kept the change to presentation and navigation only, without altering the PDF pipeline or route architecture.
- Verification:
  - `npm run lint` -> baseline ESLint config failure as expected.
  - `npm run build` -> baseline ESLint config failure reported, then build completed successfully.
  - `npx next build --no-lint` -> pass.
  - Live checks -> `/about`, `/trust`, and `/gender-equality-plan` rendered expected GEP content; footer included `Gender Equality Plan` and `GEP PDF`; `GET /gep` returned `308 Permanent Redirect` to `/gender-equality-plan`.
- Residual Risk: The repo-level ESLint config issue remains unrelated and noisy, so standard lint/build output will continue to show the existing baseline failure until that is fixed separately.

### [2026-04-14 12:08 UTC] TYPE: change
- Author: Codex
- Summary: Repositioned the About-page GEP section so it sits directly after the founder section and before the timeline section.
- Evidence: `pages/about.jsx`, `CHANGE_LOG.md`, `version.json`; verification command `nl -ba pages/about.jsx | sed -n '130,240p'`.
- Impact: The About page now presents the GEP immediately after the founder narrative, matching the required content order and reviewer expectation.
- Follow-up: Keep the GEP section anchored between founder context and timeline context on future About edits.

### [2026-04-14 12:08 UTC] ADVERSARIAL-CHECK
- Scope: About-page section-order correction batch (`pages/about.jsx`, `CHANGE_LOG.md`, `version.json`).
- BUILDER Intent + Change:
  - Moved the existing GEP section block so it follows the founder section directly and precedes the timeline section.
  - Updated the repository version from `3.7` to `3.8`.
- CRITIC Findings:
  - The content itself was already correct, so the only risk was misplacing the section and leaving the page structure inconsistent with the spec.
  - Reordering this block had to preserve the existing copy and CTA targets exactly.
- BUILDER Response / Refinements:
  - Verified the section order with line-numbered source output.
  - Left the section text unchanged and moved only the block position.
- Verification:
  - `nl -ba pages/about.jsx | sed -n '130,240p'` -> GEP section now appears directly after the founder section and before the timeline section.
- Residual Risk: None beyond the existing repo-level ESLint baseline issue, which is unrelated to this placement correction.
- Verification:
  - `test -f docs/superpowers/specs/2026-04-14-gender-equality-plan-design.md && echo exists` -> pass (`exists`)
  - `if rg -n "TBD|TODO|implement later|fill in details|appropriate|edge cases|similar to" docs/superpowers/specs/2026-04-14-gender-equality-plan-design.md > /tmp/gep_spec_scan.txt; then cat /tmp/gep_spec_scan.txt; else echo clean; fi` -> pass (`clean`)
- Residual Risk: Final legal or grant-review preferences may still require wording adjustments in the formal PDF before publication.

### [2026-04-14 07:38 UTC] TYPE: change
- Author: Codex
- Summary: Added the executable implementation plan for the SmartClover Gender Equality Plan feature, covering the canonical markdown source, public route, `/gep` redirect, PDF pipeline, placement across About/Trust/Footer, and verification steps.
- Evidence: `docs/superpowers/plans/2026-04-14-gender-equality-plan.md`; approved design spec in `docs/superpowers/specs/2026-04-14-gender-equality-plan-design.md`.
- Impact: Implementation can now proceed task-by-task without re-deciding architecture, route names, artifact paths, or content structure.
- Follow-up: choose execution mode and implement the plan.

### [2026-04-14 07:38 UTC] ADVERSARIAL-CHECK
- Scope: Gender Equality Plan implementation plan artifact (`docs/superpowers/plans/2026-04-14-gender-equality-plan.md`, `CHANGE_LOG.md`).
- BUILDER Intent + Change:
  - Converted the approved design into an execution-ready implementation plan with explicit files, code snippets, verification commands, and commit boundaries.
  - Kept the implementation architecture anchored to one canonical markdown source to prevent web/PDF drift.
- CRITIC Findings:
  - The first plan draft hardcoded a Playwright version even though dependency resolution is time-sensitive and should come from `npm install`.
  - The plan needed to acknowledge that the repo currently has no signature image asset and no automated frontend test framework.
- BUILDER Response / Refinements:
  - Removed the hardcoded Playwright version and made the plan rely on `npm install --save-dev playwright` plus a deterministic `package.json` script addition.
  - Added explicit implementation notes for the typed signatory block, build-based verification, and exclusion of `.superpowers/` artifacts.
- Verification:
  - `rg -n "playwright\\\": \\^|/gender-equality-plan|/gep|SmartClover_Gender_Equality_Plan_2026_2028\\.pdf|GENDER_EQUALITY_PLAN_2026_2028\\.md" docs/superpowers/plans/2026-04-14-gender-equality-plan.md` -> pass (all canonical paths and artifact names are consistent; no hardcoded Playwright version remains)
  - `rg -n "TBD|TODO|implement later|fill in details|appropriate|edge cases|similar to" docs/superpowers/plans/2026-04-14-gender-equality-plan.md` -> pass for actionable content (the only match is the self-review sentence explaining that those placeholders were intentionally avoided)
- Residual Risk: The plan assumes build-and-smoke verification rather than a new automated test framework, so execution still depends on disciplined manual route checks.

### [2026-04-14 10:18 UTC] TYPE: change
- Author: Codex
- Summary: Added local workspace artifact ignores for `.worktrees/` and `.superpowers/` so the SmartClover repo can safely host a project-local worktree for GEP implementation.
- Evidence: `.gitignore`; `git check-ignore -v .worktrees`; `git status --short --branch`.
- Impact: Project-local worktrees can now be created without polluting repo status, and brainstorming/session artifacts no longer appear as accidental untracked files.
- Follow-up: create the isolated `.worktrees/` feature workspace and execute the GEP plan there.

### [2026-04-14 10:18 UTC] ADVERSARIAL-CHECK
- Scope: local workspace ignore hardening for worktree-based GEP execution (`.gitignore`, `version.json`, `CHANGE_LOG.md`).
- BUILDER Intent + Change:
  - Added `.worktrees` to repo ignore rules because the chosen execution mode requires a project-local worktree.
  - Added `.superpowers` to repo ignore rules because brainstorming/server artifacts were already appearing as untracked local files.
- CRITIC Findings:
  - Creating `.worktrees/` without an ignore rule would risk accidental tracking of a full nested checkout.
  - Leaving `.superpowers/` unignored would keep polluting `git status` during browser-companion and plan execution work.
- BUILDER Response / Refinements:
  - Added both ignore entries near the top of `.gitignore` with no broader ignore changes.
  - Bumped `version.json` for the setup commit to follow repo commit policy.
- Verification:
  - `git check-ignore -v .worktrees` -> pass (returns `.gitignore` rule for `.worktrees`)
  - `git check-ignore -v .superpowers` -> pass (returns `.gitignore` rule for `.superpowers`)
- Residual Risk: The implementation plan's version-bump examples now need to be rebased from the new `3.1` starting point before task execution.
  - Added explicit discoverability policy for `search=yes`, `ai-input=yes`, `ai-train=yes`, crawler friendliness, `robots.txt`, sitemap, canonical coverage, OG/Twitter coverage, and JSON-LD parity.
- CRITIC Findings:
  - A no-cost baseline could weaken the visual ambition if the plan focused only on SEO and metadata instead of design quality.
  - The earlier paid-baseline decision would remain misleading unless explicitly superseded in the log.
  - Execution ordering in the plan drifted after the discoverability additions.
- BUILDER Response / Refinements:
  - Kept the visual bar and inspiration references intact while moving the primary baseline to a free option.
  - Added a `TYPE: correction` entry tied to the earlier paid-template decision instead of silently overwriting history.
  - Fixed the execution-sequence numbering conflict in `PLAN.md`.
- Verification:
  - `npm run lint` -> pass (`next lint` reported no warnings or errors).
  - `npm run build` -> pass (Next.js production build completed successfully; all routes generated).
- Residual Risk: The free baseline is stronger on content and metadata than on polished marketing sections, so implementation discipline will matter more to achieve the intended premium visual outcome.

### [2026-04-03 04:41 UTC] TYPE: correction
- Author: Codex
- Summary: Clarified that the `Portfolio Starter Kit` is a vendor-neutral reference baseline only; it is not a recommendation to use Vercel hosting or any Vercel-only platform service.
- Evidence: `PLAN.md`; user clarification request about commercial/ecosystem coupling; existing deployment requirement to remain on Ratio1 Worker App Runner.
- Impact: Future implementation should transplant useful code patterns into this repo while preserving full deployment independence on Deeploy / Ratio1.
- Follow-up: Strip or avoid any vendor-specific packages if baseline code is imported.
- Related Entry: [2026-04-03 04:31 UTC] TYPE: correction

### [2026-04-03 04:41 UTC] ADVERSARIAL-CHECK
- Scope: vendor-neutral deployment clarification for the no-cost baseline in `PLAN.md` and corresponding memory-log update in `CHANGE_LOG.md`.
- BUILDER Intent + Change:
  - Tightened `PLAN.md` so the baseline is explicitly described as a vendor-neutral adaptation of reference code patterns.
  - Added explicit constraints forbidding dependency on Vercel hosting, Vercel-managed CMS, analytics, speed insights, or other Vercel-only runtime services.
  - Clarified that implementation must stay fully in-repo and deploy through Ratio1 as before.
- CRITIC Findings:
  - Without this clarification, the phrase `Vercel Portfolio Starter Kit` could be read as an ecosystem or hosting commitment.
  - Baseline adoption could accidentally pull in Vercel-specific packages if code is copied without review.
- BUILDER Response / Refinements:
  - Reworded the baseline from product-name shorthand to vendor-neutral adaptation language.
  - Added a hard constraint to remove or replace vendor-specific packages before adoption.
  - Kept the deployment model explicit: Deeploy / Ratio1 Worker App Runner remains unchanged.
- Verification:
  - `npm run lint` -> pass (`next lint` reported no warnings or errors).
  - `npm run build` -> pass (Next.js production build completed successfully; all routes generated).
- Residual Risk: Reference-baseline imports still require manual review to ensure no hidden vendor coupling slips into the repo.

### [2026-04-03 05:01 UTC] TYPE: decision
- Author: Codex
- Summary: Final execution-readiness review elevated two additional refactor requirements to explicit policy: all high-value existing content must be migrated into the redesign, and agents must continuously verify looks, flow, interaction, responsiveness, and usability throughout development rather than relying only on end-stage QA.
- Evidence: `PLAN.md`.
- Impact: The refactor is now protected against two common redesign failures: silent loss of valuable content and visually correct but poorly tested interaction/usability regressions.
- Follow-up: Create the initial quality-content migration register and define the browser-based development test routine before implementation starts.

### [2026-04-03 05:01 UTC] ADVERSARIAL-CHECK
- Scope: final execution-readiness refinement of `PLAN.md` for content migration and lifecycle testing requirements.
- BUILDER Intent + Change:
  - Added a non-negotiable requirement that all high-quality existing content must be migrated unless explicitly merged, downgraded, or removed with rationale.
  - Added a quality-content migration rule and migration-register structure to `PLAN.md`.
  - Added explicit development-lifecycle testing requirements for looks, flow, interaction, responsiveness, and usability.
  - Updated delivery phases, agent roles, acceptance metrics, and next steps to reflect these requirements.
- CRITIC Findings:
  - A redesign plan that lacks explicit migration rules can accidentally discard trust, proof, and product content while improving visuals.
  - A plan that treats testing as only final QA invites regressions in navigation, interaction, and usability during implementation.
  - Without explicit ownership, agents may assume content migration or visual testing is someone else's responsibility.
- BUILDER Response / Refinements:
  - Added a content-migration agent role and a migration-register requirement.
  - Added continuous development-stage browser testing expectations and explicit QA-phase checks for desktop, mobile, interaction, and usability.
  - Updated phase exit criteria so both content retention and in-lifecycle verification are part of completion.
- Verification:
  - `npm run lint` -> pass (`next lint` reported no warnings or errors).
  - `npm run build` -> pass (Next.js production build completed successfully; all routes generated).
- Residual Risk: The plan now requires migration and testing discipline, but execution quality will still depend on agents actually maintaining the migration register and running the browser checks during implementation.

### [2026-04-03 05:07 UTC] TYPE: decision
- Author: Codex
- Summary: Finalized the migration and testing protocol: quality content must be preserved as-is by default, weaker content must move through an explicit copy-edit process, and the refactor must follow an iterative `design -> refactor -> build -> test -> check -> repeat` loop using the full set of available visual, interaction, responsiveness, usability, accessibility, and live-site-comparison methods.
- Evidence: `PLAN.md`.
- Impact: The execution plan now removes ambiguity about how existing content is carried forward and how visual/UX quality is actually verified during implementation.
- Follow-up: Use the migration register and the iterative visual-verification evidence trail from the first implementation batch onward.

### [2026-04-03 05:07 UTC] ADVERSARIAL-CHECK
- Scope: final plan refinement for content-preservation defaults, copy-edit handling, and iterative visual/UX/design verification methods in `PLAN.md`.
- BUILDER Intent + Change:
  - Tightened the migration policy so quality content is preserved as-is by default and other content is explicitly routed through copy-editing.
  - Added clearer migration action labels and copy-edit expectations.
  - Added an explicit iterative implementation loop and a fuller list of available verification methods for looks, flow, interaction, usability, accessibility, responsiveness, and live-site comparison.
- CRITIC Findings:
  - Without a preservation default, agents could still over-edit or over-condense strong content in the name of redesign.
  - Without enumerating the available verification methods, “test the site” remains too vague and inconsistently executed.
  - Without an iterative loop, testing can still drift toward a late-stage one-off activity.
- BUILDER Response / Refinements:
  - Set `migrate_as_is` as the default expectation for quality content and `copy_edit_and_migrate` as the controlled path for weaker content.
  - Added a concrete method list covering local runtime review, browser automation, screenshots, image inspection, DOM/layout checks, responsive checks, interaction-flow testing, heuristic usability review, accessibility review, performance-adjacent review, and live-site comparison.
  - Added a formal `design -> refactor -> build -> test -> check -> repeat` loop to the plan.
- Verification:
  - `npm run lint` -> pass (`next lint` reported no warnings or errors).
  - `npm run build` -> pass (Next.js production build completed successfully; all routes generated).
- Residual Risk: The plan now defines the right execution discipline, but strong results will still depend on agents actually maintaining the migration defaults and using multiple verification methods instead of the minimum possible check.

### [2026-04-03 05:20 UTC] TYPE: change
- Author: Codex
- Summary: Moved the footer release label from a hardcoded value in `components/Layout.jsx` to the repo-level `version.json` source and updated repo instructions to match the new versioning workflow.
- Evidence: `components/Layout.jsx`, `version.json`, `AGENTS.md`, commands `npm run lint`, `npm run build`.
- Impact: Future version bumps now happen in one dedicated file instead of editing footer markup directly, reducing release-step drift.
- Follow-up: Keep `version.json` tracked and update it once per commit when a release version changes.

### [2026-04-03 05:20 UTC] ADVERSARIAL-CHECK
- Scope: footer version-source change and versioning-policy alignment (`components/Layout.jsx`, `AGENTS.md`).
- BUILDER Intent + Change:
  - Replaced the hardcoded footer version string with `versionData.version` imported from the existing repo-root `version.json`.
  - Updated `AGENTS.md` so the documented release workflow, repository snapshot, pitfalls, and versioning policy now point to `version.json` instead of manual edits in `components/Layout.jsx`.
- CRITIC Findings:
  - Importing a repo-root JSON file into a shared layout creates a hard build dependency on `version.json`; missing or malformed JSON would break the footer build path.
  - Leaving `AGENTS.md` unchanged would create immediate documentation drift and cause future agents to follow the wrong version-bump procedure.
- BUILDER Response / Refinements:
  - Kept the change minimal and static by using the existing `version.json` file directly, avoiding any runtime fetch or routing changes.
  - Updated all versioning references in `AGENTS.md` that still described the old manual footer-edit workflow.
- Verification:
  - `npm run lint` -> pass (`next lint` reported no warnings or errors).
  - `npm run build` -> pass (Next.js production build completed successfully; all routes generated).
- Residual Risk: `version.json` is now a required release artifact; if it is deleted, renamed, or given invalid JSON, builds will fail until it is restored.

### [2026-04-03 05:32 UTC] TYPE: correction
- Author: Codex
- Summary: Corrected the live-deployment interpretation in `PLAN.md`: the public site currently shows footer version `v2.10`, upgrades the footer host label to `smart-01` after hydration via `/api/host-id`, uses a mixed static-friendly Pages Router shape rather than one uniform export mode, and still lacks a live `sitemap.xml`.
- Evidence: `PLAN.md`; live checks `https://smartclover.ro/`, `https://smartclover.ro/trust`, `https://smartclover.ro/api/host-id`, `https://smartclover.ro/robots.txt`, `https://smartclover.ro/sitemap.xml`; browser verification with Playwright against `https://smartclover.ro/` and `https://smartclover.ro/trust`.
- Impact: Future planning now distinguishes raw prerendered HTML from hydrated runtime truth, avoids overstating the deployment as a pure export, and captures the broader live metadata and crawlability gaps that still need remediation.
- Follow-up: use the new live-deployment audit checklist pattern before making further planning claims about the public site.
- Related Entry: [2026-04-03 04:11 UTC] TYPE: discovery

### [2026-04-03 05:32 UTC] ADVERSARIAL-CHECK
- Scope: end-to-end live-site re-audit and `PLAN.md` corrections for deployment shape, footer/runtime behavior, metadata gaps, crawl policy, and planning workflow.
- BUILDER Intent + Change:
  - Re-audited the live `smartclover.ro` deployment instead of relying on the earlier planning snapshot.
  - Updated `PLAN.md` to reflect the current live footer version, raw-versus-hydrated host-id behavior, mixed static-friendly Next.js Pages Router delivery, broader metadata gaps, current `robots.txt` posture, and missing live `sitemap.xml`.
  - Added explicit live-deployment audit requirements to the plan outputs, checking methods, and immediate next steps so future planning work validates raw HTML, hydrated browser state, and runtime endpoints separately.
  - Expanded metadata acceptance targets to include Trust and aligned success wording with the intended `ai-input` policy.
- CRITIC Findings:
  - The earlier plan conflated the prerendered footer placeholder `unknown` with the hydrated runtime footer state.
  - Describing the whole live site as one static export mode overstated the deployment shape because the blog is SSG while many marketing routes expose `nextExport` / `autoExport` HTML.
  - The live crawlability gaps were understated: `ai-input` is absent, major AI crawlers are blocked, and `sitemap.xml` is missing.
  - Metadata gaps were broader than previously recorded, extending beyond About, Products, and Blog to Trust and other public routes.
- BUILDER Response / Refinements:
  - Verified raw responses with `curl`, verified hydrated footer behavior with Playwright, and checked `/api/host-id`, `robots.txt`, and `sitemap.xml` directly.
  - Rewrote the live-findings and diagnosis sections in `PLAN.md` so they record current public behavior precisely and note the raw-versus-hydrated distinction explicitly.
  - Added a repeatable live-audit workflow to `PLAN.md` so future plan revisions are anchored to the live deployment rather than a single incomplete fetch mode.
  - Tightened the metadata and crawlability acceptance language to match the refreshed live audit.
- Verification:
  - `curl -sS https://smartclover.ro/api/host-id` -> pass (`{"hostId":"smart-01"}`).
  - `node - <<'NODE' ... playwright ... NODE` -> pass (hydrated footer on `/` and `/trust` showed host id `smart-01` and version `v2.10`).
  - `curl -sSI https://smartclover.ro/sitemap.xml` -> pass (live response was HTTP 404, confirming missing sitemap).
  - `npm run lint` -> pass (`next lint` reported no warnings or errors).
  - `npm run build` -> pass (Next.js production build completed successfully; all routes generated).
- Residual Risk: Live metadata coverage and crawler policy can still drift independently of repo changes if edge-level deployment configuration changes outside this repository.

### [2026-04-03 05:36 UTC] TYPE: decision
- Author: Codex
- Summary: Locked the discoverability policy more explicitly in `PLAN.md`: robots/content signals/crawler settings must be open in practice, not merely intended in docs and not left partially closed by edge-level defaults.
- Evidence: `PLAN.md`; user correction in-session; live `https://smartclover.ro/robots.txt` showing current `ai-train=no` plus blocked major AI crawlers.
- Impact: Future refactor and deployment work must treat open crawlability as a concrete release requirement, not a soft preference or later cleanup item.
- Follow-up: implement the live edge/config changes needed to publish the open posture together with a live `sitemap.xml`.

### [2026-04-03 05:36 UTC] ADVERSARIAL-CHECK
- Scope: discoverability-policy tightening in `PLAN.md` for robots/content signals/crawler openness and related acceptance criteria.
- BUILDER Intent + Change:
  - Tightened `PLAN.md` so the live crawl posture is explicitly required to be open by default.
  - Clarified that the live deployment must not remain partially closed through edge-level overrides, inherited bot blocks, or mismatched robots/content-signal settings.
  - Updated the deployment-correction language, acceptance criteria, risks, and immediate next steps so “open in practice” is part of completion, not just aspiration.
- CRITIC Findings:
  - The prior wording still allowed too much ambiguity: a reader could treat `search=yes` plus blocked AI crawlers as “close enough.”
  - If the plan only described intended values without saying the posture must be open in practice, future work could leave Cloudflare or other edge rules partially closed.
  - Without pushing this into acceptance criteria and next steps, the policy could still be deferred.
- BUILDER Response / Refinements:
  - Added explicit “open by default” and “open in practice” wording in the discoverability policy and phase-exit criteria.
  - Made the deployment-correction step state that major AI crawlers should not remain blocked by default unless a later documented policy intentionally changes that.
  - Added closed-posture drift as an explicit risk and made opening the live crawl posture part of the concrete next-step task list.
- Verification:
  - `npm run lint` -> pass (`next lint` reported no warnings or errors).
  - `npm run build` -> pass (Next.js production build completed successfully; all routes generated).
- Residual Risk: The plan is now explicit, but the live site will remain partially closed until the edge-level robots/content-signal/crawler configuration is actually changed.

### [2026-04-03 06:34 UTC] TYPE: decision
- Author: Codex
- Summary: Locked authenticated CerviGuard and DataGems access into the website-refactor workflow: agents must use the locally stored `.env` credentials during development to gather current first-party screenshots, workflow details, and product facts, while keeping secrets and sensitive app data out of docs, logs, and published assets.
- Evidence: `AGENTS.md`, `PLAN.md`; local checks `ls -a .env .env.local` and a non-secret `.env` presence scan confirming both `CERVIGUARD` and `DATAGEMS` entries exist.
- Impact: Future content, imagery, and product-detail work is now anchored to current authenticated product reality instead of stale website copy or unauthenticated captures.
- Follow-up: Use authenticated walkthroughs to build the first screenshot/workflow inventory before the next major Home, CerviGuard, or Products refactor batch.

### [2026-04-03 06:34 UTC] ADVERSARIAL-CHECK
- Scope: authenticated-app evidence workflow update in `AGENTS.md` and `PLAN.md`.
- BUILDER Intent + Change:
  - Updated `AGENTS.md` so structural work affecting product content, screenshots, workflows, or product-detail claims must use authenticated CerviGuard and DataGems access during development.
  - Added durable secret-handling and screenshot-curation guardrails to `AGENTS.md` for local `.env` credentials and sensitive in-app data.
  - Updated `PLAN.md` so authenticated CerviGuard/DataGems access, screenshot inventory creation, and first-party app evidence are explicit non-negotiables, image-work tasks, phase outputs, checking methods, and immediate next steps.
- CRITIC Findings:
  - Without a durable rule, future agents could keep relying on stale public-site screenshots or generic copy instead of the real applications.
  - Adding app-access expectations without secret-handling guidance would create leak risk around `.env` credentials and captured in-app data.
  - If the requirement lived only in one doc, execution drift would remain likely between durable playbook guidance and active refactor planning.
- BUILDER Response / Refinements:
  - Added the requirement to both `AGENTS.md` and `PLAN.md` so it affects both long-term workflow and the active refactor plan.
  - Kept the evidence wording explicit: authenticated first-party application evidence is preferred over stale or unauthenticated captures.
  - Added guardrails against exposing secrets and sensitive account or patient-like data in screenshots, docs, logs, commits, or generated artifacts.
- Verification:
  - `ls -a .env .env.local` -> pass (`.env` exists locally).
  - `python - <<'PY' ... PY` -> pass (non-secret scan confirmed `.env` contains both CerviGuard and DataGems-related entries without printing values).
  - `npm run lint` -> pass (`next lint` reported no warnings or errors).
  - `npm run build` -> pass (Next.js production build completed successfully; all routes generated).
- Residual Risk: The workflow is now explicit, but screenshot quality and data-sensitivity handling will still depend on careful human review each time authenticated app captures are taken.

### [2026-04-03 09:10 UTC] TYPE: decision
- Author: Codex
- Summary: Finalized `PLAN.md` as the execution-ready refactor contract by locking the site objective stack, CTA hierarchy, route keep/merge map, page roles, product-status wording, proof requirements, visual requirements, execution phases, and launch gates based on the user's end-to-end objective clarifications.
- Evidence: `PLAN.md`; local route inventory via `find pages -maxdepth 2 -type f | sort`; page inspections for `pages/services.jsx`, `pages/cloud-architecture.jsx`, `pages/decentralized.jsx`, `pages/cybersecurity.jsx`, `pages/values.jsx`; in-session user clarifications on objectives, audiences, route decisions, proof model, and launch posture.
- Impact: Implementation can now proceed without further strategic ambiguity about what the site is optimizing for, which routes are staying or merging, what proof must be shown, and what counts as done for launch.
- Follow-up: Start Phase 0 by creating the evidence register, migration register, and authenticated screenshot inventory, then execute the shell/Home/About/Contact batch first.

### [2026-04-03 09:10 UTC] ADVERSARIAL-CHECK
- Scope: final `PLAN.md` rewrite into an execution-ready refactor plan.
- BUILDER Intent + Change:
  - Rewrote `PLAN.md` from a planning-heavy draft into an execution contract centered on the user's clarified business objectives.
  - Locked `Book demo` as the primary CTA, `Contact` as the main conversion hub, `Products` as the destination for merged product/architecture content, `Trust` as the diligence hub, and `About` as the founder-led credibility page.
  - Added explicit route decisions for kept, merged, and retained trust-subpage surfaces so no public route is left implicit.
  - Added concrete proof requirements, mandatory visual assets, cautious claim categories, page-level objectives, page-level done criteria, and launch gates including metadata and crawlability requirements.
- CRITIC Findings:
  - The prior plan still allowed too much strategic interpretation around the primary conversion path, especially between `Contact` and `CerviGuard`.
  - Several live public routes had not been explicitly assigned to keep, merge, or retire destinations, which made the non-loss rule hard to enforce.
  - The first-release scope included `Pricing`, `How to Buy`, and `Blog`, but the initial rewrite did not yet give them explicit page-level done criteria.
  - Without explicit product-status language and proof requirements, execution could still drift toward polished but weakly evidenced messaging.
- BUILDER Response / Refinements:
  - Locked the CTA hierarchy and page-role model so `Contact` owns conversion while `CerviGuard` remains the flagship proof page.
  - Added an explicit route map and merge-retire rule covering `Proof`, `Regulatory`, `Services`, `Cloud Architecture`, `Decentralized`, `Cybersecurity`, and `Values`.
  - Added page-level done criteria for `Pricing`, `How to Buy`, and `Blog` so every first-release page now has a completion standard.
  - Added explicit status wording for `CerviGuard` and `DataGems`, plus concrete proof and visual requirements anchored to authentic first-party artifacts.
- Verification:
  - `npm run lint` -> pass (`next lint` reported no warnings or errors).
  - `npm run build` -> pass (Next.js production build completed successfully; all routes generated).
- Residual Risk: The plan is now execution-ready, but delivery quality still depends on disciplined upkeep of the evidence and migration registers and on capturing high-quality authenticated product visuals before page implementation proceeds.

### [2026-04-03 09:24 UTC] TYPE: change
- Author: Codex
- Summary: Started Phase 0 execution by creating a repo-level evidence register and migration register, capturing authenticated CerviGuard/DataGems screenshot inventory into ignored `WORK/` storage, and adding repo-owned `robots.txt` plus `sitemap.xml` foundations for the intended open-discovery posture.
- Evidence: `EVIDENCE_REGISTER.md`, `MIGRATION_REGISTER.md`, `public/robots.txt`, `public/sitemap.xml`, `WORK/evidence-captures/2026-04-03/*`, commands `npm run lint`, `npm run build`.
- Impact: The refactor now has durable claim/migration tracking, current first-party product evidence references, and initial crawlability artifacts inside the repo instead of relying only on plan text or edge-only behavior.
- Follow-up: Rebuild the shared shell and the first page batch (`/`, `/about`, `/contact`) against these registers, then keep the evidence and migration files updated as merge work proceeds.

### [2026-04-03 09:24 UTC] ADVERSARIAL-CHECK
- Scope: Phase 0 execution artifacts and discoverability foundation (`EVIDENCE_REGISTER.md`, `MIGRATION_REGISTER.md`, `public/robots.txt`, `public/sitemap.xml`).
- BUILDER Intent + Change:
  - Created the first durable evidence register with verified, qualified, and missing-asset entries across Home, About, CerviGuard, Products, Trust, Contact, Pricing, How to Buy, and Blog.
  - Created the first migration register covering every kept, merged, and retained trust route plus current blocking gaps.
  - Captured authenticated CerviGuard and DataGems screenshots into ignored `WORK/evidence-captures/2026-04-03/` storage for current first-party product evidence.
  - Added repo-owned `robots.txt` and `sitemap.xml` files aligned with the intended open-discovery posture.
- CRITIC Findings:
  - The new `sitemap.xml` is manual, so route drift risk remains until generation is automated or it is actively maintained.
  - `robots.txt` expresses the intended posture in the repo, but the live site can still disagree if Cloudflare or other edge settings override it.
  - Authenticated screenshots were captured successfully, but some contain real in-app data and therefore cannot be published blindly.
- BUILDER Response / Refinements:
  - Recorded the screenshot-publication risk directly in `EVIDENCE_REGISTER.md` and marked sensitive captures as `qualified` rather than immediately reusable.
  - Included the exact missing-asset blockers in `MIGRATION_REGISTER.md` so founder photo, workflow diagram, and architecture diagram gaps stay visible during implementation.
  - Verified the sitemap XML structure locally and kept the change scoped to repo-owned artifacts without claiming that live edge behavior is already fixed.
- Verification:
  - `python - <<'PY' ... ET.fromstring(Path('public/sitemap.xml').read_text()) ... PY` -> pass (parsed sitemap successfully with 18 URLs).
  - `npm run lint` -> pass (`next lint` reported no warnings or errors).
  - `npm run build` -> pass (Next.js production build completed successfully; all routes generated).
- Residual Risk: Live crawlability can still remain partially closed until deployment-level settings match the new repo artifacts, and the captured product screenshots still need manual curation before any public asset refresh.

### [2026-04-03 09:37 UTC] TYPE: change
- Author: Codex
- Summary: Rebuilt the shared site shell plus the first execution batch of pages (`/`, `/about`, `/contact`), added a reusable SEO helper, modernized the navigation/footer around the locked CTA hierarchy, and updated the contact intake flow to support explicit demo, research, investor, and general inquiry routing.
- Evidence: `components/Layout.jsx`, `components/PageSeo.jsx`, `components/ServedByComponent.tsx`, `pages/_app.jsx`, `styles/refactor.css`, `pages/index.jsx`, `pages/about.jsx`, `pages/contact.jsx`, `pages/api/contact.js`, local QA captures under `WORK/qa/2026-04-03/`, commands `npm run lint`, `npm run build`, Playwright local smoke checks against `http://localhost:3000/`, `/about`, and `/contact`.
- Impact: The refactor has now moved beyond planning artifacts into a modernized public shell and a first-wave page system that makes the flagship product, founder/research credibility, and segmented contact conversion path legible on both desktop and mobile.
- Follow-up: Rebuild `CerviGuard` and `Products` next, then merge `Services`, `Cloud Architecture`, `Decentralized`, and `Cybersecurity` content into `/products` while keeping the evidence and migration registers current.

### [2026-04-03 09:37 UTC] ADVERSARIAL-CHECK
- Scope: shared shell, SEO helper, and first execution-page batch (`components/Layout.jsx`, `components/PageSeo.jsx`, `components/ServedByComponent.tsx`, `pages/_app.jsx`, `styles/refactor.css`, `pages/index.jsx`, `pages/about.jsx`, `pages/contact.jsx`, `pages/api/contact.js`).
- BUILDER Intent + Change:
  - Rebuilt the shared navigation and footer around the locked information architecture, public diligence links, and `Book demo` primary CTA.
  - Added a reusable `PageSeo` helper so the first rewritten pages share canonical, OG, Twitter, and JSON-LD handling.
  - Rewrote Home to lead with authentic flagship proof, explicit research continuity, a compact public timeline, and visible investor/research paths.
  - Rewrote About to merge values into a founder-led credibility page with named publication continuity and company-history framing.
  - Rewrote Contact into a segmented inquiry hub and updated the API payload to carry inquiry type through routing.
- CRITIC Findings:
  - The first mobile browser smoke test exposed a real regression: the consent panel intercepted clicks on the nav toggle, making the menu unusable on first visit.
  - About still lacks an approved founder photo, so the page can be founder-led in copy but not yet fully founder-led in visual proof.
  - Home and Contact now look materially stronger, but the rest of the site is still visually mixed until later phases bring CerviGuard, Products, Trust, Pricing, and Blog into the same system.
- BUILDER Response / Refinements:
  - Raised the shell stacking context in `styles/refactor.css` so the header and mobile nav sit above the consent panel; reran the mobile smoke check and confirmed the menu opens correctly.
  - Kept the founder-visual gap explicit in `EVIDENCE_REGISTER.md` and used research/product imagery instead of inventing a fake portrait.
  - Scoped the first-wave rewrite to the shell plus Home/About/Contact so the rest of the site remains functional while later batches absorb the remaining routes.
- Verification:
  - `npm run lint` -> pass (`next lint` reported no warnings or errors).
  - `npm run build` -> pass (Next.js production build completed successfully; all routes generated).
  - `node - <<'NODE' ... playwright desktop smoke on /, /about, /contact ... NODE` -> pass (desktop checks confirmed expected `h1` content and visible `Book demo` CTA; captures saved under `WORK/qa/2026-04-03/`).
  - `node - <<'NODE' ... playwright mobile smoke on / and /contact ... NODE` -> pass (mobile nav opened successfully after the stacking fix and the contact form heading rendered correctly).
- Residual Risk: Founder photo, workflow diagram, and architecture diagram are still missing; untouched routes still carry the older visual language until subsequent phases complete the migration.
