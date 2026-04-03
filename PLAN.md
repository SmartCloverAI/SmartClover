# SmartClover SRL Website Refactor Plan

Status: active planning artifact
Prepared: 2026-04-03
Primary references: `RESEARCH.md`, `CHANGE_LOG.md`, current Next.js codebase
Live deployment reference: `https://smartclover.ro`

## 1) Refactor Goal
Refactor the SmartClover public website into a modern, elegant, high-trust product website that:
- communicates SmartClover clearly as a serious healthcare AI product company,
- presents CerviGuard as the flagship proof point,
- supports verified claims with visible evidence,
- uses authentic, high-quality visuals,
- improves page quality across desktop and mobile,
- feels contemporary without looking generic or over-designed.

## 2) Non-Negotiables
- Template-first implementation.
- Verified sources for all material healthcare, research, regulatory, product-status, and cybersecurity claims.
- All high-quality existing content must be migrated into the new version unless it is explicitly merged, downgraded, or removed with rationale.
- Authentic screenshots and custom diagrams before generic decorative imagery.
- Clean responsive behavior across mobile, tablet, and desktop.
- Strong metadata, social previews, and internal linking.
- Elegant design with restrained motion and clear reading flow.
- Agents must test the site during development, not only at the end: looks, flow, interaction, responsiveness, and usability all require active verification.
- `npm run lint` and `npm run build` must remain green before merge.

## 3) Recommended Template Strategy

### 3.1 Primary baseline decision
Primary baseline: vendor-neutral adaptation of the `Portfolio Starter Kit` codebase patterns, transplanted fully into this repository and kept compatible with the existing Deeploy / Ratio1 Worker App Runner deployment model.

Rationale:
- the live site already runs as a static Next.js export, so the baseline should remain code-native and portable to Deeploy without introducing a hosted CMS requirement,
- the template is free and open-source, which matches the explicit no-cost constraint,
- it already emphasizes Markdown content, SEO, `robots.txt`, sitemap support, JSON-LD, and OG generation, which aligns with SmartClover's need to be highly discoverable by search and AI systems,
- it is a better fit than CMS-coupled or paid marketing kits because SmartClover already has a working markdown blog and wants to improve discoverability without changing deployment shape,
- the plan uses the starter as a source-code reference only, not as a commitment to Vercel hosting or Vercel platform services.

### 3.2 Why this baseline wins
- Better fit for the deployed reality:
  - `smartclover.ro` is already publicly shipping as static Next.js HTML with `nextExport` / `autoExport` behavior, so the baseline should preserve static-friendly delivery.
- Better fit for route breadth:
  - SmartClover needs a design system for Home, CerviGuard, Trust, Products, About, Blog, Proof, Regulatory, and legal pages, and this baseline provides a practical content-first starting point that can be extended across those routes.
- Better fit for discoverability:
  - the baseline already prioritizes crawlability and machine-readable metadata patterns instead of treating them as an afterthought.
- Better fit for a healthcare AI tone:
  - the visual layer can still be made calm, premium, and evidence-led by adapting typography, spacing, proof sections, and image treatment rather than by buying a premium kit.
- Better fit for implementation speed:
  - The baseline can replace ad hoc metadata/content structure patterns incrementally while keeping the existing route map and deployment shape stable.
- Better fit for deployment independence:
  - SmartClover can keep the entire implementation in-repo and deploy via Ratio1 exactly as before, provided Vercel-specific packages or services are not adopted.

### 3.3 Explicitly rejected as primary baseline
- Vercel BaseHub Marketing Website:
  - too coupled to a hosted CMS/content stack for a Deeploy-hosted static site refactor.
- Vercel SEO Starter:
  - useful for metadata patterns, but too thin as the single structural baseline for a multi-page company website with blog, trust, and product pages.
- Tailwind Plus `Oatmeal` / `Radiant`:
  - both are paid; the user explicitly requested a no-cost path.
- Framer and Webflow templates:
  - useful as inspiration, not as the implementation baseline, because the site is staying on the current deployment model and codebase.

