import Link from 'next/link';

const reviewLinks = [
  {
    href: '/pricing',
    label: 'Pricing',
    description: 'RFQ-led pricing and packaging structure.'
  },
  {
    href: '/how-to-buy',
    label: 'How to Buy',
    description: 'Qualification and onboarding workflow.'
  },
  {
    href: '/proof',
    label: 'Proof',
    description: 'Milestones, pilots, and evidence timeline.'
  },
  {
    href: '/regulatory',
    label: 'Regulatory',
    description: 'MDR scope and publication-status summary.'
  },
  {
    href: '/trust',
    label: 'Trust',
    description: 'Security, legal, and privacy baselines.'
  }
];

const DiligenceLinksSection = ({
  headingId,
  heading = 'Commercial and trust routes',
  description = 'Use these routes to review pricing, buying steps, proof, regulatory context, and trust material before onboarding.'
}) => (
  <section className="surface-card" aria-labelledby={headingId}>
    <div className="section-heading">
      <h2 id={headingId}>{heading}</h2>
      <p>{description}</p>
    </div>
    <div className="diligence-link-grid">
      {reviewLinks.map((item) => (
        <Link key={item.href} href={item.href} className="diligence-link-card">
          <span className="diligence-link-title">{item.label}</span>
          <span className="diligence-link-description">{item.description}</span>
        </Link>
      ))}
    </div>
  </section>
);

export default DiligenceLinksSection;
