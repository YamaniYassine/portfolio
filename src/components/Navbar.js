import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import CustomToggleSwitch from './Darkmodeswitch/CustomToggleSwitch';

const NAV_LINKS = [
  { href: '#about',    label: 'About'    },
  { href: '#skills',   label: 'Skills'   },
  { href: '#projects', label: 'Projects' },
  { href: '#contact',  label: 'Contact'  },
];

const Header = () => {
  const { darkMode } = useContext(ThemeContext);
  const [scrolled,       setScrolled]       = useState(false);
  const [menuOpen,       setMenuOpen]       = useState(false);
  const [activeSection,  setActiveSection]  = useState('');

  /* Shadow on scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Close mobile menu on resize */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  /* Active section via IntersectionObserver */
  useEffect(() => {
    const ids = ['hero', 'about', 'skills', 'projects', 'contact'];
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); }),
      { rootMargin: '-40% 0px -55% 0px' }
    );
    ids.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  /* Dynamic nav background — only inline because it depends on scroll state */
  const navBg = darkMode
    ? `rgba(16,20,28,${scrolled ? '0.92' : '0.80'})`
    : `rgba(255,255,255,${scrolled ? '0.92' : '0.80'})`;

  const shadow = scrolled
    ? (darkMode ? '0 4px 24px rgba(0,0,0,0.35)' : '0 4px 24px rgba(0,0,0,0.08)')
    : 'none';

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: navBg,
      backdropFilter: 'blur(14px)',
      WebkitBackdropFilter: 'blur(14px)',
      borderBottom: '0.5px solid var(--color-nav-border)',
      boxShadow: shadow,
      transition: 'background .3s ease, box-shadow .3s ease',
    }}>

      {/* ── Main bar ── */}
      <div style={{
        maxWidth: '1200px', margin: '0 auto', padding: '0 24px',
        height: '58px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>

        {/* Brand */}
        <a href="#hero" style={{ fontSize: '15px', fontWeight: 700, letterSpacing: '-.02em',
          color: 'var(--color-text-primary)', textDecoration: 'none', transition: 'opacity .15s' }}
          onMouseEnter={e => { e.currentTarget.style.opacity = '.8'; }}
          onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}
        >
          Yamani <span style={{ color: '#185FA5' }}>Yassine</span>
        </a>

        {/* Desktop links */}
        <div className="d-none d-md-flex align-items-center" style={{ gap: '2px' }}>
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={`nb-link${activeSection === href.replace('#', '') ? ' active' : ''}`}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Toggle + hamburger */}
        <div className="d-flex align-items-center" style={{ gap: '12px' }}>
          <CustomToggleSwitch />
          <div
            className={`nb-burger d-md-none${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </div>
        </div>
      </div>

      {/* ── Mobile dropdown ── */}
      {menuOpen && (
        <div className="nb-mobile d-md-none">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={`nb-mobile-link${activeSection === href.replace('#', '') ? ' active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Header;