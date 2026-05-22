import Link from 'next/link';
import NetworkBackground from '@/components/NetworkBackground';

export const metadata = {
  title: 'Young Legal House | Where Young Legal Minds Meet',
};

export default function HomePage() {
  return (
    <>
      <NetworkBackground />

      <main className="page-spacing container" style={{ paddingBottom: '100px' }}>

        {/* ── HERO ── */}
        <section style={{ textAlign: 'center', maxWidth: '860px', margin: '20px auto 40px' }}>
          <div style={{
            display: 'inline-block',
            background: 'var(--glass-bg)',
            border: '1px solid var(--glass-border)',
            borderRadius: '999px',
            padding: '5px 18px',
            fontSize: '0.78rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--grey-text)',
            marginBottom: '20px',
          }}>
            India&apos;s Legal Student Community
          </div>

          <h1 className="section-title" style={{ marginBottom: '18px', lineHeight: 1.04 }}>
            Young Legal House
          </h1>

          <p style={{
            color: 'var(--grey-text)',
            fontSize: 'clamp(1rem, 2.2vw, 1.15rem)',
            lineHeight: 1.85,
            maxWidth: '720px',
            margin: '0 auto 32px',
          }}>
            A dedicated initiative bridging the gap between legal theory and execution.
            We connect aspiring legal professionals with knowledge, competitions, events,
            and a community that takes law seriously.
          </p>

          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/join" className="glass-pill" style={{
              background: 'var(--text-color)',
              color: 'var(--bg-color)',
              fontWeight: 800,
              padding: '12px 28px',
              fontSize: '0.95rem',
            }}>
              Join the Community
            </Link>
            <Link href="/blogs" className="glass-pill" style={{
              fontWeight: 700,
              padding: '12px 28px',
              fontSize: '0.95rem',
            }}>
              Read Legal Insights
            </Link>
          </div>
        </section>

        {/* ── LIVE EVENT TICKER ── */}
        <Link href="/events" style={{ display: 'block', textDecoration: 'none', marginBottom: '48px', maxWidth: '860px', margin: '0 auto 48px' }} aria-label="View flagship event">
          <div style={{
            border: '1px solid var(--glass-border)',
            borderRadius: '999px',
            overflow: 'hidden',
            background: 'var(--glass-bg)',
            height: '46px',
            display: 'flex',
            alignItems: 'center',
          }}>
            <div style={{
              whiteSpace: 'nowrap',
              display: 'inline-block',
              paddingLeft: '100%',
              animation: 'ylh-ticker 18s linear infinite',
              color: 'var(--text-color)',
              fontWeight: 700,
              letterSpacing: '0.03em',
              fontSize: '0.88rem',
            }}>
              🔴 LIVE: LEX NOCTIS — YLH FLAGSHIP EVENT &nbsp;·&nbsp; CRIMINAL LAW TRIVIA &nbsp;·&nbsp; 15 JUNE 2026 &nbsp;·&nbsp; REGISTRATIONS OPEN &nbsp;·&nbsp; CLICK TO REGISTER
            </div>
          </div>
        </Link>

        {/* ── WHAT WE OFFER — 3 column grid ── */}
        <section style={{ maxWidth: '1000px', margin: '0 auto 56px' }}>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
            fontWeight: 700,
            textAlign: 'center',
            marginBottom: '28px',
          }}>
            What We Offer
          </h2>
          <div className="cards-grid">
            <div className="glass-card">
              <i className="fas fa-newspaper" style={{ fontSize: '1.6rem', marginBottom: '14px', color: 'var(--grey-text)' }}></i>
              <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.35rem', marginBottom: '10px' }}>
                Curated Legal Insights
              </h3>
              <p style={{ color: 'var(--grey-text)', lineHeight: 1.75, fontSize: '0.93rem' }}>
                Peer-written articles covering Corporate Law, Tax, TMT, Litigation, ADR, IPR, and more
                written by students for students.
              </p>
            </div>

            <div className="glass-card">
              <i className="fas fa-gavel" style={{ fontSize: '1.6rem', marginBottom: '14px', color: 'var(--grey-text)' }}></i>
              <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.35rem', marginBottom: '10px' }}>
                Competitions &amp; Events
              </h3>
              <p style={{ color: 'var(--grey-text)', lineHeight: 1.75, fontSize: '0.93rem' }}>
                National moot courts, trivia challenges, workshops, and webinars designed to
                sharpen your legal skills and build your profile.
              </p>
            </div>

            <div className="glass-card">
              <i className="fas fa-users" style={{ fontSize: '1.6rem', marginBottom: '14px', color: 'var(--grey-text)' }}></i>
              <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.35rem', marginBottom: '10px' }}>
                Expert Community
              </h3>
              <p style={{ color: 'var(--grey-text)', lineHeight: 1.75, fontSize: '0.93rem' }}>
                Connect with founders, researchers, and practitioners across India.
                A vibrant network built for the next generation of legal professionals.
              </p>
            </div>
          </div>
        </section>

        {/* ── PRACTICE AREAS ── */}
        <section style={{ maxWidth: '900px', margin: '0 auto 56px', textAlign: 'center' }}>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
            fontWeight: 700,
            marginBottom: '8px',
          }}>
            Practice Areas We Cover
          </h2>
          <p style={{ color: 'var(--grey-text)', fontSize: '0.93rem', marginBottom: '24px' }}>
            Explore legal insights across every major domain
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
            {['Corporate Law', 'Tax', 'TMT', 'Litigation', 'M&A', 'ADR', 'IPR', 'Constitutional', 'Criminal', 'International Law'].map(area => (
              <Link key={area} href="/blogs" style={{ textDecoration: 'none' }}>
                <span style={{
                  display: 'inline-block',
                  padding: '8px 18px',
                  border: '1px solid var(--glass-border)',
                  borderRadius: '999px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: 'var(--grey-text)',
                  background: 'var(--glass-bg)',
                  cursor: 'pointer',
                  transition: 'all 0.15s',
                }}>
                  {area}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── WHY YLH — 2 column ── */}
        <section style={{ maxWidth: '900px', margin: '0 auto 56px' }}>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
            fontWeight: 700,
            textAlign: 'center',
            marginBottom: '28px',
          }}>
            Why Young Legal House?
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
            {[
              { icon: 'fa-graduation-cap', title: 'Built for Students', text: 'Every resource, event, and article is created with law students in mind practical, relevant, and accessible.' },
              { icon: 'fa-handshake', title: 'Real Connections', text: 'Network with peers from law schools across India and build relationships that last beyond college.' },
              { icon: 'fa-trophy', title: 'Compete & Grow', text: 'From trivia challenges to moot courts, every competition is a chance to apply what you learn in the real world.' },
              { icon: 'fa-pen-nib', title: 'Publish Your Work', text: 'Contribute articles, case commentaries, and research papers. Get your name out there before you even graduate.' },
            ].map(item => (
              <div key={item.title} className="glass-card" style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', padding: '22px' }}>
                <i className={`fas ${item.icon}`} style={{ fontSize: '1.3rem', color: 'var(--grey-text)', marginTop: '2px', flexShrink: 0 }}></i>
                <div>
                  <h4 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.15rem', fontWeight: 700, marginBottom: '8px' }}>
                    {item.title}
                  </h4>
                  <p style={{ color: 'var(--grey-text)', fontSize: '0.9rem', lineHeight: 1.7 }}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA BANNER ── */}
        <section style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <div className="glass-card" style={{ padding: '44px 32px' }}>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
              fontWeight: 700,
              marginBottom: '14px',
            }}>
              Ready to be part of it?
            </h2>
            <p style={{ color: 'var(--grey-text)', lineHeight: 1.8, marginBottom: '28px', fontSize: '0.98rem' }}>
              Join hundreds of law students building their legal careers through YLH.
              Stay informed, stay competitive, stay connected.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/join" className="glass-pill" style={{
                background: 'var(--text-color)',
                color: 'var(--bg-color)',
                fontWeight: 800,
                padding: '12px 28px',
              }}>
                Join Now — It&apos;s Free
              </Link>
              <Link href="/contact" className="glass-pill" style={{ fontWeight: 700, padding: '12px 28px' }}>
                Get in Touch
              </Link>
            </div>
          </div>
        </section>

      </main>

      <style>{`
        @keyframes ylh-ticker {
          0%   { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </>
  );
}
