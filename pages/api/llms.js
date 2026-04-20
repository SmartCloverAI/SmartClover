import { buildLlmsFullTxt, buildLlmsTxt } from '../../lib/agent-artifacts.mjs';

const CACHE_CONTROL = 'public, max-age=3600, stale-while-revalidate=86400';

export default function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).send('Method not allowed.');
  }

  const variant = req.query.full === '1' ? 'full' : 'short';
  const payload = variant === 'full' ? buildLlmsFullTxt() : buildLlmsTxt();

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', CACHE_CONTROL);
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');

  return res.status(200).send(payload);
}
