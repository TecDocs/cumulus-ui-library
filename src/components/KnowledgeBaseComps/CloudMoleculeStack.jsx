import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';

export default function CloudMoleculeStack() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const stackStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5rem',
    marginBottom: '2rem'
  };

  const tokenStyle = {
    padding: '0.5rem 1rem',
    borderRadius: '6px',
    background: isDark ? '#2D2F36' : '#E9F5FF',
    color: isDark ? '#D4F1FF' : '#0A0A0A',
    boxShadow: isDark
      ? '0 0 10px rgba(0, 255, 255, 0.5)'
      : '0 0 6px rgba(0, 0, 0, 0.08)'
  };

  return (
    <div style={stackStyle}>
      <div style={tokenStyle}>Token: --color-primary</div>
      <div style={tokenStyle}>Token: --spacing-md</div>
      <div style={{ ...tokenStyle, fontWeight: 'bold' }}>Component: Button</div>
    </div>
  );
}