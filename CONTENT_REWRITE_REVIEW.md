# SmartClover Content Rewrite Reviews

Prepared: 2026-05-10
Purpose: batch review log for the execution of `CONTENT_FIX_PLAN.md`.

## Batch Review: Home/About Regression Fix

Files reviewed:

- `pages/index.jsx`
- `pages/about.jsx`
- `lib/agent-artifacts.mjs`
- `tests/public-copy-tone.test.mjs`
- `CONTENT_INVENTORY.md`
- `CONTENT_REDACTION_REGISTER.md`

Evidence findings:

- CerviGuard status remains `live product`.
- DataGems status remains `live research pilot`.
- PubMed references are kept as research context, not current product-efficacy proof.
- Founder reference is limited to current leadership context.

Redaction findings:

- Homepage must not mention earlier author-name continuity or Dr. Florian Nicula.
- About narrative must not use earlier author-name continuity or Dr. Florian Nicula as credibility copy.
- Citation continuity belongs only in neutral citation/reference contexts if needed.

S-WRITER findings:

- Replace evaluator phrases with direct company voice.
- Avoid "public record", "delivery posture", "visible artifacts", and similar rubric language.
- Keep sentences concrete: product, audience, workflow, route, next step.

VC-EXPERT findings:

- Keep CerviGuard first.
- Do not inflate publications into traction, clinical validation, or regulatory approval.
- Make buyer, research, procurement, and investor routes clear without turning homepage copy into a diligence memo.

CQ-VERIFIER findings:

- Initial review failed on Home/About because bad phrases remained in credibility sections and metadata.
- Required removals: homepage personal-publication explanation, `public record`, `publication continuity`, `named accountability`, `visible product artifacts`, `operating context`, `delivery posture`, and machine-readable `company profile` drift.
- Required replacement style: direct product and audience language.

CONTENT-VALIDATOR findings:

- Local validation must include tone tests, lint, build, `git diff --check`, and source scans.
- Commit must include a `version.json` increment.
- Online validation must verify `/api/status`, `/`, `/about`, `llms.txt`, `llms-full.txt`, and MCP artifacts after deployment.

Client/buyer findings:

- Clinics need to understand what CerviGuard does before reading research references.
- Research teams need references separated from product claims.
- Procurement/security reviewers need clear trust routes, not "diligence-ready" language.
- Investors need accurate product status without unsupported proof claims.

Required changes before publish:

- Expanded tone tests with redaction and evaluator-language fragments.
- Rewrote Home/About copy and metadata.
- Aligned `lib/agent-artifacts.mjs`, `llms` source text, and `.well-known` site-navigation copy.
- Removed redacted name-continuity copy from two public blog posts.
- Bumped `version.json` from `3.13` to `3.14`.

Local validation:

- `node --test tests/public-copy-tone.test.mjs` -> pass, 4/4 tests.
- `rg -in "public profile references|publication continuity|identifiable prior work|public record|named accountability|support evaluation|stakeholders|product maturity|visible product artifacts|diligence-ready|trust-ready|company profile|external evaluators|evaluation routes|delivery posture|operating context|public artifacts|public trust routes for diligence|diligence readiness|public healthcare positioning|named leadership|serious evaluators|earlier work published|Andreea Itu|Florian Nicula|support due diligence" pages components lib posts public/.well-known public/openapi.json || true` -> pass, no matches.
- `npm test` -> pass, 11/11 tests.
- `npm run lint` -> pass, no ESLint warnings or errors.
- `npm run build` -> pass, 29 static pages generated.
- Local production Playwright smoke on `/` and `/about` desktop and mobile -> pass; footer showed `v3.14`.
- Local `curl` checks for `/llms.txt`, `/llms-full.txt`, `.well-known` site-navigation, and agent-skill index -> pass, no banned-copy matches.

Residual risks:

- Other routes may still contain weaker versions of the same evaluator tone and must be handled in later batches.

## Batch Review: Product, Trust, Proof, Regulatory, And Commercial Routes

Files reviewed:

- `pages/cerviguard.jsx`
- `pages/products.jsx`
- `pages/proof.jsx`
- `pages/regulatory.jsx`
- `pages/trust/index.jsx`
- `pages/trust/security.jsx`
- `pages/trust/privacy-policy.jsx`
- `pages/trust/terms-of-service.jsx`
- `pages/trust/incident-response.jsx`
- `pages/pricing.jsx`
- `pages/how-to-buy.jsx`
- `pages/contact.jsx`
- `pages/services.jsx`
- `pages/cloud-architecture.jsx`
- `pages/about.jsx`
- `pages/values.jsx`
- `components/Layout.jsx`
- `components/DiligenceLinksSection.jsx`
- `posts/healthcare-ai-research.md`
- `posts/cerviguard-remote-screening-foundations.md`
- `posts/cybersecurity-healthcare-ledger.md`
- `tests/public-copy-tone.test.mjs`

Evidence findings:

