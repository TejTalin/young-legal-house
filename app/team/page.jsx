import Image from 'next/image';
import NetworkBackground from '@/components/NetworkBackground';

export const metadata = {
  title: 'Team | Young Legal House',
};

const TEAM_MEMBERS = [
  {
    name: 'Achyuta Narayanan',
    role: 'Founder of the Community',
    image: '/Founder.jpeg',
    linkedIn: 'https://www.linkedin.com/in/achyuta-narayanan/',
  },
  {
    name: 'Amishee Gupta',
    role: 'Head of Operations',
    image: '/Head.jpeg',
    linkedIn: 'https://www.linkedin.com/in/amishee-gupta-95b65b303/',
    imageStyle: { objectFit: 'cover', objectPosition: 'center 22%' },
  },
  {
    name: 'Tej Talin',
    role: 'Head of Technology',
    image: '/Tej-Talin.png',
    linkedIn: 'https://www.linkedin.com/in/tejtalind/',
    imageStyle: { objectFit: 'cover' },
  },
];

export default function TeamPage() {
  return (
    <>
      <NetworkBackground />
      <main className="page-spacing container">
        <h1 className="section-title">Meet Our Team</h1>

        <div className="team-container">
          <div className="team-row top-row">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.name} className="glass-card team-card">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={360}
                  height={450}
                  className="team-img no-save-img"
                  draggable={false}
                  style={member.imageStyle}
                />
                <h3>{member.name}</h3>
                <p className="card-detail">{member.role}</p>

                {member.linkedIn ? (
                  <a
                    href={member.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="team-social"
                    style={{ color: 'var(--text-color)' }}
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                ) : null}
              </div>
            ))}
          </div>

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
