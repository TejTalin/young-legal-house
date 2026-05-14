'use client';
import { useState } from 'react';
import NetworkBackground from '@/components/NetworkBackground';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
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

          {/* Contact Form */}
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
                  <input type="text" className="form-input" placeholder="Enter your full name" required />
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input type="email" className="form-input" placeholder="Enter your email" required />
                </div>

                <div className="form-group">
                  <label className="form-label">Subject</label>
                  <select className="form-select" required defaultValue="">
                    <option value="" disabled>What is this regarding?</option>
                    <option value="general">General Inquiry</option>
                    <option value="partnership">Partnerships &amp; Collaborations</option>
                    <option value="events">Events &amp; Workshops</option>
                    <option value="feedback">Website Feedback</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Your Message</label>
                  <textarea className="form-textarea" rows={5} placeholder="Type your message here..." required />
                </div>

                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            )}
          </div>

          {/* Contact Info */}
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
