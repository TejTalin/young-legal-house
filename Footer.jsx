import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer>
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
          <a href="https://www.linkedin.com/company/young-legal-house/" className="soc-icon" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-color)' }}>
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/younglegalhouse/" className="soc-icon" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-color)' }}>
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://linktr.ee/younglegalhouse" className="soc-icon" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-color)' }}>
            <i className="fas fa-link"></i>
          </a>
          <a href="mailto:connect.ylh@gmail.com" className="soc-icon email-icon" style={{ color: 'var(--text-color)' }}>
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
