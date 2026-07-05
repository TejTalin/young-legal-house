'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';

const SOCIALS = [
  { href: 'https://www.linkedin.com/company/young-legal-house/', icon: 'fa-linkedin',  type: 'fab' },
  { href: 'https://www.instagram.com/younglegalhouse/',          icon: 'fa-instagram', type: 'fab' },
  { href: 'https://linktr.ee/younglegalhouse',                   icon: 'fa-link',      type: 'fas' },
  { href: 'mailto:connect.ylh@gmail.com',                        icon: 'fa-envelope',  type: 'fas' },
];

export default function Footer() {
  return (
    <AnimatedSection variant="fadeUp" as="footer">
      <div className="footer-top">
        <div className="footer-left">
          <Image src="/logoylh.png" alt="YLH Logo" width={92} height={92} className="footer-logo" />
          <div className="footer-links">
            <Link href="/terms">Terms of Service</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/cookies">Cookie Policy</Link>
            <Link href="/about">About Us</Link>
          </div>
        </div>

        <div className="footer-center">
          <p className="copyright">&copy; 2026 Young Legal House</p>
        </div>

        <div className="footer-socials footer-right">
          {SOCIALS.map(({ href, icon, type }) => (
            <motion.a
              key={icon}
              href={href}
              className="soc-icon"
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              style={{ color: 'var(--text-color)' }}
              whileHover={{ y: -3, scale: 1.12 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.22 }}
            >
              <i className={`${type} ${icon}`}></i>
            </motion.a>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
