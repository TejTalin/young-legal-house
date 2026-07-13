'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollToTop() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (pathname === '/') {
      setVisible(false);
      return undefined;
    }

    const onScroll = () => setVisible(window.scrollY > 280);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [pathname]);

  if (pathname === '/') return null;

  return (
    <button
      type="button"
      className={`ylh-scroll-top${visible ? ' is-visible' : ''}`}
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <i className="fas fa-arrow-up" aria-hidden="true" />
    </button>
  );
}
