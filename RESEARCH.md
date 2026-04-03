# SmartClover Refactor Research

Prepared: 2026-04-03

## 1) Scope
This brief captures current practice relevant to:
- prompt engineering in 2025 and early 2026,
- agent-based website development workflows,
- modern website template baselines for a healthcare AI company,
- content, image, performance, and SEO quality standards for the SmartClover refactor.

This is a working research artifact, not an immutable policy file. Update it when new source-backed guidance changes the recommended direction.

Note:
- public 2026 guidance is still largely an extension of late-2025 patterns, so this brief uses current official docs and currently listed template ecosystems as of 2026-04-03.

## 2) Executive Direction
The strongest current direction for SmartClover is:
- build from a code-native Next.js template baseline, not from a blank page,
- favor a Next.js + Tailwind marketing system because the current template market is concentrated there,
- use focused agents with narrow scopes, durable artifacts, and explicit success criteria,
- keep medical, research, regulatory, and product-status copy evidence-gated,
- use authentic screenshots and custom diagrams as primary proof visuals,
- optimize for mobile clarity, trust, and page quality before adding decorative complexity.

## 3) Prompt Engineering Findings (2025 / 2026)

### 3.1 What current docs consistently emphasize
- Define success criteria before prompt tuning.
- Evaluate prompts empirically instead of relying on intuition.
- Reuse versioned prompt templates instead of editing ad hoc prompt blobs.
- Keep prompts clear, direct, and structured.
- Prefer zero-shot first, then add examples only when needed.
- For reasoning models, do not force chain-of-thought prompting.
- Keep context relevant and constrained to the resources you actually want the model to use.

### 3.2 Durable implications for this repo
- Refactor instructions should live in repo artifacts such as `AGENTS.md`, `RESEARCH.md`, and `PLAN.md`, not only in chat history.
- If SmartClover later adds agent-assisted content generation or page assembly, those prompts should be reusable templates with variables for page, audience, claims, sources, and CTA.
- Prompt changes should be judged against concrete outputs:
  - is the copy accurate,
  - is the page structure conversion-capable,
  - are claims properly qualified,
  - are citations preserved,
  - does the result match the selected template language.

### 3.3 Practical rules adopted from current guidance
- Start with a precise output contract.
- Provide relevant context, but only the context that should constrain the answer.
- Use explicit formatting instructions when the output shape matters.
- Use delimiters, headings, and short sections to separate instructions, source context, and constraints.
- Re-run evaluation or review whenever a prompt, model choice, or page brief changes materially.

## 4) Agent-Based Website Development Findings

### 4.1 Workflow patterns that hold up
- One lead agent should own the main task and decision log.
- Supporting agents or subagents should be specialized by responsibility, not generic.
- Specialized agents work best when they have narrow scope and limited tool access.
- Durable artifacts improve reliability: research brief, execution plan, evidence register, design brief, change log.
- A builder-critic loop remains useful even when only docs are changing, because process drift is a real failure mode.

### 4.2 Recommended agent roles for SmartClover work
- Research agent: verifies facts, sources, citations, and template references.
- Content agent: rewrites copy without introducing unsupported claims.
- Design-system agent: owns layout language, template adaptation, tokens, and component consistency.
- Page-build agent: implements concrete page changes in a limited write scope.
- QA critic agent: checks regressions, trust gaps, mobile behavior, SEO, accessibility, and performance.

### 4.3 Durable implications for SmartClover
- Every major page should have a short brief before implementation:
  - audience,
  - goal,
  - proof needed,
  - claim constraints,
  - required visuals,
  - CTA,
  - acceptance criteria.
- Every major refactor batch should identify one template baseline before code changes begin.
- Healthcare claims need a human signoff mindset even if an agent drafts the copy.

## 5) Modern Template Research

