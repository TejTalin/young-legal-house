'use client';
import NetworkBackground from '@/components/NetworkBackground';

export default function AboutPage() {
  return (
    <>
      <NetworkBackground />
      <main className="page-spacing">
        <section className="container text-center-section">
          <h1 className="page-title">ABOUT THE INITIATIVE</h1>
          <p className="about the intiative-text">
            Young Legal House is a pioneering initiative dedicated to empowering law students across India by fostering a dynamic ecosystem of learning, collaboration, and professional development. Serving as a unified platform for aspiring legal professionals, we bridge the gap between academic pursuits and career advancement through access to internships, training programmes, competitions, events, mentorship, and diverse professional opportunities.Driven by a vision to cultivate an informed, connected, and progressive legal community, Young Legal House strives to nurture the next generation of legal minds by encouraging excellence, innovation, and meaningful engagement within the legal fraternity.Established in mid-2024, the initiative gained full operational momentum in December 2025 and has since continued to expand its presence and impact across the Indian legal landscape.
          </p>
        </section>

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
      </main>
    </>
  );
}
