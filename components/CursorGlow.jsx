'use client';
import { useEffect, useRef } from 'react';

/**
 * CursorGlow
 * Renders a soft radial spotlight that follows the mouse cursor.
 * Pure CSS + requestAnimationFrame — no Framer Motion needed here.
 * Drop this once in RootLayout, inside <body>.
 */
export default function CursorGlow() {
  const glowRef = useRef(null);
  const pos     = useRef({ x: -400, y: -400 });
  const rafRef  = useRef(null);

  useEffect(() => {
    // Respect reduced-motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const el = glowRef.current;
    if (!el) return;

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const tick = () => {
      el.style.transform = `translate(${pos.current.x - 300}px, ${pos.current.y - 300}px)`;
      rafRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('pointermove', onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div ref={glowRef} className="ylh-cursor-glow" aria-hidden="true" />
      <style>{`
        .ylh-cursor-glow {
          position: fixed;
          top: 0;
          left: 0;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
          will-change: transform;
          background: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.045) 0%,
            rgba(255, 255, 255, 0.012) 40%,
            transparent 70%
          );
          mix-blend-mode: screen;
          transition: opacity 0.4s ease;
        }

        body.light-mode .ylh-cursor-glow {
          background: radial-gradient(
            circle,
            rgba(0, 0, 0, 0.028) 0%,
            rgba(0, 0, 0, 0.008) 40%,
            transparent 70%
          );
          mix-blend-mode: multiply;
        }

        @media (prefers-reduced-motion: reduce) {
          .ylh-cursor-glow { display: none; }
        }

        @media (pointer: coarse) {
          /* Hide on touch devices — no cursor */
          .ylh-cursor-glow { display: none; }
        }
      `}</style>
    </>
  );
}
