'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Navbar() {
  const [isDark, setIsDark] = useState(true);
  const pathname = usePathname();

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

  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    return pathname?.startsWith(href);
  };

  return (
    <header className="navbar ylh-header" id="mainNav">
      <div className="ylh-header-inner">
        <div className="sticky-island">
          <Link href="/" className="sticky-logo">
            <Image src="/logoylh.png" alt="Young Legal House Logo" width={148} height={148} priority />
          </Link>

          <nav className="island-nav">
            <Link href="/" className={isActive('/') ? 'active' : ''}>Home</Link>
            <Link href="/blogs" className={isActive('/blogs') ? 'active' : ''}>Blogs</Link>
            <Link href="/events" className={isActive('/events') ? 'active' : ''}>Events</Link>
            <Link href="/about" className={isActive('/about') ? 'active' : ''}>About</Link>
            <Link href="/team" className={isActive('/team') ? 'active' : ''}>Team</Link>
            <Link href="/join" className={isActive('/join') ? 'active' : ''}>Join Us</Link>
            <Link href="/contact" className={isActive('/contact') ? 'active' : ''}>Contact</Link>
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
