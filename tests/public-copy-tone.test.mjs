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
    'Creativity \u00b7 Digitalization \u00b7 Responsible AI for Good',
    'Healthcare AI products and deployment options'
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
  'pages/cloud-architecture.jsx': ['GCP alignment rationale'],
  'pages/decentralized.jsx': ['public ledger for delivery traces', 'independently verify compliance'],
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
  'trust-ready',
  'TealGuard partnership milestone',
  'signed a partnership for the TealGuard project',
  'Commercial and diligence routes',
  'supporting diligence routes',
  'diligence orientation',
  'due-diligence review',
  'product and commercialization diligence',
  'Request Diligence Review',
  'human-in-the-loop',
  'governed deployment options',
  'governed deployment',
  'governed synthetic-data',
  'data governance controls in scope',
  'claim-to-artifact discipline',
  'pending-publication safeguards',
  'enterprise healthcare buying motions',
  'Multi-stakeholder deployment governance',
  'stakeholder interaction',
  'product-grade UX',
  'explainable AI outputs',
  'audit-ready metadata',
  'audit-ready workflow',
  'aligned with applicable NIS2/CRA expectations',
  'SmartClover&apos;s clinical analytics work',
  'rapid daily triage',
  'transformation-zone and lesion-class probabilities',
  'approved partners',
  'Commercial deployment is currently limited',
  'The live pilot at',
  'live pilot surface',
  'live CerviGuard pilot',
  'Public live pilot surface',
  'The public pilot',
  'Open Live Pilot',
  'center of the company story',
  'not the main commercial product',
  'not presented as the main commercial product',
  'remains a live research pilot',
  'remains the live research pilot',
  'remains the primary commercial product',
  'operating as a live research pilot',
  'publicly visible through',
  'current company posture',
  'company story',
  'approved MDR',
  'final MDR',
  'certified product',
  'certified platform',
  'certified company',
  'certified compliance',
  'guaranteed',
  'Digital resilience module track',
  'Roadmap expansion',
  'commercial operations prioritize',
  'blockchain-governed network',
  'GCP alignment rationale',
  'public ledger for delivery traces',
  'participating teams can independently verify compliance',
  'every deployment satisfies healthcare compliance',
  'before data ever leaks',
  'cannot silently remove',
  'single product promise',
  'Ratio1',
  'not our flagship clinical product',
  'CerviGuard remains the flagship product',
  'belongs beside CerviGuard',
  'not in front of it',
  'shortcut around privacy law',
  'governed experimentation',
  'another pile of plausible-looking rows',
  'approved peers',
  'SLM-first generation',
  'DataGems anonymizes patient data',
  'DataGems is HIPAA compliant',
  'DataGems provides differential privacy',
  'DataGems guarantees privacy',
  'DataGems creates clinically validated datasets',
  'DataGems replaces real-world data',
  'DataGems is a medical device',
  'DataGems supports clinical diagnosis',
  'process large datasets, identify patterns, and surface hypotheses',
  'We train retrieval-augmented models',
  'community health records similar to those documented',
  "SmartClover's knowledge graph",
  'Each answer includes the underlying interview excerpt',
  'clinicians in the loop',
  'policy-controlled AI deployment with ledger-backed controls to protect clinical innovation',
  'role-based policy bundles define which teams may launch new models',
  'approved edge/on-prem workers',
  'flagship healthcare AI project for cervical cancer prevention',
  'AI-assisted interpretation',
  'reduce missed follow-up signals',
  'SmartClover uses AI in research workflows',
  'DataGems belongs in the research track',
  'cybersecurity dashboards',
  "SmartClover's role is to help keep those questions visible",
  'This deployment model aligns with our operating principle',
  'de-identified cervical image intake',
  'secure clinical system'
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
  const layoutCopy = normalizeCopy(readFileSync('components/Layout.jsx', 'utf8'));

  assert.equal(
    layoutCopy.includes('Healthcare AI for screening workflows and research'),
    true,
    'site motto should use the approved screening-and-research positioning'
  );

  assert.equal(
    heroCopy.includes(
      'SmartClover builds healthcare AI where clinical work actually happens. Our flagship product, CerviGuard, helps cervical-screening teams structure intake, review cases with AI support, coordinate triage, and manage clinician-led follow-up. DataGems supports our synthetic-data research track.'
    ),
    true,
    'homepage hero should use the approved 10-second elevator pitch'
  );

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

