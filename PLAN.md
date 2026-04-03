# SmartClover SRL Website Refactor Plan

Status: execution-ready
Prepared: 2026-04-03
Last materially updated: 2026-04-03
Primary references: `AGENTS.md`, `RESEARCH.md`, `CHANGE_LOG.md`, current Next.js codebase
Live deployment reference: `https://smartclover.ro`
Execution rule: strategic scope is locked; next work is implementation, verification, and launch hardening.

## 1) Executive Objective
Refactor the SmartClover public website into a modern, high-trust healthcare AI company site that is built for real business outcomes, not only visual polish.

Primary business outcome:
- qualified demo requests.

Supporting business outcomes:
- pilot inquiries,
- partnership conversations,
- investor-ready credibility,
- diligence-ready credibility for serious evaluators.

The site must make SmartClover feel like:
- a real healthcare AI company,
- a company with real products and real research,
- a company with identifiable history and founder credibility,
- a company that is serious about cancer prevention and trust,
- a company worth contacting now.

## 2) Audience and Positioning Lock

### 2.1 Primary audience mix
- clinics and hospitals,
- research partners,
- investors.

### 2.2 Positioning lock
SmartClover should be presented as:
- a healthcare AI platform company,
- with one flagship product: CerviGuard,
- one secondary product: DataGems,
- and active research areas that are publicly visible but clearly distinguished from product reality.

### 2.3 Balance rule
The site should sit in the middle between flagship-first and portfolio-first:
- CerviGuard must remain the strongest proof point,
- but the company should not look like a one-page single-product shell,
- and the broader platform, research, and company history should remain visible.

### 2.4 Homepage message lock
Within the first screen of the homepage, a serious visitor should understand:
- SmartClover is healthcare AI,
- SmartClover has real products,
- SmartClover has real research,
- SmartClover has real history and identifiable leadership,
- SmartClover is not an anonymous generic AI company.

### 2.5 CerviGuard message lock
By the time a serious visitor leaves the CerviGuard page, they should believe:
- the product is real,
- the product functions,
- the work on cancer prevention is real,
- SmartClover is still early in the journey but already operational.

## 3) CTA Hierarchy

### 3.1 Primary CTA
- `Book demo`

### 3.2 Secondary CTA
- email outreach / general contact.

### 3.3 Audience-specific paths
The site must support distinct inquiry paths without diluting the main CTA:
- clinics and hospitals: `Book demo` / `Request pilot`,
- research partners: `Research partnership`,
- investors: `Investor inquiry`,
- everyone else: `General contact`.

### 3.4 Contact-page role
`/contact` is the primary conversion hub for the site. It must contain the full inquiry structure rather than forcing serious visitors into vague generic outreach.

## 4) Locked Product and Content Language

### 4.1 Product-status wording
- CerviGuard: `live product`
- DataGems: `live research pilot`

### 4.2 Draft-status rule
If trust, legal, regulatory, or operational material is incomplete but still valuable to publish:
- it may remain live,
- it must be labeled `Draft`,
- it must show a visible date,
- and it must avoid overstated certainty.

### 4.3 Do not do this
- Do not use broad tentative language across the whole site.
- Do not make SmartClover sound less real than it is.
- Do not use stronger claims than the evidence supports.

## 5) Non-Negotiables
- Template-first implementation.
- Verified sources or first-party evidence for all material healthcare, research, regulatory, product-status, cybersecurity, and deployment claims.
- All high-value existing content must be migrated, merged intentionally, or retired with explicit rationale.
- Authentic screenshots and custom diagrams before decorative imagery.
- Access the authenticated CerviGuard and DataGems applications during development to gather current first-party screenshots, workflow details, and product facts for the website.
- Clean responsive behavior across mobile, tablet, laptop, and desktop.
- Strong metadata, social previews, internal linking, and machine-readable artifacts.
- Elegant design with restraint: premium, clinical, warm, and modern without generic AI-marketing cliches.
- Active development-time testing for layout, interaction, responsiveness, and usability.
- `npm run lint` and `npm run build` must remain green before merge.
- Launch only when the primary visual assets are authentic and current.

## 6) Template and Technical Baseline

### 6.1 Primary implementation baseline
Primary baseline:
- vendor-neutral adaptation of the `Portfolio Starter Kit` codebase patterns,
- transplanted into this repository,
- without introducing Vercel platform dependence,
- and kept compatible with the current Deeploy / Ratio1 deployment model.

### 6.2 Why this baseline remains correct
- The current site is already a static-friendly Next.js Pages Router site.
- SmartClover already has a markdown-based blog that should be preserved.
- The baseline offers content architecture, metadata, crawlability, and blog patterns that match the refactor goal.
- The baseline is free and open-source, which matches the no-cost implementation path.

