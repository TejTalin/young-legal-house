'use client';
import { useState } from 'react';
import NetworkBackground from '@/components/NetworkBackground';

const CATEGORIES = ['All', 'Tax', 'TMT', 'Corporate', 'Litigation', 'M&A', 'ADR', 'IPR', 'Others'];
const CONTENT_TYPES = ['Article', 'Case Commentary', 'Legislation Update'];

const SAMPLE_BLOGS = [
  {
    id: 1,
    title: 'Understanding GST on Digital Services: A Student Perspective',
    excerpt: 'An in-depth analysis of how the Goods and Services Tax framework applies to digital and technology-based services in India, with implications for future legal practice.',
    author: 'Priya Sharma',
    date: 'May 10, 2026',
    category: 'Tax',
    contentType: 'Article',
  },
  {
    id: 2,
    title: 'Data Privacy Laws in India: Comparing PDPB with GDPR',
    excerpt: "A comparative study of India's Personal Data Protection Bill and the EU's GDPR, examining convergences, divergences, and what it means for tech companies operating in both jurisdictions.",
    author: 'Rohan Mehta',
    date: 'May 5, 2026',
    category: 'TMT',
    contentType: 'Article',
  },
  {
    id: 3,
    title: 'Shareholder Agreements in Indian Startups: Key Clauses Decoded',
    excerpt: 'Breaking down the essential clauses every law student must know when advising early-stage startups — from tag-along rights to anti-dilution provisions.',
    author: 'Anika Singh',
    date: 'April 28, 2026',
    category: 'Corporate',
    contentType: 'Case Commentary',
  },
  {
    id: 4,
    title: 'Mediation as a Tool for Commercial Dispute Resolution in India',
    excerpt: 'With the Mediation Act 2023 now in force, this piece explores how alternative dispute resolution is reshaping commercial litigation and what opportunities it creates for young lawyers.',
    author: 'Vikram Nair',
    date: 'April 20, 2026',
    category: 'ADR',
    contentType: 'Legislation Update',
  },
];

export default function BlogsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);
  const [activeContentTypes, setActiveContentTypes] = useState([]);

  const toggleContentType = (type) => {
    setActiveContentTypes(prev =>
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  const filtered = SAMPLE_BLOGS.filter(blog => {
    const matchCat = activeCategory === 'All' || blog.category === activeCategory;
    const matchType = activeContentTypes.length === 0 || activeContentTypes.includes(blog.contentType);
    const matchSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchType && matchSearch;
  });

  return (
    <>
      <NetworkBackground />
      <main className="page-spacing container">
        <h1 className="section-title">Community Publications</h1>
        <p className="form-subtitle publication-subtitle">
          Explore blogs, articles, research papers, and legal insights contributed by students,
          professionals, and members of the legal community.
        </p>

        {/* Toolbar */}
        <section className="publication-toolbar">
          <button
            className="filter-fab"
            onClick={() => setFilterOpen(!filterOpen)}
            aria-label="Open filters"
          >
            <i className="fas fa-sliders-h"></i>
          </button>

          <div className="search-container publication-search-wrap" style={{ marginBottom: 0 }}>
            <input
              type="text"
              className="blog-search publication-search"
              placeholder="Search publications by title or excerpt..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Filter Popover */}
          {filterOpen && (
            <div className="filter-popover show">
              <div className="filter-popover-head">
                <h3>Filters</h3>
                <button className="filter-close-btn" onClick={() => setFilterOpen(false)}>
                  <i className="fas fa-times"></i>
                </button>
              </div>

              <div className="filter-multi-group">
                <p>Content Type</p>
                <div className="filter-options-list">
                  {CONTENT_TYPES.map(type => (
                    <label key={type} className="filter-option-item">
                      <input
                        type="checkbox"
                        checked={activeContentTypes.includes(type)}
                        onChange={() => toggleContentType(type)}
                      />
                      {type}
                    </label>
                  ))}
                </div>
              </div>

              <div className="filter-multi-group">
                <p>Practice Area</p>
                <div className="filter-options-list">
                  {CATEGORIES.filter(c => c !== 'All').map(cat => (
                    <label key={cat} className="filter-option-item">
                      <input
                        type="checkbox"
                        checked={activeCategory === cat}
                        onChange={() => setActiveCategory(activeCategory === cat ? 'All' : cat)}
                      />
                      {cat}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Category Pills */}
        <div className="filter-container">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`filter-pill${activeCategory === cat ? ' active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Cards */}
        <div className="cards-grid publication-grid" id="blogsGrid">
          {filtered.length === 0 ? (
            <p className="loading-note">No publications found matching your filters.</p>
          ) : (
            filtered.map(blog => (
              <article key={blog.id} className="glass-card publication-card">
                <div className="card-image-wrap">
                  <div className="card-image-fallback">
                    <div>
                      <i className="fas fa-newspaper" style={{ fontSize: '2rem', marginBottom: '8px', display: 'block' }}></i>
                      <span style={{ fontSize: '0.85rem' }}>{blog.category}</span>
                    </div>
                  </div>
                </div>
                <div className="publication-card-body">
                  <div className="meta-tag-row">
                    <span className="content-type-badge">{blog.contentType}</span>
                    <span className="meta-tag">{blog.category}</span>
                  </div>
                  <h3><a href="#">{blog.title}</a></h3>
                  <p style={{ color: 'var(--grey-text)', fontSize: '0.93rem', lineHeight: '1.6', marginBottom: '12px' }}>
                    {blog.excerpt}
                  </p>
                  <p className="publication-meta-line">
                    By <strong>{blog.author}</strong> &middot; {blog.date}
                  </p>
                  <a href="#" className="action-link" style={{ display: 'inline-block', marginTop: '10px', fontSize: '0.9rem' }}>
                    Read More &rarr;
                  </a>
                </div>
              </article>
            ))
          )}
        </div>
      </main>
    </>
  );
}
