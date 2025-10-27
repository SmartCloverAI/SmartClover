type ServedByProps = {
  hostId: string;
};

const ServedBy = ({ hostId }: ServedByProps) => (
  <div>
    Your AI, your Data edge node proudly serving this site:
    <span className="font-semibold ml-1">{hostId}</span>
  </div>
);

export default ServedBy;
