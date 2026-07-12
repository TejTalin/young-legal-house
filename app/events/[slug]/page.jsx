import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getEventBySlug, urlFor } from '@/lib/sanity';

export const revalidate = 60;

export async function generateMetadata({ params }) {
  const event = await getEventBySlug(params.slug);
  if (!event) return {};
  return {
    title: `${event.title} | Young Legal House Events`,
    description: event.shortDescription,
  };
}

function formatFullDate(dateStr) {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
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
    if (block.style === 'h2') elements.push(<h2 key={block._key}>{renderText(block)}</h2>);
    else if (block.style === 'h3') elements.push(<h3 key={block._key}>{renderText(block)}</h3>);
    else if (block.style === 'blockquote') elements.push(<blockquote key={block._key}>{renderText(block)}</blockquote>);
    else if (block.style === 'justify') elements.push(<p key={block._key} className="ylh-justify">{renderText(block)}</p>);
    else elements.push(<p key={block._key}>{renderText(block)}</p>);
  });
  flushList('end');
  return elements;
}

export default async function EventDetailPage({ params }) {
  const event = await getEventBySlug(params.slug);

  if (!event) {
    notFound();
  }

  const heroImage = event.posterImage || event.coverImage;

  return (
    <main>
      <div className="ylh-container">
        <div className="ylh-article-header">
          <div className="ylh-breadcrumb">
            <Link href="/">Home</Link> &nbsp;›&nbsp; <Link href="/events">Events</Link> &nbsp;›&nbsp; {event.title}
          </div>
          <span className="ylh-tag">{event.eventType} · {event.status === 'upcoming' ? 'Upcoming' : 'Concluded'}</span>
          <h1 className="ylh-page-title" style={{ marginTop: '10px' }}>{event.title}</h1>
          <p className="ylh-article-meta">
            <span><i className="fas fa-calendar" style={{ marginRight: 6 }}></i>{formatFullDate(event.eventDate)}</span>
            <span><i className="fas fa-map-marker-alt" style={{ marginRight: 6 }}></i>{event.location}</span>
            {event.registrationFee && <span><i className="fas fa-ticket-alt" style={{ marginRight: 6 }}></i>{event.registrationFee}</span>}
          </p>
        </div>

        {heroImage && (
          <div className="ylh-article-hero-img">
            <img src={urlFor(heroImage).width(1200).height(600).url()} alt={event.title} />
          </div>
        )}

        <div className="ylh-article-abstract" style={{ fontStyle: 'normal' }}>
          {event.shortDescription}
        </div>

        {event.body?.length > 0 && (
          <div className="ylh-article-body">
            {renderBody(event.body)}
          </div>
        )}

        {event.prizes && (
          <div className="ylh-article-bibliography">
            <h4>Prizes</h4>
            <p style={{ color: 'var(--grey-text)', fontSize: '0.9rem', lineHeight: 1.8, whiteSpace: 'pre-line' }}>{event.prizes}</p>
          </div>
        )}

        <div style={{ maxWidth: '720px', margin: '0 auto 60px', display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
          <Link href="/events" className="ylh-btn ylh-btn-outline">← Back to all Events</Link>
          {event.status === 'upcoming' && event.registrationUrl && (
            <a
              href={event.registrationUrl}
              className="ylh-btn ylh-btn-primary"
              target={event.registrationUrl.startsWith('http') ? '_blank' : undefined}
              rel={event.registrationUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              Register Now <i className="fas fa-arrow-right"></i>
            </a>
          )}
          {event.brochureUrl && (
            <a href={event.brochureUrl} className="ylh-btn ylh-btn-outline" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-file-pdf" style={{ marginRight: 6 }}></i>Brochure
            </a>
          )}
          {event.instagramUrl && (
            <a href={event.instagramUrl} className="ylh-btn ylh-btn-outline" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram" style={{ marginRight: 6 }}></i>Instagram
            </a>
          )}
          {event.reelVideoUrl && (
            <a href={event.reelVideoUrl} className="ylh-btn ylh-btn-outline" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-play" style={{ marginRight: 6 }}></i>Watch Recap
            </a>
          )}
        </div>
      </div>
    </main>
  );
}
