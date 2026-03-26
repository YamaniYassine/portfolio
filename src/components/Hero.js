import React, { useContext } from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { FaDownload, FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import profilePic from '../assets/Portrait3.png';
import { ThemeContext } from '../contexts/ThemeContext';
import { useTypingEffect } from '../hooks/useTypingEffect';

/* ─── Data ──────────────────────────────────────────────── */
const ROLES = [
  'Full-Stack Software Engineer',
  'React & Node.js Developer',
  'Angular & Spring Boot Developer',
];

const STATS = [
  { number: '1+', label: 'Years exp.'   },
  { number: '3+', label: 'Projects'     },
  { number: '10+', label: 'Technologies' },
  { number: '4',  label: 'Frameworks'   },
];

const PILLS = ['React', 'Node.js', 'Angular', 'Spring Boot', 'FastAPI'];

/* ─── Component ─────────────────────────────────────────── */
const Hero = () => {
  const { darkMode } = useContext(ThemeContext);
  const typedRole   = useTypingEffect(ROLES);

  return (
    <div className="hero-section section position-relative" id="hero">

      {/* Dot grid background */}
      <div className="hero-dot-grid" />

      <Container style={{ position: 'relative', zIndex: 1 }}>
        <Row className="align-items-center justify-content-center g-5">

          {/* ── LEFT: text ── */}
          <Col xs={12} md={7}>

            {/* 1 — Availability badge */}
            <div className="mb-3 hr1">
              <span className="hero-avail">
                <span className="hero-avail-dot" />
                Open for collaboration
              </span>
            </div>

            {/* 2 — Name */}
            <div className="hr2">
              <h1 className="hero-name">Yamani Yassine</h1>
            </div>

            {/* 3 — Typing role */}
            <div className="hr3 mb-4">
              <span className="hero-role">
                {typedRole}
                <span className="hero-cursor" />
              </span>
            </div>

            {/* 4 — Pitch */}
            <div className="hr4">
              <p className="hero-desc">
                I build scalable web applications from concept to production — React,
                Node.js, Angular and Spring Boot with full CI/CD pipelines.
              </p>
            </div>

            {/* 5 — Location */}
            <div className="hr5">
              <span className="hero-location">
                <FaMapMarkerAlt style={{ fontSize: '12px' }} />
                Paris, France &nbsp;·&nbsp; FR / EN / AR
              </span>
            </div>

            {/* 6 — Tech pills */}
            <div className="hr6 mb-4">
              {PILLS.map(p => (
                <span key={p} className="hero-pill">{p}</span>
              ))}
            </div>

            {/* 7 — CTAs + socials */}
            <div className="hr7">
              <div className="d-flex flex-wrap gap-3 hero-buttons mb-4">
                <Button
                  variant="primary"
                  size="lg"
                  href="#projects"
                  className="hero-btn-primary"
                  style={{ fontWeight: 600, transition: 'all .2s ease' }}
                >
                  View Projects
                </Button>
                <Button
                  variant={darkMode ? 'outline-light' : 'outline-secondary'}
                  size="lg"
                  href={`${process.env.PUBLIC_URL}/YAMANI-YASSINE-CV.pdf`}
                  download="YAMANI-YASSINE-CV.pdf"
                  className="hero-btn-secondary"
                  style={{ transition: 'all .2s ease' }}
                >
                  Download CV <FaDownload style={{ marginLeft: '6px' }} />
                </Button>
              </div>

              <div className="d-flex" style={{ gap: '10px' }}>
                <a href="https://github.com/YamaniYassine"            target="_blank" rel="noopener noreferrer" className="hero-soc" title="GitHub">  <FaGithub />   </a>
                <a href="https://www.linkedin.com/in/yamani-yassine/" target="_blank" rel="noopener noreferrer" className="hero-soc" title="LinkedIn"> <FaLinkedin /> </a>
                <a href="mailto:yamani.yassine.dev@gmail.com"                                                   className="hero-soc" title="Email">    <FaEnvelope /> </a>
              </div>
            </div>
          </Col>

          {/* ── RIGHT: photo + stats ── */}
          <Col xs={10} sm={7} md={5} className="hero-aside d-flex flex-column align-items-center gap-4">

            {/* Photo with rotating SVG ring */}
            <div style={{ position: 'relative', width: '200px', height: '200px' }}>
              <svg
                style={{ position: 'absolute', inset: '-10px', width: 'calc(100% + 20px)', height: 'calc(100% + 20px)', overflow: 'visible' }}
                viewBox="0 0 220 220"
              >
                <defs>
                  <linearGradient id="heroRingGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%"   stopColor="#185FA5" stopOpacity="0" />
                    <stop offset="50%"  stopColor="#378ADD" />
                    <stop offset="100%" stopColor="#185FA5" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <circle cx="110" cy="110" r="105" fill="none" stroke="rgba(55,138,221,0.15)" strokeWidth="1.5" />
                <circle cx="110" cy="110" r="105" fill="none" stroke="url(#heroRingGrad)" strokeWidth="2.5" strokeDasharray="130 530" strokeLinecap="round">
                  <animateTransform attributeName="transform" type="rotate" from="0 110 110" to="360 110 110" dur="6s" repeatCount="indefinite" />
                </circle>
              </svg>
              <Image
                src={profilePic}
                roundedCircle
                alt="Yamani Yassine"
                style={{
                  width: '200px', height: '200px',
                  objectFit: 'cover',
                  backgroundColor: '#DEECF8',
                  border: '3px solid var(--color-blue-bg-hover)',
                  display: 'block',
                }}
              />
            </div>

            {/* Stat cards */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', width: '100%', maxWidth: '250px' }}>
              {STATS.map(s => (
                <div key={s.label} className="hero-stat">
                  <div className="hero-stat-number">{s.number}</div>
                  <div className="hero-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>

      {/* Scroll indicator */}
      <div className="hero-scroll">
        <span className="hero-scroll-label">scroll</span>
        <span className="hero-scroll-arrow">↓</span>
      </div>
    </div>
  );
};

export default Hero;