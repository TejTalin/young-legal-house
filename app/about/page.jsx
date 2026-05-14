'use client';
import { useState } from 'react';
import NetworkBackground from '@/components/NetworkBackground';

export default function AboutPage() {
  const [wordCount, setWordCount] = useState(0);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleMessageChange = (e) => {
    const val = e.target.value;
    setMessage(val);
    const words = val.trim() === '' ? 0 : val.trim().split(/\s+/).length;
    setWordCount(words);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <NetworkBackground />
      <main className="page-spacing">

        {/* About Intro */}
        <section className="container text-center-section">
          <h1 className="page-title">ABOUT</h1>
          <p className="about-text">
            Young Legal House is a dedicated initiative empowering law students across India.
            We provide a common platform for learning, networking, and professional growth,
            connecting aspiring legal professionals with internships, training programs,
            competitions, events, and career opportunities. Our mission is to build a vibrant,
            informed, and collaborative legal community.
          </p>
        </section>

        {/* Founder & Architect Cards */}
        <section className="container">
          <div className="cards-grid">
            <div className="glass-card message-card">
              <h3 className="card-role">The Founder&apos;s Vision</h3>
              <p className="message-quote">
                &ldquo;We created Young Legal House because the journey from a law student to a
                top-tier practitioner shouldn&apos;t be a solo endeavor. This platform is designed
                to bridge the gap between theory and execution.&rdquo;
              </p>
              <span className="card-author">- Achyuta R</span>
            </div>
            <div className="glass-card message-card">
              <h3 className="card-role">The Architect&apos;s Blueprint</h3>
              <p className="message-quote">
                &ldquo;Technology should elevate the legal profession, not complicate it.
                I built this ecosystem to be seamless, futuristic, and focused entirely on
                connecting our community without friction.&rdquo;
              </p>
              <span className="card-author">- Tej Talin</span>
            </div>
          </div>
        </section>

        {/* Feedback Form */}
        <section className="container form-section">
          <h2 className="form-title">Shape Our Future</h2>
          <p className="form-subtitle" style={{ textAlign: 'center' }}>
            Please share inputs on how to build this community to a better reach.
          </p>

          {submitted ? (
            <p style={{ textAlign: 'center', color: 'var(--grey-text)', fontSize: '1.1rem' }}>
              ✅ Thank you for your feedback! We&apos;ll take it into account.
            </p>
          ) : (
            <form className="glass-form" onSubmit={handleSubmit}>
              <input type="text" placeholder="Name" required className="glass-input" />
              <input type="email" placeholder="Email ID" required className="glass-input" />
              <textarea
                placeholder="Your message... (Minimum 50 words)"
                rows={6}
                required
                className="glass-input"
                value={message}
                onChange={handleMessageChange}
              />
              <div className="word-count-indicator">Words: {wordCount} / 50 minimum</div>
              <button
                type="submit"
                className="btn-main glass-pill"
                disabled={wordCount < 50}
              >
                Submit Feedback
              </button>
            </form>
          )}
        </section>
      </main>
    </>
  );
}
