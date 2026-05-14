'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isDark, setIsDark] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <header className="navbar ylh-header" id="mainNav">
      <div className="ylh-header-inner">

        {/* Logo */}
        <Link href="/" className="sticky-logo">
          <Image src="/logoylh.png" alt="Young Legal House Logo" width={132} height={132} priority />
        </Link>

        {/* Center Island */}
        <div className="sticky-island">
          <Link href="/" className="island-title">YOUNG LEGAL HOUSE</Link>

          <nav className="island-nav">
            <Link href="/blogs">Blogs</Link>
            <Link href="/events">Events</Link>

            <div className="menu-wrapper" ref={dropdownRef}>
              <button
                id="menuToggleBtn"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                aria-label="Open menu"
              >
                <i className="fas fa-bars"></i>
              </button>
              <div className={`dropdown-menu${dropdownOpen ? ' show' : ''}`}>
                <Link href="/about" onClick={() => setDropdownOpen(false)}>About</Link>
                <Link href="/team" onClick={() => setDropdownOpen(false)}>Team</Link>
                <Link href="/join" onClick={() => setDropdownOpen(false)}>Join Us</Link>
                <Link href="/contact" onClick={() => setDropdownOpen(false)}>Contact</Link>
              </div>
            </div>
          </nav>
        </div>

        {/* Theme Toggle */}
        <button className="sticky-theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
          <i className={`fas ${isDark ? 'fa-moon' : 'fa-sun'}`}></i>
        </button>

      </div>
    </header>
  );
}
