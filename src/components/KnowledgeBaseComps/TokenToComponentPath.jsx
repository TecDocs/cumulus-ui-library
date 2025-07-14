import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';

export default function TokenToComponentPath({ steps }) {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const containerStyle = {
    background: isDark ? '#10161A' : '#F5F8FA',
    color: isDark ? '#E0F7FF' : '#0A0A0A',
    padding: '1.5rem',
    borderRadius: '10px',
    marginBottom: '1.5rem',
    boxShadow: isDark
      ? '0 0 10px rgba(0, 200, 255, 0.4)'
      : '0 0 6px rgba(0, 0, 0, 0.08)'
  };

  return (
    <div style={containerStyle}>
      <ol style={{ listStyle: 'decimal', paddingLeft: '1.5rem' }}>
        {steps.map((step, index) => (
          <li key={index} style={{ marginBottom: '0.5rem' }}>
            {step}
          </li>
        ))}
      </ol>
    </div>
  );
}