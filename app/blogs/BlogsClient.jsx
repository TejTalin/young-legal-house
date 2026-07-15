'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import { urlFor } from '@/lib/sanity';

const CATEGORY_PILLS = [
  { label: 'All Blogs', value: 'All' },
  { label: 'Corporate Law', value: 'Corporate' },
  { label: 'Constitutional Law', value: 'Constitutional Law' },
  { label: 'Criminal Law', value: 'Criminal Law' },
  { label: 'International Law', value: 'International Law' },
  { label: 'IPR', value: 'IPR' },
  { label: 'Tax Law', value: 'Tax' },
  { label: 'ADR', value: 'ADR' },
];
const MORE_CATEGORIES = [
  { label: 'TMT', value: 'TMT' },
  { label: 'Litigation', value: 'Litigation' },
  { label: 'M&A', value: 'M&A' },
  { label: 'Others', value: 'Others' },
];
const CONTENT_TYPES = ['All Types', 'Article', 'Case Commentary', 'Legislation Update', 'Research Paper'];

const PAGE_SIZE = 7; // 1 featured + 6 grid cards per page

function formatDate(dateStr) {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
}

function BlogImage({ blog, className, width = 600, height = 300 }) {
  if (blog.coverImage) {
    return (
      <img
        src={urlFor(blog.coverImage).width(width).height(height).url()}
        alt={blog.title}
        className={className}
      />
    );
  }
  return (
    <div className={className} style={{ display: 'grid', placeItems: 'center', background: 'var(--panel-bg)' }}>
      <i className="fas fa-newspaper" style={{ fontSize: '1.6rem', color: 'var(--muted-text)' }}></i>
    </div>
  );
}

