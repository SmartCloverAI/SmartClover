# Gender Equality Plan Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publish SmartClover's `Gender Equality Plan 2026-2028` as a canonical public page, a downloadable formal PDF, a `/gep` alias, and repeated access points in About, Trust, and Footer.

**Architecture:** Keep one canonical content source in `docs/GENDER_EQUALITY_PLAN_2026_2028.md`. Render that markdown into a statically generated Next.js page at `/gender-equality-plan`, redirect `/gep` to the canonical route, and generate the public PDF from the same markdown file so web and PDF content cannot drift independently. Reuse existing `PageSeo`, `surface-card`, `status-badge-list`, `markdown-body`, `cta-links`, and footer/trust-card patterns instead of introducing a new page system.

**Tech Stack:** Next.js 14 Pages Router, React 18, `gray-matter`, `remark`, `remark-html`, existing global CSS, `playwright` as a dev dependency for deterministic PDF generation.

---

## File Structure

**Create**

- `docs/GENDER_EQUALITY_PLAN_2026_2028.md` - canonical GEP source with front matter and approved policy content.
- `pages/gender-equality-plan.jsx` - static public page that reads and renders the markdown document.
- `scripts/generate-gep-pdf.mjs` - PDF generator that reads the same markdown source and writes the public PDF.
- `public/docs/SmartClover_Gender_Equality_Plan_2026_2028.pdf` - generated formal document committed as a public artifact.

**Modify**

- `next.config.js` - add permanent redirect from `/gep` to `/gender-equality-plan`.
- `components/Layout.jsx` - add `Gender Equality Plan` and `GEP PDF` footer links under `Public Artifacts`.
- `pages/trust/index.jsx` - add `Gender Equality Plan` to the trust documentation grid.
- `pages/about.jsx` - add a compact founder-context equality/governance section with links to the page and PDF.
- `package.json` - add `generate:gep-pdf` script and `playwright` dev dependency.
- `package-lock.json` - lockfile update for `playwright`.
- `version.json` - bump once per commit as required by repo policy.
- `CHANGE_LOG.md` - append `TYPE: change` and `ADVERSARIAL-CHECK` entries for each meaningful batch.

**Do not modify unless needed**

- `styles/globals.css`
- `styles/refactor.css`

Reuse existing classes first. Only touch styles if the new About section or GEP page looks broken in responsive smoke checks.

## Implementation Notes

- The repo has no automated test framework today. Verification should therefore rely on deterministic build checks, PDF generation checks, redirect checks, and manual smoke checks in `npm run dev`.
- There is no signature image asset in the repo. Implement the published approval as a dated typed signatory block for `Dr. Andreea Damian, CEO`. If a visual signature asset is later supplied, it can be added to the PDF template without changing the canonical markdown content.
- Do not commit `.superpowers/` artifacts created during brainstorming.
- Use specific `git add` paths in commit steps. Do not use `git add .`.

### Task 1: Add the Canonical GEP Source Document

**Files:**
- Create: `docs/GENDER_EQUALITY_PLAN_2026_2028.md`

- [ ] **Step 1: Create the canonical markdown document**

Write `docs/GENDER_EQUALITY_PLAN_2026_2028.md` with exactly this content:

