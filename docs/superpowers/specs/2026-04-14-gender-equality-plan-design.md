# SmartClover Gender Equality Plan Design

Date: 2026-04-14
Status: approved for implementation planning
Scope: SmartClover.ro public Gender Equality Plan page, downloadable formal document, and multi-location site linking

## 1. Objective

Publish a credible, Horizon Europe-aligned Gender Equality Plan for SmartClover that:

- is publicly available on the website as a formal, signed management document;
- is discoverable via both `Gender Equality Plan` and `GEP`;
- fits the current founder-led SmartClover narrative without over-weighting compliance in the main navigation;
- covers the required process building blocks and recommended content areas;
- reflects SmartClover's current size and operating reality rather than imitating a large university or hospital policy.

## 2. User-Approved Decisions

- Output model: both a dedicated public webpage and a downloadable formal document/PDF.
- Signatory: `Dr. Andreea Damian`.
- Signatory title: `CEO`.
- Plan period: `2026-2028`.
- Language: English only.
- Site visibility pattern: `About + Trust + Footer`.
- Selected approach: `Narrative-integrated public GEP`.

## 3. Policy and Reference Basis

This design is based on:

- the SmartClover site's current founder-led, research-linked credibility structure;
- the Horizon Europe GEP eligibility criterion and guidance;
- EIGE's framing of a GEP as a concrete, monitored set of actions rather than a generic diversity statement.

Key external references:

1. European Commission / Publications Office, *Horizon Europe guidance on gender equality plans* (2021), DOI `10.2777/876509`.
   - supports the GEP eligibility criterion and explains the components in practice.
2. European Commission / Publications Office, *Gender equality plans (GEPs): How to be ready for ex-post checks* (released 2026-01-19), DOI `10.2777/9460977`.
   - adds supplementary guidance for compliance and ex-post checks.
3. European Institute for Gender Equality, *What is a Gender Equality Plan (GEP)*.
   - frames a GEP as analysis, planning, implementation, and monitoring with targets and indicators.

The public SmartClover GEP should satisfy the user-provided minimum building blocks:

- publication on the institution website and signature by top management;
- dedicated resources;
- data collection and monitoring;
- training;
- concrete measures and targets for:
  - work-life balance and organisational culture;
  - gender balance in leadership and decision-making;
  - gender equality in recruitment and career progression;
  - integration of the gender dimension into research and teaching content, adapted here to research and public-facing product/research content;
  - measures against gender-based violence including sexual harassment.

## 4. Route and Artifact Design

### 4.1 Canonical public route

- Canonical page: `/gender-equality-plan`

Reason:
- explicit, professional, and search-friendly for funders, partners, and evaluators.

### 4.2 Acronym access route

- Short alias: `/gep`

Reason:
- satisfies the user's discoverability requirement for the acronym without making the acronym route the canonical public label.

Implementation note:
- `/gep` should resolve cleanly to the same content, preferably via a redirect to `/gender-equality-plan`.

### 4.3 Formal downloadable document

- Public PDF path: `/docs/SmartClover_Gender_Equality_Plan_2026_2028.pdf`
- Markdown source artifact: `docs/GENDER_EQUALITY_PLAN_2026_2028.md`
- PDF generation should follow the repo's existing public-document pattern used for MDR content.

### 4.4 Site placement

- `About` page:
  - add a governance/equality proof card or compact section near the founder-led credibility material;
  - link to the GEP page and downloadable PDF.
- `Trust Center`:
  - add `Gender Equality Plan` to the trust documentation grid.
- Footer:
  - add `Gender Equality Plan` and `GEP PDF` links under the existing `Public Artifacts` footer group unless the footer is being structurally refactored in the same batch.
- No top-navigation addition.

Reason:
- this keeps the main navigation product- and trust-oriented while still making the GEP easy to locate from several meaningful entry points.

## 5. Content Model

One authoritative content model should power both:

- the readable webpage; and
- the formal PDF.

