import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const SOCIALS = [
  { href: 'https://github.com/YamaniYassine',            icon: FaGithub,   title: 'GitHub'   },
  { href: 'https://www.linkedin.com/in/yamani-yassine/', icon: FaLinkedin, title: 'LinkedIn' },
  { href: 'mailto:yamani.yassine.dev@gmail.com',         icon: FaEnvelope, title: 'Email'    },
];

const Footer = () => {
  return (
    <footer className="footer-root">

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