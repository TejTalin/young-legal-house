'use client';
import { useState } from 'react';
import NetworkBackground from '@/components/NetworkBackground';

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
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });

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
    <>
      <NetworkBackground />
      <main className="page-spacing container">
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px' }}>
          <h1 className="section-title">Get in Touch</h1>
          <p style={{ color: 'var(--grey-text)', fontSize: '1.1rem', lineHeight: '1.8' }}>
            Have a question, feedback, or want to collaborate with Young Legal House? Fill out the
            form below or reach out to us directly through our official channels.
            We would love to hear from you.
          </p>
        </div>

        <div className="join-grid">
          <div className="glass-card">
            <h2 style={{ marginBottom: '25px', borderBottom: '1px solid var(--glass-border)', paddingBottom: '10px' }}>
              Send a Message
            </h2>

            {submitted ? (
              <p style={{ color: 'var(--grey-text)', lineHeight: '1.8' }}>
                ✅ Message sent! We will respond to your email shortly.
              </p>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input name="fullName" type="text" className="form-input" placeholder="Enter your full name" required />
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input name="email" type="email" className="form-input" placeholder="Enter your email" required />
                </div>

                <div className="form-group">
                  <label className="form-label">Subject</label>
                  <select name="subject" className="form-select" required defaultValue="">
                    <option value="" disabled>What is this regarding?</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Partnerships & Collaborations">Partnerships & Collaborations</option>
                    <option value="Events & Workshops">Events & Workshops</option>
                    <option value="Website Feedback">Website Feedback</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Your Message</label>
                  <textarea name="message" className="form-textarea" rows={5} placeholder="Type your message here..." required />
                </div>

                {error ? (
                  <p style={{ color: '#d9534f', marginBottom: '12px' }}>{error}</p>
                ) : null}

                <button type="submit" className="submit-btn" disabled={submitting}>
                  {submitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

          <div>
            <div className="glass-card contact-info-card">
              <h2 style={{ marginBottom: '30px' }}>Contact Details</h2>

              <div className="contact-detail-item">
                <i className="fas fa-envelope" style={{ color: 'var(--grey-text)', marginTop: '2px' }}></i>
                <div>
                  <span style={{ display: 'block', fontSize: '0.9rem', color: 'var(--grey-text)' }}>Official Email</span>
                  <a href="mailto:connect.ylh@gmail.com" style={{ color: 'var(--text-color)', textDecoration: 'none', fontWeight: 700 }}>
                    connect.ylh@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-detail-item">
                <i className="fas fa-map-marker-alt" style={{ color: 'var(--grey-text)', marginTop: '2px' }}></i>
                <div>
                  <span style={{ display: 'block', fontSize: '0.9rem', color: 'var(--grey-text)' }}>Headquarters</span>
                  <span style={{ fontWeight: 700 }}>New Delhi, India</span>
                </div>
              </div>

              <div className="contact-socials">
                <a href="https://www.linkedin.com/company/young-legal-house/" className="contact-social-btn" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-color)' }}>
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://www.instagram.com/younglegalhouse/" className="contact-social-btn" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-color)' }}>
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://linktr.ee/younglegalhouse" className="contact-social-btn" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-color)' }}>
                  <i className="fas fa-link"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
