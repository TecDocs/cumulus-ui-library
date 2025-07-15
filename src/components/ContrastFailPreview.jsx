import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';

export default function ContrastFailPreview({ fail, pass }) {
  const { colorMode } = useColorMode();

  const containerStyle = {
    display: 'flex',
    gap: '1rem',
    marginBottom: '2rem',
    flexWrap: 'wrap',
  };

  const boxStyle = (text, bg) => ({
    backgroundColor: bg,
    color: text,
    padding: '1rem',
    borderRadius: '0.75rem',
    width: '45%',
    minHeight: '100px',
    boxShadow: '0 0 6px rgba(0,0,0,0.15)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
  });

  return (
    <div style={containerStyle}>
      <div style={boxStyle(fail.text, fail.bg)}>
        <strong>{fail.label}</strong>
        <p>Fails contrast requirements</p>
      </div>
      <div style={boxStyle(pass.text, pass.bg)}>
        <strong>{pass.label}</strong>
        <p>Passes WCAG 2.1 AA</p>
      </div>
    </div>
  );
}
