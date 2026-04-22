import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const bannedCopyByFile = {
  'pages/about.jsx': [
    'Dr. Andreea Damian anchors the public company story.',
    'built to look and act like a real company',
    'make the real company legible',
    'anonymous marketing positioning',
    'Founder-led representation still needs public policy and accountability.',
    'Founder identity is not treated as a substitute for process.',
    'Values from the old standalone route now live here, where people expect them'
  ],
  'pages/index.jsx': [
    'company narrative is tied to public cervical screening research',
    'company story back to cervical screening and follow-up work',
    'real healthcare AI company with a real flagship product',
    'A flagship-first company that still looks like a company',
    'single-page shell',
    'anonymous AI-marketing claims',
    'A compact public timeline for serious visitors',
    'Named credibility, not anonymous branding'
  ],
  'pages/contact.jsx': ['so serious visitors do not have to guess where to start', 'buried in generic contact copy'],
  'components/Layout.jsx': ['serious evaluators can move quickly']
};

test('public marketing copy avoids informal website-story phrasing', () => {
  for (const [filePath, bannedFragments] of Object.entries(bannedCopyByFile)) {
    const source = readFileSync(filePath, 'utf8');

    for (const fragment of bannedFragments) {
      assert.equal(
        source.includes(fragment),
        false,
        `${filePath} still includes informal public copy: ${fragment}`
      );
    }
  }
});
