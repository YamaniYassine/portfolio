import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { FaGithub, FaFileAlt } from 'react-icons/fa';
import { useInView } from '../hooks/useInView';
import SectionHeader from './common/SectionHeader';
import pdfhome      from '../assets/PdfHome.png';
import devopshome   from '../assets/DevOps-Home.png';
import healthChart  from '../assets/HealthHR-Chart.png';

const DOC = (file) => `${process.env.PUBLIC_URL}/${file}`;

/* ─── Data ──────────────────────────────────────────────── */
const PROJECTS = [
  {
    number: '01', category: 'data', tag: 'Data Analysis · Python',
    title: 'HR Fragility Signals in French Healthcare',
    context: 'Capstone project — Data Analyst track, Liora · team of 3 (lead on Python scripting)',
    desc: 'Economic pressure, work organisation and occupational health: which HR fragility signals show up in French hospitals? Six heterogeneous public datasets (DREES, Assurance Maladie, France Travail) controlled, cleaned, harmonised and explored to answer it.',
    highlights: [
      '6 open-data sources, 300k+ raw rows → clean, typed, documented tables',
      'Reusable report(df) data-dictionary function run before and after every cleaning step',
      'Key finding: 78 % of healthcare hiring projects judged difficult in 2023, vs 35 % in 2016',
      'Hospital occupational-disease sick days +80 % since 2015; recognised mental disorders ×9',
    ],
    tech: ['Python', 'Pandas', 'NumPy', 'Seaborn', 'Matplotlib', 'Plotly', 'SQL', 'Power BI'],
    image: healthChart,
    imageFit: 'contain',
    links: [
      { kind: 'doc', label: 'Report (part 1)', href: DOC('HealthHR-Data-documentation.pdf') },
    ],
    imgBg: '#ffffff',
  },
  {
    number: '02', category: 'data', tag: 'Analytics Engineering', status: 'In progress',
    title: 'ELT Pipeline & HR Data Mart',
    context: 'Personal project — industrialising the healthcare project',
    desc: 'Taking the hospital HR analysis from notebooks to a production-style stack: raw sources loaded into Snowflake, versioned ELT transformations with dbt, and a star-schema data mart feeding a refreshable Power BI report.',
    highlights: [
      'Raw → staging → marts layers, versioned with dbt',
      'Star schema: facts (headcount, sick leave, claims) × dimensions (sector, territory, year)',
      'Git + GitHub Actions for versioning and CI; Power BI connected to the mart for refreshable HR reporting',
    ],
    tech: ['Snowflake', 'dbt', 'SQL', 'Python', 'GitHub Actions', 'Power BI'],
    diagram: true,
    links: [],
    imgBg: 'linear-gradient(135deg,#0b2a3c,#114a63)',
  },
  {
    number: '03', category: 'web', tag: 'Full-Stack · DevOps',
    title: 'Jeu Concours — TheTipTop',
    desc: 'A contest web platform for the tea company TheTipTop, featuring three user roles with separate dashboards and a full DevOps pipeline from development to production.',
    highlights: [
      '3 user roles with separate dashboards',
      'CI/CD automation with Docker & Jenkins',
      'Live monitoring via Prometheus & Grafana',
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'Docker', 'Jenkins', 'Bootstrap'],
    image: devopshome,
    links: [
      { kind: 'github', label: 'GitHub',        href: 'https://github.com/YamaniYassine/DevOps' },
      { kind: 'doc',    label: 'Documentation', href: DOC('TheTipTop-documentation.pdf') },
    ],
    imgBg: 'linear-gradient(135deg,#1a1a2e,#16213e)',
  },
  {
    number: '04', category: 'web', tag: 'Web App · Python',
    title: 'PDF Editor Web App',
    desc: 'A browser-based PDF editing tool allowing users to annotate, merge, delete pages and compress PDFs in real-time, built with a Python backend and a TypeScript frontend.',
    highlights: [
      'Real-time annotation & page management',
      'Merge, compress & export workflows',
      'FastAPI backend with PyMuPDF processing',
    ],
    tech: ['Next.js', 'TypeScript', 'FastAPI', 'Python', 'PyMuPDF', 'TailwindCSS'],
    image: pdfhome,
    links: [
      { kind: 'github', label: 'GitHub',        href: 'https://github.com/YamaniYassine/PDF-editor-web-app' },
      { kind: 'doc',    label: 'Documentation', href: DOC('PDF-EDITOR-documentation.pdf') },
    ],
    imgBg: 'linear-gradient(135deg,#0f2027,#203a43,#2c5364)',
  },
];

const FILTERS = [
  { id: 'all',  label: 'All' },
  { id: 'data', label: 'Data' },
  { id: 'web',  label: 'Web & DevOps' },
];