### 6.3 Inspiration references
- Vercel SEO Starter: metadata and discoverability rigor.
- Framer `Heallthier`: health-tech tone, whitespace, and restraint.
- Webflow `MediAI`: trust-forward page sequencing and conversion cues.

### 6.4 Technical constraints
- Keep deployment on Deeploy / Ratio1 unchanged.
- Keep compatibility with prerender-first delivery and Automatic Static Optimization unless a separate decision explicitly changes that.
- Keep the current markdown-driven blog.
- Do not introduce Vercel-only runtime services.
- If baseline code pulls in vendor-specific packages, remove or replace them before adoption.

## 7) Current Live-Site Constraints
- `smartclover.ro` is publicly reachable and already has a broad route surface including Home, CerviGuard, Products, About, Trust, Blog, Contact, Proof, and Regulatory.
- The public site is a mixed static-friendly Next.js Pages Router deployment:
  - many marketing and diligence routes expose prerendered `nextExport` / `autoExport` HTML,
  - the blog uses SSG markers,
  - the site is not one single uniform export mode.
- The live footer currently shows version `v2.10`.
- Raw prerendered HTML still embeds footer host id `unknown`, but hydrated runtime upgrades the host label to `smart-01` via `/api/host-id`.
- Metadata parity is incomplete across many non-home routes.
- `robots.txt` / Cloudflare Managed Content Signals are still too closed for the intended discoverability posture.
- `sitemap.xml` is currently missing from the live site.

Implementation and QA work must preserve:
- deployment compatibility,
- footer version behavior,
- runtime host-id behavior,
- and the current route breadth until replacement destinations are ready.

## 8) Route Architecture Decisions

### 8.1 Top-level keep routes
- `/`
- `/about`
- `/cerviguard`
- `/products`
- `/trust`
- `/contact`
- `/pricing`
- `/how-to-buy`
- `/blog`

### 8.2 Route decision map
| Route | Decision | Role / destination |
| --- | --- | --- |
| `/` | keep | broad company entry point |
| `/about` | keep | founder-led credibility page |
| `/cerviguard` | keep | flagship proof page |
| `/products` | keep | portfolio page and destination for merged product/architecture content |
| `/trust` | keep | top-level diligence hub and destination for merged proof/regulatory content |
| `/contact` | keep | primary conversion hub |
| `/pricing` | keep | public commercial framing |
| `/how-to-buy` | keep | standalone buying flow |
| `/blog` | keep | visible credibility/support section |
| `/proof` | merge | into `/trust` |
| `/regulatory` | merge | into `/trust` |
| `/services` | merge | into `/products` |
| `/cloud-architecture` | merge | into `/products` |
| `/decentralized` | merge | into `/products` |
| `/cybersecurity` | merge | into `/products` |
| `/values` | merge | into `/about` |

### 8.3 Trust subpage rule
Trust subpages under `/trust/*` should remain individually accessible. The top-level trust page becomes the main diligence hub, not a replacement for every subpage.

### 8.4 Merge-retire rule
- Do not retire any source route until its useful content has been absorbed into the destination page and verified.
- If a merged route still carries meaningful content during implementation, keep it temporarily rather than deleting it early.
- Redirects can be finalized only after destination content, internal links, and metadata are verified.

## 9) Page Objectives and Required Content

### 9.1 Home
Primary job:
- establish SmartClover quickly and credibly,
- route visitors toward demo, products, trust, and investor inquiry.

Must include:
- immediate mention of CerviGuard,
- authentic flagship proof near the top,
- founder/research credibility strip,
- publication or research proof signal,
- short company-history / timeline signal,
- visible investor path,
- trust and product links,
- one clear primary CTA and one secondary CTA.

Primary CTA:
- `Book demo`

Secondary CTA:
- investor / general contact path.

### 9.2 About
Primary job:
- convert curiosity into confidence through identifiable founder and research credibility.

Dominant emphasis:
- founder credibility.

Must include:
- founder biography,
- publications,
- concise company story,
- values content merged from `/values`,
- operating philosophy without becoming abstract,
- fuller timeline/history visual.

### 9.3 CerviGuard
Primary job:
- prove the flagship is real and functioning.

Must include:
- real UI screenshots,
- workflow diagram,
- live app link,
- GitHub and Hugging Face links where appropriate,
- research/publication references,
- product constraints,
- trust and diligence links,
- status wording: `live product`.

Important rule:
- this is a flagship proof page, not the only conversion page.

