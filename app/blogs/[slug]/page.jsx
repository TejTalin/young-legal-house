import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getBlogBySlug, urlFor } from '@/lib/sanity';
import { MOCK_BLOGS } from '@/lib/site-data';

export const revalidate = 60;

function formatDate(dateStr) {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

function renderBlockText(block) {
  if (!block?.children) return '';
  return block.children.map((child) => child.text || '').join('');
}

export default async function BlogDetailPage({ params }) {
  const sanityBlog = await getBlogBySlug(params.slug);
  const fallbackBlog = MOCK_BLOGS.find((item) => item.slug === params.slug);
  const blog = sanityBlog || fallbackBlog;

  if (!blog) {
    notFound();
  }

  const title = blog.title;
  const category = blog.category || 'Legal Insight';
  const contentType = blog.contentType || 'Article';
  const author = blog.author || 'YLH Contributor';
  const publishedAt = blog.publishedAt ? formatDate(blog.publishedAt) : blog.date;
  const body = Array.isArray(blog.body) ? blog.body : [];

  return (
    <main>
      <section className="ylh-page-hero ylh-container">
        <div className="ylh-breadcrumb"><Link href="/">Home</Link> &gt; <Link href="/blogs">Blogs</Link> &gt; {category}</div>
        <h1 className="ylh-page-title" style={{ maxWidth: 920 }}>{title}</h1>
        <p className="ylh-page-sub">
          By <strong>{author}</strong>
          {blog.authorCollege && <span> &middot; {blog.authorCollege}</span>}
          {publishedAt && <span> &middot; {publishedAt}</span>}
        </p>
        <div className="ylh-page-hero-bg">
          <img src="/design-assets/law-library.jpg" alt="" />
        </div>
      </section>

      <section className="ylh-container" style={{ maxWidth: '940px', paddingBottom: 64 }}>
        <Link href="/blogs" className="ylh-btn ylh-btn-outline ylh-btn-sm" style={{ marginBottom: 20 }}>
          &larr; Back to Blogs
        </Link>

        <article className="ylh-card" style={{ padding: 'clamp(24px, 5vw, 48px)' }}>
          <div style={{ marginBottom: 18 }}>
            <span className="ylh-tag-featured">{contentType}</span>
            <span className="ylh-tag">{category}</span>
          </div>

          {sanityBlog?.coverImage ? (
            <img
              src={urlFor(blog.coverImage).width(1200).height(560).url()}
              alt={title}
              style={{ width: '100%', borderRadius: 4, marginBottom: 28, filter: 'grayscale(60%)' }}
            />
          ) : (
            <img
              src="/design-assets/emblem-scales.jpg"
              alt=""
              style={{ width: '100%', maxHeight: 360, objectFit: 'cover', borderRadius: 4, marginBottom: 28, filter: 'grayscale(90%)' }}
            />
          )}

          <div style={{ color: 'var(--ylh-gray-300)', lineHeight: 1.95, fontSize: '1rem' }}>
            {body.map((block, index) => {
              const text = typeof block === 'string' ? block : renderBlockText(block);
              if (!text?.trim()) return null;
              return (
                <p key={block._key || index} style={{ marginBottom: 18 }}>
                  {text}
                </p>
              );
            })}
          </div>
        </article>
      </section>
    </main>
  );
}
