'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PageWrapper from '@/components/PageWrapper';
import AnimatedSection from '@/components/AnimatedSection';
import WordReveal from '@/components/WordReveal';

export default function JoinPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const cvFile = formData.get('cvFile');

    if (!cvFile || cvFile.size === 0) {
      setError('Please upload your CV before submitting.');
      return;
    }

    if (cvFile.size > 5 * 1024 * 1024) {
      setError('CV file is too large. Please upload a file up to 5MB.');
      return;
    }

    try {
      setSubmitting(true);
      const res = await fetch('/api/join', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Could not submit your application.');
      }

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
        <AnimatedSection variant="fadeUp" as="section" className="ylh-page-hero-shell ylh-page-hero--join">
          <div className="ylh-page-hero-bg">
            <Image
              src="/design-assets/join-section-bg.jpg"
              alt="Join Young Legal House"
              fill
              priority
            />
          </div>
          <div className="ylh-container">
            <div className="ylh-page-hero-copy">
              <p className="ylh-hero-label">Join the Community</p>
              <WordReveal
                text="Shape the Future of Law"
                as="h1"
                className="ylh-page-title"
              />
              <p className="ylh-page-sub">
                Whether you want to build your resume with hands-on experience by joining our core team,
                or you simply want a strategic edge by receiving curated legal updates, Young Legal House
                is the place for you.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="ylh-container">
          <AnimatedSection variant="fadeUp" className="ylh-form-grid">
            <div className="ylh-card ylh-join-community-card">
              <div className="ylh-join-features">
                <div style={{ marginBottom: '22px' }}>
                  <h2 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Join the Community</h2>
                  <p style={{ color: 'var(--grey-text)', lineHeight: 1.7 }}>
                    Build your legal edge with meaningful opportunities, practical experience, and curated legal updates.
                  </p>
                </div>
                <div className="ylh-join-feature">
                  <i className="fas fa-briefcase"></i>
                  <div>
                    <h4>For Aspiring Legal Professionals</h4>
                    <p>Join our core team and gain hands-on experience in legal research, content creation, event management, and community building.</p>
                  </div>
                </div>
                <div className="ylh-join-feature">
                  <i className="fas fa-lightbulb"></i>
                  <div>
                    <h4>For Knowledge Seekers</h4>
                    <p>Stay ahead with curated legal updates, event reminders, and exclusive opportunities delivered directly to you.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="ylh-card">
              <h2 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '20px', borderBottom: '1px solid var(--glass-border)', paddingBottom: '12px' }}>
                Careers &amp; Internships
              </h2>

              {submitted ? (
                <p style={{ color: 'var(--grey-text)', lineHeight: 1.8 }}>
                  ✅ Application submitted! We will get back to you soon.
                </p>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="ylh-form-group">
                    <label>Full Name</label>
                    <input name="fullName" type="text" placeholder="e.g., Jane Doe" required />
                  </div>

                  <div className="ylh-form-group">
                    <label>Email Address</label>
                    <input name="email" type="email" placeholder="jane@example.com" required />
                  </div>

                  <div className="ylh-form-group">
                    <label>Phone Number</label>
                    <input name="phone" type="tel" placeholder="+91 XXXXX XXXXX" required />
                  </div>

                  <div className="ylh-form-group">
                    <label>LinkedIn Profile URL</label>
                    <input name="linkedinUrl" type="url" placeholder="https://linkedin.com/in/..." required />
                  </div>

                  <div className="ylh-form-group">
                    <label>Position Applying For</label>
                    <select name="position" required defaultValue="">
                      <option value="" disabled>Select a position...</option>
                      <option value="legal_research">Legal Research Intern</option>
                      <option value="graphic_designer">Graphic Designer</option>
                      <option value="editor">Editor / Proofreader</option>
                    </select>
                  </div>

                  <div className="ylh-form-group">
                    <label>Upload CV</label>
                    <input
                      name="cvFile"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      required
                    />
                    <p style={{ marginTop: '8px', fontSize: '0.8rem', color: 'var(--muted-text)' }}>
                      Accepted formats: PDF, DOC, DOCX (max 5MB)
                    </p>
                  </div>

                  {error ? (
                    <p style={{ color: '#d9534f', marginBottom: '12px' }}>{error}</p>
                  ) : null}

                  <button
                    type="submit"
                    className="ylh-btn ylh-btn-primary"
                    disabled={submitting}
                  >
                    {submitting ? 'Submitting...' : 'Submit Application'}
                  </button>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </PageWrapper>
    </>
  );
}