### 5.1 What the current market suggests
Current high-quality code templates are concentrated around Next.js + Tailwind. Current no-code inspiration leaders are Framer and Webflow. For SmartClover, that means:
- use code-native templates for implementation,
- use Framer/Webflow templates as visual and conversion references,
- avoid rebuilding layout primitives from scratch unless the chosen baseline fails.

### 5.2 Template shortlist

| Template / family | Source | Why it matters | Fit for SmartClover | Caveats |
| --- | --- | --- | --- | --- |
| Tailwind Plus templates and UI blocks | Tailwind Plus | Dense library of marketing sections and production-ready Next.js templates | Best starting point if a paid license is acceptable; strongest option for a polished custom build without design drift | Paid |
| Tailwind Plus `Radiant`, `Salient`, `Oatmeal` family | Tailwind Plus | SaaS-focused Next.js marketing templates with motion and reusable sections | Strong baseline for hero, proof, pricing, CTA, and modern visual polish | Paid; needs adaptation for health-tech trust tone |
| BaseHub Marketing Website | Vercel | Fully featured Next.js marketing starter with search, dark/light mode, analytics | Good structure reference for full marketing-site completeness | Adds BaseHub dependency if used directly |
| Vercel Portfolio Starter Kit | Vercel | Blog-ready Next.js + Tailwind starter with Markdown, JSON-LD, OG images, RSS, analytics | Good source for blog/info architecture, SEO, and metadata patterns | More editorial than enterprise marketing |
| Vercel SEO Starter | Vercel | SEO-first Next.js foundation with metadata and performance considerations | Useful source for metadata and OG image patterns | Thin on brand expression and conversion sections |
| Framer `Feature` | Framer Marketplace | Strong example of a compact multi-page SaaS website with CMS, responsive behavior, and animation | Good inspiration for page coverage and polished motion | Inspiration only unless SmartClover moves to Framer |
| Framer `Heallthier` | Framer Marketplace | Medical SaaS oriented, multi-page, modern, minimal, animated | Good inspiration for health-tech tone, page set breadth, and trust-friendly clarity | Inspiration only; copy and visuals need independent verification |
| Webflow `MediAI` | Webflow Marketplace | Explicitly health-tech and MedTech focused with conversion structure and performance claims | Best inspiration-only reference for health-tech trust presentation | Inspiration only unless SmartClover moves to Webflow |

### 5.3 Recommended template strategy
Best-fit recommendation:
- Primary implementation baseline: Next.js + Tailwind template system.
- Preferred paid route: Tailwind Plus marketing templates plus a small internal design system.
- Preferred no-new-license route: combine Vercel marketing/blog/SEO starter patterns and build a smaller custom component layer.
- Inspiration references: use `Heallthier` and `MediAI` for health-tech trust cues, and use `Feature` for compact page completeness and restrained animation.

Inference:
- This recommendation is based on current official template ecosystems showing stronger production-ready coverage in Next.js + Tailwind than in other code-native stacks.

### 5.4 Template selection rules for SmartClover
- Do not choose a template only because it looks modern.
- Prefer templates with complete page systems over a single beautiful homepage.
- Evaluate:
  - home page quality,
  - product detail structure,
  - trust/legal page compatibility,
  - blog compatibility,
  - motion restraint,
  - mobile behavior,
  - ease of adapting to a healthcare AI tone.

## 6) Website Quality Standards

### 6.1 Content quality
- Google continues to emphasize helpful, reliable, people-first content.
- For YMYL-style topics such as healthcare, trust is the most important dimension.
- SmartClover should prefer original analysis, clear authorship, and direct evidence over generic AI-generated copy.
- Pages should have a narrow purpose and avoid saying the same strategic story in slightly different words across many routes.

### 6.2 Image quality
- High-quality images should sit near relevant text.
- Contentful images need descriptive alt text.
- Product screenshots and workflow diagrams should do real explanatory work, not decoration only.
- For SmartClover, flagship pages should prioritize:
  - product screenshots,
  - annotated workflow diagrams,
  - founder or team photography if available,
  - proof artifacts such as regulatory or research documents where appropriate.

