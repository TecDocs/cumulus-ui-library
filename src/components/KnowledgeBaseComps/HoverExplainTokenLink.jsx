import React, { useState } from 'react';
import { useColorMode } from '@docusaurus/theme-common';

export default function HoverExplainTokenLink({ token, explanation }) {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const [show, setShow] = useState(false);

  const style = {
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    color: isDark ? '#00e0ff' : '#0055cc',
    textDecoration: 'underline dotted',
  };

  const tooltipStyle = {
    position: 'absolute',
    bottom: '120%',
    left: '50%',
    transform: 'translateX(-50%)',
    padding: '0.5rem',
    borderRadius: '6px',
    background: isDark ? '#222' : '#fefefe',
    color: isDark ? '#fff' : '#111',
    boxShadow: isDark
      ? '0 0 10px rgba(0,200,255,0.3)'
      : '0 0 6px rgba(0,0,0,0.1)',
    whiteSpace: 'nowrap',
    zIndex: 10,
    fontSize: '0.85rem',
    opacity: show ? 1 : 0,
    transition: 'opacity 0.3s ease-in-out',
    pointerEvents: 'none',
  };

  return (
    <span
      style={style}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {token}
      <div style={tooltipStyle}>{explanation}</div>
    </span>
  );
}