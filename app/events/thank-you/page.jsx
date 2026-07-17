import Link from 'next/link';

export const metadata = {
  title: 'Registration Confirmed | Young Legal House',
};

export default function EventThankYouPage({ searchParams }) {
  const participantName = searchParams?.name || 'Participant';

  return (
    <main>
      <div className="ylh-container" style={{ paddingTop: '72px', paddingBottom: '80px' }}>
        <div style={{ maxWidth: '620px', margin: '0 auto' }}>
          <div className="ylh-card" style={{ textAlign: 'center', padding: '54px 40px' }}>
            <i
              className="fas fa-check-circle"
              style={{ fontSize: '2.8rem', color: '#6ddf9f', marginBottom: '20px', display: 'block' }}
              aria-hidden="true"
            />
            <h1
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
                fontWeight: 700,
                marginBottom: '16px',
              }}
            >
              Registration Successful
            </h1>
            <p style={{ color: 'var(--grey-text)', lineHeight: 1.8, marginBottom: '12px', fontSize: '0.95rem' }}>
              Thank you, <strong>{participantName}</strong>. Your registration for Lex Noctis has been received.
              Event details will be shared soon on your email and WhatsApp.
            </p>
            <p style={{ color: 'var(--muted-text)', fontSize: '0.88rem', marginBottom: '28px' }}>
              For support, contact:{' '}
              <a href="mailto:connect.ylh@gmail.com" style={{ color: 'var(--text-color)', textDecoration: 'none', fontWeight: 600 }}>
                connect.ylh@gmail.com
              </a>
            </p>
            <Link href="/events" className="ylh-btn ylh-btn-outline">
              Back to Events
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
