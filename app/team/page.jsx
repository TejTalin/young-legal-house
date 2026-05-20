import Image from 'next/image';
import NetworkBackground from '@/components/NetworkBackground';

export const metadata = {
  title: 'Team | Young Legal House',
};

export default function TeamPage() {
  return (
    <>
      <NetworkBackground />
      <main className="page-spacing container">
        <h1 className="section-title">Meet Our Team</h1>

        <div className="team-container">
          <div className="team-row top-row">
            {/* Founder */}
            <div className="glass-card team-card">
              <Image
                src="/Founder.jpeg"
                alt="Achyuta Narayanan"
                width={360}
                height={450}
                className="team-img"
              />
              <h3>Achyuta Narayanan</h3>
              <p className="card-detail">Founder of the Community</p>
              <a
                href="https://www.linkedin.com/in/achyuta-narayanan/"
                target="_blank"
                rel="noopener noreferrer"
                className="team-social"
                style={{ color: 'var(--text-color)' }}
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>

            {/* Head of Operations */}
            <div className="glass-card team-card">
              <Image
                src="/Head.jpeg"
                alt="Amishee Gupta"
                width={460}
                height={550}
                className="team-img"
              />
              <h3>Amishee Gupta</h3>
              <p className="card-detail">Head of Operations</p>
              <a
                href="https://www.linkedin.com/in/amishee-gupta-95b65b303/"
                target="_blank"
                rel="noopener noreferrer"
                className="team-social"
                style={{ color: 'var(--text-color)' }}
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Community Card */}
          <div className="team-row">
            <div className="glass-card community-card">
              <h3>And a Growing Community...</h3>
              <p style={{ color: 'var(--grey-text)', lineHeight: '1.6', marginTop: '10px' }}>
                Behind the scenes, we have an incredible team of 10+ dedicated members, interns,
                and contributors who are working tirelessly to build, manage, and better this
                community every single day.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
