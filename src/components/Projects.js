import React from 'react';
import { Container } from 'react-bootstrap';
import { FaGithub, FaFileAlt } from 'react-icons/fa';
import { useInView } from '../hooks/useInView';
import SectionHeader from './common/SectionHeader';
import pdfhome    from '../assets/PdfHome.png';
import devopshome from '../assets/DevOps-Home.png';

/* ─── Data ──────────────────────────────────────────────── */
const PROJECTS = [
  {
    number: '01', tag: 'Full-Stack · DevOps',
    title: 'Jeu Concours — TheTipTop',
    desc: 'A contest web platform for the tea company TheTipTop, featuring three user roles with separate dashboards and a full DevOps pipeline from development to production.',
    highlights: [
      '3 user roles with separate dashboards',
      'CI/CD automation with Docker & Jenkins',
      'Live monitoring via Prometheus & Grafana',
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'Docker', 'Jenkins', 'Bootstrap'],
    image: devopshome,
    github: 'https://github.com/YamaniYassine/DevOps',
    demo: '/portfolio/TheTipTop-documentation.pdf',
    imgBg: 'linear-gradient(135deg,#1a1a2e,#16213e)',
    reverse: false,
  },
  {
    number: '02', tag: 'Web App · Python',
    title: 'PDF Editor Web App',
    desc: 'A browser-based PDF editing tool allowing users to annotate, merge, delete pages and compress PDFs in real-time, built with a Python backend and a TypeScript frontend.',
    highlights: [
      'Real-time annotation & page management',
      'Merge, compress & export workflows',
      'FastAPI backend with PyMuPDF processing',
    ],
    tech: ['Next.js', 'TypeScript', 'FastAPI', 'Python', 'PyMuPDF', 'TailwindCSS'],
    image: pdfhome,
    github: 'https://github.com/YamaniYassine/PDF-editor-web-app',
    demo: '/portfolio/PDF-EDITOR-documentation.pdf',
    imgBg: 'linear-gradient(135deg,#0f2027,#203a43,#2c5364)',
    reverse: true,
  },
];

/* ─── Project card ──────────────────────────────────────── */
const ProjectCard = ({ project, inView, delay }) => (
  <div
    className={`proj-card fade-up${inView ? ' in-view' : ''}`}
    style={{ '--delay': `${delay}s`, direction: project.reverse ? 'rtl' : 'ltr' }}
  >
    {/* Image side */}
    <div className="proj-img-side" style={{ background: project.imgBg }}>
      <img src={project.image} alt={project.title} />
      <span className="proj-badge-num">Project {project.number}</span>
      <span className="proj-badge-type">{project.tag}</span>
    </div>

    {/* Content side */}
    <div className="proj-content-side">

      <div className="proj-featured-label">
        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#185FA5', display: 'inline-block' }} />
        Featured project
      </div>

      <h3 className="proj-title">{project.title}</h3>
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
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
        {project.tech.map(t => (
          <span key={t} className="proj-tech-chip">{t}</span>
        ))}
      </div>

      {/* Buttons */}
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="proj-btn-primary">
          <FaGithub style={{ fontSize: '14px' }} /> GitHub
        </a>
        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="proj-btn-secondary">
          <FaFileAlt style={{ fontSize: '13px' }} /> Documentation
        </a>
      </div>
    </div>
  </div>
);

/* ─── Main component ────────────────────────────────────── */
const Projects = () => {
  const [sectionRef, inView] = useInView();

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
          subtitle="Production projects I've designed, built and shipped end-to-end."
          inView={inView}
        />

        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.number}
            project={project}
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