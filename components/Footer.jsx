'use client';
import Link from 'next/link';
import { FOOTER_LINKS } from '@/lib/site-data';

const SOCIALS = [
  { href: 'https://www.linkedin.com/company/young-legal-house/', icon: 'fa-linkedin', type: 'fab' },
  { href: 'https://www.instagram.com/younglegalhouse/', icon: 'fa-instagram', type: 'fab' },
  { href: 'https://twitter.com/younglegalhouse', icon: 'fa-x-twitter', type: 'fab' },
  { href: 'https://www.youtube.com/@younglegalhouse', icon: 'fa-youtube', type: 'fab' },
  { href: 'mailto:connect.ylh@gmail.com', icon: 'fa-envelope', type: 'fas' },
];

export default function Footer() {
  return (
    <footer className="ylh-footer">
      <div className="ylh-container">
        <div className="ylh-footer-grid">
          <div className="ylh-footer-brand">
            <Link href="/" className="ylh-logo-text">
              <span className="logo-main">YLH</span>
              <span className="logo-sub">Young Legal House</span>
            </Link>
            <p>India&apos;s elite law student community, bridging legal theory and execution.</p>
            <div className="ylh-footer-socials">
              {SOCIALS.map(({ href, icon, type }) => (
                <a
                  key={icon}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={icon}
                >
                  <i className={`${type} ${icon}`} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title} className="ylh-footer-col">
              <h4>{title}</h4>
              {links.map(({ href, label }) => (
                <Link key={label} href={href}>{label}</Link>
              ))}
            </div>
          ))}
        </div>

        <div className="ylh-footer-bottom">
          &copy; 2026 Young Legal House. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
