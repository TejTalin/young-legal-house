'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import NetworkBackground from '@/components/NetworkBackground';

const YEAR_OPTIONS = ['1st Year', '2nd Year', '3rd Year', '4th Year', '5th Year', 'LLM', 'Other'];

export default function EventsPage() {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
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
        throw new Error(data.error || 'Could not complete registration.');
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
      <main className="page-spacing container">
        <h1 className="section-title">Lex Noctis - Legal Trivia</h1>
        <p className="form-subtitle" style={{ textAlign: 'center' }}>
          Criminal law themed trivia event by Young Legal House. Registration deadline: <strong>13 June 2026</strong>. Event date: <strong>15 June 2026</strong>.
        </p>

        <div className="cards-grid" style={{ marginBottom: '32px' }}>
          <div className="glass-card">
            <h3 style={{ marginBottom: '12px' }}>Event Poster</h3>
            <img src="/lex-noctis-launch-poster.jpeg" alt="Lex Noctis poster" style={{ borderRadius: '10px' }} />
          </div>

          <div className="glass-card">
            <h3 style={{ marginBottom: '12px' }}>Payment Details</h3>
            <p style={{ color: 'var(--grey-text)', marginBottom: '8px' }}>
              Registration amount: <strong>Rs. 150</strong>
            </p>
            <p style={{ color: 'var(--grey-text)', marginBottom: '14px' }}>
              UPI ID: <strong>achyutanarayan03-1@okicici</strong>
            </p>
            <img src="/ylh-payment-qr.jpeg" alt="YLH UPI QR" style={{ borderRadius: '10px', maxWidth: '320px', width: '100%' }} />
            <p style={{ color: 'var(--muted-text)', marginTop: '10px', fontSize: '0.9rem' }}>
              Please make payment first, then upload the screenshot in the form below.
            </p>
          </div>
        </div>

        <div className="glass-card" style={{ marginBottom: '30px' }}>
          <h2 style={{ marginBottom: '8px' }}>Brochure & Event Information</h2>
          <p style={{ color: 'var(--grey-text)', marginBottom: '14px' }}>
            Download the full brochure for rules, rounds, judging details, and participation terms.
          </p>
          <a href="/lex-noctis-brochure.pdf" target="_blank" rel="noopener noreferrer" className="glass-pill" style={{ display: 'inline-block', textDecoration: 'none' }}>
            Open Brochure (PDF)
          </a>
        </div>

        <div className="glass-card" style={{ maxWidth: '760px', margin: '0 auto' }}>
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
      </main>
    </>
  );
}
