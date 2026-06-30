'use client';
import { useState } from 'react';

export default function ContactPage() {
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
      const res = await fetch('/api/contact', { method: 'POST', body: formData });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Could not send your message.');
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
      <section className="ylh-container" style={{ textAlign: 'center', padding: '48px 0 24px' }}>
        <h1 className="ylh-page-title">Get in Touch</h1>
        <p className="ylh-page-sub" style={{ margin: '0 auto' }}>
          Have a question, feedback, or want to collaborate? Fill out the form below or reach out through our official channels.
        </p>
      </section>

      <section className="ylh-container ylh-form-grid" style={{ paddingBottom: 64 }}>
        <div className="ylh-card">
          <h2 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: 24 }}>Send a Message</h2>
          {submitted ? (
            <p style={{ color: 'var(--ylh-gray-300)' }}>Message sent! We will respond to your email shortly.</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="ylh-form-group">
                <label htmlFor="fullName">Full Name</label>
                <input id="fullName" name="fullName" type="text" placeholder="Enter your full name" required />
              </div>
              <div className="ylh-form-group">
                <label htmlFor="email">Email Address</label>
                <input id="email" name="email" type="email" placeholder="Enter your email" required />
              </div>
              <div className="ylh-form-group">
                <label htmlFor="subject">Subject</label>
                <select id="subject" name="subject" required defaultValue="">
                  <option value="" disabled>What is this regarding?</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Partnerships & Collaborations">Partnerships &amp; Collaborations</option>
                  <option value="Events & Workshops">Events &amp; Workshops</option>
                  <option value="Website Feedback">Website Feedback</option>
                </select>
              </div>
              <div className="ylh-form-group">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" name="message" rows={5} placeholder="Type your message here..." required />
              </div>
              {error && <p style={{ color: '#d9534f', marginBottom: 12 }}>{error}</p>}
              <button type="submit" className="ylh-btn ylh-btn-primary" disabled={submitting}>
                {submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>

        <div className="ylh-card">
          <h2 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: 24 }}>Contact Details</h2>
          <div style={{ marginBottom: 24 }}>
            <div style={{ display: 'flex', gap: 12, marginBottom: 20 }}>
              <i className="fas fa-envelope" style={{ color: 'var(--ylh-gray-500)', marginTop: 4 }} />
              <div>
                <span style={{ display: 'block', fontSize: '0.82rem', color: 'var(--ylh-gray-500)' }}>Official Email</span>
                <a href="mailto:connect.ylh@gmail.com" style={{ fontWeight: 600, textDecoration: 'none', color: 'inherit' }}>
                  connect.ylh@gmail.com
                </a>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 12 }}>
              <i className="fas fa-map-marker-alt" style={{ color: 'var(--ylh-gray-500)', marginTop: 4 }} />
              <div>
                <span style={{ display: 'block', fontSize: '0.82rem', color: 'var(--ylh-gray-500)' }}>Headquarters</span>
                <span style={{ fontWeight: 600 }}>Chennai, Tamil Nadu, India</span>
              </div>
            </div>
          </div>
          <div className="ylh-footer-socials">
            <a href="https://www.linkedin.com/company/young-legal-house/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin" /></a>
            <a href="https://www.instagram.com/younglegalhouse/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram" /></a>
            <a href="https://linktr.ee/younglegalhouse" target="_blank" rel="noopener noreferrer"><i className="fas fa-link" /></a>
          </div>
        </div>
      </section>
    </main>
  );
}
