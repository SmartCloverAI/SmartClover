import test from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const normalizeCopy = (value) =>
  value
    .replace(/&apos;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\\'/g, "'")
    .replace(/\s+/g, ' ')
    .trim();

const normalizeForSearch = (value) => normalizeCopy(value).toLowerCase();

const textExtensions = new Set(['.js', '.jsx', '.ts', '.tsx', '.mjs', '.md', '.json']);

const hasTextExtension = (filePath) => {
  const match = filePath.match(/\.[^.]+$/);
  return match ? textExtensions.has(match[0]) : false;
};

const collectTextFiles = (targetPath) => {
  const stats = statSync(targetPath);

  if (stats.isFile()) {
    return hasTextExtension(targetPath) ? [targetPath] : [];
  }

  return readdirSync(targetPath)
    .flatMap((entry) => collectTextFiles(join(targetPath, entry)))
    .sort();
};

const extractHomeHeroCopy = (source) => {
  const match = source.match(/<div className="hero-copy">([\s\S]*?)<div className="hero-action-row">/);

  assert.ok(match, 'pages/index.jsx should contain a hero-copy block before the hero-action-row block');

  return normalizeCopy(match[1]);
};

const bannedCopyByFile = {
  'pages/about.jsx': [
    'Dr. Andreea Damian anchors the public company story.',
    'built to look and act like a real company',
    'make the real company legible',
    'anonymous marketing positioning',
    'Founder-led representation still needs public policy and accountability.',
    'Founder identity is not treated as a substitute for process.',
    'Values from the old standalone route now live here, where people expect them',
    'in one company profile',
    'public company profile'
  ],
  'pages/index.jsx': [
    'company narrative is tied to public cervical screening research',
    'company story back to cervical screening and follow-up work',
    'real healthcare AI company with a real flagship product',
    'A flagship-first company that still looks like a company',
    'single-page shell',
    'anonymous AI-marketing claims',
    'A compact public timeline for serious visitors',
    'Named credibility, not anonymous branding',
    'SmartClover is a Cluj-Napoca healthcare AI company',
    'flagship proof point',
    'homepage leads with verifiable proof',
    'The homepage establishes SmartClover',
    'company profile',
    'accountable operators',
    'Named leadership',
    'visible product surfaces',
    'support evaluation',
    'stakeholders',
    'product maturity',
    'evaluation routes'
  ],
  'pages/contact.jsx': [
    'so serious visitors do not have to guess where to start',
    'buried in generic contact copy',
    'evaluating SmartClover as a company',
    'RFQ-led packaging logic and commercial framing',
    'Europe/Bucharest'
  ],
  'components/Layout.jsx': [
    'serious evaluators can move quickly',
    'trust-ready delivery',
    'one live flagship product, one live research pilot, and public diligence routes',
    'Creativity \u00b7 Digitalization \u00b7 Responsible AI for Good'
  ],
  'pages/products.jsx': [
    'Products & More',
    'one compact diligence hub',
    'our flagship product',
    'diverse portfolio of partners across various industries',
    'significant consumer and procurer',
    '"live data factory" services provider'
  ],
  'pages/cerviguard.jsx': ['our broader two-direction healthcare AI product strategy', 'generative SaaS systems'],
  'pages/services.jsx': ['primary CerviGuard wedge', 'Primary wedge (active)'],
  'pages/proof.jsx': [
    'SMARTCLOVER SRL launch phase and online-platform preparation',
    'next-generation prophylaxis management for gynecological oncological pathologies',
    'Phase 1 proof artifacts',
    'KPI-definition structure',
    'denominator/date-window approvals'
  ],
  'pages/trust/security.jsx': ['publication-safe security controls for procurement orientation'],
  'posts/cybersecurity-healthcare-ledger.md': [
    'zero-censorship AI',
    'unverifiable in the best way possible - tamper-proof'
  ],
  'posts/healthcare-ai-research.md': ['Humans are not built to scan millions of records at speed, but large language models are.'],
  'posts/cerviguard-remote-screening-foundations.md': [
    'What CerviGuard Proposes',
    'remote-area prophylaxis and cervical screening missions',
    'The proposal is practical'
  ]
};

const broadPublicContentFiles = [
  ...collectTextFiles('pages'),
  ...collectTextFiles('components'),
  ...collectTextFiles('lib'),
  ...collectTextFiles('posts'),
  ...collectTextFiles('public/.well-known'),
  'public/openapi.json'
];

const globallyBannedFragments = [
  "SmartClover's public profile references",
  'publication continuity that includes',
  'earlier work published as Andreea Itu',
  'earlier work published under the name Andreea Itu',
  'cervical screening research involving Dr. Florian Nicula',
  'Dr. Florian Nicula also appears',
  'named accountability',
  "company's healthcare focus",
  'Leadership, publications, and public artifacts support due diligence',
  'Leadership and publications support the public record',
  'SmartClover links its public healthcare positioning',
  'identifiable prior work',
  'identifiable leadership',
  'Named leadership',
  'visible product artifacts',
  'operating context',
  'delivery posture',
  'public record',
  'public artifacts',
  'external evaluators',
  'diligence readiness',
  'public trust routes for diligence',
  'support evaluation',
  'support due diligence',
  'stakeholders',
  'product maturity',
  'company profile',
  'public company profile',
  'evaluation routes',
  'serious evaluators',
  'diligence-ready',
  'trust-ready'
];

test('public marketing and editorial copy avoids informal or internal-facing phrasing', () => {
  for (const [filePath, bannedFragments] of Object.entries(bannedCopyByFile)) {
    const source = normalizeForSearch(readFileSync(filePath, 'utf8'));

    for (const fragment of bannedFragments) {
      assert.equal(
        source.includes(normalizeForSearch(fragment)),
        false,
        `${filePath} still includes informal public copy: ${fragment}`
      );
    }
  }
});

test('public source surfaces block evaluator-language and redaction regressions', () => {
  for (const filePath of broadPublicContentFiles) {
    const source = normalizeForSearch(readFileSync(filePath, 'utf8'));

    for (const fragment of globallyBannedFragments) {
      assert.equal(
        source.includes(normalizeForSearch(fragment)),
        false,
        `${filePath} still includes banned evaluator/redaction copy: ${fragment}`
      );
    }
  }
});

test('homepage hero speaks in client-facing product and workflow language', () => {
  const source = readFileSync('pages/index.jsx', 'utf8');
  const heroCopy = extractHomeHeroCopy(source);

  for (const requiredFragment of ['CerviGuard', 'cervical-screening teams', 'clinician-led', 'workflow']) {
    assert.equal(
      heroCopy.includes(requiredFragment),
      true,
      `homepage hero should include client-facing product language: ${requiredFragment}`
    );
  }
});

test('about first screen uses founder, product, audience, and workflow language', () => {
  const source = readFileSync('pages/about.jsx', 'utf8');
  const match = source.match(/<header className="page-header">([\s\S]*?)<\/header>/);

  assert.ok(match, 'pages/about.jsx should contain a page-header block');

  const headerCopy = normalizeCopy(match[1]);

  for (const requiredFragment of ['Dr. Andreea Damian', 'CerviGuard', 'cervical-screening workflows', 'clinics']) {
    assert.equal(
      headerCopy.includes(requiredFragment),
      true,
      `about first screen should include concrete company language: ${requiredFragment}`
    );
  }
});
