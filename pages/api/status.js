import versionData from '../../version.json';

export default function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  res.setHeader('Cache-Control', 'no-store, max-age=0');

  return res.status(200).json({
    status: 'ok',
    service: 'smartclover-website',
    version: versionData.version,
    checkedAt: new Date().toISOString(),
    endpoints: ['/api/status', '/api/host-id', '/api/contact']
  });
}
