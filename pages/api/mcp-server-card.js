import versionData from '../../version.json';
import { buildMcpServerCard } from '../../lib/agent-artifacts.mjs';

const CACHE_CONTROL = 'public, max-age=3600, stale-while-revalidate=86400';

export default function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', CACHE_CONTROL);
  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  return res.status(200).json(buildMcpServerCard({ siteVersion: versionData.version }));
}
