import React from 'react';
import { Container } from 'react-bootstrap';
import { useInView } from '../hooks/useInView';
import SectionHeader from './common/SectionHeader';

/* ─── Data ──────────────────────────────────────────────── */

const VALUES = [
  { label: 'Clean code',  color: '#185FA5' },
  { label: 'TDD',         color: '#3B6D11' },
  { label: 'Agile/Scrum', color: '#993C1D' },
  { label: 'CI/CD',       color: '#534AB7' },
  { label: 'Monitoring',  color: '#085041' },
  { label: 'Security',    color: '#854F0B' },
];

const LANGUAGES = [
  { name: 'Arabic',  level: 'Native', pct: 100 },
  { name: 'French',  level: 'Fluent', pct: 95  },
  { name: 'English', level: 'Fluent', pct: 85  },
];

/* ─── Component ─────────────────────────────────────────── */
const About = () => {
  const [sectionRef, inView] = useInView();

  return (
    <div
      ref={sectionRef}
      className={`portfolio-section about-section section${inView ? ' ab-in' : ''}`}
      id="about"
    >
      <Container>

        <SectionHeader
          eyebrow="About me"
          title={<>Turning ideas into<br />production-ready apps</>}
          subtitle="1+ years building full-stack applications — from clean UIs to scalable backends with DevOps pipelines baked in."
          inView={inView}
        />

        {/* ── Body grid ── */}
        <div
          className="about-layout"
          style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '44px', alignItems: 'start' }}
        >
          {/* LEFT — story */}
          <div className={`fade-up${inView ? ' in-view' : ''}`} style={{ '--delay': '0.24s' }}>

            <div style={{ marginBottom: '14px' }}>
              <div className="about-story-label">Who I am</div>
              <p className="about-story-text">
                I'm a software engineer passionate about designing and delivering high-quality,
                user-focused web applications. I specialize in full-stack development across
                JavaScript and Java ecosystems — React, Angular, Node.js, Spring Boot, FastAPI.
              </p>
            </div>

            <div style={{ marginBottom: '14px' }}>
              <div className="about-story-label">What I build</div>
              <p className="about-story-text">
                I've led projects from conception to production — from a full MERN contest platform
                with CI/CD pipelines and live monitoring, to a browser-based PDF editor supporting
                real-time annotation, merging and compression built with FastAPI and Next.js.
              </p>
            </div>

            <div style={{ marginBottom: '14px' }}>
              <div className="about-story-label">How I work</div>
              <p className="about-story-text">
                I value clean communication, teamwork and Agile practices. I integrate testing
                (Jest, TDD), monitoring (Prometheus, Grafana) and code quality tools (SonarQube)
                into every workflow to ship reliable, maintainable software.
              </p>
            </div>

            <div className="about-divider" />

            {/* Currently exploring */}
            <div className="about-exploring">
              <div className="about-exploring-icon">→</div>
              <div>
                <div className="about-exploring-label">Currently exploring</div>
                <div className="about-exploring-text">
                  Cloud deployment, system design, and application security.
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — sidebar */}
          <div
            className={`about-sidebar fade-up${inView ? ' in-view' : ''}`}
            style={{ '--delay': '0.20s', display: 'flex', flexDirection: 'column', gap: '14px' }}
          >

            {/* Core values */}
            <div className="about-sidebar-card">
              <div className="about-card-label">Core values</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '7px' }}>
                {VALUES.map(v => (
                  <div key={v.label} className="about-value-pill">
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: v.color, flexShrink: 0 }} />
                    {v.label}
                  </div>
                ))}
              </div>
            </div>

            {/* Language bars */}
            <div className="about-sidebar-card">
              <div className="about-card-label">Languages</div>
              {LANGUAGES.map((l, i) => (
                <div
                  key={l.name}
                  style={{ display: 'flex', alignItems: 'center', marginBottom: i < LANGUAGES.length - 1 ? '11px' : 0 }}
                >
                  <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--color-text-primary)', width: '60px', flexShrink: 0 }}>
                    {l.name}
                  </span>
                  <div className="about-lang-bar-track">
                    <div
                      className="about-lang-bar-fill"
                      style={{ width: `${l.pct}%`, '--delay': `${0.4 + i * 0.1}s` }}
                    />
                  </div>
                  <span style={{ fontSize: '11px', color: 'var(--color-text-muted)', minWidth: '42px', textAlign: 'right' }}>
                    {l.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* Wave divider */}
      <svg className="wave-divider" viewBox="0 0 1440 80" preserveAspectRatio="none">
        <path
          style={{ fill: 'var(--color-bg-secondary)' }}
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
        />
      </svg>
    </div>
  );
};

export default About;