'use client';
import Link from 'next/link';
import Image from 'next/image';
import PageWrapper from '@/components/PageWrapper';
import AnimatedSection from '@/components/AnimatedSection';
import StaggerGrid from '@/components/StaggerGrid';
import WordReveal from '@/components/WordReveal';
import { CORE_VALUES } from '@/lib/site-data.js';

export default function AboutPage() {
  return (
    <>
      <PageWrapper className="ylh-container">

        {/* PAGE HERO */}
        <AnimatedSection variant="fadeUp" className="ylh-page-hero">
          <div className="ylh-page-hero-bg">
            <Image
              src="/design-assets/about-hero.jpg"
              alt="About Young Legal House"
              fill
              priority
            />
          </div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <p className="ylh-hero-label">About the Initiative</p>
            <WordReveal
              text="About Young Legal House"
              as="h1"
              className="ylh-page-title"
            />
            <p className="ylh-page-sub">
              Empowering law students across India by fostering a dynamic ecosystem of learning, collaboration, and professional development.
            </p>
          </div>
        </AnimatedSection>

        {/* BODY COPY */}
        <AnimatedSection variant="fadeUp">
          <div style={{ position: 'relative', maxWidth: '760px', margin: '0 auto', padding: '48px 0' }}>
            <div style={{ position: 'absolute', inset: 0, opacity: 0.06, zIndex: -1 }}>
              <Image
                src="/design-assets/about-panel-texture.jpg"
                alt="About panel texture"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <p style={{ lineHeight: 1.8, color: 'var(--grey-text)', marginBottom: '24px' }}>
              Young Legal House is a pioneering initiative dedicated to empowering law students
              across India by fostering a dynamic ecosystem of learning, collaboration, and
              professional development. Serving as a unified platform for aspiring legal
              professionals, we bridge the gap between academic pursuits and career advancement
              through access to internships, training programmes, competitions, events,
              mentorship, and diverse professional opportunities.
            </p>
            <p style={{ lineHeight: 1.8, color: 'var(--grey-text)' }}>
              Driven by a vision to cultivate an informed, connected, and progressive legal
              community, Young Legal House strives to nurture the next generation of legal minds
              by encouraging excellence, innovation, and meaningful engagement within the legal
              fraternity. Established in mid-2024, the initiative gained full operational
              momentum in December 2025 and has since continued to expand its presence and
              impact across the Indian legal landscape.
            </p>
          </div>
        </AnimatedSection>

        {/* FOUNDER'S VISION */}
        <AnimatedSection variant="fadeUp" style={{ maxWidth: '720px', margin: '0 auto' }}>
          <div className="ylh-card" style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '2rem', color: 'var(--muted-text)', marginBottom: '16px' }}>&ldquo;</p>
            <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '16px' }}>The Founder&apos;s Vision</h3>
            <p style={{ fontStyle: 'italic', lineHeight: 1.7, color: 'var(--grey-text)', marginBottom: '16px' }}>
              &ldquo;We created Young Legal House because the journey from a law student to a top-tier
              practitioner shouldn&apos;t be a solo endeavor. This platform is designed to bridge
              the gap between theory and execution.&rdquo;
            </p>
            <p style={{ color: 'var(--muted-text)', fontSize: '0.85rem' }}>— Achyuta R</p>
          </div>
        </AnimatedSection>

        {/* CORE VALUES */}
        <AnimatedSection variant="fadeUp" style={{ padding: '64px 0' }}>
          <p className="ylh-hero-label" style={{ textAlign: 'center', marginBottom: '8px' }}>What We Stand For</p>
          <h2 style={{ textAlign: 'center', marginBottom: '48px' }}>Our Core Values</h2>
          <StaggerGrid className="ylh-values-grid">
            {CORE_VALUES.map((value) => (
              <div key={value.title} className="ylh-value-card">
                <i className={`fas ${value.icon}`}></i>
                <h4>{value.title}</h4>
                <p>{value.text}</p>
              </div>
            ))}
          </StaggerGrid>
        </AnimatedSection>

        {/* CTA BAND */}
        <AnimatedSection variant="fadeUp">
          <div className="ylh-cta-bar">
            <div>
              <h3>Be Part of the Movement</h3>
              <p>Join a growing community of passionate law students and shape the future of law together.</p>
            </div>
            <Link href="/join" className="ylh-btn ylh-btn-primary">
              Join the Community →
            </Link>
          </div>
        </AnimatedSection>

      </PageWrapper>
    </>
  );
}
