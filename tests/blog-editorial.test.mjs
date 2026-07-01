import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { createRequire } from 'node:module';
import { pathToFileURL } from 'node:url';

const requireFromProject = createRequire(new URL('../package.json', import.meta.url));
const blogDependencies = ['gray-matter', 'remark', 'remark-html'];

const getMissingDependencies = () =>
  blogDependencies.filter((dependency) => {
    try {
      requireFromProject.resolve(dependency);
      return false;
    } catch {
      return true;
    }
  });

const missingDependencies = getMissingDependencies();
const dependencySkip = missingDependencies.length
  ? { skip: `missing installed package(s): ${missingDependencies.join(', ')}` }
  : {};

const resolveDependencyUrl = (dependency) => pathToFileURL(requireFromProject.resolve(dependency)).href;

const loadPostsModule = async () => {
  const source = readFileSync('lib/posts.js', 'utf8')
    .replace("import fs from 'fs';", "import fs from 'node:fs';")
    .replace("import path from 'path';", "import path from 'node:path';")
    .replace("import matter from 'gray-matter';", `import matter from '${resolveDependencyUrl('gray-matter')}';`)
    .replace("import { remark } from 'remark';", `import { remark } from '${resolveDependencyUrl('remark')}';`)
    .replace("import html from 'remark-html';", `import html from '${resolveDependencyUrl('remark-html')}';`);
  const tempDirectory = mkdtempSync(join(tmpdir(), 'smartclover-blog-editorial-'));
  const modulePath = join(tempDirectory, 'posts.mjs');

  writeFileSync(modulePath, source);

  return import(pathToFileURL(modulePath).href);
};

test('blog data layer source exposes the Stage 2 metadata and rendering hooks', () => {
  const source = readFileSync('lib/posts.js', 'utf8');

  for (const requiredFragment of [
    'summary,',
    'topic: inferTopic',
    'tags: normalizeList',
    'author: firstPresentString',
    'partner: firstPresentString',
    'heroImage,',
    'heroAlt,',
    'heroCaption,',
    'readingTime:',
    'href: `/blog/${slug}`',
    'contentHtml,',
    'toc,',
    'relatedPosts: getRelatedPosts(metadata)',
    "loading: 'lazy'",
    "decoding: 'async'",
    'hProperties:',
    'resolveArticleImagePath'
  ]) {
    assert.equal(source.includes(requiredFragment), true, `lib/posts.js should include ${requiredFragment}`);
  }

  assert.equal(
    source.includes('getFirstContentSummary'),
    false,
    'summaries should come from explicit metadata, not body-derived fallback text'
  );
  assert.equal(source.includes('postEditorialDefaults'), true, 'topic and thumbnail defaults should be explicit by slug');
  assert.equal(source.includes('htmlHeadingPrefix'), true, 'TOC ids should account for rendered heading prefixes');

  assert.equal(
    source.includes('content,\n        ...data'),
    false,
    'getSortedPostsData should not retain the legacy raw Markdown body return shape'
  );
});

test('getSortedPostsData returns normalized listing-safe metadata', dependencySkip, async () => {
  const { getSortedPostsData } = await loadPostsModule();
  const posts = getSortedPostsData();

  assert.ok(posts.length >= 1, 'expected Markdown posts to be loaded');

  for (const post of posts) {
    assert.equal(Object.hasOwn(post, 'content'), false, `${post.slug} should not expose Markdown body content`);
    assert.equal(Object.hasOwn(post, 'contentHtml'), false, `${post.slug} should not expose rendered body content`);
    assert.equal(post.href, `/blog/${post.slug}`);
    assert.equal(typeof post.summary, 'string');
    assert.ok(post.summary.length > 0, `${post.slug} should have a summary`);
    assert.equal(typeof post.topic, 'string');
    assert.ok(post.topic.length > 0, `${post.slug} should have a topic`);
    assert.equal(Array.isArray(post.tags), true, `${post.slug} tags should be normalized to an array`);
    assert.equal(typeof post.author, 'string');
    assert.ok(post.author.length > 0, `${post.slug} should have an author`);
    assert.equal(typeof post.heroImage, 'string');
    assert.ok(post.heroImage.startsWith('/'), `${post.slug} should use a site-local hero image fallback`);
    assert.equal(typeof post.heroAlt, 'string');
    assert.ok(post.heroAlt.length > 0, `${post.slug} should have hero alt text`);
    assert.equal(typeof post.heroCaption, 'string');
    assert.match(post.readingTime, /^\d+ min read$/);
  }

  const nis2Post = posts.find((post) => post.slug === 'nis2compass-verifiable-cybersecurity-proof');

  assert.ok(nis2Post, 'expected NIS2COMPASS post metadata');
  assert.equal(nis2Post.partner, 'AI STM Learning SRL');
  assert.equal(nis2Post.heroImage, '/blog/images/nis2compass-blog-hero-auditor-evidence-variant-3.png');
  assert.equal(nis2Post.heroImageWidth, 1601);
  assert.equal(nis2Post.heroImageHeight, 1525);
});

