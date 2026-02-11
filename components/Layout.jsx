import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ServedBy from './ServedByComponent';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services & Products', href: '/services' },
  { label: 'Your AI, your eSource', href: '/decentralized' },
  { label: 'Blog', href: '/blog' }
];

const Layout = ({ children, hostId = 'unknown' }) => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isLinkActive = (href) => {
    if (href === '/blog') {
      return router.pathname.startsWith('/blog');
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
          <div
            id="primary-navigation"
            className={`nav-links${isMenuOpen ? ' open' : ''}`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link${isLinkActive(link.href) ? ' active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
      <main>{children}</main>
      <div className="served-by">
        <ServedBy hostId={hostId} />
        <p>© {new Date().getFullYear()} SmartClover. v2.1
          <br />
        Creativity · Digitalization · Human-in-the-loop AI for Good
        </p>
      </div>
    </>
  );
};

export default Layout;