### 3.4 Inspiration references to borrow from
- Vercel SEO Starter:
  - borrow metadata, social-preview, and crawlability rigor.
- Framer `Heallthier`:
  - borrow health-tech tone, whitespace discipline, and restrained animated feel.
- Webflow `MediAI`:
  - borrow trust-forward healthcare structure and conversion-aware content sequencing.

### 3.5 Baseline constraints
- Keep deployment on Deeploy / Ratio1.ai unchanged.
- Keep the site compatible with static export unless there is a separately approved reason to change deployment behavior.
- Keep the current markdown-driven blog rather than introducing Sanity, BaseHub, or another hosted CMS as part of the visual refactor.
- Treat Tailwind introduction, if adopted from the baseline, as a controlled implementation choice, not a license to rebuild the whole architecture.
- Prefer transplanting the baseline's content architecture, metadata, and SEO/discoverability patterns even if some visual primitives are adapted into the existing CSS system first.
- Do not introduce a dependency on Vercel hosting, Vercel-managed CMS, Vercel Analytics, Vercel Speed Insights, or any other Vercel-only runtime service as part of this refactor.
- If any reference baseline code includes vendor-specific packages, remove or replace them before adoption.

## 4) Live Deployment Findings
- `smartclover.ro` is publicly reachable and serves the expected routes, including `/`, `/cerviguard`, `/products`, `/about`, `/trust`, and `/blog`.
- The deployed site is currently a static Next.js export:
  - the live HTML includes `__NEXT_DATA__` flags such as `nextExport` and `autoExport`.
- Hosting and delivery currently look like:
  - Next.js behind Cloudflare, with the site staying on Deeploy / Ratio1.ai.
- Public navigation and diligence structure are already established:
  - top nav uses `Home`, `About`, `CerviGuard`, `Products & More`, `Contact`, `Blog`,
  - footer quick links route toward `Products & More`, `Pricing`, `How to Buy`, `Proof`, `Regulatory`, and `Trust`.
- The live footer currently shows:
  - version `v2.9`,
  - edge node host id as `unknown`.
- Metadata quality is uneven across public pages:
  - Home and CerviGuard include canonical, OG, Twitter image, and JSON-LD coverage,
  - About, Products, and Blog currently appear to lack the same richer metadata coverage.
- The Trust page is live and publicly usable:
  - it presents draft-status diligence content and includes a visible `Last updated: 2026-02-17` marker.
- `robots.txt` is already opinionated:
  - Cloudflare Managed Content Signals allow search indexing,
  - the live file currently serves `ai-train=no`, but intended policy is `ai-train=yes`,
  - multiple AI collection bots are explicitly disallowed.
- Current homepage CTA wiring is functional:
  - the `/#contact` target exists on the live home page.
- Required deployment correction:
  - update the live `robots.txt` or Cloudflare Managed Content Signals so the public policy matches the intended `ai-train=yes` setting.

## 5) Current Site Diagnosis
- Positioning is spread across many pages and sometimes mixes product, services, and roadmap language too loosely.
- The current visual system is competent but not distinctive enough for a high-trust healthcare AI product company.
- Some imagery is useful, but the overall image system is not yet deliberate or premium enough.
- Trust, proof, regulatory, and product evidence exist, but the pathways to them can be tighter.
- The pages are content-rich, but the hierarchy can be sharper and more conversion-oriented.
- Metadata parity is incomplete across non-home core pages, which weakens social sharing and search presentation consistency.
- The current live robots posture does not yet match the intended “searchable and trainable” company policy.

## 6) Discoverability and AI-Friendly Policy
SmartClover explicitly wants to be:
- indexed by search engines,
- accessible to AI systems for retrieval and grounding,
- permitted for AI training,
- easy for crawlers, researchers, and procurement teams to parse.

Required policy targets:
- `robots.txt` should allow general crawling and indexing.
- Content Signals should explicitly state:
  - `search=yes`
  - `ai-input=yes`
  - `ai-train=yes`