/* ─── Star-schema illustration (for projects without a screenshot) ─── */
const StarSchema = () => {
  const dims = [
    { x: 70,  y: 55,  label: 'dim_sector' },
    { x: 330, y: 55,  label: 'dim_territory' },
    { x: 200, y: 232, label: 'dim_year' },
  ];
  return (
    <svg viewBox="0 0 400 280" className="proj-diagram" role="img" aria-label="Star schema: one fact table linked to sector, territory and year dimensions">
      {dims.map(d => (
        <line key={d.label} x1="200" y1="130" x2={d.x} y2={d.y} stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeDasharray="4 4" />
      ))}
      <rect x="110" y="102" width="180" height="56" rx="10" fill="#29B5E8" />
      <text x="200" y="127" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="700">fct_hr_signals</text>
      <text x="200" y="144" textAnchor="middle" fill="rgba(255,255,255,0.85)" fontSize="10">headcount · sick days · claims</text>
      {dims.map(d => (
        <g key={d.label + 'n'}>
          <rect x={d.x - 52} y={d.y - 17} width="104" height="34" rx="8" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.4)" />
          <text x={d.x} y={d.y + 4} textAnchor="middle" fill="#fff" fontSize="11" fontFamily="Menlo, monospace">{d.label}</text>
        </g>
      ))}
      <text x="200" y="272" textAnchor="middle" fill="rgba(255,255,255,0.55)" fontSize="10" letterSpacing="1">SNOWFLAKE · DBT MARTS</text>
    </svg>
  );
};

/* ─── Project card ──────────────────────────────────────── */
const ProjectCard = ({ project, index, inView, delay }) => {
  const reverse = index % 2 === 1;
  return (
    <div
      className={`proj-card fade-up${inView ? ' in-view' : ''}${reverse ? ' proj-card--reverse' : ''}`}
      style={{ '--delay': `${delay}s` }}
    >
      {/* Image side */}
      <div className={`proj-img-side${project.imageFit === 'contain' ? ' proj-img-side--contain' : ''}`} style={{ background: project.imgBg }}>
        {project.diagram
          ? <StarSchema />
          : <img src={project.image} alt={project.title} loading="lazy" />}
        <span className="proj-badge-num">Project {project.number}</span>
        <span className="proj-badge-type">{project.tag}</span>
      </div>

      {/* Content side */}
      <div className="proj-content-side">

        <div className="proj-featured-label">
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'currentColor', display: 'inline-block' }} />
          {project.category === 'data' ? 'Data project' : 'Web project'}
          {project.status && <span className="proj-status">{project.status}</span>}
        </div>

        <h3 className="proj-title">{project.title}</h3>
        {project.context && <p className="proj-context">{project.context}</p>}
        <p className="proj-desc">{project.desc}</p>

        {/* Key highlights */}
        <div style={{ marginBottom: '20px' }}>
          <div className="proj-highlights-label">Key highlights</div>
          {project.highlights.map((h, i) => (
            <div key={i} className="proj-highlight-item">
              <div className="proj-highlight-check">✓</div>
              {h}
            </div>
          ))}
        </div>

        {/* Tech chips */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: project.links.length ? '24px' : 0 }}>
          {project.tech.map(t => (
            <span key={t} className="proj-tech-chip">{t}</span>
          ))}
        </div>

        {/* Buttons */}
        {project.links.length > 0 && (
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {project.links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className={i === 0 ? 'proj-btn-primary' : 'proj-btn-secondary'}
              >
                {l.kind === 'github'
                  ? <FaGithub style={{ fontSize: '14px' }} />
                  : <FaFileAlt style={{ fontSize: '13px' }} />}
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

/* ─── Main component ────────────────────────────────────── */
const Projects = () => {
  const [sectionRef, inView] = useInView();
  const [filter, setFilter]  = useState('all');

  const visible = PROJECTS.filter(p => filter === 'all' || p.category === filter);

  return (
    <div
      ref={sectionRef}
      className="portfolio-section projects-section section"
      id="projects"
    >
      <Container>
        <SectionHeader
          eyebrow="Projects"
          title="Selected work"
          subtitle="Data analyses and applications I've designed, built and shipped end-to-end."
          inView={inView}
        />

        <div className={`proj-filters fade-up${inView ? ' in-view' : ''}`} style={{ '--delay': '0.18s' }} role="tablist" aria-label="Filter projects">
          {FILTERS.map(f => (
            <button
              key={f.id}
              type="button"
              role="tab"
              aria-selected={filter === f.id}
              className={`proj-filter${filter === f.id ? ' active' : ''}`}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
              <span className="proj-filter-count">
                {f.id === 'all' ? PROJECTS.length : PROJECTS.filter(p => p.category === f.id).length}
              </span>
            </button>
          ))}
        </div>

        {visible.map((project, i) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={i}
            inView={inView}
            delay={0.21 + i * 0.12}
          />
        ))}
      </Container>

      {/* Wave divider */}
      <svg className="wave-divider" viewBox="0 0 1440 80" preserveAspectRatio="none">
        <path
          style={{ fill: 'var(--color-bg-secondary)' }}
          d="M0,40 C360,0 1080,80 1440,40 L1440,80 L0,80 Z" />
      </svg>
    </div>
  );
};

export default Projects;
