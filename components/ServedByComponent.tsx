import { useEffect, useState } from 'react';

type ServedByProps = {
  hostId: string;
};

const normalizeHostId = (value: unknown) => {
  if (typeof value !== 'string') {
    return 'unknown';
  }

  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : 'unknown';
};

const ServedBy = ({ hostId }: ServedByProps) => {
  const [resolvedHostId, setResolvedHostId] = useState(() => normalizeHostId(hostId));

  useEffect(() => {
    let active = true;

    const fetchRuntimeHostId = async () => {
      try {
        const response = await fetch('/api/host-id', { cache: 'no-store' });
        if (!response.ok) {
          return;
        }

        const data = await response.json();
        const runtimeHostId = normalizeHostId(data?.hostId);
        if (active && runtimeHostId !== 'unknown') {
          setResolvedHostId(runtimeHostId);
        }
      } catch {
        // Keep initial fallback when runtime host id cannot be fetched.
      }
    };

    fetchRuntimeHostId();

    return () => {
      active = false;
    };
  }, []);

  return (
    <div>
      Edge node serving this site:
      <span className="font-semibold ml-1">{resolvedHostId}</span>
    </div>
  );
};

export default ServedBy;
