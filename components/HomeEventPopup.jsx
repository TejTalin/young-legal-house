'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HomeEventPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="event-popup-overlay" role="dialog" aria-modal="true" aria-label="Lex Noctis Event Popup">
      <div className="event-popup-panel">
        <button
          type="button"
          className="event-popup-close"
          aria-label="Close popup"
          onClick={() => setIsOpen(false)}
        >
          ×
        </button>

        <div className="event-popup-image-wrap">
          <Image
            src="/lex-noctis-poster.jpeg"
            alt="Lex Noctis legal trivia event poster"
            width={1024}
            height={1536}
            className="event-popup-image"
            priority
          />
        </div>

        <div className="event-popup-actions">
          <Link href="/events" className="event-popup-register" onClick={() => setIsOpen(false)}>
            Register Here
          </Link>
        </div>
      </div>
    </div>
  );
}
