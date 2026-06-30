'use client';
import { useState } from 'react';

export default function JoinPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      setSubmitting(true);
      const res = await fetch('/api/join', { method: 'POST', body: formData });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Could not submit.');
      setSubmitted(true);
      form.reset();
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main>
      <section className="ylh-container ylh-form-grid" style={{ padding: '48px 0 64px' }}>
        <div>
          <p className="ylh-section-label">Join the Community</p>
          <h1 className="ylh-page-title">Shape the Future of Law</h1>
          <p className="ylh-page-sub">
            Whether you want to build your resume with hands-on experience or receive curated legal updates, Young Legal House is the place for you.
          </p>
          <div className="ylh-join-features">
            <div className="ylh-join-feature">
              <i className="fas fa-users" />
              <div>
                <h4>For Aspiring Legal Professionals</h4>
                <p>Join our core team and gain hands-on experience in legal research, events, and community building.</p>
              </div>
            </div>
            <div className="ylh-join-feature">
              <i className="fas fa-envelope" />
              <div>
                <h4>For Knowledge Seekers</h4>
                <p>Subscribe to specialised email updates covering legal news, events, and career opportunities.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="ylh-card">
          <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 24 }}>
            <i className="fas fa-envelope" style={{ fontSize: '1.2rem', color: 'var(--ylh-gray-500)' }} />
            <div>
              <h2 style={{ fontSize: '1.1rem', fontWeight: 600 }}>Specialised Email Updates</h2>
              <p style={{ fontSize: '0.82rem', color: 'var(--ylh-gray-500)' }}>Stay ahead with curated legal insights.</p>
            </div>
          </div>

          {submitted ? (
            <p style={{ color: 'var(--ylh-gray-300)' }}>Thank you for subscribing! We&apos;ll be in touch soon.</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="ylh-form-group">
                <label htmlFor="fullName">Full Name</label>
                <input id="fullName" name="fullName" type="text" placeholder="e.g., Jane Doe" required />
              </div>
              <div className="ylh-form-group">
                <label htmlFor="email">Email Address</label>
                <input id="email" name="email" type="email" placeholder="jane@example.com" required />
              </div>
              <div className="ylh-form-group">
                <label htmlFor="position">Areas of Interest (Optional)</label>
                <select id="position" name="position" defaultValue="">
                  <option value="">Select an area...</option>
                  <option value="legal_research">Legal Research</option>
                  <option value="events">Events &amp; Competitions</option>
                  <option value="content">Content &amp; Writing</option>
                  <option value="design">Design &amp; Media</option>
                </select>
              </div>
              {error && <p style={{ color: '#d9534f', marginBottom: 12 }}>{error}</p>}
              <button type="submit" className="ylh-btn ylh-btn-primary" style={{ width: '100%' }} disabled={submitting}>
                {submitting ? 'Submitting...' : 'Subscribe Now'}
              </button>
              <p style={{ fontSize: '0.75rem', color: 'var(--ylh-gray-500)', marginTop: 16, textAlign: 'center' }}>
                <i className="fas fa-lock" style={{ marginRight: 6 }} />
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
