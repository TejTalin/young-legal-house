'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import { FOOTER_LINKS } from '@/lib/site-data.js';

const SOCIALS = [
  { href: 'https://www.linkedin.com/company/young-legal-house/', icon: 'fa-linkedin',  type: 'fab' },
  { href: 'https://www.instagram.com/younglegalhouse/',          icon: 'fa-instagram', type: 'fab' },
  { href: 'https://www.youtube.com/@younglegalhouse',            icon: 'fa-youtube',   type: 'fab' },
  { href: 'mailto:connect.ylh@gmail.com',                        icon: 'fa-envelope',  type: 'fas' },
];

export default function Footer() {
  const pathname = usePathname();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  // Blogs already has its own "Stay Updated" widget in the sidebar,
  // so the footer version is only shown on the other pages (matches PDF).
  const showNewsletter = !pathname?.startsWith('/blogs');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <AnimatedSection variant="fadeUp" as="footer" className="ylh-footer">
      <div className="ylh-container">
        <div className={`ylh-footer-grid${showNewsletter ? '' : ' ylh-footer-grid--no-newsletter'}`}>
          {/* Brand column */}
          <div className="ylh-footer-brand">
            <Link href="/">
              <Image
                src="/logoylh.png"
                alt="YLH Logo"
                width={80}
                height={80}
                className="ylh-logo-img"
                style={{ marginBottom: '8px', transition: 'filter 0.3s ease' }}
              />
            </Link>
            <p>
              India&apos;s elite law student community, bridging legal theory and execution.
            </p>
            <div className="ylh-footer-socials">
              {SOCIALS.map(({ href, icon, type }) => (
                <motion.a
                  key={icon}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  whileHover={{ y: -2, scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <i className={`${type} ${icon}`}></i>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Stay Updated newsletter column — omitted on /blogs, which has its own sidebar version */}
          {showNewsletter && (
            <div className="ylh-footer-col">
              <h4>Stay Updated</h4>
              <p style={{ color: 'var(--muted-text)', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '12px' }}>
                Subscribe for the latest insights, events, and opportunities.
              </p>
              {subscribed ? (
                <p style={{ color: 'var(--grey-text)', fontSize: '0.85rem' }}>
                  ✅ Subscribed! Thanks for joining.
                </p>
              ) : (
                <form className="ylh-footer-newsletter" onSubmit={handleSubscribe}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    aria-label="Email address"
                    required
                  />
                  <button type="submit" className="ylh-btn ylh-btn-primary">
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          )}

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title} className="ylh-footer-col">
              <h4>{title}</h4>
              {links.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="ylh-footer-bottom">
          <p>&copy; 2026 Young Legal House. All rights reserved.</p>
        </div>
      </div>
    </AnimatedSection>
  );
}