test('getPostData adds heading ids, toc entries, image attributes, and related candidates', dependencySkip, async () => {
  const { getPostData } = await loadPostsModule();
  const post = await getPostData('nis2compass-verifiable-cybersecurity-proof');

  assert.equal(post.summary, post.subtitle);
  assert.equal(post.modifiedDate, '2026-06-30');
  assert.ok(post.contentHtml.includes('<h2 id="user-content-why-this-matters-now">Why This Matters Now</h2>'));
  assert.ok(post.contentHtml.includes('<h2 id="user-content-what-nis2compass-is-building">What <a href="https://www.nis2compass.eu">NIS2COMPASS</a> Is Building</h2>'));
  assert.equal(post.heroImage, '/blog/images/nis2compass-blog-hero-auditor-evidence-variant-3.png');
  assert.equal(
    post.contentHtml.includes('src="/blog/images/nis2compass-blog-hero-auditor-evidence-variant-3.png"'),
    false,
    'the article body should not repeat the hero image already rendered by the template'
  );
  assert.ok(post.contentHtml.includes('loading="lazy"'));
  assert.ok(post.contentHtml.includes('decoding="async"'));
  assert.ok(post.contentHtml.includes('width="1672"'));
  assert.ok(post.contentHtml.includes('height="941"'));
  assert.deepEqual(
    post.toc.slice(0, 3).map(({ id, depth, text }) => ({ id, depth, text })),
    [
      { id: 'user-content-why-this-matters-now', depth: 2, text: 'Why This Matters Now' },
      { id: 'user-content-what-nis2compass-is-building', depth: 2, text: 'What NIS2COMPASS Is Building' },
      {
        id: 'user-content-the-partnership-smartclover-and-ai-stm-learning',
        depth: 2,
        text: 'The Partnership: SmartClover And AI STM Learning'
      }
    ]
  );

  const heroImage = post.images.find((image) => image.src === '/blog/images/nis2compass-blog-hero-auditor-evidence-variant-3.png');

  assert.ok(heroImage, 'expected rendered image metadata for the NIS2COMPASS hero diagram');
  assert.equal(heroImage.width, 1601);
  assert.equal(heroImage.height, 1525);
  assert.equal(heroImage.type, 'png');
  assert.equal(Array.isArray(post.relatedPosts), true);

  for (const relatedPost of post.relatedPosts) {
    assert.equal(Object.hasOwn(relatedPost, 'content'), false, 'related posts should not expose Markdown body content');
    assert.equal(Object.hasOwn(relatedPost, 'contentHtml'), false, 'related posts should not expose rendered body content');
  }
});

test('resolveArticleImagePath keeps local image paths explicit and rejects unsafe destinations', dependencySkip, async () => {
  const { resolveArticleImagePath } = await loadPostsModule();

  assert.equal(resolveArticleImagePath('images/example.png'), '/blog/images/example.png');
  assert.equal(resolveArticleImagePath('./images/example.png?size=small#preview'), '/blog/images/example.png?size=small#preview');
  assert.equal(resolveArticleImagePath('/images/blog/example.png'), '/images/blog/example.png');
  assert.equal(resolveArticleImagePath('https://example.com/example.png'), 'https://example.com/example.png');
  assert.equal(resolveArticleImagePath('../private/example.png'), '');
  assert.equal(resolveArticleImagePath('javascript:alert(1)'), '');
});
