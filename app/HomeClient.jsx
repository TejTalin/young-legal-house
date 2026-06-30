'use client';
import Link from 'next/link';
import {
  HOME_STATS,
  HOME_FEATURES,
  MOCK_BLOGS,
  UPCOMING_EVENTS,
  INSTAGRAM_INSIGHTS,
} from '@/lib/site-data';

export default function HomeClient() {
  const recentBlogs = MOCK_BLOGS.slice(0, 4);

  return (
    <main>
      <section className="ylh-hero ylh-container">
        <div className="ylh-hero-grid">
          <div>
            <p className="ylh-hero-label">India&apos;s Elite Law Network</p>
            <h1 className="ylh-hero-title">Young Legal House</h1>
            <p className="ylh-hero-sub">
              Bridging legal education, competitions, research, and opportunity.
            </p>
            <div className="ylh-hero-actions">
              <Link href="/join" className="ylh-btn ylh-btn-primary">
                Join the Community &rarr;
              </Link>
              <Link href="/blogs" className="ylh-btn ylh-btn-outline">
                Explore Insights
              </Link>
            </div>
          </div>
          <div className="ylh-hero-image">
            <img src="/design-assets/hero-courthouse.jpg" alt="Courthouse columns" />
          </div>
        </div>
      </section>

      <section className="ylh-container">
        <div className="ylh-stats-bar">
          {HOME_STATS.map(({ icon, value, label }) => (
            <div key={label} className="ylh-stat">
              <i className={`fas ${icon}`} />
              <div className="ylh-stat-value">{value}</div>
              <div className="ylh-stat-label">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="ylh-quote">
        <div className="ylh-quote-mark">&ldquo;</div>
        <p className="ylh-quote-text">Where law students evolve into legal professionals.</p>
        <p className="ylh-quote-author">&mdash; YLH</p>
      </section>

      <section className="ylh-container ylh-three-col">
        <div>
          <div className="ylh-col-header">
            <h3><i className="fab fa-instagram" style={{ marginRight: 8 }} />Latest Legal Insights</h3>
          </div>
          <div className="ylh-insight-grid">
            {INSTAGRAM_INSIGHTS.map(({ title, image }) => (
              <div key={title} className="ylh-insight-card">
                <img src={image} alt="" />
                <span>{title}</span>
              </div>
            ))}
          </div>
          <Link href="https://www.instagram.com/younglegalhouse/" target="_blank" rel="noopener noreferrer" className="ylh-btn ylh-btn-outline ylh-btn-sm" style={{ marginTop: 16, display: 'inline-flex' }}>
            Follow us on Instagram
          </Link>
        </div>

        <div>
          <div className="ylh-col-header">
            <h3>Recent Blogs</h3>
            <Link href="/blogs">View all blogs &rarr;</Link>
          </div>
          {recentBlogs.map((blog) => (
            <Link key={blog.slug} href={`/blogs/${blog.slug}`} className="ylh-list-item">
              <img src="/design-assets/law-books.jpg" alt="" className="ylh-list-thumb" />
              <div>
                <div className="ylh-list-meta">{blog.date} &middot; {blog.readTime}</div>
                <div className="ylh-list-title">{blog.title}</div>
                <span className="ylh-list-link">Read More &rarr;</span>
              </div>
            </Link>
          ))}
          <Link href="/blogs" className="ylh-btn ylh-btn-outline ylh-btn-sm" style={{ marginTop: 16, display: 'inline-flex' }}>
            Explore All Blogs
          </Link>
        </div>

        <div>
          <div className="ylh-col-header">
            <h3>Upcoming Events</h3>
            <Link href="/events">View all events &rarr;</Link>
          </div>
          {UPCOMING_EVENTS.map((event) => (
            <Link key={event.id} href="/events" className="ylh-event-card">
              <div className="ylh-event-date">
                <div className="day">{event.date.split(' ')[0]}</div>
                <div className="month">{event.date.split(' ')[1]}</div>
              </div>
              <div>
                <div className="ylh-event-tag">{event.category}</div>
                <div className="ylh-event-title">{event.title}</div>
                <div className="ylh-event-loc">{event.location}</div>
              </div>
            </Link>
          ))}
          <Link href="/events" className="ylh-btn ylh-btn-outline ylh-btn-sm" style={{ marginTop: 8, display: 'inline-flex' }}>
            See All Events
          </Link>
        </div>
      </section>

      <section className="ylh-container ylh-about-split">
        <div>
          <h2>Building India&apos;s Strongest Legal Student Community</h2>
          <p>
            Young Legal House connects aspiring legal professionals with knowledge,
            competitions, events, and a network that takes law seriously.
          </p>
          <Link href="/about" className="ylh-btn ylh-btn-outline">
            Know More About Us &rarr;
          </Link>
        </div>
        <div className="ylh-feature-grid">
          {HOME_FEATURES.map(({ icon, title, text }) => (
            <div key={title} className="ylh-feature-box">
              <i className={`fas ${icon}`} />
              <h4>{title}</h4>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="ylh-container">
        <div className="ylh-newsletter-bar">
          <div>
            <h3>Stay Updated</h3>
            <p>Get the latest legal insights and event updates delivered to your inbox.</p>
          </div>
          <form className="ylh-newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit" className="ylh-btn ylh-btn-primary ylh-btn-sm">Subscribe</button>
          </form>
        </div>
      </section>
    </main>
  );
}