The webpage should be scannable and public-facing.
The PDF should be formal, dated, signature-ready, and suitable for diligence or funding workflows.

## 6. Public Page Structure

Recommended page title:

- `Gender Equality Plan 2026-2028 | SmartClover`

Recommended page sections:

1. `Intro / public commitment`
   - concise statement from SmartClover on why gender equality matters to the company;
   - link to download the formal PDF.
2. `Why this plan exists`
   - SmartClover is founder-led and research-driven, but founder identity is not treated as a substitute for policy, monitoring, or accountability.
3. `Scope and governance`
   - who the plan covers, what activities it applies to, who owns implementation.
4. `Resources, data, and monitoring`
   - the minimum process requirements translated into company practice.
5. `Measures and targets for 2026-2028`
   - the five required thematic areas.
6. `Training and awareness`
   - annual awareness and onboarding commitments.
7. `Reporting and annual review`
   - public annual update statement.
8. `Formal approval`
   - date, CEO sign-off, and link to PDF.

## 7. Formal Document Structure

Recommended title:

- `SmartClover Gender Equality Plan 2026-2028`

Recommended document sections:

1. Statement of commitment
2. Purpose and scope
3. Governance and dedicated resources
4. Data collection, indicators, and annual monitoring
5. Training and awareness commitments
6. Measures and targets by thematic area
7. Reporting and annual review cycle
8. Signature and approval

Required signature block:

```text
Approved by:
Dr. Andreea Damian
CEO, SmartClover
```

The document should also include:

- an effective date;
- the plan period `2026-2028`;
- a statement that the plan is reviewed annually and may be updated as the company grows.

## 8. Tone and Positioning

The GEP should sound:

- serious;
- specific;
- proportionate to company size;
- aligned with research and healthcare credibility;
- non-defensive and non-bureaucratic.

It should not sound:

- like a generic corporate diversity statement;
- like a university-wide administrative framework copied into a startup;
- like founder identity alone is being presented as proof of equality performance.

Recommended positioning sentence pattern:

- SmartClover acknowledges that female founder leadership is meaningful, but institutional commitment still requires documented governance, resources, monitoring, training, and reporting.

## 9. SmartClover-Specific Content Principles

The content should explicitly reflect that SmartClover is:

- already founded and led by a female CEO;
- shaped by healthcare and research continuity;
- still relatively small in scale, so measures should be proportionate and operationally credible;
- active in health-related product and research communication, where sex/gender relevance can matter in problem framing, user needs, access barriers, and interpretation.

The content should avoid:

- unrealistic representation quotas unsupported by current headcount;
- inflated promises about broad institutional infrastructure;
- references to `teaching content`, which do not match SmartClover's company context.

Adaptation rule:

- replace the standard research-and-teaching wording with `research and public-facing product/research content`.

## 10. Measures and Target Style

### 10.1 Work-life balance and organisational culture

Measures:

- maintain flexible working arrangements where role requirements allow;
- avoid avoidable scheduling patterns that disadvantage caregivers or staff with family responsibilities;
- use inclusive communication and respectful meeting norms;
- review workload distribution and role expectations annually.

Targets:

- annual policy reminder or onboarding communication reaches 100% of staff;
- inclusion and working-culture feedback is reviewed at least once per year;
- flexible-work and leave practices are applied consistently and documented.

### 10.2 Gender balance in leadership and decision-making

Measures:

- preserve inclusive participation in leadership discussions as the team grows;
- avoid concentrating strategic decision-making in gender-homogeneous groups when additional leadership roles are created;
- review representation in management or advisory roles annually.

Targets:

- annual review of gender composition in leadership and decision-making roles;
- if new leadership roles are created during 2026-2028, the candidate consideration and appointment process documents equality-minded selection criteria.

### 10.3 Gender equality in recruitment and career progression

Measures:

