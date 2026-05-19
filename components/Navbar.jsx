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

        {/* Logo */}
        <div className="sticky-island">
          <Link href="/" className="sticky-logo">
            <Image src="/logoylh.png" alt="Young Legal House Logo" width={104} height={104} priority />
          </Link>

          <nav className="island-nav">
            <Link href="/blogs">Blogs</Link>
            <Link href="/events">Events</Link>
            <Link href="/about">About</Link>
            <Link href="/team">Team</Link>
            <Link href="/join">Join Us</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>

        {/* Theme Toggle */}
        <button className="sticky-theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
          {isDark ? (
            <svg className="theme-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M14.5 3.2a8.5 8.5 0 1 0 6.3 12.9 8 8 0 1 1-6.3-12.9z" fill="currentColor" />
            </svg>
          ) : (
            <svg className="theme-icon" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="4.2" fill="currentColor" />
              <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M12 2.5v2.7M12 18.8v2.7M21.5 12h-2.7M5.2 12H2.5M18.7 5.3l-1.9 1.9M7.2 16.8l-1.9 1.9M18.7 18.7l-1.9-1.9M7.2 7.2 5.3 5.3" />
              </g>
            </svg>
          )}
        </button>

      </div>
    </header>
  );
}
