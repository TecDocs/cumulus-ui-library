import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';

export default function ComponentAnatomyCloud({ component, areas }) {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const boxStyle = {
    background: isDark ? '#1E1E1E' : '#FFFFFF',
    color: isDark ? '#FAFAFA' : '#111111',
    borderRadius: '12px',
    padding: '1rem',
    marginBottom: '1.5rem',
    boxShadow: isDark
      ? '0 0 12px rgba(0, 153, 255, 0.6)'
      : '0 0 8px rgba(0, 0, 0, 0.1)',
    border: isDark ? '1px solid #333' : '1px solid #DDD'
  };

  return (
    <div style={boxStyle}>
      <h3 style={{ marginBottom: '1rem' }}>{component} Anatomy</h3>
      <ul>
        {areas.map(({ label, token }) => (
          <li key={token} style={{ marginBottom: '0.6rem' }}>
            <strong>{label}</strong>: <code>{token}</code>
          </li>
        ))}
      </ul>
    </div>
  );
}