test('CerviGuard page uses product-first and draft-qualified regulatory language', () => {
  const source = normalizeCopy(readFileSync('pages/cerviguard.jsx', 'utf8'));

  for (const requiredFragment of [
    'live product',
    'cervical-screening',
    'clinician-led',
    'workflow',
    'draft MDR Class I self-assessment'
  ]) {
    assert.equal(
      source.includes(requiredFragment),
      true,
      `CerviGuard page should include product/regulatory language: ${requiredFragment}`
    );
  }
});

test('products page keeps CerviGuard first and DataGems as a research pilot', () => {
  const source = normalizeCopy(readFileSync('pages/products.jsx', 'utf8'));
  const cerviGuardIndex = source.indexOf('CerviGuard');
  const dataGemsIndex = source.indexOf('DataGems');

  assert.notEqual(cerviGuardIndex, -1, 'products page should mention CerviGuard');
  assert.notEqual(dataGemsIndex, -1, 'products page should mention DataGems');
  assert.equal(cerviGuardIndex < dataGemsIndex, true, 'CerviGuard should appear before DataGems');
  assert.equal(source.includes('Live research pilot'), true, 'DataGems should remain a live research pilot');

  for (const requiredFragment of ['synthetic-data workflows', 'test schemas', 'export reviewable results']) {
    assert.equal(source.includes(requiredFragment), true, `products page should describe DataGems reader value: ${requiredFragment}`);
  }
});

test('home and about explain product proof through reader value, not internal status narration', () => {
  const home = normalizeCopy(readFileSync('pages/index.jsx', 'utf8'));
  const about = normalizeCopy(readFileSync('pages/about.jsx', 'utf8'));
  const layout = normalizeCopy(readFileSync('components/Layout.jsx', 'utf8'));

  for (const requiredFragment of [
    'review CerviGuard through its live workspace, public repository, screenshots, and trust material',
    'DataGems gives research partners a concrete surface for synthetic-data workflow discussions'
  ]) {
    assert.equal(home.includes(requiredFragment), true, `homepage should include reader-value proof language: ${requiredFragment}`);
  }

  for (const requiredFragment of [
    'CerviGuard is our flagship workflow product for cervical-screening teams',
    'DataGems supports the research side of our healthcare AI work'
  ]) {
    assert.equal(about.includes(requiredFragment), true, `about page should include reader-value product language: ${requiredFragment}`);
  }

  for (const requiredFragment of [
    'CerviGuard leads our product work for cervical-screening teams',
    'DataGems supports synthetic-data research workflows'
  ]) {
    assert.equal(layout.includes(requiredFragment), true, `footer should include reader-value product language: ${requiredFragment}`);
  }
});

test('DataGems blog uses workflow value and avoids portfolio-status narration', () => {
  const source = normalizeCopy(readFileSync('posts/datagems-synthetic-data-workflows.md', 'utf8'));

  for (const requiredFragment of [
    'DataGems supports the research side of SmartClover',
    'draft a schema',
    'confirm generation',
    'track progress',
    'export results',
    'not used to diagnose cases or direct patient care',
    'controlled synthetic-data workflows',
    'configured peers',
    'internal inference path or saved external inference profiles',
    'bounded research or data-workflow pilot'
  ]) {
    assert.equal(source.includes(requiredFragment), true, `DataGems blog should include: ${requiredFragment}`);
  }

  for (const rejectedFragment of [
    'not our flagship clinical product',
    'CerviGuard remains the flagship product',
    'belongs beside CerviGuard',
    'not in front of it',
    'another pile of plausible-looking rows'
  ]) {
    assert.equal(
      normalizeForSearch(source).includes(normalizeForSearch(rejectedFragment)),
      false,
      `DataGems blog should not include draft positioning language: ${rejectedFragment}`
    );
  }
});

