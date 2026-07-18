'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { href: '/',        label: 'Home'      },
  { href: '/blogs',   label: 'Insights'  },
  { href: '/events',  label: 'Events'    },
  { href: '/team',    label: 'Community' },
  { href: '/about',   label: 'About'     },
  { href: '/contact', label: 'Contact'   },
];

export default function Navbar() {
  const [isDark,    setIsDark]    = useState(true);
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const pathname                  = usePathname();

  // ── Theme init ───────────────────────────────────────────────
  useEffect(() => {
    const saved = localStorage.getItem('ylh_theme');
    const dark  = saved !== 'light';
    setIsDark(dark);
    document.body.classList.remove('dark-mode', 'light-mode');
    document.body.classList.add(dark ? 'dark-mode' : 'light-mode');
  }, []);

  // ── Scroll shrink ────────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.body.classList.remove('dark-mode', 'light-mode');
    document.body.classList.add(next ? 'dark-mode' : 'light-mode');
    localStorage.setItem('ylh_theme', next ? 'dark' : 'light');
  };

  return (
    <motion.header
      className="ylh-header"
      id="mainNav"
      data-scrolled={scrolled ? 'true' : 'false'}
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className="ylh-header-inner"
        style={{ transition: 'padding 0.35s ease' }}
      >
        {/* Logo */}
        <Link href="/" className="sticky-logo">
          <motion.div
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.22 }}
          >
            <Image
              src="/logoylh.png"
              alt="Young Legal House"
              width={scrolled ? 52 : 60}
              height={scrolled ? 52 : 60}
              priority
              className="ylh-logo-img"
              style={{ objectFit: 'contain', transition: 'width 0.35s ease, height 0.35s ease, filter 0.3s ease' }}
            />
          </motion.div>
        </Link>

        {/* Center pill */}
        <nav
          className="sticky-island"
          style={{
            boxShadow: scrolled
              ? '0 8px 32px rgba(0,0,0,0.38)'
              : 'var(--shadow)',
            transition: 'box-shadow 0.35s ease',
          }}
        >
          {NAV_LINKS.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className="nav-link"
                style={{ position: 'relative' }}
              >
                {label}
                <AnimatePresence>
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      style={{
                        position:     'absolute',
                        inset:        0,
                        borderRadius: '999px',
                        background:   'var(--glass-bg)',
                        border:       '1px solid var(--glass-border)',
                        zIndex:       -1,
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    />
                  )}
                </AnimatePresence>
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="ylh-nav-actions">
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Link href="/join" className="ylh-btn ylh-btn-primary ylh-header-cta">
              Join Community
            </Link>
          </motion.div>

          {/* Theme toggle */}
          <motion.button
            className="sticky-theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.18 }}
          >
            <AnimatePresence mode="wait">
              <motion.i
                key={isDark ? 'moon' : 'sun'}
                className={`fas ${isDark ? 'fa-moon' : 'fa-sun'}`}
                initial={{ opacity: 0, rotate: -30, scale: 0.7 }}
                animate={{ opacity: 1, rotate: 0,   scale: 1   }}
                exit={{    opacity: 0, rotate:  30,  scale: 0.7 }}
                transition={{ duration: 0.22 }}
              />
              </AnimatePresence>
            </motion.button>

          <motion.button
            className="ylh-mobile-menu-toggle"
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="ylh-mobile-menu"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
          >
            <i className={`fas ${menuOpen ? 'fa-xmark' : 'fa-bars'}`} aria-hidden="true" />
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="ylh-mobile-menu"
            className="ylh-mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link href="/" className="ylh-mobile-home" onClick={() => setMenuOpen(false)}>
              <i className="fas fa-house" aria-hidden="true" />
              <span>Home</span>
            </Link>

            <div className="ylh-mobile-links">
              {NAV_LINKS.filter(({ href }) => href !== '/').map(({ href, label }) => (
                <Link key={href} href={href} className="ylh-mobile-link" onClick={() => setMenuOpen(false)}>
                  {label}
                </Link>
              ))}
            </div>

            <Link href="/join" className="ylh-btn ylh-btn-primary ylh-mobile-cta" onClick={() => setMenuOpen(false)}>
              Join Community
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
