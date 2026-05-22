'use client';

import Link from 'next/link';
import NetworkBackground from '@/components/NetworkBackground';

export default function EventsPage() {
  return (
    <>
      <NetworkBackground />
      <main className="page-spacing container" style={{ paddingTop: '24px' }}>
        <h1 className="section-title">Lex Noctis - Legal Trivia</h1>

        <div className="glass-card" style={{ marginBottom: '16px' }}>
          <h3 style={{ marginBottom: '12px' }}>Description of the Event</h3>
          <p style={{ color: 'var(--grey-text)', marginBottom: 0, lineHeight: '1.8' }}>
            A cinematic, story-driven criminal law trivia where each clue unfolds a case and each round tests your legal acumen.
            Participants decode clues, think under time pressure, and apply criminal law principles to advance.
          </p>
        </div>

        <div className="glass-card" style={{ marginBottom: '20px', padding: 0, overflow: 'hidden' }}>
          <img
            src="/lex-noctis-launch-poster.jpeg"
            alt="Lex Noctis poster"
            style={{
              width: '100%',
              display: 'block',
              objectFit: 'cover',
              aspectRatio: '3 / 4',
            }}
          />
        </div>

        <div
          className="glass-card"
          style={{
            marginBottom: '20px',
            minHeight: '320px',
            display: 'grid',
            placeItems: 'center',
            textAlign: 'center',
            background: 'linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))',
            border: '1px solid rgba(255,255,255,0.22)',
          }}
        >
          <div style={{ maxWidth: '640px' }}>
            <h3 style={{ marginBottom: '12px' }}>Event Brochure</h3>
            <p style={{ color: 'var(--grey-text)', marginBottom: '16px' }}>
              Read the complete official Lex Noctis brochure with all event details, structure, and rules.
            </p>
            <a href="/lex-noctis-brochure.pdf" target="_blank" rel="noreferrer" className="submit-btn" style={{ textDecoration: 'none', display: 'inline-block' }}>
              Open Brochure
            </a>
          </div>
        </div>

        <div className="glass-card" style={{ marginBottom: '16px' }}>
          <h3 style={{ marginBottom: '8px' }}>Who can Participate?</h3>
          <p style={{ color: 'var(--grey-text)', marginBottom: 0, lineHeight: '1.8' }}>
            Law students of all years, legal aspirants, and anyone who enjoys structured legal challenges and analytical problem-solving.
          </p>
        </div>

        <div className="glass-card" style={{ marginBottom: '16px' }}>
          <h3 style={{ marginBottom: '8px' }}>Flow of Event</h3>
          <p style={{ color: 'var(--grey-text)', lineHeight: '1.8', marginBottom: 0 }}>
            The journey begins with a cinematic case setup, then moves through clue-and-question rounds with strict timing,
            where every answer pushes participants closer to the final truth.
          </p>
        </div>

        <div className="glass-card" style={{ marginBottom: '16px' }}>
          <h3 style={{ marginBottom: '8px' }}>Participation Guidelines</h3>
          <p style={{ color: 'var(--grey-text)', lineHeight: '1.8', marginBottom: 0 }}>
            Register before the deadline, complete payment, and upload valid payment proof. Ensure your submitted contact details
            are accurate, as all updates will be shared through your registered email and WhatsApp number.
          </p>
        </div>

        <div className="glass-card" style={{ marginBottom: '16px' }}>
          <h3 style={{ marginBottom: '8px' }}>Evaluation Criteria</h3>
          <p style={{ color: 'var(--grey-text)', lineHeight: '1.8', marginBottom: 0 }}>
            Accuracy of legal responses, quality of reasoning, time discipline, and consistency across rounds.
          </p>
        </div>

        <div className="glass-card" style={{ marginBottom: '16px' }}>
          <h3 style={{ marginBottom: '8px' }}>Prize & Recognition</h3>
          <p style={{ color: 'var(--grey-text)', lineHeight: '1.8', marginBottom: 0 }}>
            Top performers rise, excel, and receive recognition from Young Legal House with winner credentials and official
            acknowledgment.
          </p>
        </div>

        <div className="glass-card" style={{ marginBottom: '16px' }}>
          <h3 style={{ marginBottom: '8px' }}>Registration Fee & Deadline</h3>
          <p style={{ color: 'var(--grey-text)', marginBottom: '8px' }}><strong>Fee:</strong> Rs. 150</p>
          <p style={{ color: 'var(--grey-text)', marginBottom: '8px' }}><strong>Deadline:</strong> 13 June 2026</p>
          <p style={{ color: 'var(--grey-text)', marginBottom: 0 }}><strong>Event Date:</strong> 15 June 2026</p>
        </div>

        <div className="glass-card" style={{ marginBottom: '20px' }}>
          <h3 style={{ marginBottom: '8px' }}>Important Note</h3>
          <p style={{ color: 'var(--grey-text)', lineHeight: '1.8', marginBottom: 0 }}>
            Keep your payment proof ready before registration. Incomplete entries or invalid screenshots may be rejected.
          </p>
        </div>

        <div className="glass-card" style={{ textAlign: 'center', marginBottom: '20px' }}>
          <h3 style={{ marginBottom: '8px' }}>Registration</h3>
          <p style={{ color: 'var(--grey-text)', marginBottom: '14px' }}>
            Complete your registration on the dedicated form page.
          </p>
          <Link href="/events/register" className="submit-btn" style={{ textDecoration: 'none', display: 'inline-block' }}>
            Register for Trivia
          </Link>
        </div>
      </main>
    </>
  );
}
