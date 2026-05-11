# SmartClover Content Rewrite Review

Prepared: 2026-05-11

## Surgical Target List

Batch: Introspection and reader-value sweep

| File | Existing fragment | Failure class | Replacement intent | Verification |
| --- | --- | --- | --- | --- |
| `pages/about.jsx` | `CerviGuard is the live product at the center of the company story.` | Introspective status narration | Explain CerviGuard as the flagship workflow product for cervical-screening teams | Tone test blocks `center of the company story`; online `/about` scan passes |
| `pages/about.jsx` | `DataGems remains a live research pilot, not the main commercial product.` | Introspective status narration | Explain DataGems as the synthetic-data research workflow surface | Tone test blocks `not the main commercial product`; online `/about` scan passes |
| `pages/products.jsx` | `It is not presented as the main commercial product.` | Internal positioning disclaimer | Explain DataGems reader value while keeping CerviGuard first | Tone test blocks `not presented as the main commercial product`; online `/products` scan passes |
| `pages/index.jsx` | `flagship live product publicly visible through CerviGuard.` | Proof-as-copy / introspective evidence wording | State how a visitor can review CerviGuard through live workspace, repository, and trust material | Tone test blocks `publicly visible through`; online `/` scan passes |
| `pages/index.jsx` | `live research pilot publicly visible through DataGems.` | Proof-as-copy / introspective evidence wording | State what DataGems gives research/data partners to discuss or review | Tone test blocks `publicly visible through`; online `/` scan passes |
| `pages/index.jsx` | `Current company posture` | Internal positioning label | Frame the timeline step as reader routing and conversation choice | Tone test blocks `current company posture`; online `/` scan passes |

## Batch Review: Introspection And Reader-Value Sweep

Files reviewed:
- `pages/index.jsx`
- `pages/about.jsx`
- `pages/products.jsx`
- `tests/public-copy-tone.test.mjs`

First-principles findings:
- The failing fragments do not help the reader decide what to do; they describe company status or perception.
- Replacement copy must answer what CerviGuard and DataGems help readers review, test, or discuss.

Evidence findings:
- CerviGuard public workspace, repository references, screenshots, and trust routes are already present in public source.
- DataGems screenshots and repository/product links are already present on the products page.

Redaction findings:
- No earlier publication-name or named-coauthor text is needed for these replacements.

S-WRITER findings:
- Replace passive/evaluator phrases with direct product and workflow language using `our` where it improves accountability.

VC-EXPERT findings:
- Keep CerviGuard clearly first. DataGems should be framed as useful research infrastructure without pretending to be the commercial lead.

CQ-VERIFIER findings:
- Add regression tests for introspective wording before rewriting the fragments.

CONTENT-VALIDATOR findings:
- Run source scans and local test/build commands before commit. After push, verify online HTML for the same banned phrases.

Client/buyer findings:
- Clinics should see what CerviGuard helps them operate.
- Research partners should see what DataGems helps them test.
- Investors should see product hierarchy without analyst-style self-description.

Required changes before publish:
- Add the introspection banned phrases to `tests/public-copy-tone.test.mjs`.
- Replace only the target fragments listed above.

Residual risks:
- Broader blog and visual work remain separate batches.

## Online Verification Finding: Footer Reader-Value Follow-Up

Observed after deploying version `3.18`:

| File | Existing fragment | Failure class | Replacement intent | Verification |
| --- | --- | --- | --- | --- |
| `components/Layout.jsx` | `DataGems remains the live research pilot.` | Status-management copy using the same `remains` pattern | Explain DataGems as supporting synthetic-data research workflows | Tone test blocks `remains the live research pilot`; online footer scan passes |

Required follow-up:
- Replace the footer sentence with reader-value copy.
- Increment `version.json` again because the issue was found after online verification.
- Commit, push, wait for deployment, and re-run online checks.

## Follow-Up Sweep: Nearby Status Wording

Observed after version `3.19` online checks:

| File | Existing fragment | Failure class | Replacement intent | Verification |
| --- | --- | --- | --- | --- |
| `pages/index.jsx` | `CerviGuard remains the primary commercial product` | Internal product-status narration | Explain that CerviGuard is the product readers review first | Tone test blocks `remains the primary commercial product`; online `/` scan passes |
| `pages/products.jsx` | `DataGems operating as a live research pilot` | Status-management copy | Explain that DataGems supports synthetic-data research workflows | Tone test blocks `operating as a live research pilot`; online `/products` scan passes |
| `pages/about.jsx` | `DataGems as a live research pilot` in SEO description | Status-management metadata | Align metadata with reader-value DataGems language | Online `/about` metadata scan passes |
