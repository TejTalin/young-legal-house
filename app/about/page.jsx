'use client';
import Link from 'next/link';
import { CORE_VALUES } from '@/lib/site-data';

export default function AboutPage() {
  return (
    <main>
      <section className="ylh-page-hero ylh-container">
        <h1 className="ylh-page-title">About Young Legal House</h1>
        <p className="ylh-page-sub">
          Empowering law students across India by fostering a dynamic ecosystem of learning, collaboration, and professional development.
        </p>
        <div className="ylh-page-hero-bg">
          <img src="/design-assets/hero-courthouse.jpg" alt="" />
        </div>
      </section>

      <section className="ylh-container" style={{ paddingBottom: 40 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 40, alignItems: 'start' }}>
          <img src="/design-assets/emblem-scales.jpg" alt="" style={{ width: 120, opacity: 0.4, filter: 'grayscale(100%)' }} />
          <div>
            <p style={{ color: 'var(--ylh-gray-300)', lineHeight: 1.85, marginBottom: 20, fontSize: '0.95rem' }}>
              Young Legal House is a pioneering initiative dedicated to empowering law students across India by fostering a dynamic ecosystem of learning, collaboration, and professional development. Serving as a unified platform for aspiring legal professionals, we bridge the gap between academic pursuits and career advancement through access to internships, training programmes, competitions, events, mentorship, and diverse professional opportunities.
            </p>
            <p style={{ color: 'var(--ylh-gray-300)', lineHeight: 1.85, fontSize: '0.95rem' }}>
              Established in mid-2024, the initiative gained full operational momentum in December 2025 and has since continued to expand its presence and impact across the Indian legal landscape.
            </p>
          </div>
        </div>
      </section>

      <section className="ylh-container">
        <div className="ylh-vision-grid">
          <div className="ylh-vision-card">
            <i className="fas fa-user" />
            <h3>The Founder&apos;s Vision</h3>
            <blockquote>
              &ldquo;We created Young Legal House because the journey from a law student to a top-tier practitioner shouldn&apos;t be a solo endeavor. This platform is designed to bridge the gap between theory and execution.&rdquo;
            </blockquote>
            <cite>&mdash; Achyuta R.</cite>
          </div>
          <div className="ylh-vision-card">
            <i className="fas fa-drafting-compass" />
            <h3>The Architect&apos;s Blueprint</h3>
            <blockquote>
              &ldquo;Technology should elevate the legal profession, not complicate it. I built this ecosystem to be seamless, futuristic, and focused entirely on connecting our community without friction.&rdquo;
            </blockquote>
            <cite>&mdash; Tej Talin</cite>
          </div>
        </div>
      </section>

      <section className="ylh-container">
        <p className="ylh-section-label">What We Stand For</p>
        <h2 className="ylh-section-title">Our Core Values</h2>
        <div className="ylh-values-grid">
          {CORE_VALUES.map(({ icon, title, text }) => (
            <div key={title} className="ylh-value-card">
              <i className={`fas ${icon}`} />
              <h4>{title}</h4>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="ylh-container">
        <div className="ylh-cta-bar">
          <div>
            <h3><i className="fas fa-users" style={{ marginRight: 8 }} />Be Part of the Movement</h3>
            <p>Join law students across India building their careers through YLH.</p>
          </div>
          <Link href="/join" className="ylh-btn ylh-btn-primary">Join the Community &rarr;</Link>
        </div>
      </section>
    </main>
  );
}