```md
---
title: "SmartClover Gender Equality Plan 2026-2028"
description: "Public Gender Equality Plan for SmartClover covering governance, resources, monitoring, training, inclusive recruitment, research-content practice, and measures against gender-based violence."
effectiveDate: "2026-04-14"
planPeriod: "2026-2028"
status: "Active public policy"
owner: "SmartClover"
signatoryName: "Dr. Andreea Damian"
signatoryTitle: "CEO"
canonicalPath: "/gender-equality-plan"
shortPath: "/gep"
pdfPath: "/docs/SmartClover_Gender_Equality_Plan_2026_2028.pdf"
---

## 1. Statement of commitment

SmartClover is a founder-led healthcare AI company operating at the intersection of product development, research continuity, and public-interest health technology. We publish this Gender Equality Plan because gender equality is not treated as a symbolic claim or a founder identity trait alone. It is an organisational responsibility that affects recruitment, leadership, culture, research quality, communication quality, and long-term trust.

SmartClover is already led by a female founder and CEO. That matters, but it does not remove the need for documented governance, resources, monitoring, training, and accountability. This plan therefore turns principle into a public operating commitment.

## 2. Purpose and scope

This Gender Equality Plan covers the period 2026-2028 and applies to SmartClover's organisational culture, leadership practices, recruitment activity, career progression conversations, research-related work, public-facing product and research communication, and internal conduct expectations.

The plan is written for a growing company rather than a large university or hospital system. Measures are therefore proportionate to current scale, but they are still concrete, monitorable, and public.

## 3. Governance and dedicated resources

Overall accountability for this plan rests with the CEO, Dr. Andreea Damian.

SmartClover commits to:

- dedicating leadership attention to implementation and annual review;
- dedicating staff time to policy communication, annual monitoring, and follow-up actions;
- using external gender-equality expertise when specific support or review is required;
- keeping equality-related decisions attached to named ownership rather than informal assumptions.

## 4. Data collection, indicators, and annual monitoring

SmartClover will maintain and review, on an annual basis and with minimal necessary handling, the following categories of information where lawfully recorded and proportionate to company size:

- workforce composition by sex/gender;
- recruitment pipeline information where available;
- leadership and decision-making role representation;
- training participation;
- concerns reported through the internal conduct and reporting route.

The company will use these indicators to review progress, identify risks, and adjust actions where needed. SmartClover will publish a brief annual progress update linked from the public GEP page.

## 5. Training and awareness

SmartClover will provide annual awareness raising on gender equality and unconscious bias for staff and decision-makers. New team members will receive an onboarding-level introduction to the company's equality commitments, respectful conduct expectations, and internal reporting route.

Training will be proportionate to company size, but it will not be optional in principle. The goal is to keep equality awareness current as the organisation grows.

## 6. Measures and targets for 2026-2028

### 6.1 Work-life balance and organisational culture

SmartClover will:

- maintain flexible working arrangements where role requirements allow;
- avoid avoidable scheduling patterns that disadvantage caregivers or staff with family responsibilities;
- promote respectful communication, inclusive meetings, and consistent workload discussions;
- review working-culture feedback at least once per year.

Targets for 2026-2028:

- 100% of staff receive a policy reminder or onboarding communication covering equality and respectful conduct expectations;
- inclusion and working-culture feedback is reviewed at least annually;
- flexible-work and leave practices are applied consistently and documented where relevant.

### 6.2 Gender balance in leadership and decision-making

SmartClover will:

- preserve inclusive participation in leadership discussions as the team grows;
- avoid concentrating strategic decision-making in gender-homogeneous groups when additional leadership roles are created;
- review representation in management or advisory roles annually.

Targets for 2026-2028:

- gender composition in leadership and decision-making roles is reviewed annually;
- if new leadership roles are created, the candidate consideration and appointment process documents equality-minded selection criteria.

### 6.3 Gender equality in recruitment and career progression

SmartClover will:

- use inclusive, non-discriminatory wording in externally published role descriptions;
- evaluate candidates against role-relevant criteria only;
- keep compensation and progression discussions structured and evidence-based;
- review recruitment and progression outcomes annually for possible bias signals.

Targets for 2026-2028:

- 100% of externally published role descriptions are reviewed for inclusive wording before publication;
- applicant, shortlist, hiring, and promotion data are reviewed annually where available and proportionate to company size;
- career development discussions are documented consistently for staff.

### 6.4 Integration of the gender dimension into research and public-facing product and research content

SmartClover will:

- consider whether sex/gender is relevant in research framing, user needs, data interpretation, communication, and follow-up context;
- document sex/gender considerations explicitly when a research or product communication topic is health-relevant and those factors matter;
- remain attentive to underserved groups and access barriers in Romanian and broader healthcare contexts.

Targets for 2026-2028:

- active research and public-facing product or research communication is reviewed annually for relevant gender-dimension considerations;
- when sex/gender relevance exists, that consideration is documented explicitly rather than assumed.

### 6.5 Measures against gender-based violence, including sexual harassment

SmartClover maintains a zero-tolerance position toward gender-based violence, intimidation, and sexual harassment.

SmartClover will:

- maintain a clear internal reporting path;
- handle concerns confidentially and proportionately;
- ensure decision-makers understand escalation and response responsibilities;
- communicate respectful-conduct expectations as part of equality awareness.

Targets for 2026-2028:

- the reporting route and conduct expectations remain published in the GEP and communicated internally;
- an annual awareness reminder is completed;
- any reported concern is documented, reviewed, and handled through a defined response path.

## 7. Reporting and annual review

This plan is reviewed annually. SmartClover may update the plan before 2028 if organisational growth, funding conditions, legal requirements, or operational learning make revision necessary.

The annual review will assess:

- whether the planned actions were implemented;
- whether monitoring data suggests equality risks or progress gaps;
- whether additional resources, training, or process changes are needed.

## 8. Approval

This Gender Equality Plan is approved for public publication and implementation by SmartClover top management.

Approved on 14 April 2026 by:

**Dr. Andreea Damian**  
**CEO, SmartClover**
```

