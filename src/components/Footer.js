import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const SOCIALS = [
  { href: 'https://github.com/YamaniYassine',            icon: FaGithub,   title: 'GitHub'   },
  { href: 'https://www.linkedin.com/in/yamani-yassine/', icon: FaLinkedin, title: 'LinkedIn' },
  { href: 'mailto:yamani.yassine.dev@gmail.com',         icon: FaEnvelope, title: 'Email'    },
];

const Footer = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('cookieConsent')) setShowConsent(true);
  }, []);

  const handleConsent = (accepted) => {
    localStorage.setItem('cookieConsent', accepted ? 'accepted' : 'declined');
    setShowConsent(false);
  };

  return (
    <footer className="footer-root">

      {/* Cookie consent */}
      {showConsent && (
        <div className="footer-consent">
          <p className="footer-consent-text">
            This site uses cookies to improve your experience.
          </p>
          <div style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
            <button className="footer-btn-accept"  onClick={() => handleConsent(true)}>Accept</button>
            <button className="footer-btn-decline" onClick={() => handleConsent(false)}>Decline</button>
          </div>
        </div>
      )}

      {/* Main row */}
      <div className="footer-main">

        {/* Copyright */}
        <p className="footer-copy">
          © {new Date().getFullYear()} <span>Yamani Yassine</span> — All rights reserved.
        </p>

        {/* Social icons */}
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          {SOCIALS.map(({ href, icon: Icon, title }) => (
            <a
              key={title}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="footer-social"
              title={title}
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;