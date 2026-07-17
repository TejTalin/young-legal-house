'use client';
import { useState } from 'react';
import PageWrapper from '@/components/PageWrapper';
import AnimatedSection from '@/components/AnimatedSection';
import WordReveal from '@/components/WordReveal';

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
      <PageWrapper>
        {/* Icon watermark background */}
        <div className="ylh-bg-pattern" aria-hidden="true" />

        {/* ── PAGE HEADER (centered, on page bg) ── */}
        <AnimatedSection variant="fadeUp" className="ylh-page-centered-header">
          <div className="ylh-container">
            <WordReveal
              text="Get in Touch"
              as="h1"
              className="ylh-page-title"
            />
            <p className="ylh-page-sub">
              Have a question, feedback, or want to collaborate with Young Legal House? Fill out the
              form below or reach out to us directly through our official channels.
              We would love to hear from you.
            </p>
          </div>
        </AnimatedSection>

        <div className="ylh-container">
          <AnimatedSection variant="fadeUp" className="ylh-form-grid">
            {/* ── SEND A MESSAGE ── */}
            <div className="ylh-card">
              <h2 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '20px', borderBottom: '1px solid var(--glass-border)', paddingBottom: '12px' }}>
                Send a Message
              </h2>

              {submitted ? (
                <p style={{ color: 'var(--grey-text)', lineHeight: 1.8 }}>
                  ✅ Message sent! We will respond to your email shortly.
                </p>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="ylh-form-group">
                    <label>Full Name</label>
                    <input name="fullName" type="text" placeholder="Enter your full name" required />
                  </div>

                  <div className="ylh-form-group">
                    <label>Email Address</label>
                    <input name="email" type="email" placeholder="Enter your email" required />
                  </div>

                  <div className="ylh-form-group">
                    <label>Subject</label>
                    <select name="subject" required defaultValue="">
                      <option value="" disabled>What is this regarding?</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Partnerships & Collaborations">Partnerships &amp; Collaborations</option>
                      <option value="Events & Workshops">Events &amp; Workshops</option>
                      <option value="Website Feedback">Website Feedback</option>
                    </select>
                  </div>

                  <div className="ylh-form-group">
                    <label>Your Message</label>
                    <textarea name="message" rows={5} placeholder="Type your message here..." required />
                  </div>

                  {error ? (
                    <p style={{ color: '#d9534f', marginBottom: '12px' }}>{error}</p>
                  ) : null}

                  <button
                    type="submit"
                    className="ylh-btn ylh-btn-primary"
                    disabled={submitting}
                  >
                    {submitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>

            {/* ── CONTACT DETAILS ── */}
            <div className="ylh-card">
              <h2 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '24px', borderBottom: '1px solid var(--glass-border)', paddingBottom: '12px' }}>
                Contact Details
              </h2>

              <div className="ylh-contact-detail-row">
                <span className="ylh-contact-icon-wrap">
                  <i className="fas fa-envelope" aria-hidden="true"></i>
                </span>
                <div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--muted-text)', marginBottom: '4px' }}>Official Email</div>
                  <a href="mailto:connect.ylh@gmail.com" style={{ color: 'var(--text-color)', textDecoration: 'none', fontWeight: 600 }}>
                    connect.ylh@gmail.com
                  </a>
                </div>
              </div>

              <div className="ylh-contact-detail-row">
                <span className="ylh-contact-icon-wrap">
                  <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                </span>
                <div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--muted-text)', marginBottom: '4px' }}>Headquarters</div>
                  <div style={{ fontWeight: 600 }}>Chennai, Tamil Nadu, India</div>
                </div>
              </div>

              <div style={{ borderTop: '1px solid var(--glass-border)', marginTop: '20px', paddingTop: '20px' }}>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <a
                    href="https://www.linkedin.com/company/young-legal-house/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ylh-contact-social-btn"
                    aria-label="LinkedIn"
                  >
                    <i className="fab fa-linkedin" aria-hidden="true"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/younglegalhouse/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ylh-contact-social-btn"
                    aria-label="Instagram"
                  >
                    <i className="fab fa-instagram" aria-hidden="true"></i>
                  </a>
                  <a
                    href="https://linktr.ee/younglegalhouse"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ylh-contact-social-btn"
                    aria-label="Linktree"
                  >
                    <i className="fas fa-link" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </PageWrapper>
    </>
  );
}
