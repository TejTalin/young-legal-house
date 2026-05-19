'use client';
import NetworkBackground from '@/components/NetworkBackground';

export default function AboutPage() {
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

      </main>
    </>
  );
}
