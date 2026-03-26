import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { ThemeContext } from '../contexts/ThemeContext';
import { useInView } from '../hooks/useInView';
import SectionHeader from './common/SectionHeader';

/* ─── Contact link card ─────────────────────────────────── */
const ContactCard = ({ icon: Icon, iconBg, iconColor, label, title, href }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="ct-card">
    <div style={{
      width: '44px', height: '44px', borderRadius: '11px',
      background: iconBg, color: iconColor,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexShrink: 0, fontSize: '20px',
    }}>
      <Icon />
    </div>
    <div style={{ flex: 1, minWidth: 0 }}>
      <div className="ct-card-label">{label}</div>
      <div className="ct-card-title">{title}</div>
    </div>
    <div className="ct-card-arrow">→</div>
  </a>
);

/* ─── Main component ────────────────────────────────────── */
const Contact = () => {
  const { darkMode }         = useContext(ThemeContext);
  const [sectionRef, inView] = useInView();

  return (
    <div
      ref={sectionRef}
      className="contact-section section"
      style={{ paddingBottom: '10px' }}
      id="contact"
    >
      <Container>
        <div className="ct-two-col">

          {/* ── LEFT: text ── */}
          <div>
            <SectionHeader
              eyebrow="Contact"
              title={<>Let's work<br />together</>}
              subtitle="I'm available for full-time roles and freelance projects. Whether you have a question, a proposal or just want to say hi — my inbox is always open."
              inView={inView}
            />
          </div>

          {/* ── RIGHT: cards ── */}
          <div
            className={`fade-up${inView ? ' in-view' : ''}`}
            style={{ '--delay': '0.21s', display: 'flex', flexDirection: 'column', gap: '14px' }}
          >
            {/* Row 1 — GitHub + LinkedIn side by side */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
              <ContactCard
                icon={FaGithub}
                iconBg={darkMode ? 'rgba(255,255,255,0.1)' : '#f0f0f0'}
                iconColor="var(--color-text-primary)"
                label="Code"
                title="GitHub"
                href="https://github.com/YamaniYassine"
              />
              <ContactCard
                icon={FaLinkedin}
                iconBg="var(--color-blue-bg)"
                iconColor="#185FA5"
                label="Network"
                title="LinkedIn"
                href="https://www.linkedin.com/in/yamani-yassine/"
              />
            </div>

            {/* Row 2 — Email CTA full width */}
            <div className="ct-cta">
              <div>
                <div className="ct-cta-heading">Prefer email?</div>
                <div className="ct-cta-sub">I typically reply within 24 hours.</div>
              </div>
              <a href="mailto:yamani.yassine.dev@gmail.com" className="ct-cta-btn">
                <FaEnvelope style={{ fontSize: '12px' }} />
                Send an email
              </a>
            </div>
          </div>

        </div>
      </Container>
    </div>
  );
};

export default Contact;