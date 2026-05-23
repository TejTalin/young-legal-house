import Link from 'next/link';
import NetworkBackground from '@/components/NetworkBackground';

export const metadata = {
  title: 'Young Legal House | Where Young Legal Minds Meet',
};

export default function HomePage() {
  return (
    <>
      <NetworkBackground />

      <main className="page-spacing container" style={{ paddingBottom: '100px' }}>

        {/* ── HERO ── */}
        <section style={{
          textAlign: 'center',
          maxWidth: '820px',
          margin: '24px auto 52px',
        }}>
          <p style={{
            fontSize: '0.78rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--grey-text)',
            marginBottom: '18px',
          }}>
            India&apos;s Legal Student Community
          </p>

          <h1 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(2.6rem, 6vw, 5rem)',
            fontWeight: 700,
            lineHeight: 1.04,
            marginBottom: '20px',
            color: 'var(--text-color)',
          }}>
            Young Legal House
          </h1>

          <p style={{
            color: 'var(--grey-text)',
            fontSize: 'clamp(0.97rem, 2vw, 1.1rem)',
            lineHeight: 1.85,
            maxWidth: '680px',
            margin: '0 auto 32px',
          }}>
            A community bridging the gap between legal theory and execution.
            We connect aspiring legal professionals with knowledge, competitions,
            events, and a network that takes law seriously.
          </p>

          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/join" style={{
              display: 'inline-block',
              padding: '12px 30px',
              borderRadius: '999px',
              background: 'var(--text-color)',
              color: 'var(--bg-color)',
              fontWeight: 700,
              fontSize: '0.93rem',
              textDecoration: 'none',
              border: '1px solid var(--text-color)',
            }}>
              Join the Community
            </Link>
            <Link href="/blogs" style={{
              display: 'inline-block',
              padding: '12px 30px',
              borderRadius: '999px',
              background: 'transparent',
              color: 'var(--text-color)',
              fontWeight: 700,
              fontSize: '0.93rem',
              textDecoration: 'none',
              border: '1px solid var(--glass-border)',
              backdropFilter: 'blur(12px)',
            }}>
              Read Legal Insights
            </Link>
          </div>
        </section>

        {/* ── EVENT TICKER ── */}
        <Link href="/events" style={{ display: 'block', textDecoration: 'none', maxWidth: '820px', margin: '0 auto 56px' }}>
          <div style={{
            border: '1px solid var(--glass-border)',
            borderRadius: '999px',
            overflow: 'hidden',
            background: 'var(--glass-bg)',
            height: '44px',
            display: 'flex',
            alignItems: 'center',
            backdropFilter: 'blur(12px)',
          }}>
            <div style={{
              whiteSpace: 'nowrap',
              display: 'inline-block',
              paddingLeft: '100%',
              animation: 'ylh-ticker 20s linear infinite',
              color: 'var(--text-color)',
              fontWeight: 600,
              fontSize: '0.83rem',
              letterSpacing: '0.04em',
            }}>
              🔴&nbsp; FLAGSHIP EVENT — LEX NOCTIS &nbsp;·&nbsp; CRIMINAL LAW TRIVIA &nbsp;·&nbsp; 15 JUNE 2026 &nbsp;·&nbsp; REGISTRATIONS NOW OPEN &nbsp;·&nbsp; CLICK TO REGISTER
            </div>
          </div>
        </Link>

        {/* ── WHAT WE OFFER ── */}
        <section style={{ maxWidth: '960px', margin: '0 auto 56px' }}>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            fontWeight: 700,
            textAlign: 'center',
            marginBottom: '8px',
            color: 'var(--text-color)',
          }}>
            What We Offer
          </h2>
          <p style={{
            textAlign: 'center',
            color: 'var(--grey-text)',
            fontSize: '0.9rem',
            marginBottom: '28px',
          }}>
            Everything a law student needs — in one place
          </p>

          <div className="cards-grid">
            {[
              { icon: 'fa-newspaper', title: 'Curated Legal Insights', text: 'Peer-written articles covering Corporate Law, Tax, TMT, Litigation, ADR, IPR, and more — written by students, for students.' },
              { icon: 'fa-gavel', title: 'Competitions & Events', text: 'National moot courts, trivia challenges, workshops, and flagship events designed to sharpen your legal skills.' },
              { icon: 'fa-users', title: 'Expert Community', text: 'Connect with peers, researchers, and practitioners across India. A serious network built for the next generation of lawyers.' },
            ].map(item => (
              <div key={item.title} className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <i className={`fas ${item.icon}`} style={{ fontSize: '1.4rem', color: 'var(--grey-text)' }}></i>
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: 'var(--text-color)',
                }}>
                  {item.title}
                </h3>
                <p style={{ color: 'var(--grey-text)', fontSize: '0.91rem', lineHeight: 1.75 }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── PRACTICE AREAS ── */}
        <section style={{ maxWidth: '820px', margin: '0 auto 56px', textAlign: 'center' }}>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            fontWeight: 700,
            marginBottom: '8px',
            color: 'var(--text-color)',
          }}>
            Practice Areas
          </h2>
          <p style={{ color: 'var(--grey-text)', fontSize: '0.9rem', marginBottom: '22px' }}>
            Legal insights across every major domain
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
            {['Corporate Law', 'Tax', 'TMT', 'Litigation', 'M&A', 'ADR', 'IPR', 'Constitutional', 'Criminal Law', 'International Law'].map(area => (
              <Link key={area} href="/blogs" style={{
                display: 'inline-block',
                padding: '7px 16px',
                border: '1px solid var(--glass-border)',
                borderRadius: '999px',
                fontSize: '0.83rem',
                fontWeight: 600,
                color: 'var(--grey-text)',
                background: 'var(--glass-bg)',
                textDecoration: 'none',
              }}>
                {area}
              </Link>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
          <div className="glass-card" style={{ padding: '48px 32px' }}>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: 700,
              marginBottom: '12px',
              color: 'var(--text-color)',
            }}>
              Be Part of the Movement
            </h2>
            <p style={{
              color: 'var(--grey-text)',
              lineHeight: 1.8,
              marginBottom: '28px',
              fontSize: '0.93rem',
              maxWidth: '540px',
              margin: '0 auto 28px',
            }}>
              Join law students across India building their careers through YLH.
              Stay informed, stay competitive, stay connected.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/join" style={{
                display: 'inline-block',
                padding: '12px 30px',
                borderRadius: '999px',
                background: 'var(--text-color)',
                color: 'var(--bg-color)',
                fontWeight: 700,
                fontSize: '0.93rem',
                textDecoration: 'none',
                border: '1px solid var(--text-color)',
              }}>
                Join the Community
              </Link>
              <Link href="/contact" style={{
                display: 'inline-block',
                padding: '12px 30px',
                borderRadius: '999px',
                background: 'transparent',
                color: 'var(--text-color)',
                fontWeight: 700,
                fontSize: '0.93rem',
                textDecoration: 'none',
                border: '1px solid var(--glass-border)',
                backdropFilter: 'blur(12px)',
              }}>
                Get in Touch
              </Link>
            </div>
          </div>
        </section>

      </main>

      <style>{`
        @keyframes ylh-ticker {
          0%   { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </>
  );
}
