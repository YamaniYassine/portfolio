import React from 'react';
import { Container } from 'react-bootstrap';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { SiCarrefour } from 'react-icons/si';
import { useInView } from '../hooks/useInView';
import SectionHeader from './common/SectionHeader';
import OrgLogo from './common/OrgLogo';

/* ─── Data ──────────────────────────────────────────────── */
const EXPERIENCES = [
  {
    role: 'Founder — Full-Stack Developer & Consultant',
    org: 'Devtra',
    orgNote: 'sole proprietorship',
    location: 'Paris',
    period: 'Jun 2026 – Present',
    current: true,
    logo: { text: 'D', bg: '#0F6E56' },
    points: [
      'Design, development and maintenance of web and mobile applications for business and private clients (front-end / back-end), including database integration and deployment.',
      'Advising companies on technology choices, information-system architecture and optimisation of their digital tools.',
      'Delivered a financial-management app: MySQL model (10 tables), 20+ secured REST endpoints (OAuth2 / JWT) and KPI tracking dashboards (Angular, Chart.js).',
    ],
    tech: ['Angular', 'Node.js', 'MySQL', 'OAuth2 / JWT', 'Chart.js'],
  },
  {
    role: 'JavaScript Developer — Work-study',
    org: 'Carrefour',
    location: 'Paris',
    period: 'Jun 2023 – Jul 2024',
    logo: { icon: SiCarrefour, bg: '#ffffff', color: '#004E9F' },
    points: [
      'Integrated 10+ REST APIs (Node.js / Express) and managed data flows on the front end (Redux Toolkit, Axios).',
      'Built 15+ reusable React components, cutting development time by ~40 %.',
      '20+ Agile Scrum sprints: GitLab code reviews, Jira tickets, close collaboration with design and back-end teams.',
    ],
    tech: ['React', 'Redux Toolkit', 'Node.js', 'Express', 'GitLab', 'Jira'],
  },
];

/* ─── Component ─────────────────────────────────────────── */
const Experience = () => {
  const [sectionRef, inView] = useInView();

  return (
    <div
      ref={sectionRef}
      className="portfolio-section portfolio-section--alt section"
      id="experience"
    >
      <Container>
        <SectionHeader
          eyebrow="Experience"
          title="Where I've worked"
          subtitle="Engineering experience that shapes how I do data: versioned, reviewed, tested and delivered in sprints."
          inView={inView}
        />

        <ol className="tl">
          {EXPERIENCES.map((x, i) => (
            <li
              key={x.org}
              className={`tl-item fade-up${inView ? ' in-view' : ''}`}
              style={{ '--delay': `${0.2 + i * 0.12}s` }}
            >
              <span className={`tl-dot${x.current ? ' tl-dot--current' : ''}`} aria-hidden="true" />
              <div className="tl-card">
                <div className="tl-head">
                  <OrgLogo {...x.logo} alt={x.org} size={46} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h3 className="tl-role">{x.role}</h3>
                    <div className="tl-org">
                      <strong>{x.org}</strong>
                      {x.orgNote && <span className="tl-muted"> · {x.orgNote}</span>}
                      <span className="tl-muted tl-loc"><FaMapMarkerAlt aria-hidden="true" /> {x.location}</span>
                    </div>
                  </div>
                  <span className={`tl-period${x.current ? ' tl-period--current' : ''}`}>{x.period}</span>
                </div>

                <ul className="tl-points">
                  {x.points.map((p, j) => <li key={j}>{p}</li>)}
                </ul>

                <div className="tl-tech">
                  {x.tech.map(t => <span key={t} className="proj-tech-chip">{t}</span>)}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Container>

      <svg className="wave-divider" viewBox="0 0 1440 80" preserveAspectRatio="none">
        <path style={{ fill: 'var(--color-bg-primary)' }} d="M0,40 C240,0 480,80 720,40 C960,0 1200,80 1440,40 L1440,80 L0,80 Z" />
      </svg>
    </div>
  );
};

export default Experience;