- Do not block `GPTBot`, `ClaudeBot`, `Google-Extended`, or similar AI crawlers unless policy changes intentionally.
- Preserve a crawlable internal-link graph across core pages, trust pages, product pages, and blog posts.

Required machine-readable artifacts:
- repo-owned `public/robots.txt` or an equivalent deployment-managed source with the intended policy,
- `sitemap.xml` covering core marketing, trust, product, and blog routes,
- canonical URLs on all indexable pages,
- OG and Twitter image coverage on all core pages,
- JSON-LD on all pages where organization, software, article, FAQ, or breadcrumb markup is useful,
- stable human-readable metadata for title and description on every public route.

Recommended additions:
- machine-readable evidence and trust links near relevant claims,
- consistent article metadata for blog posts,
- optional `llms.txt` / `llms-full.txt` style index as a supplemental artifact if SmartClover wants a dedicated AI-facing content map.

## 7) Desired Brand and UX Direction

### 7.1 Visual tone
- clinical but not sterile,
- modern but not trendy for its own sake,
- premium but not luxury-coded,
- calm, precise, trustworthy,
- more product-evidence driven than slogan-driven.

### 7.2 Design traits
- strong typography,
- disciplined spacing,
- bright surfaces with depth,
- subtle motion,
- excellent screenshot treatment,
- deliberate proof sections,
- clear CTA rhythm.

### 7.3 What to avoid
- generic AI gradients carrying the whole brand,
- excessive copy blocks without proof,
- stock-like or obviously synthetic imagery on trust-critical pages,
- crowded cards and inconsistent section patterns,
- trying to make every page equally important.

## 8) Priority Information Architecture

### 8.1 Primary navigation target
- Home
- CerviGuard
- Products
- Trust
- About
- Contact
- Blog

### 8.2 Content hierarchy principle
The site should center on:
1. who SmartClover is,
2. what CerviGuard proves,
3. why the company is trustworthy,
4. what else exists in the portfolio,
5. how a qualified buyer or partner proceeds.

### 8.3 Supporting routes
- Proof
- Regulatory
- Pricing
- How to Buy
- Trust subpages
- Selected blog posts

These should support the main conversion journey rather than compete with it.

## 9) Core Page Briefs

### 9.1 Home
Goal:
- establish SmartClover quickly,
- lead with product credibility,
- route visitors toward CerviGuard, trust content, and contact.

Must include:
- clear company positioning,
- flagship product block,
- proof or diligence strip,
- evidence-aware claims,
- search-and-AI-friendly metadata parity with the strongest current pages,
- one primary CTA and one secondary CTA,
- visually strong but restrained hero.

### 9.2 CerviGuard
Goal:
- function as the most convincing product page on the site.

Must include:
- what it is,
- who it is for,
- workflow explanation,
- screenshot-backed product walkthrough,
- product status and constraints,
- links to supporting proof, regulatory, or diligence material,
- contact or qualification CTA.

### 9.3 About
Goal:
- convert curiosity into trust.

Must include:
- company story,
- founder and research credibility,
- operating philosophy,
- responsible AI stance,
- links to public references and repositories where useful.

### 9.4 Products
Goal:
- show portfolio structure without diluting the flagship story.

Must include:
- active products vs roadmap tracks,
- one compact explanation of portfolio logic,
- links onward to flagship and diligence routes,
- clear wording around what is active versus exploratory.

### 9.5 Trust
Goal:
- become the diligence hub for serious evaluators.

Must include:
- security, privacy, regulatory, and operational links,
- concise plain-language overview,
- no inflated claims,
- strong internal navigation to subpages.

### 9.6 Contact
Goal:
- support qualification and follow-up.

Must include:
- who should reach out,
- what information to include,
- expected response framing,
- trust reinforcement near the form or CTA.

### 9.7 Blog
Goal:
- publish a smaller set of higher-quality, verifiable thought pieces.

Must include:
- better article hierarchy,
- citation-aware writing where appropriate,
- cleaner article template,
- indexable metadata and structured data on post and listing pages,
- links from insight to product or trust context when relevant.

