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

## Surgical Target List: DataGems Blog Publication

| File | Existing fragment | Failure class | Replacement intent | Verification |
| --- | --- | --- | --- | --- |
| `tasks/drafts/datagems_blog.md` | `not our flagship clinical product`, `CerviGuard remains the flagship product`, `belongs beside CerviGuard`, `not in front of it` | Internal portfolio-status narration | Publish only reader-value language about schema-first synthetic-data workflows | Tone test blocks rejected fragments; online blog scan passes |
| `tasks/drafts/datagems_blog.md` | `approved peers` | Overstated governance wording | Use `configured peers`, matching the current peer configuration evidence | Tone test blocks `approved peers`; online blog scan passes |
| `tasks/drafts/datagems_blog.md` and `pages/products.jsx` | `SLM-first generation` | Strategy claim not evidenced by the reviewed source files | Use current evidence for internal inference path and saved external inference profiles | Tone test blocks `SLM-first generation`; source scan passes |
| `tasks/drafts/datagems_blog.md` | `governed synthetic-data workflows` / `governed experimentation` | Compliance-adjacent wording without formal governance evidence | Use controlled/reviewable workflow language and a bounded research-pilot CTA | Tone test blocks rejected phrases; online blog scan passes |
| `posts/datagems-synthetic-data-workflows.md` | New public article | Publication candidate | Publish the approved article body only, without proposal notes, claim maps, or reviewer questions | Blog builds and live URL returns positive workflow matches |

## Batch Review: DataGems Blog Draft

Files reviewed:
- `tasks/drafts/datagems_blog.md`
- `DataGems/README.md`
- `DataGems/app/(app)/page.tsx`
- `DataGems/components/TasksPanel.tsx`
- `DataGems/app/api/tasks/schema/route.ts`
- `DataGems/app/api/tasks/confirm/route.ts`
- `DataGems/lib/datagen/jobWorker.ts`
- `DataGems/lib/datagen/exporters.ts`
- `DataGems/app/api/tasks/[id]/export/route.ts`

First-principles findings:
- The reader problem is not "where DataGems sits in SmartClover's portfolio"; it is how a healthcare AI or research team can rehearse schemas, generation jobs, review, and exports before sensitive data is appropriate.
- The article must explain the workflow and limits before discussing broader health-data policy.

Evidence findings:
- The DataGems application supports authenticated job creation, schema drafting, confirmation, configured peer execution, progress metrics, and JSON/CSV export.
- Source evidence supports an internal inference path and optional saved external inference profiles, but does not support `SLM-first` strategy claims, compliance, clinical validation, anonymization, adoption, or customer traction claims.
- NIST SP 800-226, EHDS, and EU AI Act references support cautious language around privacy, data reuse, risk management, data quality, and human oversight.

Redaction findings:
- No earlier publication-name, named-coauthor, founder-history, or credibility-theater content is needed for this blog post.
- Provider-specific infrastructure names are unnecessary for the public article and should remain absent.

S-WRITER findings:
- Remove draft phrases that sound like internal positioning: `not our flagship clinical product`, `CerviGuard remains the flagship product`, `belongs beside CerviGuard`, and `not in front of it`.
- Keep the article in SmartClover's voice: concrete, direct, research-partner-oriented, and bounded.
- Replace `approved peers` with `configured peers`, and replace `SLM-first generation` with current evidence for internal inference plus saved external inference profiles.

VC-EXPERT findings:
- DataGems is commercially understandable as a research and data-workflow wedge if the article makes the problem concrete: schema discipline, integration rehearsal, traceable generation, review, and export.
- The post should avoid suggesting DataGems is the lead product or a regulated clinical system.
- Roadmap items such as dataset documentation, utility checks, privacy-risk review, and reviewer sign-off must be framed as next direction, not current shipped capability.

CQ-VERIFIER findings:
- The draft's strongest paragraphs are workflow-oriented. The weakest paragraphs manage internal product hierarchy and should not be published.
- The final article should include explicit healthcare boundaries without letting disclaimers dominate the post.

CONTENT-VALIDATOR findings:
- Add tests for rejected draft language before publishing.
- Verify local rendering through the existing Markdown blog pipeline, then verify the online URL after deployment.

Client/buyer findings:
- Research partners need to see the work they can discuss now: schema planning, generation-job design, progress review, export, and documentation of limits.
- Investors should see a focused research workflow surface, not portfolio-status narration.

Required changes before publish:
- Create `posts/datagems-synthetic-data-workflows.md` with only the approved article body.
- Extend `tests/public-copy-tone.test.mjs` to block rejected draft phrases and require DataGems workflow language.
- Increment `version.json`, append `CHANGE_LOG.md`, commit, push, wait for the online version, and scan the live blog page.

Residual risks:
- Visual support for the article is still a separate NapkinAI batch.
- Existing blog posts still need the separate keep/rewrite/remove review in Task 6B.
