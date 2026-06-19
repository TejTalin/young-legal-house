import Link from 'next/link';
import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';
import StaggerGrid from '@/components/StaggerGrid';

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
          {[
            { href: 'https://www.linkedin.com/company/young-legal-house/', icon: 'fa-linkedin',  type: 'fab' },
            { href: 'https://www.instagram.com/younglegalhouse/',          icon: 'fa-instagram', type: 'fab' },
            { href: 'https://linktr.ee/younglegalhouse',                   icon: 'fa-link',      type: 'fas' },
            { href: 'mailto:connect.ylh@gmail.com',                        icon: 'fa-envelope',  type: 'fas' },
          ].map(({ href, icon, type }) => (
            <a
              key={icon}
              href={href}
              className="soc-icon"
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              style={{
                color: 'var(--text-color)',
                transition: 'transform 0.22s ease, opacity 0.22s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px) scale(1.12)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; }}
            >
              <i className={`${type} ${icon}`}></i>
            </a>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
