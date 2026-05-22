'use client';

import { useEffect, useMemo, useState } from 'react';

const BROCHURE_PATH = '/lex-noctis-brochure.pdf';

function buildSpreads(totalPages) {
  if (!totalPages) return [];
  const result = [];
  for (let page = 1; page <= totalPages; page += 1) {
    result.push([page]);
  }
  if (totalPages >= 3) {
    result[1] = [2, 3];
  }
  if (totalPages >= 5) {
    result[2] = [4, 5];
  }
  return result.filter((spread, idx, arr) => idx === 0 || (arr[idx - 1]?.[0] !== spread[0]));
}

export default function EventBrochureTile() {
  const [pageImages, setPageImages] = useState([]);
  const [spreadIndex, setSpreadIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [shareNotice, setShareNotice] = useState('');
  const [isNarrow, setIsNarrow] = useState(false);

  useEffect(() => {
    const onResize = () => setIsNarrow(window.innerWidth < 860);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    let mounted = true;

    async function loadBrochure() {
      try {
        const pdfjs = await import('pdfjs-dist/build/pdf.mjs');
        const task = pdfjs.getDocument({ url: BROCHURE_PATH, disableWorker: true });
        const pdf = await task.promise;
        const pages = [];

        for (let p = 1; p <= pdf.numPages; p += 1) {
          const page = await pdf.getPage(p);
          const viewport = page.getViewport({ scale: 1.2 });
          const canvas = document.createElement('canvas');
          const context = canvas.getContext('2d', { alpha: false });
          canvas.width = viewport.width;
          canvas.height = viewport.height;
          await page.render({ canvasContext: context, viewport }).promise;
          pages.push(canvas.toDataURL('image/jpeg', 0.95));
        }

        if (!mounted) return;
        setPageImages(pages);
      } catch (error) {
        if (!mounted) return;
        console.error('Brochure load failed:', error);
      } finally {
        if (mounted) setLoading(false);
      }
    }

    loadBrochure();
    return () => {
      mounted = false;
    };
  }, []);

  const spreads = useMemo(() => buildSpreads(pageImages.length), [pageImages.length]);
  const activeSpread = spreads[spreadIndex] || [];

  const openBrochure = () => {
    window.open(BROCHURE_PATH, '_blank', 'noopener,noreferrer');
  };

  const downloadBrochure = () => {
    const anchor = document.createElement('a');
    anchor.href = BROCHURE_PATH;
    anchor.download = 'Lex-Noctis-Event-Brochure.pdf';
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  const shareBrochure = async () => {
    const shareUrl = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'Lex Noctis - Young Legal House Event',
          text: 'Register for Lex Noctis legal trivia event.',
          url: shareUrl,
        });
        return;
      }
      await navigator.clipboard.writeText(shareUrl);
      setShareNotice('Event page link copied.');
      setTimeout(() => setShareNotice(''), 2200);
    } catch (error) {
      setShareNotice('Could not share right now.');
      setTimeout(() => setShareNotice(''), 2200);
    }
  };

  return (
    <section
      className="glass-card"
      style={{
        marginBottom: '26px',
        borderRadius: '22px',
        padding: '24px',
        animation: 'brochureReveal 0.55s ease-out',
      }}
    >
      <h2 style={{ marginBottom: '6px' }}>Event Brochure Experience</h2>
      <p style={{ color: 'var(--grey-text)', marginBottom: '16px' }}>
        Explore the official event brochure in premium booklet mode.
      </p>

      <div
        style={{
          border: '1px solid var(--glass-border)',
          background: 'var(--panel-bg)',
          borderRadius: '16px',
          padding: '14px',
          minHeight: '420px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {loading ? (
          <p style={{ color: 'var(--grey-text)' }}>Loading brochure preview...</p>
        ) : pageImages.length === 0 ? (
          <iframe
            src="/lex-noctis-brochure.pdf#toolbar=0&navpanes=0&scrollbar=0&page=1&view=FitH"
            title="Lex Noctis brochure"
            style={{
              width: '100%',
              height: '70vh',
              border: 'none',
              borderRadius: '12px',
              background: 'transparent',
            }}
          />
        ) : (
          <div
            key={spreadIndex}
            style={{
              width: '100%',
              display: 'grid',
              gridTemplateColumns: activeSpread.length === 2 && !isNarrow ? 'repeat(2, minmax(0, 1fr))' : 'minmax(0, 1fr)',
              gap: '12px',
              alignItems: 'center',
              justifyItems: 'center',
              animation: 'spreadSlide 0.35s ease',
            }}
          >
            {activeSpread.map((pageNumber) => (
              <img
                key={pageNumber}
                src={pageImages[pageNumber - 1]}
                alt={`Brochure page ${pageNumber}`}
                style={{
                  width: '100%',
                  maxWidth: activeSpread.length === 2 ? '340px' : '390px',
                  maxHeight: '74vh',
                  objectFit: 'contain',
                  borderRadius: '12px',
                  boxShadow: '0 14px 26px rgba(0,0,0,0.22)',
                }}
              />
            ))}
          </div>
        )}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '14px', gap: '12px', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <button type="button" className="glass-pill brochure-btn" onClick={openBrochure}>
            Open Brochure
          </button>
          <button type="button" className="glass-pill brochure-btn" onClick={downloadBrochure}>
            Download Brochure
          </button>
          <button type="button" className="glass-pill brochure-btn" onClick={shareBrochure}>
            Share Brochure
          </button>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            type="button"
            className="glass-pill"
            disabled={spreadIndex <= 0}
            onClick={() => setSpreadIndex((s) => Math.max(0, s - 1))}
            style={{ border: '1px solid var(--glass-border)', cursor: 'pointer', opacity: spreadIndex <= 0 ? 0.5 : 1, minWidth: '80px' }}
          >
            Prev
          </button>
          <span style={{ color: 'var(--muted-text)', fontSize: '0.9rem' }}>
            Spread {spreads.length ? spreadIndex + 1 : 0} / {spreads.length || 0}
          </span>
          <button
            type="button"
            className="glass-pill"
            disabled={spreadIndex >= spreads.length - 1}
            onClick={() => setSpreadIndex((s) => Math.min(spreads.length - 1, s + 1))}
            style={{ border: '1px solid var(--glass-border)', cursor: 'pointer', opacity: spreadIndex >= spreads.length - 1 ? 0.5 : 1, minWidth: '80px' }}
          >
            Next
          </button>
        </div>
      </div>

      {shareNotice ? (
        <p style={{ marginTop: '10px', color: 'var(--grey-text)', fontSize: '0.9rem' }}>{shareNotice}</p>
      ) : null}

      <style jsx>{`
        .brochure-btn {
          border: 1px solid var(--glass-border);
          cursor: pointer;
          transition: transform .2s ease, background .2s ease, border-color .2s ease;
          min-width: 148px;
          justify-content: center;
          background: transparent;
          color: var(--text-color);
          font-weight: 600;
        }
        .brochure-btn:hover {
          transform: translateY(-1px);
          background: var(--glass-bg);
          border-color: var(--text-color);
        }
        @keyframes spreadSlide {
          from {
            opacity: 0.25;
            transform: translateY(10px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes brochureReveal {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
