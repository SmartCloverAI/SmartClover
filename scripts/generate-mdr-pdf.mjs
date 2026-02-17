import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import { chromium } from 'playwright';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..');

const inputPath = path.join(repoRoot, 'docs', 'MDR_1_PROPOSAL.md');
const outputDir = path.join(repoRoot, 'public', 'docs');
const outputPdfPath = path.join(outputDir, 'CerviGuard_MDR_Class_I_Self_Assessment_Draft.pdf');
const outputHtmlPath = path.join('/tmp', 'CerviGuard_MDR_Class_I_Self_Assessment_Draft.preview.html');

const source = await readFile(inputPath, 'utf8');
const processed = await remark().use(remarkHtml).process(source);
const bodyHtml = String(processed);

const generatedAt = new Date().toISOString().slice(0, 10);

const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>CerviGuard MDR Class I Self-Assessment Declaration (Draft)</title>
  <style>
    :root {
      --text: #0f172a;
      --muted: #334155;
      --accent: #0f766e;
      --border: #cbd5e1;
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
      font-family: 'Times New Roman', Georgia, serif;
      font-size: 11pt;
      line-height: 1.45;
    }
    main {
      max-width: 900px;
      margin: 0 auto;
      background: #fff;
      padding: 22mm 18mm;
      box-sizing: border-box;
    }
    .doc-head {
      border-bottom: 1px solid var(--border);
      padding-bottom: 10px;
      margin-bottom: 16px;
    }
    .doc-title {
      margin: 0 0 6px;
      font-size: 17pt;
      line-height: 1.25;
      color: var(--accent);
    }
    .doc-meta {
      margin: 0;
      font-size: 10pt;
      color: var(--muted);
    }
    h1, h2, h3 {
      color: #0b3b37;
      line-height: 1.25;
      page-break-after: avoid;
    }
    h1 {
      font-size: 17pt;
      margin: 0 0 10px;
    }
    h2 {
      font-size: 13.5pt;
      margin: 18px 0 8px;
      border-bottom: 1px solid var(--border);
      padding-bottom: 3px;
    }
    h3 {
      font-size: 12pt;
      margin: 14px 0 6px;
    }
    p {
      margin: 0 0 8px;
      orphans: 3;
      widows: 3;
    }
    ul, ol {
      margin: 0 0 10px 20px;
      padding: 0;
    }
    li {
      margin-bottom: 4px;
    }
    blockquote {
      margin: 10px 0;
      padding: 8px 12px;
      border-left: 3px solid var(--border);
      background: #f8fafc;
    }
    code {
      font-family: 'Courier New', Courier, monospace;
      font-size: 10pt;
      background: #f1f5f9;
      padding: 1px 4px;
      border-radius: 2px;
    }
    pre code {
      display: block;
      padding: 10px;
      overflow-x: auto;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 10px 0 12px;
    }
    th, td {
      border: 1px solid var(--border);
      padding: 6px 8px;
      text-align: left;
      vertical-align: top;
    }
    th {
      background: #f1f5f9;
    }
    hr {
      border: 0;
      border-top: 1px solid var(--border);
      margin: 16px 0;
    }
  </style>
</head>
<body>
  <main>
    <header class="doc-head">
      <h1 class="doc-title">CerviGuard MDR Class I Self-Assessment Declaration (Draft)</h1>
      <p class="doc-meta">Generated from <code>docs/MDR_1_PROPOSAL.md</code> on ${generatedAt}</p>
    </header>
    ${bodyHtml}
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