- [ ] **Step 2: Verify the document contains the required sections and metadata**

Run:

```bash
cd /home/andrei/work/SmartClover/smart_wrapper/SmartClover
rg -n "^title:|^effectiveDate:|^planPeriod:|^pdfPath:|^## 1\\. Statement of commitment|^## 4\\. Data collection, indicators, and annual monitoring|^## 5\\. Training and awareness|^### 6\\.5 Measures against gender-based violence, including sexual harassment|^## 8\\. Approval" docs/GENDER_EQUALITY_PLAN_2026_2028.md
```

Expected:

- output includes all nine matches listed in the command;
- no section is missing.

- [ ] **Step 3: Commit the canonical content source**

Before committing, bump `version.json` from `3.0` to `3.1`:

```json
{
  "version" : "3.1"
}
```

Then commit:

```bash
cd /home/andrei/work/SmartClover/smart_wrapper/SmartClover
git add docs/GENDER_EQUALITY_PLAN_2026_2028.md version.json
git commit -m "docs: add smartclover gender equality plan source"
```

### Task 2: Add the Canonical Public Page and `/gep` Redirect

**Files:**
- Create: `pages/gender-equality-plan.jsx`
- Modify: `next.config.js`

- [ ] **Step 1: Add the `/gep` permanent redirect**

Update `next.config.js` to exactly:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/services',
        destination: '/products',
        permanent: true
      },
      {
        source: '/gep',
        destination: '/gender-equality-plan',
        permanent: true
      }
    ];
  }
};

module.exports = nextConfig;
```

- [ ] **Step 2: Create the static GEP page**

Write `pages/gender-equality-plan.jsx` with exactly:

```jsx
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { remark } from 'remark';
import html from 'remark-html';
import PageSeo, { siteUrl } from '../components/PageSeo';

const documentPath = path.join(process.cwd(), 'docs', 'GENDER_EQUALITY_PLAN_2026_2028.md');

export const getStaticProps = async () => {
  const fileContents = fs.readFileSync(documentPath, 'utf8');
  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);

  return {
    props: {
      document: {
        ...data,
        contentHtml: processedContent.toString()
      }
    }
  };
};

const GenderEqualityPlan = ({ document }) => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: document.title,
    url: `${siteUrl}${document.canonicalPath}`,
    description: document.description,
    inLanguage: 'en',
    datePublished: document.effectiveDate,
    dateModified: document.effectiveDate,
    publisher: {
      '@type': 'Organization',
      name: 'SmartClover',
      url: siteUrl
    },
    creator: {
      '@type': 'Person',
      name: document.signatoryName,
      jobTitle: document.signatoryTitle
    }
  };

  return (
    <>
      <PageSeo
        title={`${document.title} | SmartClover`}
        description={document.description}
        path={document.canonicalPath}
        image="/images/research-lab.png"
        jsonLd={jsonLd}
      />

      <header className="page-header">
        <span className="tagline">Governance</span>
        <h1>{document.title}</h1>
        <p>
          SmartClover publishes this Gender Equality Plan as a public management commitment covering governance,
          monitoring, training, inclusive recruitment, work-life balance, and measures against gender-based violence and
          sexual harassment.
        </p>
      </header>

      <section className="surface-card" aria-labelledby="gep-status-heading">
        <div className="status-badge-list" id="gep-status-heading">
          <span className="status-badge">Document status: {document.status}</span>
          <span className="status-badge">Plan period: {document.planPeriod}</span>
          <span className="status-badge">Approved by: {document.signatoryName}, {document.signatoryTitle}</span>
        </div>
        <p>
          Canonical route: <strong>{document.canonicalPath}</strong>. Short route: <strong>{document.shortPath}</strong>.
          The downloadable PDF below is generated from the same source document used by this page.
        </p>
        <div className="cta-links">
          <a href={document.pdfPath} className="button secondary" target="_blank" rel="noopener noreferrer">
            Download GEP PDF
          </a>
          <Link href="/trust" className="button tertiary">
            Open Trust Center
          </Link>
          <Link href="/about" className="button tertiary">
            Review Company Context
          </Link>
        </div>
      </section>

      <article className="surface-card">
        <div
          className="markdown-body"
          dangerouslySetInnerHTML={{
            __html: document.contentHtml
          }}
        />
      </article>
    </>
  );
};

