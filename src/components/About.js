import React from 'react';
import { Container } from 'react-bootstrap';
import { useInView } from '../hooks/useInView';
import SectionHeader from './common/SectionHeader';

/* ─── Data ──────────────────────────────────────────────── */

const VALUES = [
  { label: 'Data quality',   color: '#185FA5' },
  { label: 'Reproducible',   color: '#3B6D11' },
  { label: 'Storytelling',   color: '#993C1D' },
  { label: 'Clean code',     color: '#534AB7' },
  { label: 'Agile/Scrum',    color: '#085041' },
  { label: 'CI/CD',          color: '#854F0B' },
];

const LANGUAGES = [
  { name: 'Arabic',  level: 'Native', pct: 100 },
  { name: 'French',  level: 'Fluent', pct: 95  },
  { name: 'English', level: 'Advanced', pct: 85 },
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
          title={<>From raw data<br />to clear decisions</>}
          subtitle="A dual Dev & Data profile: I build the pipelines, the analyses and the dashboards — with production-grade engineering practices."
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
                I'm a data analyst with a full-stack engineering background. After building web
                apps at Carrefour and for clients through my own company, Devtra, I trained as a
                Data Analyst with Liora (Mines Paris – PSL certificate track) to work where I enjoy
                it most: turning messy data into findings a decision-maker can act on.
              </p>
            </div>

            <div style={{ marginBottom: '14px' }}>
              <div className="about-story-label">What I build</div>
              <p className="about-story-text">
                End-to-end data work — collecting multi-source public data, cleaning it with Pandas,
                modelling it in SQL and a dbt / Snowflake star schema, then telling the story in
                Power BI. On the dev side: full-stack apps (React, Angular, Node.js, FastAPI) with
                CI/CD, from a contest platform to a financial-tracking app with KPI dashboards.
              </p>
            </div>

            <div style={{ marginBottom: '14px' }}>
              <div className="about-story-label">How I work</div>
              <p className="about-story-text">
                I treat analyses like software: versioned in Git, every cleaning step documented
                and justified, quality checks before and after, and never a missing value silently
                turned into a zero. 20+ Agile sprints taught me to deliver in small, reviewable steps.
              </p>
            </div>

            <div className="about-divider" />

            {/* Currently exploring */}
            <div className="about-exploring">
              <div className="about-exploring-icon">→</div>
              <div>
                <div className="about-exploring-label">Currently exploring</div>
                <div className="about-exploring-text">
                  Google Cloud Data Analytics and Microsoft PL-300 (Power BI) certifications,
                  and industrialising my healthcare HR project into a dbt / Snowflake data mart.
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