'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import NetworkBackground from '@/components/NetworkBackground';
import EventBrochureTile from '@/components/EventBrochureTile';

const YEAR_OPTIONS = ['1st Year', '2nd Year', '3rd Year', '4th Year', '5th Year', 'LLM', 'Other'];

export default function EventsPage() {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [showPaymentPopup, setShowPaymentPopup] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    const form = event.currentTarget;
    const formData = new FormData(form);
    const file = formData.get('paymentScreenshot');

    if (!file || file.size === 0) {
      setError('Please attach your payment screenshot.');
      return;
    }

    try {
      setSubmitting(true);
      const res = await fetch('/api/register', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();

      if (!res.ok || !data.success) {
        const extra =
          data?.details?.airtableErr || data?.details?.googleErr
            ? ` (${data?.details?.airtableErr || ''}${data?.details?.airtableErr && data?.details?.googleErr ? ' | ' : ''}${data?.details?.googleErr || ''})`
            : '';
        throw new Error((data.error || 'Could not complete registration.') + extra);
      }

      const name = encodeURIComponent(formData.get('fullName') || 'Participant');
      router.push(`/events/thank-you?name=${name}`);
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

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

        <div className="glass-card" style={{ maxWidth: '760px', margin: '0 auto', width: '100%' }}>
          <h2 style={{ marginBottom: '6px' }}>Register for Lex Noctis</h2>
          <p style={{ color: 'var(--grey-text)', marginBottom: '20px' }}>
            Fill all compulsory fields. You will receive an email confirmation after successful registration.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Full Name (compulsory)</label>
              <input name="fullName" type="text" className="form-input" required />
            </div>

            <div className="form-group">
              <label className="form-label">Age (compulsory)</label>
              <input name="age" type="number" min="15" max="80" className="form-input" required />
            </div>

            <div className="form-group">
              <label className="form-label">Personal Email ID (compulsory)</label>
              <input name="personalEmail" type="email" className="form-input" required />
            </div>

            <div className="form-group">
              <label className="form-label">Name of Institution (compulsory)</label>
              <input name="institution" type="text" className="form-input" required />
            </div>

            <div className="form-group">
              <label className="form-label">Year of Law / Study (compulsory)</label>
              <select name="yearOfStudy" className="form-select" required defaultValue="">
                <option value="" disabled>Select year</option>
                {YEAR_OPTIONS.map((year) => (
                  <option value={year} key={year}>{year}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Institutional Email ID (optional)</label>
              <input name="institutionEmail" type="email" className="form-input" />
            </div>

            <div className="form-group">
              <label className="form-label">WhatsApp Mobile Number (compulsory)</label>
              <input name="phone" type="tel" className="form-input" required />
            </div>

            <div className="form-group" style={{ marginBottom: '10px' }}>
              <button
                type="button"
                className="glass-pill"
                style={{ border: 0, cursor: 'pointer' }}
                onClick={() => setShowPaymentPopup(true)}
              >
                View QR Code / UPI Details for Payment
              </button>
            </div>

            <div className="form-group">
              <label className="form-label">Payment QR Screenshot (compulsory)</label>
              <input name="paymentScreenshot" type="file" accept="image/*,.pdf" className="form-input" required />
              <p className="word-count-indicator" style={{ marginTop: '8px' }}>Accepted: image/PDF up to 8MB</p>
            </div>

            {error ? <p style={{ color: '#ff6b6b', marginBottom: '12px' }}>{error}</p> : null}

            <button type="submit" className="submit-btn" disabled={submitting}>
              {submitting ? 'Submitting...' : 'Submit Registration'}
            </button>
          </form>
        </div>

        {showPaymentPopup ? (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,0.72)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 2500,
              padding: '16px',
            }}
            onClick={() => setShowPaymentPopup(false)}
          >
            <div
              className="glass-card"
              style={{ width: 'min(94vw, 420px)', textAlign: 'center', position: 'relative' }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setShowPaymentPopup(false)}
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '8px',
                  border: 0,
                  background: 'transparent',
                  color: 'var(--text-color)',
                  fontSize: '1.3rem',
                  cursor: 'pointer',
                }}
              >
                ×
              </button>
              <h3 style={{ marginBottom: '10px' }}>Payment QR & UPI</h3>
              <img src="/ylh-payment-qr.jpeg" alt="YLH UPI QR code" style={{ borderRadius: '10px', width: '100%', maxWidth: '300px', margin: '0 auto 12px' }} />
              <p style={{ color: 'var(--grey-text)', marginBottom: '6px' }}><strong>Amount:</strong> Rs. 150</p>
              <p style={{ color: 'var(--grey-text)', marginBottom: 0 }}><strong>UPI ID:</strong> achyutanarayan03-1@okicici</p>
            </div>
          </div>
        ) : null}
      </main>
    </>
  );
}