## 10) Content System

### 10.1 Content rules
- Every page needs a single job.
- Every section needs a reason to exist.
- Every important claim needs either a source or a first-party evidence artifact.
- Repetition across pages should be reduced unless repetition serves navigation or trust.
- Strong existing content should be restructured, improved, and re-contextualized, not casually discarded during redesign.

### 10.2 Evidence register format
Use this structure during implementation for each material claim:

| Page | Claim | Source type | Source link / artifact | Status | Notes |
| --- | --- | --- | --- | --- | --- |
| `/cerviguard` | Example claim | first-party screenshot / DOI / repo / policy doc | link or file path | verified / needs review / remove | context |

### 10.3 Claim policy
- `verified`: can appear in primary copy.
- `qualified`: may appear only with explicit caveat or date.
- `unverified`: remove or rewrite.

### 10.4 Quality-content migration rule
The refactor must migrate all high-value existing content into the new version, even if the structure and presentation change.

High-value content includes:
- flagship product explanations and workflow descriptions,
- trust, privacy, incident-response, regulatory, proof, pricing, and buying-process content,
- verified founder/research credibility content,
- useful blog posts and citation-backed educational content,
- strong screenshots, diligence links, and downloadable artifacts,
- route-level metadata and structured-data work that is already correct.

Migration requirements:
- quality content should be preserved as-is by default, with only structural polish, clarity cleanup, or formatting cleanup where needed.
- other useful but weaker content should go through an explicit copy-edit process rather than being rewritten casually or dropped silently.
- every current page or section should be mapped to one of:
  - `migrate_as_is`
  - `copy_edit_and_migrate`
  - `merge`
  - `split`
  - `retire_with_rationale`
- no important trust or product evidence should disappear just because the new design is cleaner.
- if content is condensed, the evidence and meaning must still survive in the new structure.

Copy-edit process expectations:
- preserve facts, claims, evidence, and intent,
- tighten language, hierarchy, readability, and duplication,
- do not introduce stronger claims during editing,
- keep citations, trust links, and proof references attached to the relevant content,
- record when a section was preserved as-is versus materially rewritten.

Recommended migration register:

| Existing page / section | Value type | Destination in new version | Action | Notes |
| --- | --- | --- | --- | --- |
| `/trust` | diligence hub | trust center | migrate_as_is / copy_edit_and_migrate / merge / split / retire_with_rationale | maintain discoverability |

## 11) Image System

### 11.1 Image priorities
1. CerviGuard screenshots
2. DataGems screenshots where relevant
3. custom workflow diagrams
4. founder/team photography if available
5. documentary or licensed editorial visuals
6. decorative imagery only where it supports the section and does not weaken trust

### 11.2 Required image work
- curate the best existing screenshots,
- capture additional current product screenshots if quality or flow coverage is insufficient,
- create custom diagrams for workflow, governance, and deployment concepts,
- standardize aspect ratios and crop behavior,
- improve alt text quality across evidence-bearing visuals.

### 11.3 Image acceptance criteria
- sharp on retina displays,
- cropped intentionally on mobile,
- placed near the text they support,
- no low-signal generic AI art on flagship or trust pages,
- optimized for page speed.

## 12) Design System Plan

### 12.1 Components to standardize
- navigation shell,
- hero layouts,
- proof strips,
- feature grids,
- screenshot cards,
- quote or credibility blocks,
- CTA sections,
- trust link clusters,
- page headers,
- footer.

### 12.2 Style tokens to define
- typography scale,
- color system,
- spacing scale,
- border radius scale,
- shadow system,
- motion durations and easing,
- container widths,
- section spacing rules.

### 12.3 Motion policy
- motion should guide attention, not perform identity work by itself,
- hero and section reveals should be subtle,
- avoid layered motion that competes with reading.

## 13) Delivery Phases

### Phase 0: Evidence, assets, and template lock
Outputs:
- confirmed vendor-neutral `Portfolio Starter Kit` adaptation scope,
- initial evidence register,
- initial quality-content migration register,
- visual reference set,
- list of missing screenshots and missing proof artifacts,
- explicit crawlability and AI-training policy requirements.

