const hostId =
  process.env.NEXT_PUBLIC_EE_HOST_ID ?? process.env.EE_HOST_ID ?? 'unknown';

const ServedBy = () => (
  <div>
    <a href="https://ratio1.ai" className="font-semibold mr-1">
      Ratio1
    </a>
    Edge Node proudly serving this site:
    <span className="font-semibold ml-1">{hostId}</span>
  </div>
);

export default ServedBy;