### 9.4 Products
Primary job:
- show portfolio breadth without weakening the flagship story.

Must include an explicit three-way split:
- flagship product,
- secondary product,
- research areas.

Must include:
- CerviGuard as the flagship,
- DataGems as `live research pilot`,
- merged content from `/services`, `/cloud-architecture`, `/decentralized`, and `/cybersecurity`,
- clear separation between product reality and research direction,
- links to trust and contact.

### 9.5 Trust
Primary job:
- function as the single diligence hub for serious evaluators.

Must include:
- clear plain-language trust overview,
- security,
- privacy,
- incident response,
- data processing,
- architecture / deployment model,
- merged material from `/proof` and `/regulatory`,
- links to trust subpages,
- contact path for diligence follow-up.

### 9.6 Contact
Primary job:
- convert segmented interest into qualified action.

Must include explicit paths for:
- `Book demo / Request pilot`,
- `Research partnership`,
- `Investor inquiry`,
- `General contact`.

Must also include:
- trust reinforcement,
- response expectations,
- simple qualification framing,
- clear ownership of next step.

### 9.7 Pricing
Primary job:
- keep commercial framing public without overcommitting to rigid price disclosure.

Must include:
- packaging logic,
- what influences price,
- relationship to demos, pilots, onboarding, and diligence,
- onward paths to Contact and How to Buy.

### 9.8 How to Buy
Primary job:
- explain the procurement and onboarding journey clearly.

Must include:
- qualification steps,
- legal / security / readiness checkpoints,
- realistic buying progression,
- links to Pricing, Trust, and Contact.

### 9.9 Blog
Primary job:
- support credibility, not act as the primary conversion engine.

Must include:
- strong article hierarchy,
- cleaner index and article templates,
- publication metadata,
- structured data where useful,
- internal links to product and trust context when relevant.

## 10) Merged Content Responsibilities

### 10.1 Product-side merges into `/products`
The following content must be absorbed into `/products` in tightened, business-relevant form:
- product-operations framing from `/services`,
- architecture/deployment framing from `/cloud-architecture`,
- governance / decentralized-delivery framing from `/decentralized`,
- cybersecurity and resilience framing from `/cybersecurity`.

### 10.2 Trust-side merges into `/trust`
The following content must be absorbed into `/trust`:
- proof framing and public artifacts from `/proof`,
- public regulatory posture from `/regulatory`.

### 10.3 About-page merge
The following content must be absorbed into `/about`:
- values material from `/values`.

### 10.4 Non-loss rule
Merged content must be:
- preserved where it still adds business value,
- tightened where it is repetitive,
- downgraded where it makes unverified claims,
- retired only with explicit rationale.

## 11) Proof, Claims, and Evidence Model

### 11.1 Homepage proof signals near the top
The top proof signals for Home are:
- real product screenshots,
- research / publications,
- founder credibility.

### 11.2 CerviGuard proof set
The CerviGuard page must visibly include:
- real UI screenshots,
- workflow diagram,
- live app link,
- GitHub repos,
- Hugging Face repos where relevant,
- research publications,
- product constraints,
- trust links.

### 11.3 Products classification
`/products` must clearly classify:
- CerviGuard as the flagship `live product`,
- DataGems as `live research pilot`,
- research areas as active public research directions rather than implied live products.

### 11.4 Safe public research areas
The site may name:
- cancer prevention research,
- secondary prophylaxis,
- early detection,
- treatment optimization.

### 11.5 Highest-caution claim categories
These claim categories require the strongest verification and qualification discipline:
- cancer prevention,
- clinical impact,
- cybersecurity posture,
- deployment claims,
- AI capability claims,
- partnership or pilot traction.

### 11.6 Claim-writing rule
- Do not imply patient outcomes without support.
- Do not imply regulatory approval where there is only posture or planning.
- Do not turn architecture intent into a guarantee.
- Do not turn roadmap language into current product fact.

### 11.7 Safe public artifacts to expose prominently
- `https://cerviguard.link`
- public GitHub repositories
- public Hugging Face repositories
- PDFs already intended for public distribution
- trust documents and trust subpages

### 11.8 Evidence register format
Use this format during implementation for each material claim:

| Page | Claim | Source type | Source link / artifact | Status | Notes |
| --- | --- | --- | --- | --- | --- |
| `/cerviguard` | Example claim | authenticated app screenshot / DOI / repo / policy doc | link or file path | verified / qualified / remove | context |

### 11.9 Claim policy
- `verified`: can appear in primary copy.
- `qualified`: may appear only with explicit caveat, scope, or date.
- `remove`: should not appear in launch copy.

