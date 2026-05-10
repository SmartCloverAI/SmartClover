# SmartClover Content Redaction Register

Prepared: 2026-05-10
Purpose: durable guardrail for public SmartClover copy. Use this before rewriting Home, About, metadata, machine-readable artifacts, PDFs, or pitch material.

## Active Redaction Rules

| Topic | Rule | Allowed context | Not allowed |
| --- | --- | --- | --- |
| Earlier author-name continuity | Do not use earlier-name continuity as promotional copy. | Neutral citation files or compact reference notes where needed for bibliographic clarity. | Homepage, hero copy, founder story, pitch copy, credibility blocks. |
| Third-party researcher names | Do not use collaborator or researcher names as company legitimacy copy. | Specific publication/citation entries when directly relevant. | Homepage, About positioning paragraphs, investor copy, proof cards. |
| Founder credibility | Use direct founder/company/product language. | "Dr. Andreea Damian leads SmartClover..." with current product context. | Rubric language such as named accountability, public record, identifiable prior work. |
| PubMed references | Keep as research context, not proof of current product efficacy. | "References provide context on screening participation and follow-up barriers." | Claims that publications validate CerviGuard performance, regulatory status, or traction. |
| Product status | Use locked status wording. | CerviGuard = `live product`; DataGems = `live research pilot`. | Product maturity claims, certification claims, approval claims, guaranteed outcomes. |
| Regulatory status | Keep draft status visible. | Draft MDR/self-assessment context with date and scope. | Approved MDR, certified, compliant, guaranteed, final unless backed by a final artifact. |
| Trust/security | Describe published baseline material plainly. | Security, privacy, data-processing, incident-response routes are public. | Trust-ready, diligence-ready, bulletproof, tamper-proof, zero-risk. |

## Banned Public-Copy Fragments

These fragments must not appear in human-facing pages, metadata, LLMS/MCP artifacts, OpenAPI/catalog copy, PDFs, or pitch material except inside this register, tests, or change-log analysis.

```text
SmartClover&apos;s public profile references
SmartClover's public profile references
publication continuity that includes
earlier work published as Andreea Itu
earlier work published under the name Andreea Itu
cervical screening research involving Dr. Florian Nicula
Dr. Florian Nicula also appears
named accountability
company&apos;s healthcare focus
company's healthcare focus
Leadership, publications, and public artifacts support due diligence
Leadership and publications support the public record
SmartClover links its public healthcare positioning
identifiable prior work
identifiable leadership
Named leadership
named leadership
visible product artifacts
operating context
delivery posture
public record
public artifacts
external evaluators
diligence readiness
public trust routes for diligence
support evaluation
support due diligence
stakeholders
product maturity
company profile
public company profile
evaluation routes
```

## Preferred Replacements

| Instead of | Use |
| --- | --- |
| `named accountability` | "led by Dr. Andreea Damian" |
| `publication continuity` | "research references" or "research context" |
| `public record` | "published reference" or "PubMed record" |
| `public artifacts support due diligence` | "product, trust, and pricing pages are available before outreach" |
| `visible product artifacts` | "CerviGuard product page, live surface, repository, and model hub" |
| `external evaluators` | "clinics, research teams, procurement reviewers, and investors" |
| `delivery posture` | "how SmartClover builds, deploys, and supports products" |
| `company profile` | "company overview" |

## Enforcement

- Add banned fragments to `tests/public-copy-tone.test.mjs`.
- Scan `pages`, `components`, `lib`, `posts`, `public/.well-known`, `public/openapi.json`, and extracted public PDFs.
- If a redacted fragment is necessary for a citation note, record the exact file and line here before committing.
- If online verification finds a banned fragment after deployment, create a new fix commit with a new `version.json` increment.