Exit criteria:
- one primary baseline confirmed in implementation terms,
- one supporting inspiration set chosen,
- highest-risk claims reviewed,
- image gaps identified,
- high-value content inventory mapped,
- discoverability requirements mapped to implementation tasks.

### Phase 1: Design system and shell rebuild
Outputs:
- updated navigation,
- updated footer,
- new page-section primitives,
- new typography and spacing system,
- improved image treatment,
- repeatable browser-test routine for visual and interaction verification,
- defined `design -> refactor -> build -> test -> check -> repeat` implementation loop.

Exit criteria:
- shell is responsive and consistent,
- at least one flagship page can be built on the new system without ad hoc styling,
- desktop and mobile shell behavior has been visually checked in-browser.

### Phase 2: High-value page rewrites
Priority order:
1. Home
2. CerviGuard
3. About
4. Trust
5. Products

Exit criteria:
- major positioning and trust story are coherent across these pages,
- flagship page quality is materially improved,
- unsupported claims removed or qualified,
- no mapped high-value content from these pages has been silently dropped.

### Phase 3: Supporting pages and blog cleanup
Scope:
- Contact
- Pricing
- How to Buy
- Proof
- Regulatory
- Blog index
- selected blog templates/posts

Exit criteria:
- support pages align visually and structurally with the new system,
- blog and diligence content no longer feel like separate design eras,
- migrated quality content remains reachable and understandable in its new locations.

### Phase 4: QA and launch hardening
Scope:
- metadata review,
- `robots.txt` review,
- sitemap review,
- internal link review,
- alt text review,
- mobile pass,
- desktop visual pass,
- interaction and flow pass,
- usability pass,
- performance pass,
- trust/citation pass,
- final lint/build verification.

Exit criteria:
- no major design regressions,
- acceptable performance on core pages,
- all material claims accounted for in the evidence register,
- all mapped high-value content accounted for in the migration register,
- metadata parity restored across Home, CerviGuard, About, Products, and Blog,
- public crawlability policy matches intended `search=yes`, `ai-input=yes`, `ai-train=yes`.

## 14) Agent Work Model

### 14.1 Recommended sequence
- research and evidence first,
- template selection second,
- discoverability and metadata policy third,
- design system fourth,
- flagship pages fifth,
- supporting pages sixth,
- continuous visual/interaction/usability testing throughout,
- QA critic pass last.

### 14.2 Suggested agent ownership
- Research/evidence agent: sources, citations, proof inventory.
- Content-migration agent: maps existing high-value content into the new IA and flags anything at risk of being lost.
- Design/template agent: template adaptation and design system.
- Discoverability agent: robots, sitemap, canonical, OG, JSON-LD, and crawl-policy verification.
- Page implementation agent: concrete page changes in limited files.
- Critic agent: mobile, SEO, trust, and regression review.

### 14.3 Rule
Do not let multiple agents edit the same file or visual layer at the same time unless the write scopes are clearly separated.

### 14.4 Development-lifecycle testing rule
Agents must verify the site continuously during implementation, not only in the final QA phase.

Minimum required checks during development:
- visual review on desktop and mobile for any changed page,
- navigation and CTA flow review after shell or IA changes,
- interaction review for menus, consent controls, forms, and any newly introduced UI behavior,
- usability review for spacing, readability, scanning, and obvious friction,
- screenshot-based or browser-based evidence capture when changes are substantial.

Testing expectation:
- each meaningful implementation batch should include some direct site verification under `npm run dev` or an equivalent local runtime,
- if an agent cannot perform the visual/interaction check, that gap must be stated explicitly.

### 14.5 Iterative design-refactor verification loop
The default execution loop for design refactor work is:
1. design or adapt the target section/page
2. implement the batch
3. run the site locally
4. test visually and interactively
5. check findings
6. refine the implementation
7. repeat until the batch is acceptable