- CerviGuard remains described as the `live product`.
- DataGems remains described as a `live research pilot`.
- MDR Class I language is now draft/self-assessment qualified near the product and regulatory claims.
- TealGuard partnership language was removed from the public proof timeline because permission/evidence is not present in the public evidence register.
- Security copy was downgraded from broad technical/regulatory assertions to public baseline language.

Redaction findings:

- No TealGuard partnership claim remains in scanned source.
- No `human-in-the-loop`, `stakeholder interaction`, or diligence-memo phrasing remains in scanned public-source content.
- Terms/privacy/contact text now says procurement, legal, trust, security, or investor review rather than public diligence.

S-WRITER findings:

- Replace rubric phrases with concrete visitor tasks: review pricing, buying steps, proof, regulatory context, and trust material.
- Replace abstract or over-strong claims such as `product-grade UX`, `explainable AI outputs`, `audit-ready metadata`, and `enterprise buying motions`.
- Use direct product and buyer language instead of internal taxonomy.

VC-EXPERT findings:

- Preserve investor credibility by showing what is verified, what is qualified, and what is still missing.
- Do not imply final regulatory approval, certified security posture, clinical outcome proof, or partnership traction.
- Make Proof separate verified public evidence, qualified evidence, evidence gaps, and pending metrics.

CQ-VERIFIER findings:

- Initial xhigh review failed the batch on TealGuard, over-strong security claims, final-sounding MDR language, diligence/evaluator voice, `human-in-the-loop`, and DataGems traction wording.
- Required fixes were applied across product, proof, trust, regulatory, commercial, shared layout, and older public blog/legacy route surfaces.

CONTENT-VALIDATOR findings:

- Required batch boundary includes product/trust/commercial routes and machine-readable parity checks.
- Local and online validation must use GET for `llms` surfaces and `Accept: text/markdown` for route scans.
- This batch ships as version `3.15`; any online-only fix after deployment requires a new version.
- Post-edit validation required adding `CHANGE_LOG.md` evidence, replacing the pending review-log note, and adding positive agent-artifact parity assertions rather than relying only on banlist scans.
- Final validation expanded the CerviGuard status sweep beyond route markdown to Home proof copy, WebMCP metadata, and `.well-known` agent-skill text; all CerviGuard `live pilot` variants were replaced with `live product` wording and blocked in tests.

Client/buyer findings:

- Clinics and hospitals need clear CerviGuard workflow language with clinician review.
- Procurement and security readers need draft baseline documents, not diligence marketing.
- Investors need evidence gaps to be explicit rather than hidden behind proof-page confidence language.
- Research/data partners need DataGems framed as a research pilot, not a commercial traction signal.

Required changes before publish:

- Expanded tone tests with product/trust/proof/regulatory/commercial banned phrases and positive assertions.
- Rewrote CerviGuard and Products to draft-qualify MDR and keep CerviGuard first.
- Rewrote Proof to remove TealGuard and separate verified, qualified, gap, and pending-metric evidence.
- Rewrote Regulatory and Trust/Security to avoid final approval, certification, end-to-end encryption, immutable traceability, and over-broad NIS2/CRA claims.
- Rewrote Pricing/How-to-Buy/Contact wording toward RFQ scope, next steps, and practical review paths.
- Replaced matching older public-copy fragments in Services, Cloud Architecture, Values/About, and public blog posts.
- Replaced CerviGuard `live pilot` wording in Home proof copy, CerviGuard CTA, Services copy, footer/public links, WebMCP metadata, LLMS/MCP source text, and `.well-known` site-navigation skill text.
- Bumped `version.json` from `3.14` to `3.15`.

Local validation:

- `node --test tests/public-copy-tone.test.mjs` -> pass, 9/9 tests.
- `node --test tests/agent-artifacts.test.mjs` -> pass, 8/8 tests, including product-status and claim-safety parity for agent-facing artifacts.
- `npm test` -> pass, 17/17 tests.
- `npm run lint` -> pass, no ESLint warnings or errors.
- `npm run build` -> pass, 29 static pages generated; existing Browserslist `caniuse-lite` warning only.
- `git diff --check` -> pass.
- Expanded source scan across pages, components, lib, posts, `.well-known`, and OpenAPI -> pass, no blocked fragments.
- `.well-known` agent-skill digest check -> pass after updating the site-navigation digest in `index.json`.
- Local production smoke on port `3028` -> `/api/status` returned version `3.15`; route, `llms`, `.well-known`, OpenAPI, and MCP resource scans were clean.
- Local Playwright desktop and mobile smoke -> pass for `/`, `/about`, `/cerviguard`, `/products`, `/proof`, `/regulatory`, `/trust/security`, `/pricing`, `/how-to-buy`, and `/contact`; footer showed `v3.15`.

Residual risks:

- Public PDF/pitch artifacts remain governed by the pitch-deck plan and still require replacement/republication in a separate batch.
- Some internal component/class identifiers still include `Diligence` for CSS/import compatibility; rendered public copy no longer uses the flagged diligence phrases.