test('blog posts use scoped evidence and reader-value language', () => {
  const healthcareResearch = normalizeCopy(readFileSync('posts/healthcare-ai-research.md', 'utf8'));
  const cerviGuard = normalizeCopy(readFileSync('posts/cerviguard-remote-screening-foundations.md', 'utf8'));
  const cybersecurity = normalizeCopy(readFileSync('posts/cybersecurity-healthcare-ledger.md', 'utf8'));
  const cloudOnEdge = normalizeCopy(readFileSync('posts/on-prem-ledger-ci-cd.md', 'utf8'));

  for (const requiredFragment of [
    'Healthcare AI Research Needs Reviewable Evidence',
    'research support is not clinical instruction',
    'source material, model output, workflow decisions, and human review',
    'Last reviewed: 2026-05-11'
  ]) {
    assert.equal(
      healthcareResearch.includes(requiredFragment),
      true,
      `healthcare research post should include scoped evidence language: ${requiredFragment}`
    );
  }

  assert.equal(
    cerviGuard.includes('where a digital clinical workflow can be most useful'),
    true,
    'CerviGuard post should avoid strongest-impact wording'
  );
  assert.equal(
    cerviGuard.includes('flagship workflow product for cervical-screening teams'),
    true,
    'CerviGuard post should avoid prevention-outcome product framing'
  );
  assert.equal(
    cerviGuard.includes('[CerviGuard](/cerviguard)'),
    true,
    'CerviGuard post should link to current product context'
  );
  assert.equal(cerviGuard.includes('Last reviewed: 2026-05-11'), true, 'CerviGuard post should include review date');

  for (const requiredFragment of [
    'Cybersecurity and Resilience for Healthcare AI',
    'authorized/certified personnel',
    'partner security products',
    'agentic engineering workflows',
    'not universal compliance promises',
    '[Healthcare Cybersecurity](/cybersecurity)',
    '[Cloud Architecture](/cloud-architecture)',
    '[Security baseline](/trust/security)',
    'Last reviewed: 2026-05-11'
  ]) {
    assert.equal(
      cybersecurity.includes(requiredFragment),
      true,
      `cybersecurity post should include scoped service language: ${requiredFragment}`
    );
  }

  for (const requiredFragment of [
    'permissioned cloud-on-edge deployment patterns',
    'permissioned edge/on-prem workers',
    'traceable deployment records',
    'end-to-end encrypted',
    'not centralized by default',
    '[Cloud Architecture](/cloud-architecture)',
    '[Decentralized Deployment](/decentralized)',
    '[Security baseline](/trust/security)',
    'Last reviewed: 2026-05-11'
  ]) {
    assert.equal(
      cloudOnEdge.includes(requiredFragment),
      true,
      `cloud-on-edge post should include scoped architecture language: ${requiredFragment}`
    );
  }
});

test('proof page separates public evidence from pending metrics', () => {
  const source = normalizeCopy(readFileSync('pages/proof.jsx', 'utf8'));

  for (const requiredFragment of [
    'Evidence baseline for product review',
    'current public evidence set',
    'Verified public evidence',
    'Qualified public evidence',
    'Evidence gaps',
    'Pending metrics',
    'KPI framework',
    'values pending publication',
    'cohort definitions and reporting windows'
  ]) {
    assert.equal(source.includes(requiredFragment), true, `proof page should include: ${requiredFragment}`);
  }
});

