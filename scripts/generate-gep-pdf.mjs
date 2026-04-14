import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import { chromium } from 'playwright';
import { PDFDocument } from 'pdf-lib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..');

const inputPath = path.join(repoRoot, 'docs', 'GENDER_EQUALITY_PLAN_2026_2028.md');
const outputDir = path.join(repoRoot, 'public', 'docs');
const outputPdfPath = path.join(outputDir, 'SmartClover_Gender_Equality_Plan_2026_2028.pdf');

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

const generatedPdf = await readFile(outputPdfPath);
const stablePdf = await PDFDocument.load(generatedPdf);

stablePdf.setTitle(data.title);
stablePdf.setAuthor(data.owner);
stablePdf.setCreator('Chromium');
stablePdf.setProducer('pdf-lib');
stablePdf.setSubject(data.description);
stablePdf.setCreationDate(new Date(data.effectiveDate));
stablePdf.setModificationDate(new Date(data.effectiveDate));

const stableBytes = await stablePdf.save({
  useObjectStreams: false
});

await writeFile(outputPdfPath, stableBytes);

console.log(`Generated PDF: ${outputPdfPath}`);
