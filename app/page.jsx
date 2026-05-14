import Link from 'next/link';
import NetworkBackground from '@/components/NetworkBackground';

export const metadata = {
  title: 'Young Legal House | Where Young Legal Minds Meet',
};

export default function HomePage() {
  return (
    <>
      <NetworkBackground />

      <main className="page-spacing container">
        {/* Hero */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '60px auto 60px' }}>
          <h1 className="section-title">Welcome to Young Legal House</h1>
          <p style={{ color: 'var(--grey-text)', fontSize: '1.15rem', lineHeight: '1.8', marginBottom: '36px' }}>
            A dedicated initiative empowering law students across India. We bridge the gap between
            legal theory and execution — connecting aspiring professionals with internships,
            training, competitions, and community.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/join" className="glass-pill" style={{ background: 'var(--text-color)', color: 'var(--bg-color)', fontWeight: 800 }}>
              Join the Community
            </Link>
            <Link href="/blogs" style={{ color: 'var(--text-color)', fontWeight: 700, textDecoration: 'underline', textUnderlineOffset: '6px', display: 'flex', alignItems: 'center' }}>
              Read Latest Insights
            </Link>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="cards-grid">
          <div className="glass-card">
            <i className="fas fa-gavel" style={{ fontSize: '2rem', marginBottom: '16px', color: 'var(--grey-text)' }}></i>
            <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.5rem', marginBottom: '12px' }}>
              Curated Legal Insights
            </h3>
            <p style={{ color: 'var(--grey-text)', lineHeight: '1.7' }}>
              Peer-written articles spanning Corporate Law, Tax, TMT, Litigation, ADR, IPR, and more —
              curated for students, by students.
            </p>
          </div>

          <div className="glass-card">
            <i className="fas fa-calendar-alt" style={{ fontSize: '2rem', marginBottom: '16px', color: 'var(--grey-text)' }}></i>
            <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.5rem', marginBottom: '12px' }}>
              Exclusive Events
            </h3>
            <p style={{ color: 'var(--grey-text)', lineHeight: '1.7' }}>
              National moot courts, workshops, and webinars curated to sharpen your legal skills
              and expand your professional network.
            </p>
          </div>

          <div className="glass-card">
            <i className="fas fa-users" style={{ fontSize: '2rem', marginBottom: '16px', color: 'var(--grey-text)' }}></i>
            <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.5rem', marginBottom: '12px' }}>
              Expert Community
            </h3>
            <p style={{ color: 'var(--grey-text)', lineHeight: '1.7' }}>
              Connect with founders, researchers, and practitioners. A vibrant, informed,
              and collaborative legal community built for the next generation.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
