import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ConsentManager from './ConsentManager';
import ServedBy from './ServedByComponent';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'CerviGuard', href: '/cerviguard' },
  { label: 'Products & More', href: '/products' },
  { label: 'Contact', href: '/contact' },
  { label: 'Blog', href: '/blog' }
];

const footerQuickLinks = [
  { label: 'Products & More', href: '/products' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'How to Buy', href: '/how-to-buy' },
  { label: 'Proof', href: '/proof' },
  { label: 'Regulatory', href: '/regulatory' },
  { label: 'Trust', href: '/trust' }
];

const Layout = ({ children, hostId = 'unknown' }) => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const productsAndMoreRoutes = ['/products', '/pricing', '/how-to-buy', '/proof', '/regulatory', '/trust', '/cloud-architecture'];

  const isLinkActive = (href) => {
    if (href === '/blog') {
      return router.pathname.startsWith(href);
    }

    if (href === '/products') {
      return productsAndMoreRoutes.some((route) => router.pathname === route || router.pathname.startsWith(`${route}/`));
    }

    return router.pathname === href;
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [router.pathname]);

  return (
    <>
      <nav>
        <div className="nav-inner">
          <div className="nav-header">
            <Link href="/" className="nav-brand" aria-label="SmartClover home">
              <Image src="/smartclover_logo.jpg" alt="SmartClover logo" width={48} height={48} className="nav-logo" />
              <span className="nav-brand-text">SmartClover</span>
            </Link>
            <button
              type="button"
              className="nav-toggle"
              aria-expanded={isMenuOpen}
              aria-controls="primary-navigation"
              aria-label="Toggle navigation menu"
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              <span className="nav-toggle-icon" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
              <span className="nav-toggle-text">{isMenuOpen ? 'Close' : 'Menu'}</span>
            </button>
          </div>
          <div id="primary-navigation" className={`nav-links${isMenuOpen ? ' open' : ''}`}>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={`nav-link${isLinkActive(link.href) ? ' active' : ''}`}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
      <main>{children}</main>
      <div className="served-by">
        <div className="footer-quick-links" aria-label="Quick diligence links">
          {footerQuickLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
        <ServedBy hostId={hostId} />
        <p>
          © {new Date().getFullYear()} SmartClover. v2.9
          <br />
          Creativity · Digitalization · Responsible AI for Good
        </p>
      </div>
      <ConsentManager />
    </>
  );
};

export default Layout;
