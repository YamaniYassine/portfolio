import React from 'react';
import { Container } from 'react-bootstrap';
import { Si42, SiGooglecloud } from 'react-icons/si';
import { TbChartBar } from 'react-icons/tb';
import { FaPython } from 'react-icons/fa';
import { useInView } from '../hooks/useInView';
import SectionHeader from './common/SectionHeader';
import OrgLogo from './common/OrgLogo';

/*
 * Logos: each entry renders an icon or monogram tile by default.
 * To use an official logo instead, add the file to src/assets/logos/,
 * import it here and set `logo: { src: importedLogo }`.
 */

/* ─── Data ──────────────────────────────────────────────── */
const EDUCATION = [
  {
    title: 'Data Analyst',
    school: 'Liora',
    note: 'Mines Paris – PSL Executive Education certificate (in progress)',
    period: 'Oct – Dec 2026',
    current: true,
    logo: { text: 'L', bg: '#3A1F8A' },
    topics: ['Python', 'NumPy', 'Pandas', 'Dataviz', 'Advanced SQL', 'Power BI (Power Query, DAX)', 'Snowflake', 'Make', 'Machine Learning (intro)'],
  },
  {
    title: 'Full-Stack Developer',
    school: 'École 42, Paris',
    period: '2025 – 2026',
    logo: { icon: Si42, bg: '#000000', color: '#ffffff' },
  },
  {
    title: "Master's — Expert Web Architect",
    school: 'Digital School of Paris',
    period: '2023 – 2025',
    logo: { text: 'DSP', bg: '#185FA5' },
  },
];

const CERTIFICATIONS = [
  { name: 'Python for Data Analysis',       issuer: 'Liora',                               status: 'Obtained',    logo: { icon: FaPython,      bg: '#3776AB' } },
  { name: 'Google Cloud Data Analytics',     issuer: 'Google Cloud',                        status: 'In progress', logo: { icon: SiGooglecloud, bg: '#ffffff', color: '#4285F4' } },
  { name: 'PL-300 Power BI Data Analyst',    issuer: 'Microsoft · Associate',               status: 'In progress', logo: { icon: TbChartBar,    bg: '#F2C811', color: '#333' } },
];

/* ─── Component ─────────────────────────────────────────── */
const Education = () => {
  const [sectionRef, inView] = useInView();

  return (
    <div ref={sectionRef} className="portfolio-section section" id="education">
      <Container>
        <SectionHeader
          eyebrow="Education"
          title="Training & certifications"
          subtitle="A web architecture master's, then a certifying Data Analyst track to add the data side to the engineering one."
          inView={inView}
        />

        <div className="edu-grid">
          {EDUCATION.map((e, i) => (
            <article
              key={e.school}
              className={`edu-card fade-up${inView ? ' in-view' : ''}${e.current ? ' edu-card--current' : ''}`}
              style={{ '--delay': `${0.2 + i * 0.1}s` }}
            >
              <div className="edu-head">
                <OrgLogo {...e.logo} alt={e.school} size={52} />
                <span className={`tl-period${e.current ? ' tl-period--current' : ''}`}>{e.period}</span>
              </div>
              <h3 className="edu-title">{e.title}</h3>
              <div className="edu-school">{e.school}</div>
              {e.note && <div className="edu-note">{e.note}</div>}
              {e.topics && (
                <div className="edu-topics">
                  {e.topics.map(t => <span key={t} className="proj-tech-chip">{t}</span>)}
                </div>
              )}
            </article>
          ))}
        </div>

        <div className={`fade-up${inView ? ' in-view' : ''}`} style={{ '--delay': '0.5s' }}>
          <div className="edu-cert-label">Certifications</div>
          <div className="edu-certs">
            {CERTIFICATIONS.map(c => (
              <div key={c.name} className="edu-cert">
                <OrgLogo {...c.logo} alt={c.issuer} size={38} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div className="edu-cert-name">{c.name}</div>
                  <div className="edu-cert-issuer">{c.issuer}</div>
                </div>
                <span className={`edu-cert-status${c.status === 'Obtained' ? ' done' : ''}`}>{c.status}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <svg className="wave-divider" viewBox="0 0 1440 80" preserveAspectRatio="none">
        <path style={{ fill: 'var(--color-bg-secondary)' }} d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
      </svg>
    </div>
  );
};

export default Education;
