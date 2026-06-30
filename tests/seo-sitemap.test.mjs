import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { buildSitemap, getSitemapEntries, SITE_URL, staticRoutes } from '../scripts/generate-sitemap.mjs';

const textExtensions = new Set(['.js', '.jsx']);

const collectCodeFiles = (targetPath) => {
  const stats = statSync(targetPath);

  if (stats.isFile()) {
    const extension = targetPath.match(/\.[^.]+$/)?.[0];
    return textExtensions.has(extension) ? [targetPath] : [];
  }

  return readdirSync(targetPath)
    .flatMap((entry) => collectCodeFiles(join(targetPath, entry)))
    .sort();
};

const routeToPagePath = (route) => {
  if (route === '/') {
    return 'pages/index.jsx';
  }

  if (route === '/blog' || route === '/trust') {
    return `pages${route}/index.jsx`;
  }

  return `pages${route}.jsx`;
};

const read = (filePath) => readFileSync(filePath, 'utf8');

test('public route pages use PageSeo for route metadata', () => {
  for (const route of staticRoutes) {
    const pagePath = routeToPagePath(route);

    assert.equal(existsSync(pagePath), true, `expected a page file for ${route}: ${pagePath}`);
    assert.equal(read(pagePath).includes('<PageSeo'), true, `${pagePath} should use PageSeo metadata`);
  }
});

test('route-level Head usage is centralized in PageSeo', () => {
  const allowedHeadFiles = new Set(['components/PageSeo.jsx', 'pages/_app.jsx', 'pages/_document.jsx']);

  for (const filePath of [...collectCodeFiles('components'), ...collectCodeFiles('pages')]) {
    const source = read(filePath);

    if (!source.includes("from 'next/head'")) {
      continue;
    }

    assert.equal(allowedHeadFiles.has(filePath), true, `${filePath} should not import next/head for route metadata`);
  }
});

test('checked-in sitemap matches generated public routes and posts', () => {
  const generated = buildSitemap();
  const checkedIn = read('public/sitemap.xml');
  const entries = getSitemapEntries();
  const locs = [...checkedIn.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);

  assert.equal(checkedIn, generated, 'public/sitemap.xml should match scripts/generate-sitemap.mjs output');
  assert.equal(locs.length, entries.length, 'sitemap should contain one loc for each generated entry');
  assert.equal(locs.includes(`${SITE_URL}/gep`), false, 'sitemap should omit the redirected /gep short route');

  for (const entry of entries) {
    const routeUrl = `${SITE_URL}${entry.route === '/' ? '/' : entry.route}`;
    assert.equal(locs.includes(routeUrl), true, `sitemap should include ${routeUrl}`);
  }
});
