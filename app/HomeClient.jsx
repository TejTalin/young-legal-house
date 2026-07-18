'use client';
import Link from 'next/link';
import Image from 'next/image';
import PageWrapper from '@/components/PageWrapper';
import AnimatedSection from '@/components/AnimatedSection';
import StaggerGrid from '@/components/StaggerGrid';
import WordReveal from '@/components/WordReveal';
import { urlFor } from '@/lib/sanity';
import { INSTAGRAM_INSIGHTS, HOME_FEATURES } from '@/lib/site-data.js';

const BLOG_FALLBACK_IMAGE = '/design-assets/law-books.jpg';

function formatEventDay(eventDate) {
  if (!eventDate) return { day: '--', month: '' };
  const d = new Date(eventDate);
  return {
    day: d.toLocaleDateString('en-IN', { day: '2-digit' }),
    month: d.toLocaleDateString('en-IN', { month: 'short' }).toUpperCase(),
  };
}

const INSIGHT_IMAGES = [
  '/design-assets/home-insight-01.jpg',
  '/design-assets/home-insight-02.jpg',
  '/design-assets/home-insight-03.jpg',
  '/design-assets/home-insight-04.jpg',
];

export default function HomeClient({ recentBlogs = [], upcomingEvents = [] }) {
  return (
    <>
      <PageWrapper className="ylh-container">

        {/* ── HERO ── */}
        <AnimatedSection variant="fadeUp" className="ylh-hero">
          <div className="ylh-scroll-indicator">
            <span>Scroll</span>
            <span className="ylh-scroll-indicator-num">01</span>
          </div>
          <div className="ylh-hero-grid">
            <div className="ylh-hero-copy">
              <p className="ylh-hero-label">India&apos;s Elite Law Network</p>
              <WordReveal
                text="Young Legal House"
                as="h1"
                className="ylh-hero-title"
              />
              <p className="ylh-hero-sub">
                Bridging legal education, competitions, research, and opportunity.
              </p>
              <div className="ylh-hero-actions">
                <Link href="/join" className="ylh-btn ylh-btn-primary">
                  Join the Community
                </Link>
                <Link href="/blogs" className="ylh-btn ylh-btn-outline">
                  Explore Insights
                </Link>
              </div>
            </div>
            <div className="ylh-hero-image">
              <Image
                src="/design-assets/home-hero.jpg"
                alt="Young Legal House"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 600px"
              />
            </div>
          </div>
        </AnimatedSection>

        {/* ── PULL-QUOTE BANNER ── */}
        <AnimatedSection variant="fadeUp" className="ylh-quote">
          <div className="ylh-quote-mark">"</div>
          <p className="ylh-quote-text">
            Where law students evolve into legal professionals.
          </p>
          <p className="ylh-quote-author">— YLH</p>
        </AnimatedSection>

        {/* ── THREE COLUMN SECTION ── */}
        <AnimatedSection variant="fadeUp" className="ylh-three-col">
          {/* Latest Legal Insights */}
          <div>
            <div className="ylh-col-header ylh-col-header--stacked">
              <h3>Latest Legal Insights</h3>
              <span className="ylh-col-subheader">
                <i className="fab fa-instagram" aria-hidden="true" /> via Instagram
              </span>
            </div>
            <StaggerGrid className="ylh-insight-grid">
              {INSTAGRAM_INSIGHTS.map((insight, index) => (
                <Link key={index} href="/blogs" className="ylh-insight-card">
                  <Image
                    src={INSIGHT_IMAGES[index]}
                    alt={insight.title}
                    fill
                    sizes="(max-width: 768px) 50vw, 320px"
                  />
                  <span>{insight.title}</span>
                </Link>
              ))}
            </StaggerGrid>
            <Link
              href="https://www.instagram.com/younglegalhouse/"
              target="_blank"
              rel="noopener noreferrer"
              className="ylh-btn ylh-btn-outline ylh-home-column-cta"
            >
              Follow us on Instagram →
            </Link>
          </div>

          {/* Recent Blogs */}
          <div>
            <div className="ylh-col-header">
              <h3>Recent Blogs</h3>
              <Link href="/blogs">View all blogs →</Link>
            </div>
            <StaggerGrid>
              {recentBlogs.length === 0 ? (
                <p style={{ color: 'var(--muted-text)', fontSize: '0.85rem' }}>No published blogs yet.</p>
              ) : (
                recentBlogs.map((blog) => (
                  <Link key={blog._id} href={`/blogs/${blog?.slug?.current || ''}`} className="ylh-list-item">
                    <Image
                      src={blog.coverImage ? urlFor(blog.coverImage).width(112).height(112).url() : BLOG_FALLBACK_IMAGE}
                      alt={blog.title}
                      width={56}
                      height={56}
                      className="ylh-list-thumb"
                    />
                    <div>
                      <div className="ylh-list-meta">{blog.category}{blog.readTime ? ` · ${blog.readTime}` : ''}</div>
                      <div className="ylh-list-title">{blog.title}</div>
                    </div>
                  </Link>
                ))
              )}
            </StaggerGrid>
            <Link href="/blogs" className="ylh-btn ylh-btn-outline ylh-home-column-cta">
              Explore All Blogs →
            </Link>
          </div>

          {/* Upcoming Events */}
          <div>
            <div className="ylh-col-header">
              <h3>Upcoming Events</h3>
              <Link href="/events">See All Events →</Link>
            </div>
            <StaggerGrid>
              {upcomingEvents.length === 0 ? (
                <p style={{ color: 'var(--muted-text)', fontSize: '0.85rem' }}>No upcoming events right now.</p>
              ) : (
                upcomingEvents.map((event) => {
                  const { day, month } = formatEventDay(event.eventDate);
                  return (
                    <Link key={event._id} href={`/events/${event?.slug?.current || ''}`} className="ylh-event-card">
                      <div className="ylh-event-date">
                        <div className="day">{day}</div>
                        <div className="month">{month}</div>
                      </div>
                      <div>
                        <div className="ylh-event-tag">{event.eventType}</div>
                        <div className="ylh-event-title">{event.title}</div>
                        <div className="ylh-event-loc">{event.location}</div>
                      </div>
                      <i className="fas fa-arrow-right ylh-event-arrow" aria-hidden="true" />
                    </Link>
                  );
                })
              )}
            </StaggerGrid>
            <Link href="/events" className="ylh-btn ylh-btn-outline ylh-home-column-cta">
              See All Events →
            </Link>
          </div>
        </AnimatedSection>

        {/* ── ABOUT YLH TEASER ── */}
        <AnimatedSection variant="fadeUp" className="ylh-about-split">
          <div>
            <p className="ylh-hero-label">About YLH</p>
            <h2>Building India&apos;s Strongest Legal Student Community</h2>
            <p>
              At Young Legal House, we connect aspiring legal professionals with knowledge, opportunities, and a network that shapes the future of law.
            </p>
            <Link href="/about" className="ylh-btn ylh-btn-outline">
              Know More About Us →
            </Link>
          </div>
          <StaggerGrid className="ylh-feature-grid">
            {HOME_FEATURES.map((feature) => (
              <div key={feature.title} className="ylh-feature-box">
                <i className={`fas ${feature.icon}`}></i>
                <h4>{feature.title}</h4>
                <p>{feature.text}</p>
              </div>
            ))}
          </StaggerGrid>
        </AnimatedSection>

      </PageWrapper>
    </>
  );
}
