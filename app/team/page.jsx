import Image from 'next/image';
import { TEAM_MEMBERS } from '@/lib/site-data';

export const metadata = {
  title: 'Team | Young Legal House',
};

export default function TeamPage() {
  return (
    <main>
      <section className="ylh-container" style={{ textAlign: 'center', padding: '48px 0 24px' }}>
        <p className="ylh-section-label">Meet the Team</p>
        <h1 className="ylh-page-title">The People Behind YLH</h1>
        <p className="ylh-page-sub" style={{ margin: '0 auto' }}>
          A passionate team of law students building India&apos;s most engaging and impactful legal community.
        </p>
      </section>

      <section className="ylh-container">
        <div className="ylh-team-grid">
          {TEAM_MEMBERS.map((member) => (
            <div key={member.name} className="ylh-team-card">
              <Image
                src={member.image}
                alt={member.name}
                width={360}
                height={320}
                style={{ width: '100%', height: 320, objectFit: 'cover', ...(member.imageStyle || {}) }}
              />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              {member.linkedIn && (
                <a href={member.linkedIn} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} on LinkedIn`}>
                  <i className="fab fa-linkedin" />
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
