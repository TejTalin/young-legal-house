'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isDark, setIsDark] = useState(true);

  // Load saved theme on mount
  useEffect(() => {
    const saved = localStorage.getItem('ylh_theme');
    const dark = saved !== 'light';
    setIsDark(dark);
    document.body.classList.remove('dark-mode', 'light-mode');
    document.body.classList.add(dark ? 'dark-mode' : 'light-mode');
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.body.classList.remove('dark-mode', 'light-mode');
    document.body.classList.add(next ? 'dark-mode' : 'light-mode');
    localStorage.setItem('ylh_theme', next ? 'dark' : 'light');
  };

  return (
    <header className="navbar ylh-header" id="mainNav">
      <div className="ylh-header-inner">

        <div className="sticky-island">
          <Link href="/" className="sticky-logo">
            <Image src="/logoylh.png" alt="Young Legal House Logo" width={124} height={124} priority />
          </Link>

          <nav className="island-nav">
            <Link href="/">Home</Link>
            <Link href="/blogs">Blogs</Link>
            <Link href="/events">Events</Link>
            <Link href="/about">About</Link>
            <Link href="/team">Team</Link>
            <Link href="/join">Join Us</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>

        <button className="sticky-theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
          {isDark ? (
            <svg className="theme-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15.3 3.4a8.6 8.6 0 1 0 5.3 13.2A7.7 7.7 0 1 1 15.3 3.4z" fill="currentColor" />
            </svg>
          ) : (
            <svg className="theme-icon" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="4.2" fill="currentColor" />
              <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M12 2.2v2.7M12 19.1v2.7M21.8 12h-2.7M4.9 12H2.2M18.9 5.1l-1.9 1.9M7 17l-1.9 1.9M18.9 18.9l-1.9-1.9M7 7l-1.9-1.9" />
              </g>
            </svg>
          )}
        </button>

      </div>
    </header>
  );
}
