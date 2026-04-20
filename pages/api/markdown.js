import TurndownService from 'turndown';

const turndownService = new TurndownService({
  codeBlockStyle: 'fenced',
  headingStyle: 'atx'
});

turndownService.addRule('lineBreak', {
  filter: ['br'],
  replacement: () => '  \n'
});

const extractTagContent = (html, tagName) => {
  const match = html.match(new RegExp(`<${tagName}[^>]*>([\\s\\S]*?)</${tagName}>`, 'i'));
  return match ? match[1].trim() : '';
};

const extractMetaContent = (html, name) => {
  const match = html.match(new RegExp(`<meta[^>]+(?:name|property)=["']${name}["'][^>]+content=["']([^"']+)["'][^>]*>`, 'i'));
  return match ? match[1].trim() : '';
};

const removeNonContentTags = (html) =>
  html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, '')
    .replace(/<svg[\s\S]*?<\/svg>/gi, '');

const extractPrimaryContent = (html) => {
  const mainContent = extractTagContent(html, 'main');

  if (mainContent) {
    return mainContent.replace(/></g, '>\n<');
  }

  const articleContent = extractTagContent(html, 'article');

  if (articleContent) {
    return articleContent.replace(/></g, '>\n<');
  }

  return (extractTagContent(html, 'body') || html).replace(/></g, '>\n<');
};

const normalizePath = (inputPath) => {
  if (typeof inputPath !== 'string' || inputPath.length === 0) {
    return '/';
  }

  if (inputPath.startsWith('http://') || inputPath.startsWith('https://')) {
    return '/';
  }

  return inputPath.startsWith('/') ? inputPath : `/${inputPath}`;
};

const getRequestOrigin = (req) => {
  const forwardedProto = req.headers['x-forwarded-proto'];
  const host = req.headers.host || 'localhost:3000';
  const protocol = forwardedProto || (host.includes('localhost') || host.startsWith('127.0.0.1') ? 'http' : 'https');

  return `${protocol}://${host}`;
};

const estimateTokenCount = (markdown) => Math.max(1, Math.ceil(markdown.length / 4));

const toFrontMatter = ({ title, description, url }) => {
  const lines = ['---'];

  if (title) {
    lines.push(`title: ${JSON.stringify(title)}`);
  }

  if (description) {
    lines.push(`description: ${JSON.stringify(description)}`);
  }

  lines.push(`url: ${JSON.stringify(url)}`);
  lines.push('---', '');

  return lines.join('\n');
};

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  const requestPath = normalizePath(req.query.path);
  const origin = getRequestOrigin(req);
  const sourceUrl = new URL(requestPath, origin);

  try {
    const sourceResponse = await fetch(sourceUrl, {
      headers: {
        Accept: 'text/html',
        'x-smartclover-render-format': 'html-source'
      }
    });

    const html = await sourceResponse.text();
    const cleanedHtml = removeNonContentTags(html);
    const contentHtml = extractPrimaryContent(cleanedHtml);
    const title = extractTagContent(cleanedHtml, 'title');
    const description = extractMetaContent(cleanedHtml, 'description');
    const markdownBody = turndownService.turndown(contentHtml).trim();
    const markdown = `${toFrontMatter({ title, description, url: sourceUrl.toString() })}${markdownBody}\n`;

    res.setHeader('Cache-Control', 'no-store, max-age=0');
    res.setHeader('Vary', 'Accept');
    res.setHeader('Content-Type', 'text/markdown; charset=utf-8');
    res.setHeader('Content-Signal', 'ai-train=yes, search=yes, ai-input=yes');
    res.setHeader('x-markdown-tokens', String(estimateTokenCount(markdown)));

    return res.status(sourceResponse.status).send(markdown);
  } catch {
    const markdown = `${toFrontMatter({
      title: 'SmartClover markdown conversion error',
      description: 'The SmartClover markdown representation could not be generated.',
      url: sourceUrl.toString()
    })}The SmartClover markdown representation could not be generated for this request.\n`;

    res.setHeader('Cache-Control', 'no-store, max-age=0');
    res.setHeader('Vary', 'Accept');
    res.setHeader('Content-Type', 'text/markdown; charset=utf-8');

    return res.status(502).send(markdown);
  }
}
