import Link from 'next/link';

const diligenceLinks = [
  { href: '/pricing', label: 'Pricing' },
  { href: '/how-to-buy', label: 'How to Buy' },
  { href: '/proof', label: 'Proof' },
  { href: '/regulatory', label: 'Regulatory' },
  { href: '/trust', label: 'Trust Center' },
  { href: '/cloud-architecture', label: 'Cloud Architecture' }
];

const DiligenceLinksSection = ({
  headingId,
  heading = 'Buyer Diligence Paths',
  description = 'Use these routes to review commercial, proof, regulatory, trust, and architecture artifacts before onboarding.'
}) => (
  <section className="surface-card" aria-labelledby={headingId}>
    <div className="section-heading">
      <h2 id={headingId}>{heading}</h2>
      <p>{description}</p>
    </div>
    <div className="cta-links">
      {diligenceLinks.map((item) => (
        <Link key={item.href} href={item.href} className="button secondary">
          {item.label}
        </Link>
      ))}
    </div>
  </section>
);

export default DiligenceLinksSection;
