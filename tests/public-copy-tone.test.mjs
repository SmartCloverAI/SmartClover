import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
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

const extractContactFormSource = (source) => {
  const match = source.match(/<form[\s\S]*?<\/form>/);

  assert.ok(match, 'pages/contact.jsx should contain one contact form');

  return match[0];
};

const extractArrayDeclaration = (source, declarationName) => {
  const match = source.match(new RegExp(`const ${declarationName} = \\[[\\s\\S]*?\\];`));

  assert.ok(match, `expected ${declarationName} array declaration`);

  return match[0];
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
  'SLM-first',
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
      'SmartClover builds healthcare AI where clinical work actually happens. CerviGuard helps cervical-screening teams structure intake, review cases with AI support, coordinate triage, and manage clinician-led follow-up.'
    ),
    true,
    'homepage hero should use the Stage 3 CerviGuard-first elevator pitch'
  );

  assert.equal(
    heroCopy.includes('DataGems'),
    false,
    'homepage first-screen hero should not give DataGems equal visual weight with CerviGuard'
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
  assert.equal(
    source.indexOf('CerviGuard leads the product portfolio') < source.indexOf('DataGems research track in practice'),
    true,
    'products page should show CerviGuard proof before the DataGems research track'
  );
  assert.equal(
    source.includes('Flagship product proof'),
    true,
    'products page should include an explicit CerviGuard proof section'
  );
  assert.equal(
    source.includes('image="/images/cerviguard/cerviguard-dashboard.png"'),
    true,
    'products social preview should use CerviGuard proof while the page is CerviGuard-led'
  );

  for (const requiredFragment of ['synthetic-data workflows', 'test schemas', 'export reviewable results']) {
    assert.equal(source.includes(requiredFragment), true, `products page should describe DataGems reader value: ${requiredFragment}`);
  }
});

