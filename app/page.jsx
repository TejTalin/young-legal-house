import Link from 'next/link';
import NetworkBackground from '@/components/NetworkBackground';

export const metadata = {
  title: 'Young Legal House | Where Young Legal Minds Meet',
};

export default function HomePage() {
  return (
    <>
      <NetworkBackground />

      <main className="page-spacing container" style={{ paddingTop: '24px' }}>
        <section
          style={{
            textAlign: 'center',
            maxWidth: '880px',
            margin: '0 auto 24px',
            padding: '8px 6px',
          }}
        >
          <h1
            className="section-title"
            style={{
              marginBottom: '14px',
              lineHeight: 1.04,
              textWrap: 'balance',
            }}
          >
            Young Legal House
          </h1>
          <p
            style={{
              color: 'var(--grey-text)',
              fontSize: 'clamp(1rem, 2.4vw, 1.16rem)',
              lineHeight: 1.8,
              margin: '0 auto 18px',
              maxWidth: '760px',
              textWrap: 'pretty',
            }}
          >
            A community for law students and legal aspirants across India. Learn, compete, collaborate,
            and build practical legal excellence.
          </p>
        </section>

        <Link
          href="/events"
          style={{
            display: 'block',
            textDecoration: 'none',
            marginBottom: '26px',
          }}
          aria-label="Open Lex Noctis event page"
        >
          <div
            style={{
              border: '1px solid var(--glass-border)',
              borderRadius: '999px',
              overflow: 'hidden',
              background: 'var(--glass-bg)',
              position: 'relative',
              height: '48px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                whiteSpace: 'nowrap',
                display: 'inline-block',
                paddingLeft: '100%',
                animation: 'ylh-ticker 18s linear infinite',
                color: 'var(--text-color)',
                fontWeight: 700,
                letterSpacing: '0.02em',
                fontSize: '0.96rem',
              }}
            >
              LIVE EVENT: LEX NOCTIS (15 JUNE 2026) · CRIMINAL LAW TRIVIA · REGISTRATION OPEN · CLICK TO REGISTER NOW
            </div>
          </div>
        </Link>

        <section
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
            gap: '16px',
          }}
        >
          <div className="glass-card">
            <h3 style={{ marginBottom: '10px' }}>Curated Legal Insights</h3>
            <p style={{ color: 'var(--grey-text)', lineHeight: 1.75 }}>
              Student-focused legal articles across major practice areas.
            </p>
          </div>

          <div className="glass-card">
            <h3 style={{ marginBottom: '10px' }}>Competitions & Events</h3>
            <p style={{ color: 'var(--grey-text)', lineHeight: 1.75 }}>
              Practical legal competitions, workshops, and flagship events.
            </p>
          </div>

          <div className="glass-card">
            <h3 style={{ marginBottom: '10px' }}>Career Community</h3>
            <p style={{ color: 'var(--grey-text)', lineHeight: 1.75 }}>
              Build your profile with peers, mentors, and legal opportunities.
            </p>
          </div>
        </section>

        <style>{`
          @keyframes ylh-ticker {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-100%); }
          }
        `}</style>
      </main>
    </>
  );
}