### 6.3 Performance and page experience
- LCP should target 2.5s or less at the 75th percentile.
- LCP work should focus on the full loading path, not a single micro-fix.
- `next/image` remains the default image baseline for this repo.
- Important images should declare dimensions or otherwise preserve aspect ratio to avoid layout shift.

### 6.4 SEO and metadata
- Each important page needs a unique title and short, specific meta description.
- Blog and evidence pages benefit from structured data, OG images, and readable heading structure.
- Keyword stuffing is explicitly not a strategy.
- Image discoverability matters for trust and search, especially when product evidence is visual.

## 7) SmartClover-Specific Conclusions

### 7.1 The refactor should optimize for:
- clearer company positioning,
- stronger flagship product proof,
- better trust and diligence pathways,
- fewer generic visuals,
- better health-tech credibility,
- cleaner, more modern page rhythm.

### 7.2 The refactor should not optimize for:
- decorative motion without content value,
- generic AI art replacing real product proof,
- high-volume SEO copy,
- broad service sprawl that weakens product identity,
- template mixing that creates visual inconsistency.

### 7.3 Current best-fit design tone
- elegant, clinical, warm, modern,
- premium without looking like consumer wellness,
- technically credible without looking like an enterprise dashboard clone,
- restrained motion, strong typography, structured proof, high-quality screenshots.

## 8) Sources

### Prompt engineering and agents
- OpenAI Prompting: https://developers.openai.com/api/docs/guides/prompting
- OpenAI Prompt Engineering: https://developers.openai.com/api/docs/guides/prompt-engineering
- OpenAI Reasoning Best Practices: https://developers.openai.com/api/docs/guides/reasoning-best-practices
- OpenAI Agents SDK: https://developers.openai.com/api/docs/guides/agents-sdk
- Anthropic Prompt Engineering Overview: https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview
- Anthropic Prompt Templates and Variables: https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/prompt-templates-and-variables
- Anthropic Prompting Best Practices: https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/be-clear-and-direct
- Claude Code Subagents: https://code.claude.com/docs/en/sub-agents

### Templates and modern website baselines
- Tailwind Plus overview: https://tailwindcss.com/plus
- Tailwind Plus templates: https://tailwindcss.com/plus/templates
- Tailwind Plus `Radiant`: https://tailwindcss.com/plus/templates/radiant
- Tailwind Plus UI blocks: https://tailwindcss.com/plus/ui-blocks
- Vercel BaseHub Marketing Website: https://vercel.com/templates/next.js/basehub-marketing-website
- Vercel Portfolio Starter Kit: https://vercel.com/templates/portfolio/portfolio-starter-kit
- Vercel SEO Starter: https://vercel.com/templates/next.js/seo-starter
- Framer `Feature`: https://www.framer.com/marketplace/templates/feature/
- Framer `Heallthier`: https://www.framer.com/marketplace/templates/heallthier/
- Webflow `MediAI`: https://webflow.com/templates/html/mediai-website-template

### Content, image, performance, and SEO
- Google helpful content guidance: https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- Google SEO Starter Guide: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Next.js Image component docs: https://nextjs.org/docs/pages/api-reference/components/image
- Next.js Automatic Static Optimization: https://nextjs.org/docs/pages/building-your-application/rendering/automatic-static-optimization
- web.dev LCP guide: https://web.dev/articles/optimize-lcp

## 9) Working Recommendation
If SmartClover wants the highest-quality refactor outcome with the least design thrash:
1. Approve one primary Next.js + Tailwind template baseline.
2. Use `PLAN.md` to lock page goals, claims, and image needs before implementation.
3. Rewrite the highest-value pages first: home, CerviGuard, about, trust, products.
4. Replace generic visuals with product screenshots and custom diagrams.
5. Keep proof, citations, and trust links tightly connected to the pages that need them.