test('home and about explain product proof through reader value, not internal status narration', () => {
  const home = normalizeCopy(readFileSync('pages/index.jsx', 'utf8'));
  const about = normalizeCopy(readFileSync('pages/about.jsx', 'utf8'));
  const layout = normalizeCopy(readFileSync('components/Layout.jsx', 'utf8'));

  for (const requiredFragment of [
    'Visitors can review CerviGuard through its live workspace, public repository, screenshots, MDR draft, and trust material',
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

test('Stage 3 product proof layout keeps CerviGuard visual proof first', () => {
  const home = normalizeCopy(readFileSync('pages/index.jsx', 'utf8'));
  const products = normalizeCopy(readFileSync('pages/products.jsx', 'utf8'));
  const proof = normalizeCopy(readFileSync('pages/proof.jsx', 'utf8'));
  const cerviguard = normalizeCopy(readFileSync('pages/cerviguard.jsx', 'utf8'));
  const css = normalizeCopy(readFileSync('styles/refactor.css', 'utf8'));

  assert.equal(home.includes('product-visual-frame'), true, 'homepage should crop high-funnel product screenshots');
  assert.equal(products.includes('product-shot-grid'), true, 'products page should include CerviGuard proof screenshots');
  assert.equal(proof.includes('Verified product proof'), true, 'proof page should open with verified product proof');
  assert.equal(
    proof.indexOf('Verified product proof') < proof.indexOf('Evidence status'),
    true,
    'verified product proof should appear before evidence-status taxonomy'
  );
  assert.equal(
    cerviguard.includes('cerviguard-case-detail.png'),
    false,
    'CerviGuard gallery should not expose detailed clinical case imagery'
  );
  assert.equal(
    css.includes('.datagems-shot-media') && css.includes('object-fit: contain'),
    true,
    'DataGems screenshots should use normalized contained media framing'
  );
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

test('NIS2COMPASS blog links project mentions and uses reader-friendly emphasis', () => {
  const rawSource = readFileSync('posts/nis2compass-verifiable-cybersecurity-proof.md', 'utf8');
  const source = normalizeCopy(rawSource);
  const nis2CompassUrl = 'https://www.nis2compass.eu';

  for (const assetPath of [
    'public/blog/images/nis2compass-blog-hero-auditor-evidence-variant-3.png',
    'public/blog/images/evidence-flow-imagegen.png',
    'public/blog/images/collaboration-flow-imagegen.png'
  ]) {
    assert.equal(existsSync(assetPath), true, `expected NIS2COMPASS visual asset: ${assetPath}`);
  }

  for (const requiredFragment of [
    'NIS2COMPASS: Turning Cybersecurity Work Into Verifiable Proof',
    'SmartClover and AI STM Learning are building a practical evidence layer for NIS2 readiness, funded through the CYberSynchrony FSTP open call.',
    `**[NIS2COMPASS](${nis2CompassUrl}) treats that proof as a first-class cybersecurity object.**`,
    `What [NIS2COMPASS](${nis2CompassUrl}) Is Building`,
    `[NIS2COMPASS](${nis2CompassUrl}) is an 8-month project accepted for grant funding`,
    'The Partnership: SmartClover And AI STM Learning',
    'AI STM Learning SRL coordinates the project and leads the compliance/evidence architecture.',
    'What SmartClover Brings To The Project',
    'How CYberSynchrony Fits',
    'CYberSynchrony',
    'CYBRITE',
    'CYBERRA',
    'CYRESCUE',
    'CYBERWISE',
    'CYBERGOPLUS',
    'What Must Stay Private',
    'The Practical Result We Want',
    'images/nis2compass-blog-hero-auditor-evidence-variant-3.png',
    'images/evidence-flow-imagegen.png',
    'images/collaboration-flow-imagegen.png',
    'human-reviewed evidence pack',
    'reviewable way',
    `- [NIS2COMPASS](${nis2CompassUrl})`,
    '> **The decisive question is not only whether the security work happened.',
    '**The central technical idea is the Compliance Evidence Graph.**',
    '**That is the difference between activity and proof.**'
  ]) {
    assert.equal(source.includes(requiredFragment), true, `NIS2COMPASS blog should include: ${requiredFragment}`);
  }

  const bodyWithoutFrontmatter = rawSource.replace(/^---[\s\S]*?---\s*/, '');
  const bodyWithoutImageAlt = bodyWithoutFrontmatter.replace(/!\[[^\]]*\]\([^)]+\)/g, '');
  const bodyWithoutLinkedMentions = bodyWithoutImageAlt.replaceAll(`[NIS2COMPASS](${nis2CompassUrl})`, '');
  const unlinkedBodyMentions = bodyWithoutLinkedMentions.match(/NIS2COMPASS/g) ?? [];

  assert.deepEqual(unlinkedBodyMentions, [], 'NIS2COMPASS mentions in article body should link to the project website');

  const blogIndex = readFileSync('pages/blog/index.jsx', 'utf8');
  const blogPost = readFileSync('pages/blog/[slug].jsx', 'utf8');

  assert.equal(
    blogIndex.includes('post.excerpt || post.subtitle'),
    true,
    'blog index should use subtitle metadata when a verbatim article does not define excerpt'
  );
  assert.equal(
    blogPost.includes('post.excerpt || post.subtitle'),
    true,
    'blog post metadata should use subtitle metadata when a verbatim article does not define excerpt'
  );
  assert.equal(blogPost.includes(nis2CompassUrl), true, 'article title renderer should link the NIS2COMPASS title token');
  assert.equal(blogPost.includes('renderLinkedTitle(post.title)'), true, 'article page should render linked titles');
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

test('NapkinAI visuals are hosted locally and keep public claims scoped', () => {
  const requiredAssets = [
    'public/images/blog/datagems-workflow-napkin_v1.0.png',
    'public/images/blog/cerviguard-workflow-napkin_v1.0.png',
    'public/images/architecture/cloud-on-edge-boundaries-napkin_v1.0.png',
    'public/images/architecture/healthcare-cyber-resilience-loop-napkin_v1.0.png'
  ];

  for (const assetPath of requiredAssets) {
    assert.equal(existsSync(assetPath), true, `expected hosted visual asset: ${assetPath}`);
  }

  const datagemsPost = normalizeCopy(readFileSync('posts/datagems-synthetic-data-workflows.md', 'utf8'));
  const cerviguardPost = normalizeCopy(readFileSync('posts/cerviguard-remote-screening-foundations.md', 'utf8'));
  const cloudPage = normalizeCopy(readFileSync('pages/cloud-architecture.jsx', 'utf8'));
  const cyberPage = normalizeCopy(readFileSync('pages/cybersecurity.jsx', 'utf8'));

  for (const requiredFragment of [
    '/images/blog/datagems-workflow-napkin_v1.0.png',
    'schema definition through export'
  ]) {
    assert.equal(datagemsPost.includes(requiredFragment), true, `DataGems post should include visual context: ${requiredFragment}`);
  }

  for (const requiredFragment of [
    '/images/blog/cerviguard-workflow-napkin_v1.0.png',
    'intake, review, triage coordination, and follow-up planning'
  ]) {
    assert.equal(cerviguardPost.includes(requiredFragment), true, `CerviGuard post should include visual context: ${requiredFragment}`);
  }

  assert.equal(
    cloudPage.includes('/images/architecture/cloud-on-edge-boundaries-napkin_v1.0.png'),
    true,
    'cloud architecture page should reference the local cloud-on-edge visual'
  );
  assert.equal(
    cloudPage.includes('Provider-neutral cloud-on-edge boundary diagram'),
    true,
    'cloud architecture visual should keep provider-neutral language'
  );
  assert.equal(
    cyberPage.includes('/images/architecture/healthcare-cyber-resilience-loop-napkin_v1.0.png'),
    true,
    'cybersecurity page should reference the local resilience-loop visual'
  );
  assert.equal(
    cyberPage.includes('authorized human oversight'),
    true,
    'cybersecurity visual caption should preserve human oversight'
  );

  const publicTextSources = [
    ...collectTextFiles('pages'),
    ...collectTextFiles('components'),
    ...collectTextFiles('posts'),
    ...collectTextFiles('styles')
  ];

  for (const filePath of publicTextSources) {
    const source = normalizeForSearch(readFileSync(filePath, 'utf8'));

    for (const rejectedFragment of ['api.napkin.ai', 'generated_files', 'download_url', '/v1/visual/']) {
      assert.equal(
        source.includes(rejectedFragment),
        false,
        `${filePath} should not expose transient NapkinAI API or download references: ${rejectedFragment}`
      );
    }
  }
});

test('machine-readable status schema tracks the public site version', () => {
  const { version } = JSON.parse(readFileSync('version.json', 'utf8'));
  const openapi = JSON.parse(readFileSync('public/openapi.json', 'utf8'));

  assert.equal(
    openapi.components.schemas.StatusResponse.properties.version.example,
    version,
    'OpenAPI status response example should match version.json'
  );
});

test('contact and API docs keep email fallbacks Cloudflare-safe and announced accessibly', () => {
  const contact = readFileSync('pages/contact.jsx', 'utf8');
  const privacyPolicy = readFileSync('pages/trust/privacy-policy.jsx', 'utf8');
  const privacyContact = readFileSync('pages/contact/privacy.jsx', 'utf8');
  const apiDocs = readFileSync('pages/docs/api.jsx', 'utf8');
  const home = readFileSync('pages/index.jsx', 'utf8');
  const layout = readFileSync('components/Layout.jsx', 'utf8');
  const nextConfig = readFileSync('next.config.js', 'utf8');

  assert.equal(
    /href=["']mailto:andreea@smartclover\.ro/.test(contact),
    false,
    'contact page should not server-render a static mailto href for Cloudflare to rewrite'
  );
  assert.equal(
    /href=["']mailto:andreea@smartclover\.ro/.test(privacyPolicy),
    false,
    'privacy policy should not server-render a static mailto href for Cloudflare to rewrite'
  );
  assert.equal(
    home.includes("email: 'andreea@smartclover.ro'"),
    false,
    'homepage JSON-LD should avoid raw email strings that Cloudflare may rewrite'
  );
  assert.equal(
    contact.includes('email: getContactEmail()'),
    false,
    'contact JSON-LD should avoid raw email strings that Cloudflare may rewrite'
  );
  assert.equal(
    contact.includes('setDirectMailtoUrl(`mailto:${getContactEmail()}`)'),
    true,
    'contact page should build the direct email fallback after hydration'
  );
  assert.equal(
    contact.includes('buildClientFallbackMailtoUrl(submissionPayload)'),
    true,
    'contact page should create a pre-filled fallback when the API request fails'
  );
  assert.equal(
    contact.includes('const isPrivacyPayload = payload.inquiryType === privacyInquiryLabel;'),
    true,
    'client fallback mailto should branch privacy requests away from commercial qualification fields'
  );
  assert.equal(
    contact.includes('Privacy request details: ${cleanMailtoField(payload.useCase, 2000)}'),
    true,
    'client privacy fallback should label the body as a privacy request'
  );
  assert.equal(
    contact.includes('isPrivacyPayload ? privacyLines : commercialLines'),
    true,
    'client privacy fallback should not include commercial role, organization-type, deployment, or timeline fields'
  );
  assert.equal(
    contact.includes("payload?.relayStatus === 'manual'"),
    true,
    'contact page should treat manual relay as unresolved instead of delivered success'
  );
  assert.equal(
    contact.includes("setStatus('manual')"),
    true,
    'contact page should expose manual routing state'
  );
  assert.equal(
    contact.includes("status === 'manual' ? 'warning'"),
    true,
    'manual contact routing should use a distinct needs-action feedback state'
  );
  assert.equal(
    contact.includes('!isPrivacyInquiry ? ('),
    true,
    'privacy requests should not display commercial qualification-only fields'
  );
  assert.equal(
    contact.includes('Privacy or data-subject request'),
    true,
    'contact page should provide a dedicated privacy/data-subject request path'
  );
  assert.equal(
    privacyPolicy.includes('/contact/privacy#inquiry-form'),
    true,
    'privacy policy should route privacy requests to the dedicated privacy path'
  );
  assert.equal(
    privacyContact.includes('initialInquiryType={privacyInquiryLabel}') &&
      privacyContact.includes('seoPath="/contact/privacy"'),
    true,
    'dedicated privacy contact route should render the privacy form server-side without query-string hydration'
  );
  assert.equal(
    contact.includes("aria-live={status === 'error' ? 'assertive' : 'polite'}"),
    true,
    'contact feedback should announce success and error states'
  );
  assert.equal(
    contact.includes('aria-pressed={form.inquiryType === item.label}'),
    true,
    'contact inquiry path buttons should expose pressed state'
  );
  assert.equal(
    apiDocs.includes('<!--email_off-->$1<!--/email_off-->'),
    true,
    'API docs code examples should wrap email addresses in Cloudflare email_off markers'
  );
  assert.equal(
    apiDocs.includes('dangerouslySetInnerHTML={{ __html: renderCloudflareSafeCode(section.example) }}'),
    true,
    'API docs should render escaped code examples with Cloudflare-safe comments'
  );
  assert.equal(nextConfig.includes("source: '/contact'"), true, 'contact route should have scoped headers');
  assert.equal(nextConfig.includes("source: '/contact/privacy'"), true, 'privacy contact route should have scoped headers');
  assert.equal(nextConfig.includes("source: '/docs/api'"), true, 'API docs route should have scoped headers');
  assert.equal(
    nextConfig.includes('no-transform'),
    true,
    'contact and API docs routes should opt out of Cloudflare email rewriting transforms'
  );
  const contactApi = readFileSync('pages/api/contact.js', 'utf8');
  assert.equal(
    contactApi.includes('const privacyLines = ['),
    true,
    'contact API should build a separate privacy request relay body'
  );
  assert.equal(
    contactApi.includes("'Privacy request received and routed.'"),
    true,
    'contact API should not call privacy webhook success a qualification request'
  );
  assert.equal(
    contactApi.includes('const lines = isPrivacyInquiry ? privacyLines : commercialLines;'),
    true,
    'contact API should keep commercial fields out of privacy relay bodies'
  );
  assert.equal(
    layout.includes("aria-current={isCurrentPage ? 'page' : undefined}"),
    true,
    'primary navigation should expose exact current-page state'
  );
});

test('contact form keeps the no-JS and browser-form fallback path functional', () => {
  const contact = readFileSync('pages/contact.jsx', 'utf8');
  const contactApi = readFileSync('pages/api/contact.js', 'utf8');
  const formSource = extractContactFormSource(contact);
  const submitButton = formSource.match(/<button[\s\S]*?type="submit"[\s\S]*?<\/button>/)?.[0] || '';
  const directEmailLink = contact.match(/<a[\s\S]*?Email instead[\s\S]*?<\/a>/)?.[0] || '';
  const privacyLines = extractArrayDeclaration(contactApi, 'privacyLines');
  const commercialLines = extractArrayDeclaration(contactApi, 'commercialLines');

  assert.equal(
    /<form[\s\S]*\baction=["']\/api\/contact["']/.test(formSource),
    true,
    'server-rendered contact form should submit to /api/contact when JavaScript is unavailable'
  );
  assert.equal(
    /<form[\s\S]*\bmethod=["']post["']/.test(formSource),
    true,
    'server-rendered contact form should use POST for browser submissions'
  );

  for (const controlName of [
    'inquiryType',
    'fullName',
    'email',
    'organization',
    'role',
    'organizationType',
    'deploymentPreference',
    'timeline',
    'useCase',
    'complianceRequirements',
    'consentAccepted',
    'website'
  ]) {
    assert.equal(
      new RegExp(`\\bname=["']${controlName}["']`).test(formSource),
      true,
      `contact form control should have a browser-submittable name: ${controlName}`
    );
  }

  assert.notEqual(submitButton, '', 'contact form should include a submit button');
  assert.equal(
    contact.includes('const [isHydrated, setIsHydrated] = useState(false);'),
    true,
    'contact page should initialize hydration state to false for server-rendered markup'
  );
  assert.equal(
    contact.includes('setIsHydrated(true);'),
    true,
    'contact page should flip hydration state only after client hydration'
  );
  assert.equal(
    submitButton.includes('disabled={isHydrated &&'),
    true,
    'submit button disabled state should be hydration-guarded so server-rendered markup remains submittable'
  );
  assert.notEqual(directEmailLink, '', 'contact page should include the direct email fallback link');
  assert.equal(
    directEmailLink.includes('#inquiry-form'),
    false,
    'server-rendered email fallback should not point to #inquiry-form'
  );
  assert.equal(
    contact.includes('const getServerRenderedMailtoUrl = () =>') &&
      contact.includes("join('%40')") &&
      directEmailLink.includes('getServerRenderedMailtoUrl()'),
    true,
    'server-rendered email fallback should use an encoded mailto address instead of a raw Cloudflare-rewritable address'
  );
  assert.equal(
    contact.includes('createInitialFormState(initialInquiryType)') &&
      contact.includes('Additional privacy context (optional)'),
    true,
    'contact page should support a server-rendered privacy initial state and privacy-specific optional context label'
  );

  assert.equal(
    /req\.headers(?:\[['"]accept['"]\]|\.accept)/.test(contactApi),
    true,
    'contact API should inspect the Accept header for browser-form HTML fallback handling'
  );
  assert.equal(
    contactApi.includes('text/html'),
    true,
    'contact API should be able to return an HTML fallback response to browser form submissions'
  );
  assert.equal(
    /res\.setHeader\(['"]Cache-Control['"],\s*['"][^'"]*no-transform/.test(contactApi),
    true,
    'contact API should mark fallback responses no-transform so encoded mailto output is not rewritten in transit'
  );
  assert.equal(
    contactApi.includes('toMailtoUrl(recipient, subject, lines)'),
    true,
    'browser-form fallback should reuse the same encoded mailto URL construction as JSON responses'
  );
  assert.equal(
    contactApi.includes('Complete contact request by email') &&
      contactApi.includes('Open email fallback to complete routing'),
    true,
    'manual browser-form fallback should make the required email action explicit instead of implying delivery'
  );

  for (const rejectedFragment of ['Role:', 'Organization type:', 'Use case:', 'Deployment preference:', 'Timeline:']) {
    assert.equal(
      privacyLines.includes(rejectedFragment),
      false,
      `privacy relay/fallback body should not include commercial qualification field: ${rejectedFragment}`
    );
  }
  assert.equal(
    privacyLines.includes('Privacy request details:'),
    true,
    'privacy relay/fallback body should label request details as privacy-specific'
  );

  for (const requiredFragment of ['Role:', 'Organization type:', 'Use case:', 'Deployment preference:', 'Timeline:']) {
    assert.equal(
      commercialLines.includes(requiredFragment),
      true,
      `commercial relay/fallback body should preserve qualification field: ${requiredFragment}`
    );
  }
});

test('NIS2COMPASS visuals use readiness evidence wording, not over-strong compliance wording', () => {
  const article = normalizeCopy(readFileSync('posts/nis2compass-verifiable-cybersecurity-proof.md', 'utf8'));

  for (const requiredFragment of [
    'updated: "2026-06-30"',
    'human-reviewed evidence pack',
    'a reviewable evidence pack',
    'reviewable way',
    'reviewable evidence packs',
    'public playbooks and templates'
  ]) {
    assert.equal(article.includes(requiredFragment), true, `NIS2COMPASS article should include safer visual context: ${requiredFragment}`);
  }

  for (const rejectedFragment of [
    'Achieving NIS2 Compliance',
    'Audit-Ready Proof',
    'Audit-ready proof',
    'audit-ready evidence',
    'audit-ready proof',
    'compliance test',
    'legally meaningful',
    'playbookes'
  ]) {
    assert.equal(
      normalizeForSearch(article).includes(normalizeForSearch(rejectedFragment)),
      false,
      `NIS2COMPASS article should avoid over-strong or misspelled visual wording: ${rejectedFragment}`
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
