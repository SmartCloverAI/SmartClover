import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ServedBy from './ServedByComponent';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services & Products', href: '/services' },
  { label: 'Why Decentralized?', href: '/decentralized' },
  { label: 'Blog', href: '/blog' }
];

const Layout = ({ children }) => {
  const router = useRouter();

  const isLinkActive = (href) => {
    if (href === '/blog') {
      return router.pathname.startsWith('/blog');
    }

    return router.pathname === href;
  };

  return (
    <>
      <nav>
        <div className="nav-inner">
          <Link href="/" className="nav-brand" aria-label="SmartClover home">
            <Image src="/smartclover_logo.jpg" alt="SmartClover logo" width={48} height={48} className="nav-logo" />
            <span className="nav-brand-text">SmartClover</span>
          </Link>
          <div className="nav-links">
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
        <ServedBy />
        <p>© {new Date().getFullYear()} SmartClover. v1.0. Creativity · Digitalization · Human-in-the-loop AI for Good</p>
      </div>
    </>
  );
};

export default Layout;