This loop should happen repeatedly during the refactor, not only once near the end.

### 14.6 Available visual, UX, design, and usability checking methods
Agents should use as many of these methods as practical during each meaningful batch:

- local runtime review:
  - run the actual site locally under `npm run dev` or equivalent and inspect the rendered output.
- browser automation:
  - open pages, resize viewports, click menus/buttons/links/forms, and verify route flows and interactions.
- screenshot-based visual review:
  - capture desktop and mobile screenshots and inspect spacing, hierarchy, density, cropping, and polish.
- direct image inspection:
  - inspect captured screenshots or generated assets directly when layout or styling details matter.
- DOM and layout inspection:
  - check overflow, clipping, hidden content, broken anchors, heading structure, missing alt text, and layout-shift risks.
- responsive viewport testing:
  - test narrow mobile, standard mobile, tablet, laptop, and wide desktop states when relevant.
- interaction-flow testing:
  - verify navigation, CTA paths, trust/proof flows, consent behavior, forms, and any newly added UI controls.
- heuristic usability review:
  - evaluate readability, scanability, CTA clarity, friction, visual rhythm, and whether the page feels crowded or unclear.
- accessibility-oriented review:
  - review semantic structure, focus states, tap-target risks, contrast issues, and content clarity.
- performance-adjacent visual review:
  - inspect likely LCP areas, image sizing, heavy above-the-fold sections, and visual regressions tied to performance choices.
- live-site comparison:
  - compare local refactor output against the current public site to confirm that valuable content, trust signals, and useful flows are preserved or improved.

### 14.7 Visual and usability evidence expectation
For substantial page or shell changes, agents should leave evidence of verification in the working process:
- screenshots,
- browser-test notes,
- viewport checks,
- interaction findings,
- explicit statements of remaining visual/usability risk.

## 15) Acceptance Metrics
- Home page explains SmartClover in under one screenful without losing nuance.
- CerviGuard reads like a credible product page, not a rough capability summary.
- Trust content is easy to find from every important conversion page.
- Top pages use better visuals than the current site.
- Visual language is coherent across pages.
- Lint and build stay green.
- Core pages feel strong on mobile, not merely acceptable.
- About, Products, and Blog gain metadata coverage comparable to Home and CerviGuard.
- The live site becomes explicitly search-friendly and AI-training-friendly.
- No important high-value content from the current site is lost in the refactor.
- Quality content is preserved as-is unless there is a documented reason to merge, split, or retire it.
- Other content is either copy-edited responsibly or intentionally retired with rationale.
- Changed pages have been visually and interactively verified during development, not only at the end.

## 16) Risks and Dependencies
- A high-quality refactor depends on disciplined claim verification, not just better writing.
- Template choice can accelerate or derail the entire project; mixing template families is a risk.
- If authentic visuals are not improved, the redesign will still feel weaker than the copy intends.
- Introducing Tailwind into a non-Tailwind codebase adds migration overhead and requires restraint to avoid mixed styling debt.
- Crawlability policy may remain wrong if the live edge configuration overrides repo-owned artifacts.
- A Pages Router to App Router migration could help long-term maintainability, but it should be treated as a separate decision gate, not assumed.

## 17) Immediate Next Steps
1. Confirm the `Portfolio Starter Kit` adaptation scope and map which layout, metadata, and content primitives will be transplanted into the current site.
   Explicitly exclude any hosting/platform coupling from the adoption scope.
2. Create the first evidence register for Home, CerviGuard, About, Products, Trust, and Blog.
3. Create the first quality-content migration register so all strong existing content has a target destination before redesign work starts.
4. Add explicit implementation tasks for `robots.txt`, sitemap, canonical coverage, OG/Twitter images, and JSON-LD parity.
5. Audit current screenshots and identify missing visual proof plus missing metadata coverage.
6. Define the browser-based development test routine agents must run while rebuilding the shell and the Home/CerviGuard pair.
7. Rebuild the site shell and the Home/CerviGuard pair first, keeping deployment and blog architecture unchanged.