- use gender-aware, non-discriminatory wording in role descriptions;
- evaluate candidates against role-relevant criteria only;
- keep compensation and progression discussions structured and evidence-based;
- review recruitment outcomes and progression decisions annually for bias signals.

Targets:

- 100% of externally published role descriptions are reviewed for inclusive wording;
- applicant, shortlist, hiring, and promotion data are reviewed annually where available and proportionate to company size;
- career development discussions are documented consistently for staff.

### 10.4 Integration of the gender dimension into research and public-facing product/research content

Measures:

- consider sex/gender relevance in research framing, data interpretation, user needs, and communication where scientifically or operationally relevant;
- in health-related research and product communication, assess whether sex/gender factors affect problem definition, data, follow-up, or user access;
- remain attentive to underserved groups and access barriers in Romanian and broader healthcare contexts.

Targets:

- annual review of active research and product communication for relevant gender-dimension considerations;
- when a material has sex/gender relevance, the consideration is explicitly documented rather than assumed.

### 10.5 Measures against gender-based violence, including sexual harassment

Measures:

- publish a zero-tolerance statement;
- define a clear internal reporting route;
- treat concerns confidentially and proportionately;
- ensure decision-makers know escalation responsibilities.

Targets:

- reporting route and conduct expectations are published in the GEP and communicated internally;
- annual awareness reminder is completed;
- any reported concern is documented, reviewed, and handled through a defined response path.

## 11. Minimum Process Requirements Translated Into Company Practice

### 11.1 Publication

The GEP must exist as:

- a public SmartClover webpage;
- a formal downloadable PDF;
- a document signed by top management;
- a route that can be found through both full phrase and acronym access.

### 11.2 Dedicated resources

The plan should state that SmartClover commits:

- leadership attention from the CEO;
- staff time for implementation and annual review;
- access to external gender-equality expertise when specific support is required.

### 11.3 Data collection and monitoring

The plan should commit to annual collection and review, proportionate to company size, of:

- workforce composition by sex/gender where lawfully recorded with minimal necessary handling;
- recruitment pipeline data where available;
- leadership representation;
- training participation;
- complaints or concerns handled through the reporting route.

The public-facing version should state that annual reporting is based on indicators, without over-promising a large public dashboard.

### 11.4 Training

The plan should commit to:

- annual awareness raising on gender equality and unconscious bias for staff and decision-makers;
- onboarding inclusion for new team members;
- refresher communication when the policy is updated.

## 12. Implementation Notes For The Website

Expected implementation units:

- new public page for `/gender-equality-plan`;
- alias or redirect for `/gep`;
- new markdown source for the formal GEP document;
- PDF generation script patterned after the existing MDR document flow;
- link additions in `components/Layout.jsx`;
- trust-page card addition in `pages/trust/index.jsx`;
- about-page GEP proof insertion in `pages/about.jsx`;
- optional SEO metadata and JSON-LD for the GEP page.

## 13. Success Criteria

The implementation is successful when:

- SmartClover.ro exposes a public `Gender Equality Plan` page;
- `GEP` access works through `/gep`;
- a formal signed PDF is downloadable from the website;
- the page and PDF clearly cover the required Horizon Europe-style process building blocks;
- the page includes concrete measures and targets across all five thematic areas;
- the GEP is reachable from About, Trust, and Footer;
- the content reads as specific to SmartClover rather than a generic template.

## 14. Risks To Avoid

- writing a policy that sounds larger than the company actually is;
- publishing unsupported claims about current workforce composition;
- treating female founder leadership as if it removes the need for formal policy;
- burying the page too deeply in Trust-only navigation;
- exposing the PDF without a readable HTML counterpart;
- creating different wording between the webpage and PDF that later drifts.

## 15. Open Implementation Choices Already Resolved

- No Romanian version in this release.
- No top-nav entry in this release.
- No homepage promo band in this release.
- Canonical route is full phrase, not acronym.
- Representation targets should be process-based and monitoring-based, not quota-based.