test('regulatory and security pages preserve draft status without certification claims', () => {
  const regulatory = normalizeCopy(readFileSync('pages/regulatory.jsx', 'utf8'));
  const security = normalizeCopy(readFileSync('pages/trust/security.jsx', 'utf8'));

  for (const requiredFragment of ['Draft', 'draft MDR Class I self-assessment', 'pending legal/regulatory sign-off']) {
    assert.equal(regulatory.includes(requiredFragment), true, `regulatory page should include: ${requiredFragment}`);
  }

  for (const requiredFragment of ['Draft baseline', 'not a certification claim', 'traceable event records']) {
    assert.equal(security.includes(requiredFragment), true, `security page should include: ${requiredFragment}`);
  }
});

test('pricing and buying pages explain RFQ scope and next steps', () => {
  const pricing = normalizeCopy(readFileSync('pages/pricing.jsx', 'utf8'));
  const howToBuy = normalizeCopy(readFileSync('pages/how-to-buy.jsx', 'utf8'));

  for (const requiredFragment of ['Request for Quotation', 'does not publish numeric list prices', 'scope']) {
    assert.equal(pricing.includes(requiredFragment), true, `pricing page should include: ${requiredFragment}`);
  }

  for (const requiredFragment of ['first conversation to activation', 'security, legal, and governance checkpoints', 'Start Qualification']) {
    assert.equal(howToBuy.includes(requiredFragment), true, `how-to-buy page should include: ${requiredFragment}`);
  }
});

test('service capability pages preserve SmartClover product and service hierarchy', () => {
  const services = normalizeCopy(readFileSync('pages/services.jsx', 'utf8'));
  const cloud = normalizeCopy(readFileSync('pages/cloud-architecture.jsx', 'utf8'));
  const cybersecurity = normalizeCopy(readFileSync('pages/cybersecurity.jsx', 'utf8'));
  const decentralized = normalizeCopy(readFileSync('pages/decentralized.jsx', 'utf8'));

  const cerviGuardIndex = services.indexOf('CerviGuard');
  const dataGemsIndex = services.indexOf('DataGems');
  const cloudOnEdgeIndex = services.indexOf('permissioned cloud-on-edge');
  const cybersecurityIndex = services.indexOf('cybersecurity/resilience');

  assert.notEqual(cerviGuardIndex, -1, 'services page should mention CerviGuard');
  assert.notEqual(dataGemsIndex, -1, 'services page should mention DataGems');
  assert.notEqual(cloudOnEdgeIndex, -1, 'services page should mention permissioned cloud-on-edge');
  assert.notEqual(cybersecurityIndex, -1, 'services page should mention cybersecurity/resilience services');
  assert.equal(cerviGuardIndex < dataGemsIndex, true, 'services page should keep CerviGuard before DataGems');
  assert.equal(dataGemsIndex < cloudOnEdgeIndex, true, 'services page should keep DataGems before cloud-on-edge services');
  assert.equal(
    cloudOnEdgeIndex < cybersecurityIndex,
    true,
    'services page should keep cloud-on-edge services before cybersecurity/resilience services'
  );

  for (const requiredFragment of [
    'Permissioned cloud-on-edge services for healthcare AI workloads',
    'end-to-end encrypted',
    'clinical payload data is not centralized',
    'immutable trace events'
  ]) {
    assert.equal(cloud.includes(requiredFragment), true, `cloud architecture page should include: ${requiredFragment}`);
  }

  for (const requiredFragment of [
    'Cybersecurity and resilience services for healthcare organizations',
    'authorized/certified personnel',
    'partner security products',
    'agentic engineering workflows'
  ]) {
    assert.equal(cybersecurity.includes(requiredFragment), true, `cybersecurity page should include: ${requiredFragment}`);
  }

  assert.equal(
    decentralized.includes('provider-neutral permissioned cloud-on-edge deployment'),
    true,
    'decentralized page should use provider-neutral cloud-on-edge language'
  );
});

test('services route remains publicly reachable', () => {
  const nextConfig = readFileSync('next.config.js', 'utf8');

  assert.equal(
    nextConfig.includes("source: '/services'"),
    false,
    'next.config.js should not redirect /services away from the service-capability page'
  );
});
