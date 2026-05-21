'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isDark, setIsDark] = useState(true);

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

        {/* Logo — left, outside pill */}
        <Link href="/" className="sticky-logo">
          <Image
            src="/logoylh.png"
            alt="Young Legal House"
            width={80}
            height={80}
            priority
            style={{ objectFit: 'contain' }}
          />
        </Link>

        {/* Center pill — all links */}
        <nav className="sticky-island">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/blogs" className="nav-link">Blogs</Link>
          <Link href="/events" className="nav-link">Events</Link>
          <Link href="/about" className="nav-link">About</Link>
          <Link href="/team" className="nav-link">Team</Link>
          <Link href="/join" className="nav-link">Join Us</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
        </nav>

        {/* Theme toggle — far right */}
        <button
          className="sticky-theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          <i className={`fas ${isDark ? 'fa-moon' : 'fa-sun'}`}></i>
        </button>

      </div>
    </header>
  );
}