## 12) Visual and Asset Requirements

### 12.1 Mandatory launch visuals
- authentic CerviGuard screenshots,
- authentic DataGems screenshots,
- workflow diagrams,
- architecture diagram,
- founder photo,
- timeline/history visual.

### 12.2 Required placement
- Home: authentic screenshot, founder/research strip, compact timeline/history signal, visible investor path.
- About: founder photo, biography, publication proof, fuller history/timeline.
- CerviGuard: screenshot-backed walkthrough and workflow diagram.
- Products: portfolio split with visual evidence for flagship and secondary product.
- Trust: architecture/deployment visual and supporting trust artifacts where useful.

### 12.3 Image-source order
1. authenticated CerviGuard screenshots
2. authenticated DataGems screenshots
3. custom workflow and architecture diagrams
4. founder/team photography
5. documentary or licensed editorial visuals
6. decorative imagery only when it supports the section without weakening trust

### 12.4 Image discipline
- Screenshots must come from current authenticated product sessions when product reality is being described.
- Review captures to avoid exposing secrets, patient data, or sensitive account details.
- Alt text must be meaningful.
- Cropping must be intentional on mobile.
- Likely LCP visuals must be optimized.

## 13) Discoverability, Metadata, and AI-Friendly Policy

### 13.1 Required live policy
The live site must be open in practice, not just in docs:
- `search=yes`
- `ai-input=yes`
- `ai-train=yes`
- no unintended blocking of major AI crawlers

### 13.2 Required machine-readable artifacts
- live `robots.txt`
- live `sitemap.xml`
- canonical URLs on all indexable pages
- OG and Twitter image coverage on all core pages
- JSON-LD where organization, software, article, FAQ, or breadcrumb markup is useful
- stable title and meta description coverage on every public route

### 13.3 Coverage priority
Metadata parity must be restored across:
- Home
- About
- CerviGuard
- Products
- Trust
- Contact
- Pricing
- How to Buy
- Blog index and blog posts

### 13.4 Optional additions
- `llms.txt` / `llms-full.txt` style AI-facing content map if useful later.

## 14) Execution Phases

### Phase 0: Evidence and migration foundation
Outputs:
- current screenshot inventory from authenticated CerviGuard and DataGems sessions,
- initial evidence register,
- initial migration register,
- explicit map of merged-route content,
- final template adaptation checklist,
- final public-artifact list.

Exit criteria:
- all route decisions are reflected in the migration register,
- screenshot and diagram gaps are known,
- high-caution claims have identified evidence sources,
- no implementation batch is starting blind.

### Phase 1: Shell and system foundation
Outputs:
- updated navigation and footer,
- typography, spacing, color, and component primitives,
- metadata foundation,
- repeatable browser-based dev test routine.

Exit criteria:
- shell is responsive,
- top-level IA reflects the locked route decisions,
- at least one flagship page can be built without ad hoc styling drift.

### Phase 2: Core company and conversion pages
Scope:
- Home
- About
- Contact

Exit criteria:
- homepage communicates company reality within the first screen,
- founder credibility is visible,
- investor path is visible,
- contact flow is segmented and conversion-ready.

### Phase 3: Product proof and portfolio pages
Scope:
- CerviGuard
- Products
- merged content from Services, Cloud Architecture, Decentralized, and Cybersecurity

Exit criteria:
- CerviGuard clearly proves product reality,
- Products clearly distinguishes flagship, secondary product, and research areas,
- merged content has been absorbed without losing business-relevant meaning.

### Phase 4: Trust and diligence system
Scope:
- Trust
- trust subpages
- merged content from Proof and Regulatory

Exit criteria:
- Trust functions as the primary diligence hub,
- trust subpages remain accessible,
- public proof and regulatory posture are easier to navigate than before,
- draft-status materials are labeled honestly where still incomplete.

### Phase 5: Supporting pages and credibility system
Scope:
- Pricing
- How to Buy
- Blog index
- selected blog templates and posts

Exit criteria:
- public commercial and buying flow are coherent,
- blog supports credibility and no longer feels visually disconnected,
- internal links support the main buyer and diligence journey.

### Phase 6: Launch hardening
Scope:
- metadata review,
- robots review,
- sitemap review,
- redirect review,
- internal-link review,
- alt-text review,
- mobile and desktop review,
- interaction review,
- performance review,
- evidence and claims review,
- final lint/build verification.

Exit criteria:
- no major layout or interaction regressions,
- no unsupported claims,
- metadata parity restored,
- live crawlability posture open in practice,
- launch visuals authentic and current.

