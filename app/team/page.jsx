'use client';
import Image from 'next/image';
import PageWrapper from '@/components/PageWrapper';
import AnimatedSection from '@/components/AnimatedSection';
import StaggerGrid from '@/components/StaggerGrid';
import WordReveal from '@/components/WordReveal';
import { TEAM_MEMBERS } from '@/lib/site-data.js';

export default function TeamPage() {
  return (
    <>
      <PageWrapper className="ylh-container">
        {/* Icon watermark background */}
        <div className="ylh-bg-pattern" aria-hidden="true" />

        {/* ── PAGE HERO (centered, with divider rules) ── */}
        <AnimatedSection variant="fadeUp" className="ylh-team-hero">
          <div className="ylh-team-eyebrow-row">
            <span className="ylh-team-eyebrow-rule" aria-hidden="true" />
            <p className="ylh-hero-label" style={{ margin: 0 }}>Meet the Team</p>
            <span className="ylh-team-eyebrow-rule" aria-hidden="true" />
          </div>
          <WordReveal
            text="The People Behind YLH"
            as="h1"
            className="ylh-page-title"
          />
          <p className="ylh-page-sub">
            A passionate team of law students building India&apos;s most engaging and impactful legal community.
          </p>
        </AnimatedSection>

        {/* ── TEAM GRID ── */}
        <AnimatedSection variant="fadeUp">
          <StaggerGrid className="ylh-team-grid">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.name} className="ylh-team-card">
                <div className="ylh-team-card-photo">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    style={member.imageStyle || { objectFit: 'cover' }}
                  />
                </div>
                <div className="ylh-team-card-body">
                  <h3>{member.name}</h3>
                  <span className="ylh-team-card-rule" aria-hidden="true" />
                  <p>{member.role}</p>
                  {member.linkedIn && (
                    <a
                      href={member.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} on LinkedIn`}
                      className="ylh-team-linkedin"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </StaggerGrid>
        </AnimatedSection>

        {/* ── COMMUNITY CALLOUT ── */}
        <AnimatedSection variant="fadeUp" className="ylh-community-callout">
          <div className="ylh-card ylh-team-community-card">
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '12px' }}>And a Growing Community...</h3>
            <p style={{ color: 'var(--grey-text)', lineHeight: 1.7 }}>
              Behind the scenes, we have an incredible team of 10+ dedicated members, interns,
              and contributors who are working tirelessly to build, manage, and better this
              community every single day.
            </p>
          </div>
        </AnimatedSection>

      </PageWrapper>
    </>
  );
}
