'use client';
import { useState } from 'react';
import Link from 'next/link';
import NetworkBackground from '@/components/NetworkBackground';

export default function JoinPage() {
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
          <h1 className="section-title">Shape the Future of Law</h1>
          <p style={{ color: 'var(--grey-text)', fontSize: '1.1rem', lineHeight: '1.8' }}>
            Whether you want to build your resume with hands-on experience by joining our core team,
            or you simply want a strategic edge by receiving curated legal updates, Young Legal House
            is the place for you.
          </p>
        </div>

        <div className="join-grid">

          {/* Application Form */}
          <div className="glass-card">
            <h2 style={{ marginBottom: '25px', borderBottom: '1px solid var(--glass-border)', paddingBottom: '10px' }}>
              Careers &amp; Internships
            </h2>

            {submitted ? (
              <p style={{ color: 'var(--grey-text)', lineHeight: '1.8' }}>
                ✅ Application submitted! We will get back to you soon.
              </p>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input type="text" className="form-input" placeholder="e.g., Jane Doe" required />
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input type="email" className="form-input" placeholder="jane@example.com" required />
                </div>

                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input type="tel" className="form-input" placeholder="+91 XXXXX XXXXX" required />
                </div>

                <div className="form-group">
                  <label className="form-label">LinkedIn Profile URL</label>
                  <input type="url" className="form-input" placeholder="https://linkedin.com/in/..." required />
                </div>

                <div className="form-group">
                  <label className="form-label">Position Applying For</label>
                  <select className="form-select" required defaultValue="">
                    <option value="" disabled>Select a position...</option>
                    <option value="legal_research">Legal Research Intern</option>
                    <option value="graphic_designer">Graphic Designer</option>
                    <option value="editor">Editor / Proofreader</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Link to Resume / Portfolio</label>
                  <input type="url" className="form-input" placeholder="Paste Google Drive link here" required />
                </div>

                <button type="submit" className="submit-btn">Submit Application</button>
              </form>
            )}
          </div>

          {/* Subscription Card */}
          <div>
            <div className="glass-card subscription-card">
              <h2 style={{ fontSize: '1.8rem' }}>YLH Premium Updates</h2>
              <p style={{ color: 'var(--grey-text)', marginTop: '10px' }}>
                Stay ahead of the curve. Never miss a deadline again.
              </p>

              <div className="sub-price">
                <span className="sub-currency">₹</span>39<span className="sub-month">/mo</span>
              </div>

              <ul className="sub-perks">
                <li>Curated legal updates and event reminders.</li>
                <li>Priority access to workshops and community announcements.</li>
                <li>Monthly opportunities digest for internships, moots, and calls for papers.</li>
              </ul>

              <Link
                href="/contact"
                className="glass-pill"
                style={{ display: 'inline-block', marginTop: '24px', background: 'var(--text-color)', color: 'var(--bg-color)', fontWeight: 800 }}
              >
                Contact Us to Subscribe
              </Link>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