export default function BlogsClient({ blogs, popularBlogs, insights }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeContentType, setActiveContentType] = useState('All Types');
  const [searchQuery, setSearchQuery] = useState('');
  const [moreOpen, setMoreOpen] = useState(false);
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return blogs.filter((blog) => {
      const matchCat = activeCategory === 'All' || blog.category === activeCategory;
      const matchType = activeContentType === 'All Types' || blog.contentType === activeContentType;
      const q = searchQuery.trim().toLowerCase();
      const matchSearch = !q || blog.title.toLowerCase().includes(q) || blog.excerpt?.toLowerCase().includes(q);
      return matchCat && matchType && matchSearch;
    });
  }, [blogs, activeCategory, activeContentType, searchQuery]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pageItems = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const featured = pageItems[0];
  const rest = pageItems.slice(1);

  const selectCategory = (value) => { setActiveCategory(value); setPage(1); };
  const selectContentType = (value) => { setActiveContentType(value); setPage(1); };
  const updateSearch = (value) => { setSearchQuery(value); setPage(1); };

  return (
    <main>
      <section className="ylh-page-hero ylh-page-hero--fullbleed">
        <div className="ylh-page-hero-shell ylh-page-hero--left ylh-page-hero-shell--fullbleed">
          <div className="ylh-page-hero-copy">
            <div className="ylh-breadcrumb">
              <Link href="/">Home</Link> &nbsp;›&nbsp; Blogs
            </div>
            <h1 className="ylh-page-title">Blogs &amp; Articles</h1>
            <p className="ylh-page-sub">
              In-depth perspectives, analyses, and updates across every major domain of law.
            </p>
          </div>
          <div className="ylh-page-hero-bg">
            <img src="/design-assets/blogs-page.png" alt="" />
          </div>
        </div>
      </section>

      <section className="ylh-container">
        <div className="ylh-stats-bar">
          <div className="ylh-stat">
            <i className="fas fa-file-alt"></i>
            <div className="ylh-stat-value">{blogs.length > 0 ? `${blogs.length}+` : '150+'}</div>
            <div className="ylh-stat-label">Articles Published</div>
          </div>
          <div className="ylh-stat">
            <i className="fas fa-layer-group"></i>
            <div className="ylh-stat-value">12+</div>
            <div className="ylh-stat-label">Legal Domains</div>
          </div>
          <div className="ylh-stat">
            <i className="fas fa-user-graduate"></i>
            <div className="ylh-stat-value">50+</div>
            <div className="ylh-stat-label">Student Contributors</div>
          </div>
          <div className="ylh-stat">
            <i className="fas fa-eye"></i>
            <div className="ylh-stat-value">8K+</div>
            <div className="ylh-stat-label">Readers</div>
          </div>
        </div>

        <div className="ylh-filters" style={{ position: 'relative' }}>
          {CATEGORY_PILLS.map((c) => (
            <button
              key={c.value}
              type="button"
              className={`ylh-filter-pill${activeCategory === c.value ? ' active' : ''}`}
              onClick={() => selectCategory(c.value)}
            >
              {c.label}
            </button>
          ))}
          <div style={{ position: 'relative' }}>
            <button
              type="button"
              className={`ylh-filter-pill${MORE_CATEGORIES.some(c => c.value === activeCategory) ? ' active' : ''}`}
              onClick={() => setMoreOpen((v) => !v)}
            >
              More <i className="fas fa-chevron-down" style={{ fontSize: '0.6rem', marginLeft: '4px' }}></i>
            </button>
            {moreOpen && (
              <div
                className="ylh-card"
                style={{ position: 'absolute', top: '110%', left: 0, zIndex: 10, padding: '10px', display: 'flex', flexDirection: 'column', gap: '6px', minWidth: '160px' }}
              >
                {MORE_CATEGORIES.map((c) => (
                  <button
                    key={c.value}
                    type="button"
                    className={`ylh-filter-pill${activeCategory === c.value ? ' active' : ''}`}
                    style={{ textAlign: 'left' }}
                    onClick={() => { selectCategory(c.value); setMoreOpen(false); }}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <select
            value={activeContentType}
            onChange={(e) => selectContentType(e.target.value)}
            className="ylh-filter-pill"
            style={{ cursor: 'pointer' }}
          >
            {CONTENT_TYPES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>

          <div className="ylh-search">
            <i className="fas fa-search"></i>
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => updateSearch(e.target.value)}
            />
          </div>
        </div>
      </section>

      <section className="ylh-container">
        <div className="ylh-blog-layout">
          <div>
            {pageItems.length === 0 ? (
              <p style={{ color: 'var(--muted-text)', padding: '60px 0', textAlign: 'center' }}>
                {blogs.length === 0 ? 'No blogs published yet. Check back soon!' : 'No blogs match your filters.'}
              </p>
            ) : (
              <>
                {featured && (
                  <Link href={`/blogs/${featured?.slug?.current || ''}`} className="ylh-featured-blog">
                    <BlogImage blog={featured} width={700} height={420} />
                    <div className="ylh-featured-content">
                      <div>
                        <span className="ylh-tag ylh-tag-featured">FEATURED</span>
                        <span className="ylh-tag">{featured.category} · {featured.readTime || ''}</span>
                      </div>
                      <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.9rem', fontWeight: 700, margin: '10px 0 12px' }}>
                        {featured.title}
                      </h2>
                      <p style={{ color: 'var(--grey-text)', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '16px' }}>
                        {featured.excerpt}
                      </p>
                      <p style={{ fontSize: '0.8rem', color: 'var(--muted-text)' }}>
                        {featured.author}{featured.publishedAt ? ` · ${formatDate(featured.publishedAt)}` : ''}
                      </p>
                    </div>
                  </Link>
                )}

                <div className="ylh-blog-grid">
                  {rest.map((blog) => (
                    <Link key={blog._id} href={`/blogs/${blog?.slug?.current || ''}`} className="ylh-blog-card">
                      <BlogImage blog={blog} width={400} height={160} />
                      <div className="ylh-blog-card-body">
                        <span className="ylh-tag">{blog.category} · {blog.readTime || ''}</span>
                        <h3 style={{ fontSize: '1rem', fontWeight: 600, margin: '8px 0 10px', lineHeight: 1.4 }}>
                          {blog.title}
                        </h3>
                        <p style={{ fontSize: '0.78rem', color: 'var(--muted-text)' }}>
                          {blog.author}{blog.publishedAt ? ` · ${formatDate(blog.publishedAt)}` : ''}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </>
            )}

            {totalPages > 1 && (
              <div className="ylh-pagination">
                <button type="button" onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}>
                  <i className="fas fa-arrow-left"></i>
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <span
                    key={p}
                    className={p === page ? 'active' : ''}
                    onClick={() => setPage(p)}
                    style={{ cursor: 'pointer' }}
                  >
                    {p}
                  </span>
                ))}
                <button type="button" onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page === totalPages}>
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            )}
          </div>

          <aside>
            <div className="ylh-sidebar-section">
              <h4>Popular Posts</h4>
              {popularBlogs.length === 0 ? (
                <p style={{ fontSize: '0.8rem', color: 'var(--muted-text)' }}>Nothing published yet.</p>
              ) : (
                popularBlogs.map((blog) => (
                  <Link key={blog._id} href={`/blogs/${blog?.slug?.current || ''}`} className="ylh-sidebar-item">
                    <BlogImage blog={blog} width={96} height={96} />
                    <div>
                      <span>{blog.title}</span>
                      <div style={{ fontSize: '0.72rem', color: 'var(--muted-text)', marginTop: '4px' }}>
                        {blog.publishedAt ? formatDate(blog.publishedAt) : ''}{blog.readTime ? ` · ${blog.readTime}` : ''}
                      </div>
                    </div>
                  </Link>
                ))
              )}
            </div>

            <div className="ylh-sidebar-section">
              <div className="ylh-col-header" style={{ marginBottom: '16px' }}>
                <h3 style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted-text)', fontWeight: 600 }}>
                  Latest Insights <i className="fab fa-instagram" style={{ marginLeft: '4px' }}></i>
                </h3>
              </div>
              {insights.length === 0 ? (
                <p style={{ fontSize: '0.8rem', color: 'var(--muted-text)' }}>No insights posted yet.</p>
              ) : (
                <div className="ylh-insight-grid-3col">
                  {insights.map((insight) => {
                    const card = (
                      <div className="ylh-insight-card">
                        {insight.image && (
                          <img src={urlFor(insight.image).width(260).height(300).url()} alt={insight.caption} />
                        )}
                        <span>{insight.caption}</span>
                      </div>
                    );
                    return insight.instagramUrl ? (
                      <a key={insight._id} href={insight.instagramUrl} target="_blank" rel="noopener noreferrer">
                        {card}
                      </a>
                    ) : <div key={insight._id}>{card}</div>;
                  })}
                </div>
              )}
            </div>

          </aside>
        </div>
      </section>
    </main>
  );
}
