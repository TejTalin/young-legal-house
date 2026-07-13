'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import { urlFor } from '@/lib/sanity';

const FILTERS = ['All Events', 'Upcoming Events', 'Past Events', 'Competition', 'Webinar', 'Workshop', 'Talk'];

function formatDay(dateStr) {
  if (!dateStr) return { day: '--', month: '' };
  const d = new Date(dateStr);
  return {
    day: d.toLocaleDateString('en-IN', { day: '2-digit' }),
    month: d.toLocaleDateString('en-IN', { month: 'short' }).toUpperCase(),
  };
}

function formatFullDate(dateStr) {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
}

function EventImage({ event, className }) {
  if (event.coverImage) {
    return <img src={urlFor(event.coverImage).width(500).height(280).url()} alt={event.title} />;
  }
  return (
    <div className={className} style={{ width: '100%', height: '100%', display: 'grid', placeItems: 'center', background: 'var(--panel-bg)' }}>
      <i className="fas fa-calendar-alt" style={{ fontSize: '1.4rem', color: 'var(--muted-text)' }}></i>
    </div>
  );
}

export default function EventsClient({ events }) {
  const [activeFilter, setActiveFilter] = useState('All Events');
  const [searchQuery, setSearchQuery] = useState('');

  const upcoming = useMemo(() => events.filter((e) => e.status === 'upcoming'), [events]);
  const past = useMemo(() => events.filter((e) => e.status === 'concluded'), [events]);

  const filtered = useMemo(() => {
    return events.filter((e) => {
      let matchFilter = true;
      if (activeFilter === 'Upcoming Events') matchFilter = e.status === 'upcoming';
      else if (activeFilter === 'Past Events') matchFilter = e.status === 'concluded';
      else if (['Competition', 'Webinar', 'Workshop', 'Talk'].includes(activeFilter)) matchFilter = e.eventType === activeFilter;

      const q = searchQuery.trim().toLowerCase();
      const matchSearch = !q || e.title.toLowerCase().includes(q) || e.shortDescription?.toLowerCase().includes(q);
      return matchFilter && matchSearch;
    });
  }, [events, activeFilter, searchQuery]);

  const isFiltering = activeFilter !== 'All Events' || searchQuery.trim() !== '';
  const upcomingToShow = isFiltering ? filtered.filter((e) => e.status === 'upcoming') : upcoming.slice(0, 4);
  const pastToShow = isFiltering ? filtered.filter((e) => e.status === 'concluded') : past.slice(0, 5);

  return (
    <main>
      <section className="ylh-page-hero ylh-container">
        <div className="ylh-page-hero-shell ylh-page-hero--scoped">
          <div className="ylh-page-hero-copy">
            <div className="ylh-breadcrumb">
              <Link href="/">Home</Link> &nbsp;›&nbsp; Events
            </div>
            <div className="ylh-page-hero-bg">
              <img src="/design-assets/hero-courthouse.jpg" alt="" />
            </div>
            <h1 className="ylh-page-title">YLH Events</h1>
            <p className="ylh-page-sub">
              From national moots to thought-provoking webinars, YLH events bring together India&apos;s legal minds to learn, compete, and grow.
            </p>
            <div className="ylh-hero-actions" style={{ justifyContent: 'center', marginTop: '20px' }}>
              <a href="#upcoming" className="ylh-btn ylh-btn-primary">Explore Events <i className="fas fa-arrow-right"></i></a>
              <a href="#past" className="ylh-btn ylh-btn-outline">View Past Events <i className="fas fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </section>

      <section className="ylh-container">
        <div className="ylh-stats-bar ylh-stats-bar-events">
          <div className="ylh-stat">
            <i className="fas fa-calendar"></i>
            <div className="ylh-stat-value">{events.length > 0 ? `${events.length}+` : '25+'}</div>
            <div className="ylh-stat-label">Events Hosted</div>
          </div>
          <div className="ylh-stat">
            <i className="fas fa-users"></i>
            <div className="ylh-stat-value">8K+</div>
            <div className="ylh-stat-label">Active Participants</div>
          </div>
          <div className="ylh-stat">
            <i className="fas fa-landmark"></i>
            <div className="ylh-stat-value">50+</div>
            <div className="ylh-stat-label">Partner Institutions</div>
          </div>
          <div className="ylh-stat">
            <i className="fas fa-trophy"></i>
            <div className="ylh-stat-value">10+</div>
            <div className="ylh-stat-label">Flagship Events</div>
          </div>
        </div>

        <div className="ylh-filters">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              className={`ylh-filter-pill${activeFilter === f ? ' active' : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
          <div className="ylh-search">
            <i className="fas fa-search"></i>
            <input
              type="text"
              placeholder="Search events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      <section className="ylh-container" id="upcoming" style={{ paddingTop: '32px' }}>
        <div className="ylh-col-header">
          <div>
            <p className="ylh-section-label">UPCOMING EVENTS</p>
            <h2 className="ylh-section-title" style={{ marginBottom: 0 }}>What&apos;s Coming Up</h2>
          </div>
          {!isFiltering && <a href="#" onClick={(e) => { e.preventDefault(); setActiveFilter('Upcoming Events'); }}>View all events →</a>}
        </div>

        {upcomingToShow.length === 0 ? (
          <p style={{ color: 'var(--muted-text)', padding: '20px 0 40px' }}>
            {events.length === 0 ? 'No events published yet. Check back soon!' : 'No upcoming events match your filters.'}
          </p>
        ) : (
          <div className="ylh-events-grid" style={{ marginBottom: '48px' }}>
            {upcomingToShow.map((event) => {
              const { day, month } = formatDay(event.eventDate);
              return (
                <Link key={event._id} href={`/events/${event?.slug?.current || ''}`} className="ylh-event-grid-card">
                  <div className="ylh-event-grid-card-img-wrap">
                    <EventImage event={event} />
                    <div className="ylh-event-grid-date-badge">
                      <span className="day">{day}</span>
                      <span className="month">{month}</span>
                    </div>
                  </div>
                  <div className="ylh-event-grid-card-body">
                    <span className="ylh-event-tag">{event.eventType}</span>
                    <h4>{event.title}</h4>
                    <p>{event.shortDescription}</p>
                    <div className="ylh-event-grid-meta">
                      <span><i className="fas fa-map-marker-alt"></i>{event.location}</span>
                      <span><i className="fas fa-calendar"></i>{formatFullDate(event.eventDate)}</span>
                    </div>
                    <span className="ylh-event-view-details">View Details <i className="fas fa-arrow-right"></i></span>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </section>

      <section className="ylh-container" id="past">
        <div className="ylh-col-header">
          <div>
            <p className="ylh-section-label">PAST EVENTS</p>
            <h2 className="ylh-section-title" style={{ marginBottom: 0 }}>From Our Legacy</h2>
          </div>
          {!isFiltering && <a href="#" onClick={(e) => { e.preventDefault(); setActiveFilter('Past Events'); }}>View past events →</a>}
        </div>

        {pastToShow.length === 0 ? (
          <p style={{ color: 'var(--muted-text)', padding: '20px 0 40px' }}>No past events to show yet.</p>
        ) : (
          <div className="ylh-past-events-row" style={{ marginBottom: '48px' }}>
            {pastToShow.map((event) => (
              <Link key={event._id} href={`/events/${event?.slug?.current || ''}`} className="ylh-past-event-card">
                {event.coverImage ? (
                  <img src={urlFor(event.coverImage).width(260).height(150).url()} alt={event.title} />
                ) : (
                  <div style={{ height: 110, borderRadius: 4, background: 'var(--panel-bg)', border: '1px solid var(--glass-border)', marginBottom: 10, display: 'grid', placeItems: 'center' }}>
                    <i className="fas fa-calendar-alt" style={{ color: 'var(--muted-text)' }}></i>
                  </div>
                )}
                <h5>{event.title}</h5>
                <span><i className="fas fa-calendar" style={{ marginRight: 4 }}></i>{formatFullDate(event.eventDate)}</span>
              </Link>
            ))}
          </div>
        )}

        <div className="ylh-cta-bar">
          <div className="ylh-cta-copy">
            <i className="fas fa-people-group ylh-cta-icon" aria-hidden="true"></i>
            <div>
              <h3>Be Part of the Movement</h3>
              <p>Join a growing community of passionate law students and shape the future of law together.</p>
            </div>
          </div>
          <Link href="/join" className="ylh-btn ylh-btn-primary">
            Join the Community →
          </Link>
        </div>
      </section>
    </main>
  );
}