export default GenderEqualityPlan;
```

- [ ] **Step 3: Verify the route builds and the redirect exists**

Run:

```bash
cd /home/andrei/work/SmartClover/smart_wrapper/SmartClover
npm run build
```

Expected:

- build completes successfully;
- the new `/gender-equality-plan` page is generated;
- no Next.js route or import errors appear.

Then run:

```bash
cd /home/andrei/work/SmartClover/smart_wrapper/SmartClover
rg -n "source: '/gep'|destination: '/gender-equality-plan'" next.config.js
```

Expected:

- output shows the `/gep` redirect lines exactly once.

- [ ] **Step 4: Commit the route work**

Append a `TYPE: change` entry and an `ADVERSARIAL-CHECK` entry to `CHANGE_LOG.md` for the canonical markdown page and redirect batch using the current UTC timestamp.

Before committing, bump `version.json` from `3.1` to `3.2`:

```json
{
  "version" : "3.2"
}
```

Then commit:

```bash
cd /home/andrei/work/SmartClover/smart_wrapper/SmartClover
git add pages/gender-equality-plan.jsx next.config.js CHANGE_LOG.md version.json
git commit -m "feat: publish gender equality plan route"
```

### Task 3: Add the Deterministic PDF Generation Pipeline

**Files:**
- Create: `scripts/generate-gep-pdf.mjs`
- Modify: `package.json`
- Modify: `package-lock.json`
- Generate: `public/docs/SmartClover_Gender_Equality_Plan_2026_2028.pdf`

- [ ] **Step 1: Add Playwright and the generate script**

Run:

```bash
cd /home/andrei/work/SmartClover/smart_wrapper/SmartClover
npm install --save-dev playwright
```

Then update only the `scripts` section in `package.json` to exactly:

```json
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "generate:gep-pdf": "node scripts/generate-gep-pdf.mjs"
  }
```

`npm install --save-dev playwright` should add the resolved `playwright` entry to `devDependencies` and update `package-lock.json`.

- [ ] **Step 2: Install the Chromium browser used by the PDF generator**

Run:

```bash
cd /home/andrei/work/SmartClover/smart_wrapper/SmartClover
npx playwright install chromium
```

Expected:

- Chromium installation completes without errors.

- [ ] **Step 3: Create the PDF generator**

Write `scripts/generate-gep-pdf.mjs` with exactly:

```js
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import { chromium } from 'playwright';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..');

const inputPath = path.join(repoRoot, 'docs', 'GENDER_EQUALITY_PLAN_2026_2028.md');
const outputDir = path.join(repoRoot, 'public', 'docs');
const outputPdfPath = path.join(outputDir, 'SmartClover_Gender_Equality_Plan_2026_2028.pdf');
const outputHtmlPath = path.join('/tmp', 'SmartClover_Gender_Equality_Plan_2026_2028.preview.html');

const source = await readFile(inputPath, 'utf8');
const { data, content } = matter(source);
const processed = await remark().use(remarkHtml).process(content);
const bodyHtml = String(processed);

const approvalDate = new Intl.DateTimeFormat('en', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC'
}).format(new Date(data.effectiveDate));