## 15) Development-Time Verification Rule
- Every meaningful batch must be tested during development, not only at the end.
- Use `npm run dev` for browser-based review of changed pages.
- Check desktop, mobile, and at least one intermediate viewport where relevant.
- Verify menus, CTAs, forms, anchors, and key route flows after IA or shell changes.
- Use screenshots or browser notes for substantial UI changes.
- When describing current live behavior, distinguish raw HTML from hydrated runtime state.
- Before merge, run `npm run lint` and `npm run build`.

## 16) Definition of Done

### 16.1 Home is done when
- the first screen clearly explains SmartClover,
- CerviGuard is named immediately,
- authentic proof is visible near the top,
- founder/research credibility is visible,
- publication links are reachable,
- investor path is visible,
- mobile behavior is strong,
- metadata and internal links are complete.

### 16.2 About is done when
- founder biography and publications are clear,
- the company history is visible,
- values content is merged cleanly,
- the page feels human and credible rather than abstract.

### 16.3 CerviGuard is done when
- real screenshots are present,
- the workflow diagram is present,
- the live app link is present,
- GitHub and Hugging Face links are present where appropriate,
- research/publication proof is present,
- constraints are visible,
- trust links are visible,
- metadata is complete,
- mobile layout holds up.

### 16.4 Products is done when
- the flagship / secondary / research split is explicit,
- DataGems is framed as `live research pilot`,
- merged architecture and cybersecurity material is integrated cleanly,
- the page supports trust and contact journeys without confusion.

### 16.5 Trust is done when
- the top-level page acts as the main diligence hub,
- trust subpages remain accessible,
- architecture/deployment content is visible,
- security, privacy, incident response, and data-processing paths are clear,
- diligence follow-up can route to Contact,
- metadata and internal links are complete.

### 16.6 Contact is done when
- segmented inquiry paths are explicit,
- `Book demo` is clearly primary,
- research, investor, and general-contact paths are distinct,
- trust reinforcement is visible,
- response expectations are stated.

### 16.7 Pricing is done when
- packaging logic is clear,
- public commercial framing is useful without overpromising,
- links to Contact and How to Buy are clear,
- the page supports buyer qualification rather than creating pricing confusion.

### 16.8 How to Buy is done when
- the procurement path is understandable,
- legal, security, and onboarding checkpoints are visible,
- the page reduces buyer ambiguity,
- links to Pricing, Trust, and Contact are clear.

### 16.9 Blog is done when
- the blog visibly supports credibility rather than distracting from the main conversion path,
- index and article templates are visually aligned with the refactor,
- metadata and structured-data coverage are in place where appropriate,
- posts can route readers toward product and trust context when relevant.

### 16.10 Site launch is done when
- core pages are visually coherent,
- mobile quality is strong,
- desktop quality is strong,
- performance is acceptable with a target mindset of LCP at or below 2.5s on key pages,
- metadata parity is restored,
- crawlability is open in practice,
- no important high-value content has been silently lost,
- all primary visuals are authentic and current,
- `npm run lint` and `npm run build` pass.

## 17) Risks and Dependencies
- Strong execution depends on disciplined claim verification, not just better copy.
- The merged-route strategy can fail if content is deleted before the destination pages are ready.
- Trust and regulatory material may remain partially draft; honesty is required where completeness is not yet possible.
- Open crawlability may still fail if Cloudflare or other edge settings override repo-owned artifacts.
- Founder-photo quality and product-screenshot quality will materially affect the credibility outcome.
- Introducing Tailwind or baseline primitives into a non-Tailwind codebase still requires restraint to avoid mixed styling debt.

## 18) Immediate Execution Checklist
1. Create the first evidence register for Home, About, CerviGuard, Products, Trust, Contact, Pricing, How to Buy, and Blog.
2. Create the first migration register covering every route being kept, merged, or retired.
3. Capture current authenticated CerviGuard and DataGems screenshots and document missing visual gaps.
4. Confirm the exact `Portfolio Starter Kit` patterns to transplant: shell, content primitives, metadata, and blog/SEO structure.
5. Rebuild the shell, navigation, footer, and design primitives first.
6. Rebuild Home, About, and Contact as the first full execution batch.
7. Rebuild CerviGuard and Products next, including all product-side merged content.
8. Rebuild Trust and trust subpages next, including Proof and Regulatory absorption.
9. Rebuild Pricing, How to Buy, and Blog after the primary pages are stable.
10. Finalize metadata, `robots.txt`, `sitemap.xml`, redirects, and machine-readable artifacts before launch.
11. Run the full builder-critic verification loop for each meaningful batch and append the required entries to `CHANGE_LOG.md`.
