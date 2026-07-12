import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getBlogBySlug, urlFor } from '@/lib/sanity';

export const revalidate = 60;

export async function generateMetadata({ params }) {
  const blog = await getBlogBySlug(params.slug);
  if (!blog) return {};
  return {
    title: `${blog.title} | Young Legal House`,
    description: blog.excerpt,
  };
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

function renderText(block) {
  if (!block?.children) return null;
  return block.children.map((child, i) => {
    let node = child.text || '';
    if (child.marks?.includes('strong')) node = <strong key={i}>{node}</strong>;
    if (child.marks?.includes('em')) node = <em key={i}>{node}</em>;
    if (child.marks?.includes('underline')) node = <u key={i}>{node}</u>;
    return <span key={i}>{node}</span>;
  });
}

// Groups consecutive bullet/number list blocks into single <ul>/<ol>, and
// renders everything else (headings, quotes, normal/justified paragraphs) as
// its own element — a small hand-rolled Portable Text renderer.
function renderBody(body) {
  if (!body?.length) return null;
  const elements = [];
  let listBuffer = [];
  let listType = null;

  const flushList = (key) => {
    if (listBuffer.length === 0) return;
    const ListTag = listType === 'number' ? 'ol' : 'ul';
    elements.push(<ListTag key={`list-${key}`}>{listBuffer}</ListTag>);
    listBuffer = [];
    listType = null;
  };

  body.forEach((block, idx) => {
    if (block._type !== 'block') return;

    if (block.listItem) {
      listType = block.listItem;
      listBuffer.push(<li key={block._key}>{renderText(block)}</li>);
      return;
    }
    flushList(idx);

    if (block.style === 'h2') {
      elements.push(<h2 key={block._key}>{renderText(block)}</h2>);
    } else if (block.style === 'h3') {
      elements.push(<h3 key={block._key}>{renderText(block)}</h3>);
    } else if (block.style === 'blockquote') {
      elements.push(<blockquote key={block._key}>{renderText(block)}</blockquote>);
    } else if (block.style === 'justify') {
      elements.push(<p key={block._key} className="ylh-justify">{renderText(block)}</p>);
    } else {
      elements.push(<p key={block._key}>{renderText(block)}</p>);
    }
  });
  flushList('end');

  return elements;
}

export default async function BlogDetailPage({ params }) {
  const blog = await getBlogBySlug(params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <main>
      <div className="ylh-container">
        <div className="ylh-article-header">
          <div className="ylh-breadcrumb">
            <Link href="/">Home</Link> &nbsp;›&nbsp; <Link href="/blogs">Blogs</Link> &nbsp;›&nbsp; {blog.category}
          </div>
          <span className="ylh-tag">{blog.contentType} · {blog.category}{blog.readTime ? ` · ${blog.readTime}` : ''}</span>
          <h1 className="ylh-page-title" style={{ marginTop: '10px' }}>{blog.title}</h1>
          <p className="ylh-article-meta">
            <span>By <strong>{blog.author}</strong>{blog.authorCollege ? `, ${blog.authorCollege}` : ''}</span>
            {blog.publishedAt && <span>{formatDate(blog.publishedAt)}</span>}
          </p>
        </div>

        {blog.coverImage && (
          <div className="ylh-article-hero-img">
            <img src={urlFor(blog.coverImage).width(1200).height(600).url()} alt={blog.title} />
          </div>
        )}

        {blog.abstract && (
          <div className="ylh-article-abstract">
            <strong style={{ fontStyle: 'normal', display: 'block', marginBottom: '6px', color: 'var(--text-color)' }}>Abstract</strong>
            {blog.abstract}
          </div>
        )}

        <div className="ylh-article-body">
          {renderBody(blog.body)}
        </div>

        {blog.bibliography?.length > 0 && (
          <div className="ylh-article-bibliography">
            <h4>Bibliography</h4>
            <ol>
              {blog.bibliography.map((entry, i) => <li key={i}>{entry}</li>)}
            </ol>
          </div>
        )}

        <div style={{ maxWidth: '720px', margin: '0 auto 60px' }}>
          <Link href="/blogs" className="ylh-btn ylh-btn-outline">← Back to all Blogs</Link>
        </div>
      </div>
    </main>
  );
}
