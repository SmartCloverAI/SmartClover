const resolveHostId = () =>
  process.env.EE_HOST_ID ?? process.env.R1EN_HOST_ID ?? process.env.NEXT_PUBLIC_EE_HOST_ID ?? 'unknown';

export default function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store, max-age=0');
  res.status(200).json({ hostId: resolveHostId() });
}