const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${data.title}</title>
  <style>
    :root {
      --text: #102a43;
      --muted: #486581;
      --accent: #0f766e;
      --border: #d9e2ec;
      --bg: #f8fafc;
    }
    @page {
      size: A4;
      margin: 20mm 16mm 20mm 16mm;
    }
    html, body {
      margin: 0;
      padding: 0;
      color: var(--text);
      background: var(--bg);
      font-family: "Times New Roman", Georgia, serif;
      font-size: 11pt;
      line-height: 1.48;
    }
    main {
      max-width: 900px;
      margin: 0 auto;
      background: #ffffff;
      padding: 22mm 18mm;
      box-sizing: border-box;
    }
    .doc-head {
      border-bottom: 1px solid var(--border);
      padding-bottom: 12px;
      margin-bottom: 18px;
    }
    .doc-title {
      margin: 0 0 6px;
      font-size: 18pt;
      line-height: 1.25;
      color: var(--accent);
    }
    .doc-meta {
      margin: 0;
      color: var(--muted);
      font-size: 10pt;
    }
    .badge-row {
      margin-top: 12px;
    }
    .badge {
      display: inline-block;
      margin: 0 8px 8px 0;
      padding: 6px 10px;
      border: 1px solid var(--border);
      border-radius: 999px;
      background: #f8fafc;
      color: var(--muted);
      font-size: 9.5pt;
    }
    h2, h3 {
      color: #0b3b37;
      page-break-after: avoid;
    }
    h2 {
      margin: 20px 0 8px;
      padding-bottom: 3px;
      border-bottom: 1px solid var(--border);
      font-size: 14pt;
    }
    h3 {
      margin: 14px 0 6px;
      font-size: 12pt;
    }
    p {
      margin: 0 0 10px;
      orphans: 3;
      widows: 3;
    }
    ul {
      margin: 0 0 10px 20px;
      padding: 0;
    }
    li {
      margin-bottom: 5px;
    }
    strong {
      color: #0b3b37;
    }
    .approval {
      margin-top: 24px;
      padding-top: 12px;
      border-top: 1px solid var(--border);
    }
  </style>
</head>
<body>
  <main>
    <header class="doc-head">
      <h1 class="doc-title">${data.title}</h1>
      <p class="doc-meta">Approved on ${approvalDate} for public publication by ${data.signatoryName}, ${data.signatoryTitle}</p>
      <div class="badge-row">
        <span class="badge">Plan period: ${data.planPeriod}</span>
        <span class="badge">Document status: ${data.status}</span>
        <span class="badge">Owner: ${data.owner}</span>
      </div>
    </header>
    ${bodyHtml}
    <section class="approval">
      <p><strong>Approved by:</strong><br />${data.signatoryName}<br />${data.signatoryTitle}, ${data.owner}</p>
    </section>
  </main>
</body>
</html>`;

await mkdir(outputDir, { recursive: true });
await writeFile(outputHtmlPath, html, 'utf8');

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.setContent(html, { waitUntil: 'load' });
await page.pdf({
  path: outputPdfPath,
  format: 'A4',
  printBackground: true,
  displayHeaderFooter: true,
  headerTemplate: '<div></div>',
  footerTemplate:
    '<div style="font-size:8px;color:#475569;width:100%;text-align:center;"><span class="pageNumber"></span> / <span class="totalPages"></span></div>',
  margin: {
    top: '20mm',
    bottom: '20mm',
    left: '16mm',
    right: '16mm'
  }
});
await browser.close();

console.log(`Generated PDF: ${outputPdfPath}`);
```

- [ ] **Step 4: Generate and verify the public PDF**

Run:

```bash
cd /home/andrei/work/SmartClover/smart_wrapper/SmartClover
npm run generate:gep-pdf
test -f public/docs/SmartClover_Gender_Equality_Plan_2026_2028.pdf && ls -lh public/docs/SmartClover_Gender_Equality_Plan_2026_2028.pdf
```

Expected:

- `Generated PDF: /home/andrei/work/SmartClover/smart_wrapper/SmartClover/public/docs/SmartClover_Gender_Equality_Plan_2026_2028.pdf`
- file exists in `public/docs/` and has a non-zero size.

- [ ] **Step 5: Commit the PDF pipeline**

Append a `TYPE: change` entry and an `ADVERSARIAL-CHECK` entry to `CHANGE_LOG.md` for the PDF pipeline batch using the current UTC timestamp.

Before committing, bump `version.json` from `3.2` to `3.3`:

```json
{
  "version" : "3.3"
}
```

Then commit:

