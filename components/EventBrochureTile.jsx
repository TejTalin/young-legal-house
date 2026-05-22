'use client';

import { useMemo, useState } from 'react';

const BROCHURE_URL = '/lex-noctis-brochure.pdf';

export default function EventBrochureTile() {
  const [shareMessage, setShareMessage] = useState('');
  const eventUrl = useMemo(() => {
    if (typeof window === 'undefined') return '';
    return `${window.location.origin}/events`;
  }, []);

  const handleShare = async () => {
    try {
      if (navigator.share && eventUrl) {
        await navigator.share({
          title: 'Lex Noctis - Legal Trivia',
          text: 'Join the Lex Noctis legal trivia event.',
          url: eventUrl,
        });
        setShareMessage('');
        return;
      }

      if (eventUrl) {
        await navigator.clipboard.writeText(eventUrl);
        setShareMessage('Event page link copied.');
      }
    } catch {
      setShareMessage('Could not share right now.');
    }
  };

  return (
    <section className="glass-card brochure-tile">
      <h2>Event Brochure Experience</h2>
      <p className="brochure-subtitle">Explore the official event brochure in portrait preview mode.</p>

      <div className="brochure-frame">
        <iframe
          src={`${BROCHURE_URL}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
          title="Lex Noctis Brochure"
          className="brochure-iframe"
        />
      </div>

      <div className="brochure-actions">
        <a href={BROCHURE_URL} target="_blank" rel="noreferrer" className="brochure-btn">
          Open Brochure
        </a>
        <a href={BROCHURE_URL} download className="brochure-btn">
          Download Brochure
        </a>
        <button type="button" onClick={handleShare} className="brochure-btn">
          Share Brochure
        </button>
      </div>
      {shareMessage ? <p className="brochure-share-msg">{shareMessage}</p> : null}

      <style jsx>{`
        .brochure-tile {
          margin-bottom: 22px;
          padding: 20px;
          animation: fadeIn 0.45s ease;
        }

        h2 {
          margin-bottom: 6px;
        }

        .brochure-subtitle {
          color: var(--grey-text);
          margin-bottom: 14px;
        }

        .brochure-frame {
          border: 1px solid var(--glass-border);
          border-radius: 18px;
          background: rgba(8, 12, 20, 0.18);
          padding: 10px;
          overflow: hidden;
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.04);
        }

        .brochure-iframe {
          width: 100%;
          border: 0;
          border-radius: 12px;
          background: #0f1115;
          min-height: clamp(460px, 72vh, 980px);
          display: block;
        }

        .brochure-actions {
          margin-top: 14px;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .brochure-btn {
          border: 1px solid var(--glass-border);
          background: rgba(255, 255, 255, 0.03);
          color: var(--text-color);
          border-radius: 999px;
          padding: 10px 16px;
          font-weight: 700;
          font-size: 0.95rem;
          text-decoration: none;
          cursor: pointer;
          transition: transform 0.2s ease, background-color 0.2s ease, border-color 0.2s ease;
        }

        .brochure-btn:hover {
          background: rgba(255, 255, 255, 0.09);
          border-color: rgba(255, 255, 255, 0.3);
          transform: translateY(-1px);
        }

        .brochure-share-msg {
          margin-top: 8px;
          color: var(--grey-text);
          font-size: 0.88rem;
        }

        @media (max-width: 768px) {
          .brochure-tile {
            padding: 14px;
            margin-bottom: 16px;
          }

          .brochure-frame {
            padding: 8px;
            border-radius: 14px;
          }

          .brochure-iframe {
            min-height: 70vh;
          }

          .brochure-actions {
            display: grid;
            grid-template-columns: 1fr;
          }

          .brochure-btn {
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}
