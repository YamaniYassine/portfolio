import React from 'react';

/**
 * Square logo tile for a company / school / certification.
 *
 * Props:
 *  - src      {string}     Optional image (e.g. import logo from '../assets/logos/x.png').
 *                          When provided it takes priority — drop real logo files in
 *                          src/assets/logos/ and pass them here.
 *  - icon     {Component}  Optional react-icon used when there is no image.
 *  - text     {string}     Monogram fallback (e.g. "DSP").
 *  - bg/color {string}     Tile colours for the icon / monogram variants.
 *  - alt      {string}     Accessible name.
 */
const OrgLogo = ({ src, icon: Icon, text, bg = '#185FA5', color = '#fff', alt, size = 48 }) => {
  const style = {
    width: size, height: size, borderRadius: size * 0.25, flexShrink: 0,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    overflow: 'hidden',
  };

  if (src) {
    return (
      <div className="org-logo org-logo--img" style={style}>
        <img src={src} alt={alt} style={{ width: '82%', height: '82%', objectFit: 'contain' }} />
      </div>
    );
  }

  return (
    <div className="org-logo" style={{ ...style, background: bg, color }} role="img" aria-label={alt}>
      {Icon
        ? <Icon style={{ fontSize: size * 0.5 }} aria-hidden="true" />
        : <span style={{ fontSize: text && text.length > 2 ? size * 0.28 : size * 0.38, fontWeight: 800, letterSpacing: '-.02em' }}>{text}</span>}
    </div>
  );
};

export default OrgLogo;
