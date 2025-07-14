import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';

export default function PRCheckVisual({ items }) {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const containerStyle = {
    background: isDark ? '#1c1f2b' : '#ffffff',
    padding: '1.25rem 1.5rem',
    borderRadius: '10px',
    boxShadow: '0 0 18px rgba(100, 255, 255, 0.4)',
    animation: 'pulseGlow 3s infinite ease-in-out',
    fontSize: '1rem'
  };

  const itemStyle = (status) => ({
    color: status === 'pass' ? '#00cc88' : '#ff6666',
    marginBottom: '0.75rem',
    fontWeight: 600
  });

  return (
    <div style={containerStyle}>
      <h3 style={{ marginBottom: '1rem' }}>✅ PR Review Checklist</h3>
      {items.map((item, idx) => (
        <div key={idx} style={itemStyle(item.status)}>
          {item.label}
        </div>
      ))}
      <style>
        {`
          @keyframes pulseGlow {
            0%, 100% { box-shadow: 0 0 16px rgba(100, 255, 255, 0.3); }
            50% { box-shadow: 0 0 30px rgba(100, 255, 255, 0.6); }
          }
        `}
      </style>
    </div>
  );
}