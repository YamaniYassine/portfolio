import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import { ThemeContext } from '../contexts/ThemeContext';
import { useInView } from '../hooks/useInView';
import SectionHeader from './common/SectionHeader';
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaJava,
  FaGitAlt, FaDocker, FaAngular, FaPython,
} from 'react-icons/fa';
import {
  SiMongodb, SiExpress, SiMysql, SiTypescript, SiTailwindcss,
  SiBootstrap, SiJenkins, SiJest, SiSonarqube, SiSpringboot,
  SiFigma, SiFastapi,
  SiPrometheus, SiGrafana,
} from 'react-icons/si';

/* ─── Data ──────────────────────────────────────────────── */
const CATEGORIES = [
  {
    label: 'Languages', symbol: '{ }', iconBg: '#E6F1FB', iconColor: '#185FA5',
    desc: 'Core languages I write daily across frontend, backend and scripting.',
    skills: [
      { name: 'JavaScript', icon: FaJs,         bg: '#F0DB4F', color: '#333'    },
      { name: 'Java',       icon: FaJava,       bg: '#007396', color: '#fff'    },
      { name: 'TypeScript', icon: SiTypescript, bg: '#3178C6', color: '#fff'    },
      { name: 'Python',     icon: FaPython,     bg: '#3776AB', color: '#fff'    },
      { name: 'HTML5',      icon: FaHtml5,      bg: '#E44D26', color: '#fff'    },
      { name: 'CSS3',       icon: FaCss3Alt,    bg: '#264DE4', color: '#fff'    },
    ],
  },
  {
    label: 'Frontend', symbol: '▣', iconBg: '#EEEDFE', iconColor: '#534AB7',
    desc: 'UI frameworks and styling tools I use to build responsive interfaces.',
    skills: [
      { name: 'React',     icon: FaReact,       bg: '#20232A', color: '#61DAFB' },
      { name: 'Angular',   icon: FaAngular,   bg: '#fff',    color: '#c3002f'    },
      { name: 'Tailwind',  icon: SiTailwindcss, bg: '#0EA5E9', color: '#fff'    },
      { name: 'Bootstrap', icon: SiBootstrap,   bg: '#7952B3', color: '#fff'    },
    ],
  },
  {
    label: 'Backend', symbol: '⚙', iconBg: '#EAF3DE', iconColor: '#3B6D11',
    desc: 'Server-side frameworks and APIs I use to build scalable services.',
    skills: [
      { name: 'Node.js',    icon: FaNodeJs,     bg: '#68A063', color: '#fff' },
      { name: 'Express',    icon: SiExpress,    bg: '#333',    color: '#fff' },
      { name: 'Springboot', icon: SiSpringboot, bg: '#6DB33F', color: '#fff' },
      { name: 'FastAPI',    icon: SiFastapi,    bg: '#049688', color: '#fff' },
    ],
  },
  {
    label: 'Databases', symbol: '⊞', iconBg: '#FAECE7', iconColor: '#993C1D',
    desc: 'Databases I use for persistent storage and data modelling.',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, bg: '#47A248', color: '#fff' },
      { name: 'MySQL',   icon: SiMysql,   bg: '#00758F', color: '#fff' },
    ],
  },
  {
    label: 'DevOps & Testing', symbol: '⟳', iconBg: '#FAEEDA', iconColor: '#854F0B',
    desc: 'Tools I use to automate, test, monitor and deploy production systems.',
    skills: [
      { name: 'Docker',     icon: FaDocker,     bg: '#2496ED', color: '#fff' },
      { name: 'Jenkins',    icon: SiJenkins,    bg: '#D33833', color: '#fff' },
      { name: 'Git',        icon: FaGitAlt,     bg: '#F05032', color: '#fff' },
      { name: 'Jest',       icon: SiJest,       bg: '#C21325', color: '#fff' },
      { name: 'SonarQube',  icon: SiSonarqube,  bg: '#4E9BCD', color: '#fff' },
      { name: 'Prometheus', icon: SiPrometheus, bg: '#E6522C', color: '#fff' },
      { name: 'Grafana',    icon: SiGrafana,    bg: '#F46800', color: '#fff' },
    ],
  },
  {
    label: 'Design', symbol: '✦', iconBg: '#FBEAF0', iconColor: '#993556',
    desc: 'Design tools I use to prototype and collaborate on UI/UX.',
    skills: [
      { name: 'Figma', icon: SiFigma, bg: '#F24E1E', color: '#fff' },
    ],
  },
];

/* ─── Component ─────────────────────────────────────────── */
const Skills = () => {
  const { darkMode }          = useContext(ThemeContext);
  const [sectionRef, inView]  = useInView();
  const [active, setActive]   = useState(0);
  const [panelKey, setPanelKey] = useState(0);

  const handleSelect = (i) => { setActive(i); setPanelKey(k => k + 1); };

  const currentCat = CATEGORIES[active];

  return (
    <div
      ref={sectionRef}
      className="portfolio-section portfolio-section--alt skills-section section"
      id="skills"
    >
      <Container>

        <SectionHeader
          eyebrow="Skills"
          title="My tech stack"
          subtitle="A focused set of technologies I use to build, ship and monitor production-grade applications."
          inView={inView}
        />

        {/* ── Tabbed layout ── */}
        <div
          className={`sk-layout fade-up${inView ? ' in-view' : ''}`}
          style={{ '--delay': '0.21s' }}
        >
          {/* LEFT — category nav */}
          <div className="sk-nav">
            {CATEGORIES.map((cat, i) => (
              <div
                key={cat.label}
                className={`sk-nav-item${i === active ? ' active' : ''}`}
                onClick={() => handleSelect(i)}
              >
                <div style={{
                  width: '30px', height: '30px', borderRadius: '8px', flexShrink: 0,
                  background: i === active
                    ? (darkMode ? cat.iconColor + '22' : cat.iconBg)
                    : 'var(--color-chip-bg)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '12px', fontWeight: 700,
                  color: i === active ? cat.iconColor : 'var(--color-text-muted)',
                  transition: 'all .15s',
                }}>
                  {cat.symbol}
                </div>
                <span className="sk-nav-label">{cat.label}</span>
                <span className="sk-nav-count">{cat.skills.length}</span>
              </div>
            ))}
          </div>

          {/* RIGHT — panel */}
          <div className="sk-panel">
            <div key={panelKey} className="sk-panel-anim">

              {/* Panel header */}
              <div className="sk-panel-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                  <div style={{
                    width: '34px', height: '34px', borderRadius: '9px', flexShrink: 0,
                    background: darkMode ? currentCat.iconColor + '22' : currentCat.iconBg,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '14px', fontWeight: 700, color: currentCat.iconColor,
                  }}>
                    {currentCat.symbol}
                  </div>
                  <h3 className="sk-panel-title">{currentCat.label}</h3>
                </div>
                <p className="sk-panel-desc">{currentCat.desc}</p>
              </div>

              {/* Skill chips */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {currentCat.skills.map(skill => {
                  const Icon = skill.icon;
                  return (
                    <div key={skill.name} className="sk-chip">
                      <div style={{
                        width: '26px', height: '26px', borderRadius: '6px',
                        background: skill.bg, color: skill.color,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '13px', flexShrink: 0,
                      }}>
                        <Icon />
                      </div>
                      <span className="sk-chip-name">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Wave divider */}
      <svg className="wave-divider" viewBox="0 0 1440 80" preserveAspectRatio="none">
        <path 
          style={{ fill: 'var(--color-bg-primary)' }}
          d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
      </svg>
    </div>
  );
};

export default Skills;