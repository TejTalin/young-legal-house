'use client';
import { useState } from 'react';
import Link from 'next/link';
import { MOCK_BLOGS, BLOG_CATEGORIES } from '@/lib/site-data';

export default function BlogsClient({ blogs = [] }) {
  const [activeCategory, setActiveCategory] = useState('All Blogs');
  const [searchQuery, setSearchQuery] = useState('');

  const allBlogs = blogs.length > 0
    ? blogs.map((b) => ({
        slug: b.slug?.current || b._id,
        title: b.title,
        category: b.category || 'Corporate Law',
        readTime: '5 min read',
        author: b.author || 'YLH Contributor',
        date: b.publishedAt ? new Date(b.publishedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }) : '',
        excerpt: b.excerpt || '',
        featured: false,
      }))
    : MOCK_BLOGS;

  const featured = allBlogs.find((b) => b.featured) || allBlogs[0];
  const rest = allBlogs.filter((b) => b.slug !== featured?.slug);

  const filtered = rest.filter((blog) => {
    const matchCat = activeCategory === 'All Blogs' || blog.category === activeCategory;
    const matchSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <main>
      <section className="ylh-page-hero ylh-container">
        <div className="ylh-breadcrumb"><Link href="/">Home</Link> &gt; Blogs</div>
        <h1 className="ylh-page-title">Blogs &amp; Articles</h1>
        <p className="ylh-page-sub">
          Explore peer-written articles, research papers, and legal insights contributed by students and professionals.
        </p>
        <div className="ylh-page-hero-bg">
          <img src="/design-assets/hero-courthouse.jpg" alt="" />
        </div>
      </section>

      <section className="ylh-container">
        <div className="ylh-stats-bar" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {[
            { value: '150+', label: 'Articles Published' },
            { value: '12+', label: 'Legal Domains' },
            { value: '50+', label: 'Student Contributors' },
            { value: '8K+', label: 'Readers' },
          ].map(({ value, label }) => (
            <div key={label} className="ylh-stat">
              <div className="ylh-stat-value">{value}</div>
              <div className="ylh-stat-label">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="ylh-container">
        <div className="ylh-filters">
          {BLOG_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`ylh-filter-pill${activeCategory === cat ? ' active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
          <div className="ylh-search">
            <i className="fas fa-search" />
            <input
              type="text"
              placeholder="Search blogs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="ylh-blog-layout">
          <div>
            {featured && (
              <Link href={`/blogs/${featured.slug}`} className="ylh-featured-blog" style={{ textDecoration: 'none', color: 'inherit' }}>
                <img src="/design-assets/emblem-scales.jpg" alt="" />
                <div className="ylh-featured-content">
                  <div>
                    <span className="ylh-tag-featured">Featured</span>
                    <span className="ylh-tag">{featured.category} &middot; {featured.readTime}</span>
                  </div>
                  <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '12px 0', lineHeight: 1.3 }}>{featured.title}</h2>
                  <p style={{ color: 'var(--ylh-gray-300)', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: 16 }}>{featured.excerpt}</p>
                  <span style={{ fontSize: '0.82rem', color: 'var(--ylh-gray-500)' }}>{featured.author} &middot; {featured.date}</span>
                  <div style={{ marginTop: 12, fontSize: '0.82rem' }}>Read More &rarr;</div>
                </div>
              </Link>
            )}

            <div className="ylh-blog-grid">
              {filtered.map((blog) => (
                <Link key={blog.slug} href={`/blogs/${blog.slug}`} className="ylh-blog-card">
                  <img src="/design-assets/law-books.jpg" alt="" />
                  <div className="ylh-blog-card-body">
                    <span className="ylh-tag">{blog.category} &middot; {blog.readTime}</span>
                    <h3 style={{ fontSize: '0.95rem', fontWeight: 600, margin: '8px 0', lineHeight: 1.4 }}>{blog.title}</h3>
                    <span style={{ fontSize: '0.78rem', color: 'var(--ylh-gray-500)' }}>{blog.author} &middot; {blog.date}</span>
                    <div style={{ marginTop: 8, fontSize: '0.78rem', color: 'var(--ylh-gray-500)' }}>Read More &rarr;</div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="ylh-pagination">
              <button type="button">&lsaquo;</button>
              {[1, 2, 3, 4, 5].map((n) => (
                <span key={n} className={n === 1 ? 'active' : ''}>{n}</span>
              ))}
              <span>...</span>
              <span>10</span>
              <button type="button">&rsaquo;</button>
            </div>
          </div>

          <aside>
            <div className="ylh-sidebar-section">
              <h4>Popular Posts</h4>
              {allBlogs.slice(0, 5).map((blog) => (
                <Link key={blog.slug} href={`/blogs/${blog.slug}`} className="ylh-sidebar-item">
                  <img src="/design-assets/law-library.jpg" alt="" />
                  <div>
                    <span>{blog.title}</span>
                    <div style={{ fontSize: '0.72rem', color: 'var(--ylh-gray-500)', marginTop: 4 }}>{blog.date}</div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="ylh-sidebar-section">
              <h4>Latest Insights via Instagram</h4>
              <div className="ylh-insight-grid">
                {['Justice delayed is justice denied', 'Know your rights', 'Legal research tips', 'Moot court prep', 'Internship guide', 'Case analysis'].map((title) => (
                  <div key={title} className="ylh-insight-card">
                    <img src="/design-assets/bg-network-icons.jpg" alt="" />
                    <span>{title}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="ylh-card">
              <h4 style={{ marginBottom: 8 }}>Stay Updated</h4>
              <p style={{ fontSize: '0.82rem', color: 'var(--ylh-gray-500)', marginBottom: 16 }}>Subscribe for curated legal updates.</p>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="ylh-form-group">
                  <input type="email" placeholder="Your email" required />
                </div>
                <button type="submit" className="ylh-btn ylh-btn-primary" style={{ width: '100%' }}>Subscribe</button>
              </form>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
