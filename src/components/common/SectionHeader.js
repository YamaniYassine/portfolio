import React from 'react';

/**
 * Reusable section header used by every section.
 * Renders the eyebrow badge, h2 title and optional subtitle paragraph.
 *
 * Props:
 *  - eyebrow   {string}  Small label inside the blue pill badge.
 *  - title     {string|ReactNode}  Main heading (supports <br/> via JSX).
 *  - subtitle  {string}  Optional muted paragraph below the title.
 *  - inView    {boolean} Drives the .fade-up.in-view animation.
 *  - align     {'left'|'center'}  Default 'left'.
 */
const SectionHeader = ({ eyebrow, title, subtitle, inView, align = 'left' }) => {
  const centered = align === 'center';

  return (
    <div style={{ textAlign: centered ? 'center' : 'left', marginBottom: subtitle ? '40px' : '24px' }}>

      {/* Eyebrow badge */}
      <div
        className={`fade-up${inView ? ' in-view' : ''}`}
        style={{ '--delay': '0s', marginBottom: '10px' }}
      >
        <span className="section-eyebrow">
          <span className="section-eyebrow-dot" />
          {eyebrow}
        </span>
      </div>

      {/* Title */}
      <h2
        className={`section-title fade-up${inView ? ' in-view' : ''}`}
        style={{ '--delay': '0.07s', marginBottom: subtitle ? '12px' : '0' }}
      >
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p
          className={`section-subtitle fade-up${inView ? ' in-view' : ''}`}
          style={{
            '--delay': '0.14s',
            maxWidth: '520px',
            marginLeft: centered ? 'auto' : undefined,
            marginRight: centered ? 'auto' : undefined,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;