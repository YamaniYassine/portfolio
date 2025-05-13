import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  const toggleVisible = () => {
    setVisible(window.scrollY > 300);
  };

  const scrollToTop = () => {
    const hero = document.getElementById('hero');
    if (hero) {
      hero.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className="scroll-to-top-btn"
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        display: visible ? 'flex' : 'none',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(var(--bs-secondary-rgb)',
        opacity: hovered ? 1 : 0.6,
        transform: hovered ? 'scale(1.1)' : 'scale(1)',
        color: '#fff',
        border: 'none',
        borderRadius: '50%',
        width: '45px',
        height: '45px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        transition: 'opacity 0.3s, transform 0.3s',
        zIndex: 1000,
        cursor: 'pointer',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label="Scroll to top"
      title="Scroll to top"
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTop;