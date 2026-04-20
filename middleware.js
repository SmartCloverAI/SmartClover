import { NextResponse } from 'next/server';

const excludedPrefixes = ['/_next', '/api', '/images', '/.well-known'];
const excludedExactPaths = new Set(['/favicon.ico', '/favicon.png', '/robots.txt', '/sitemap.xml', '/openapi.json']);

const requestWantsMarkdown = (request) => {
  const accept = request.headers.get('accept') || '';
  return request.method === 'GET' && accept.includes('text/markdown');
};

const shouldBypassMarkdownRewrite = (request) => {
  const { pathname } = request.nextUrl;

  if (request.headers.get('x-smartclover-render-format') === 'html-source') {
    return true;
  }

  if (excludedExactPaths.has(pathname)) {
    return true;
  }

  if (excludedPrefixes.some((prefix) => pathname.startsWith(prefix))) {
    return true;
  }

  return /\.[^/]+$/.test(pathname);
};

export function middleware(request) {
  if (!requestWantsMarkdown(request) || shouldBypassMarkdownRewrite(request)) {
    return NextResponse.next();
  }

  const rewriteUrl = request.nextUrl.clone();
  rewriteUrl.pathname = '/api/markdown';
  rewriteUrl.search = '';
  rewriteUrl.searchParams.set('path', `${request.nextUrl.pathname}${request.nextUrl.search || ''}`);

  return NextResponse.rewrite(rewriteUrl);
}

export const config = {
  matcher: '/:path*'
};
