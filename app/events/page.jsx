import NetworkBackground from '@/components/NetworkBackground';

const OFFLINE_EVENTS = [
  {
    id: 1,
    day: '14',
    month: 'Jun',
    title: 'National Moot Court Competition 2026',
    description: 'Young Legal House presents its flagship moot court competition open to all law students across India. Compete before eminent judges and win exciting prizes.',
    location: 'New Delhi, India',
    type: 'Offline',
    fee: 'Paid',
    badge: 'Moot Court',
    registerLink: '/contact',
  },
  {
    id: 2,
    day: '22',
    month: 'Jun',
    title: 'Legal Research Workshop — Mumbai',
    description: 'An intensive one-day workshop on advanced legal research techniques, citation methods, and publication strategies for law students.',
    location: 'Mumbai, Maharashtra',
    type: 'Offline',
    fee: 'Free',
    badge: 'Workshop',
    registerLink: '/contact',
  },
];

const ONLINE_EVENTS = [
  {
    id: 3,
    day: '08',
    month: 'Jun',
    title: 'Webinar: Careers in Corporate Law',
    description: 'Join seasoned corporate lawyers for an interactive session on building a career in M&A, PE/VC, and general corporate practice in India.',
    location: 'Zoom (Online)',
    type: 'Online',
    fee: 'Free',
    badge: 'Webinar',
    registerLink: '/contact',
  },
  {
    id: 4,
    day: '18',
    month: 'Jun',
    title: 'IPR Awareness Session for Law Students',
    description: 'A focused online session covering fundamentals of Intellectual Property Rights — trademarks, patents, copyrights — and career pathways in IP practice.',
    location: 'Google Meet (Online)',
    type: 'Online',
    fee: 'Free',
    badge: 'Webinar',
    registerLink: '/contact',
  },
];

function EventCard({ event }) {
  const typeBadgeStyle = event.type === 'Online'
    ? { background: '#E1F5EE', color: '#0F6E56' }
    : { background: '#E6F1FB', color: '#185FA5' };

  const feeBadgeStyle = event.fee === 'Free'
    ? { background: '#EAF3DE', color: '#3B6D11' }
    : { background: '#FAEEDA', color: '#854F0B' };

  return (
    <div className="glass-card" style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
      {/* Date Block */}
      <div style={{
        minWidth: '60px',
        textAlign: 'center',
        background: 'var(--glass-bg)',
        borderRadius: '12px',
        padding: '10px 8px',
        border: '1px solid var(--glass-border)',
      }}>
        <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '2rem', fontWeight: 700, lineHeight: 1 }}>
          {event.day}
        </div>
        <div style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--grey-text)' }}>
          {event.month}
        </div>
      </div>

      {/* Info */}
      <div style={{ flex: 1 }}>
        <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '6px' }}>{event.title}</h4>
        <p style={{ color: 'var(--grey-text)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '10px' }}>
          {event.description}
        </p>
        <p style={{ color: 'var(--muted-text)', fontSize: '0.85rem', marginBottom: '12px' }}>
          <i className="fas fa-map-marker-alt" style={{ marginRight: '6px' }}></i>{event.location}
        </p>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ ...typeBadgeStyle, borderRadius: '999px', padding: '3px 10px', fontSize: '0.78rem', fontWeight: 600 }}>
            {event.type}
          </span>
          <span style={{ ...feeBadgeStyle, borderRadius: '999px', padding: '3px 10px', fontSize: '0.78rem', fontWeight: 600 }}>
            {event.fee}
          </span>
          <a href={event.registerLink} className="glass-pill" style={{ padding: '5px 14px', fontSize: '0.82rem', fontWeight: 700, marginLeft: 'auto' }}>
            Register &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: 'Events | Young Legal House',
};

export default function EventsPage() {
  return (
    <>
      <NetworkBackground />
      <main className="page-spacing container">
        <h1 className="section-title">Upcoming Events &amp; Workshops</h1>

        <div className="events-section-title">Offline Events</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '20px' }}>
          {OFFLINE_EVENTS.map(e => <EventCard key={e.id} event={e} />)}
        </div>

        <div className="events-section-title">Online Events</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {ONLINE_EVENTS.map(e => <EventCard key={e.id} event={e} />)}
        </div>
      </main>
    </>
  );
}