```bash
cd /home/andrei/work/SmartClover/smart_wrapper/SmartClover
git add package.json package-lock.json scripts/generate-gep-pdf.mjs public/docs/SmartClover_Gender_Equality_Plan_2026_2028.pdf CHANGE_LOG.md version.json
git commit -m "feat: add public gep pdf artifact"
```

### Task 4: Surface the GEP in About, Trust, and Footer

**Files:**
- Modify: `components/Layout.jsx`
- Modify: `pages/trust/index.jsx`
- Modify: `pages/about.jsx`

- [ ] **Step 1: Add footer links under `Public Artifacts`**

Update the `Public Artifacts` link list in `components/Layout.jsx` to exactly:

```jsx
  {
    title: 'Public Artifacts',
    links: [
      { label: 'CerviGuard live pilot', href: 'https://cerviguard.link', external: true },
      { label: 'CerviGuard GitHub', href: 'https://github.com/SmartCloverAI/CerviGuard', external: true },
      { label: 'SmartClover Hugging Face', href: 'https://huggingface.co/smartclover', external: true },
      { label: 'Gender Equality Plan', href: '/gender-equality-plan' },
      { label: 'GEP PDF', href: '/docs/SmartClover_Gender_Equality_Plan_2026_2028.pdf', external: true },
      { label: 'Contact SmartClover', href: '/contact' }
    ]
  }
```

- [ ] **Step 2: Add the Trust Center card**

Update the `trustRoutes` array in `pages/trust/index.jsx` to exactly:

```jsx
const trustRoutes = [
  {
    href: '/trust/privacy-policy',
    title: 'Privacy Policy',
    description: 'Data categories, lawful basis, retention, and data-subject rights workflow.'
  },
  {
    href: '/trust/terms-of-service',
    title: 'Terms of Service',
    description: 'Service boundaries, customer obligations, support model, and liability framing.'
  },
  {
    href: '/trust/data-processing',
    title: 'Data Processing',
    description: 'GDPR role model by deployment mode and processor/controller posture notes.'
  },
  {
    href: '/trust/security',
    title: 'Security Overview',
    description: 'Permissioned access, encryption, traceability, and disclosure boundaries.'
  },
  {
    href: '/trust/incident-response',
    title: 'Incident Response',
    description: 'Severity model, response lifecycle, and corrective-action governance.'
  },
  {
    href: '/gender-equality-plan',
    title: 'Gender Equality Plan',
    description: 'Public GEP covering governance, monitoring, training, inclusive recruitment, and anti-harassment measures.'
  }
];
```

- [ ] **Step 3: Add the About-page founder-context section**

Insert this new section in `pages/about.jsx` immediately after the existing founder section that ends at line 185:

```jsx
    <section className="surface-card" aria-labelledby="about-gep-heading">
      <div className="section-heading">
        <h2 id="about-gep-heading">Founder-led representation still needs public policy and accountability.</h2>
        <p>
          SmartClover is already led by a female founder and CEO. The public Gender Equality Plan turns that reality into
          a documented commitment on recruitment, leadership, organisational culture, monitoring, training, and measures
          against gender-based violence and sexual harassment.
        </p>
      </div>
      <div className="story-grid">
        <article className="story-card">
          <p className="kicker">Public governance artifact</p>
          <h3>Gender Equality Plan 2026-2028</h3>
          <p>
            The plan is published as a formal document and as a readable public route so partners, funders, and future
            team members can review SmartClover's equality commitments in the open.
          </p>
        </article>
        <article className="story-card">
          <p className="kicker">Why it matters</p>
          <h3>Founder identity is not treated as a substitute for process.</h3>
          <p>
            SmartClover explicitly links founder-led credibility to concrete governance: annual monitoring, inclusive
            recruitment practice, awareness training, and a defined reporting route for misconduct concerns.
          </p>
        </article>
      </div>
      <div className="cta-links">
        <Link href="/gender-equality-plan" className="button secondary">
          Open Gender Equality Plan
        </Link>
        <a
          href="/docs/SmartClover_Gender_Equality_Plan_2026_2028.pdf"
          className="button tertiary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download GEP PDF
        </a>
      </div>
    </section>
```

- [ ] **Step 4: Verify link placement and responsive rendering**

Run:

```bash
cd /home/andrei/work/SmartClover/smart_wrapper/SmartClover
npm run lint
npm run build
```

Expected:

