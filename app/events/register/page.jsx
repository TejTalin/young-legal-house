import Link from 'next/link';

export const metadata = {
  title: 'Event Registration | Young Legal House',
};

export default function EventRegisterPage() {
  return (
    <main>
      <div className="ylh-container" style={{ paddingTop: '72px', paddingBottom: '80px' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <div className="ylh-card" style={{ textAlign: 'center', padding: '54px 40px' }}>
            <i
              className="fas fa-calendar-check"
              style={{ fontSize: '2.5rem', color: 'var(--muted-text)', marginBottom: '20px', display: 'block' }}
              aria-hidden="true"
            />
            <p
              style={{
                fontSize: '0.72rem',
                fontWeight: 600,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'var(--muted-text)',
                marginBottom: '12px',
              }}
            >
              Lex Noctis
            </p>
            <h1
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
                fontWeight: 700,
                marginBottom: '16px',
              }}
            >
              Registration Closed
            </h1>
            <p style={{ color: 'var(--grey-text)', lineHeight: 1.8, maxWidth: '480px', margin: '0 auto 28px', fontSize: '0.95rem' }}>
              Registrations for Lex Noctis closed on 13 June 2026, and the event has now concluded.
              You can still view the event archive, brochure, poster, and recap materials.
            </p>
            <Link href="/events" className="ylh-btn ylh-btn-primary">
              View Past Event
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
