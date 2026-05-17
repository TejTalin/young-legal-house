'use client';
import { useState, useEffect } from 'react';
import NetworkBackground from '@/components/NetworkBackground';

function Countdown() {
  const target = new Date('2026-06-06T00:00:00');

  const getTimeLeft = () => {
    const diff = target - new Date();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (n) => String(n).padStart(2, '0');

  return (
    <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap', margin: '40px 0' }}>
      {[['Days', time.days], ['Hours', time.hours], ['Minutes', time.minutes], ['Seconds', time.seconds]].map(([label, val]) => (
        <div key={label} className="glass-card" style={{ minWidth: '100px', textAlign: 'center', padding: '24px 20px' }}>
          <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 700, lineHeight: 1 }}>
            {pad(val)}
          </div>
          <div style={{ color: 'var(--grey-text)', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '8px' }}>
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function EventsPage() {
  return (
    <>
      <NetworkBackground />
      <main className="page-spacing container" style={{ textAlign: 'center' }}>
        <h1 className="section-title">Something Big is Coming</h1>
        <p style={{ color: 'var(--grey-text)', fontSize: '1.15rem', lineHeight: '1.8', maxWidth: '600px', margin: '0 auto' }}>
          Young Legal House&apos;s flagship event is almost here. Stay tuned — this is one you won&apos;t want to miss.
        </p>
        <Countdown />
        <p style={{ color: 'var(--muted-text)', fontSize: '0.95rem', marginTop: '10px' }}>
          6th June 2026 &mdash; Mark your calendar.
        </p>
      </main>
    </>
  );
}
