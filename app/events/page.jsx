'use client';

import Link from 'next/link';
import NetworkBackground from '@/components/NetworkBackground';
import EventBrochureTile from '@/components/EventBrochureTile';

export default function EventsPage() {
  return (
    <>
      <NetworkBackground />
      <main className="page-spacing container" style={{ paddingTop: '24px' }}>
        <h1 className="section-title">Lex Noctis - Legal Trivia</h1>
        <p className="form-subtitle" style={{ textAlign: 'center', marginBottom: '26px' }}>
          A cinematic, story-driven criminal law trivia where each clue unfolds a case and every round tests your legal acumen.
        </p>
        <EventBrochureTile />

        <div className="glass-card" style={{ marginBottom: '16px' }}>
          <h3 style={{ marginBottom: '12px' }}>Cinematic Criminal Law Trivia</h3>
          <p style={{ color: 'var(--grey-text)', marginBottom: 0, lineHeight: '1.8' }}>
            Lex Noctis is an immersive legal trivia built around a cinematic narrative. Participants move through timed rounds,
            decode clues, and apply criminal law principles to progress through the case journey.
          </p>
        </div>

        <div className="glass-card" style={{ marginBottom: '22px', padding: 0, overflow: 'hidden' }}>
          <img
            src="/lex-noctis-launch-poster.jpeg"
            alt="Lex Noctis poster"
            style={{
              borderRadius: '0',
              width: '100%',
              maxWidth: '100%',
              maxHeight: 'none',
              objectFit: 'cover',
              aspectRatio: '3 / 4',
              display: 'block',
            }}
          />
        </div>

        <div style={{ display: 'grid', gap: '16px', marginBottom: '24px' }}>
          <div className="glass-card">
            <h3 style={{ marginBottom: '8px' }}>Event Format</h3>
            <p style={{ color: 'var(--grey-text)', marginBottom: 0 }}>
              1. Story premiere and case setup<br />
              2. Clues and questions across rounds<br />
              3. Timed legal decision making<br />
              4. Criminal law focus on evidence, procedure, liability, and defenses
            </p>
          </div>
          <div className="glass-card">
            <h3 style={{ marginBottom: '8px' }}>Who can Participate?</h3>
            <p style={{ color: 'var(--grey-text)', marginBottom: 0, lineHeight: '1.8' }}>
              Law students of all years, legal aspirants, and anyone who enjoys structured legal challenges and analytical problem-solving.
            </p>
          </div>
        </div>

        <div className="glass-card" style={{ marginBottom: '24px' }}>
          <h3 style={{ marginBottom: '8px' }}>Participation Guidelines</h3>
          <p style={{ color: 'var(--grey-text)', lineHeight: '1.8', marginBottom: 0 }}>
            Register before deadline, complete payment, and upload valid payment proof. Ensure your contact details are correct
            because all event updates will be shared through your provided email and WhatsApp number.
          </p>
        </div>

        <div style={{ display: 'grid', gap: '16px', marginBottom: '24px' }}>
          <div className="glass-card">
            <h3 style={{ marginBottom: '8px' }}>Evaluation Criteria</h3>
            <p style={{ color: 'var(--grey-text)', lineHeight: '1.8', marginBottom: 0 }}>
              Accuracy of legal responses, quality of reasoning, time discipline, and consistency across rounds.
            </p>
          </div>
          <div className="glass-card">
            <h3 style={{ marginBottom: '8px' }}>Registration Fee & Deadline</h3>
            <p style={{ color: 'var(--grey-text)', marginBottom: '8px' }}><strong>Fee:</strong> Rs. 150</p>
            <p style={{ color: 'var(--grey-text)', marginBottom: '8px' }}><strong>Deadline:</strong> 13 June 2026</p>
            <p style={{ color: 'var(--grey-text)', marginBottom: 0 }}><strong>Event Date:</strong> 15 June 2026</p>
          </div>
        </div>

        <div style={{ display: 'grid', gap: '16px', marginBottom: '30px' }}>
          <div className="glass-card">
            <h3 style={{ marginBottom: '8px' }}>Prize & Recognition</h3>
            <p style={{ color: 'var(--grey-text)', lineHeight: '1.8', marginBottom: 0 }}>
              Top performers will receive recognition, leaderboard visibility, and event winner credentials from Young Legal House.
            </p>
          </div>
          <div className="glass-card">
            <h3 style={{ marginBottom: '8px' }}>Important Note</h3>
            <p style={{ color: 'var(--grey-text)', lineHeight: '1.8', marginBottom: 0 }}>
              Keep your payment proof ready before form submission. Incomplete registrations or invalid screenshots may be rejected.
            </p>
          </div>
          <div className="glass-card">
            <h3 style={{ marginBottom: '8px' }}>Point of Contact</h3>
            <p style={{ color: 'var(--grey-text)', marginBottom: 0 }}>
              For queries and support: <strong>connect.ylh@gmail.com</strong>
            </p>
          </div>
        </div>
        <div className="glass-card" style={{ textAlign: 'center', marginBottom: '20px' }}>
          <h3 style={{ marginBottom: '8px' }}>Ready to Join Lex Noctis?</h3>
          <p style={{ color: 'var(--grey-text)', marginBottom: '14px' }}>
            Complete your registration on our dedicated registration page.
          </p>
          <Link href="/events/register" className="submit-btn" style={{ textDecoration: 'none', display: 'inline-block' }}>
            Register for Trivia
          </Link>
        </div>
      </main>
    </>
  );
}
