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