- `next lint` reports no warnings or errors;
- production build still succeeds after the About, Trust, and Footer edits.

Then run the dev server:

```bash
cd /home/andrei/work/SmartClover/smart_wrapper/SmartClover
npm run dev
```

With the dev server running, verify:

```bash
curl -I http://localhost:3000/gep
curl -s http://localhost:3000/gender-equality-plan | rg "SmartClover Gender Equality Plan 2026-2028|Download GEP PDF|Plan period: 2026-2028"
curl -s http://localhost:3000/about | rg "Open Gender Equality Plan|Download GEP PDF"
curl -s http://localhost:3000/trust | rg "Gender Equality Plan"
```

Expected:

- `/gep` responds with a permanent redirect to `/gender-equality-plan`;
- the GEP page contains the title and PDF CTA;
- the About page contains the two GEP CTAs;
- the Trust page contains the new `Gender Equality Plan` card.

Also manually smoke-check desktop and mobile layouts for:

- `/gender-equality-plan`
- `/about`
- `/trust`

Confirm:

- no layout breakage;
- CTA buttons wrap cleanly on mobile;
- the markdown content remains readable;
- the new About section does not visually overpower the founder section.

- [ ] **Step 5: Commit the distribution work**

Append a `TYPE: change` entry and an `ADVERSARIAL-CHECK` entry to `CHANGE_LOG.md` for the placement/distribution batch using the current UTC timestamp.

Before committing, bump `version.json` from `3.3` to `3.4`:

```json
{
  "version" : "3.4"
}
```

Then commit:

```bash
cd /home/andrei/work/SmartClover/smart_wrapper/SmartClover
git add components/Layout.jsx pages/trust/index.jsx pages/about.jsx CHANGE_LOG.md version.json
git commit -m "feat: surface gep across about trust and footer"
```

### Task 5: Final Verification and Clean Handoff

**Files:**
- Verify only; no new source files expected beyond prior tasks.

- [ ] **Step 1: Re-run the full verification stack**

Run:

```bash
cd /home/andrei/work/SmartClover/smart_wrapper/SmartClover
npm run lint
npm run build
npm run generate:gep-pdf
test -f public/docs/SmartClover_Gender_Equality_Plan_2026_2028.pdf
git status --short
```

Expected:

- lint passes;
- build passes;
- PDF generation passes;
- `test -f` succeeds;
- `git status --short` shows only the intended tracked changes or a clean worktree if everything is committed.

- [ ] **Step 2: Confirm no accidental `.superpowers` or build artifacts are staged**

Run:

```bash
cd /home/andrei/work/SmartClover/smart_wrapper/SmartClover
git status --short | rg "^\\?\\? \\.superpowers|^\\?\\? \\.next|^A \\.superpowers|^A \\.next" && exit 1 || exit 0
```

Expected:

- command exits successfully with no matched `.superpowers` or `.next` entries.

- [ ] **Step 3: Prepare the final handoff summary**

The final execution summary must state:

- canonical URL: `/gender-equality-plan`;
- short URL: `/gep`;
- PDF path: `/docs/SmartClover_Gender_Equality_Plan_2026_2028.pdf`;
- that the page and PDF share one canonical markdown source;
- verification results for `npm run lint`, `npm run build`, and `npm run generate:gep-pdf`;
- any residual risk, especially that a visual signature asset is not yet part of the repo.

## Self-Review

### Spec coverage

- Canonical route and acronym route: covered in Task 2.
- Formal downloadable document: covered in Task 3.
- Founder/trust/footer distribution: covered in Task 4.
- SmartClover-specific content and required thematic areas: covered in Task 1.
- Annual monitoring, training, and anti-harassment requirements: covered in Task 1 content and surfaced on the public page in Task 2.

### Placeholder scan

This plan intentionally avoids `TBD`, `TODO`, `implement later`, and similar placeholders. The only dynamic values are UTC timestamps for `CHANGE_LOG.md` entries, which must be generated at execution time from the current clock.

### Type and path consistency

- Canonical route is consistently `/gender-equality-plan`.
- Short route is consistently `/gep`.
- PDF path is consistently `/docs/SmartClover_Gender_Equality_Plan_2026_2028.pdf`.
- Canonical source is consistently `docs/GENDER_EQUALITY_PLAN_2026_2028.md`.
