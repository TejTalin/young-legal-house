'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS } from '@/lib/site-data';

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

  return (
    <header className="ylh-header" id="mainNav">
      <div className="ylh-header-inner">
        <Link href="/" className="ylh-logo-text">
          <span className="logo-main">YLH</span>
          <span className="logo-sub">Young Legal House</span>
        </Link>

        <nav className="sticky-island">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`nav-link${pathname === href ? ' active' : ''}`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="ylh-nav-actions">
          <button
            className="sticky-theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            type="button"
          >
            <i className={`fas ${isDark ? 'fa-moon' : 'fa-sun'}`} />
          </button>
          <Link href="/join" className="ylh-btn ylh-btn-primary ylh-btn-sm">
            Join the Community
          </Link>
        </div>
      </div>
    </header>
  );
}
