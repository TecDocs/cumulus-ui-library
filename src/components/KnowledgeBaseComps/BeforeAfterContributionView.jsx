import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';

export default function BeforeAfterContributionView({ before, after }) {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const containerStyle = {
    display: 'flex',
    gap: '2rem',
    flexWrap: 'wrap',
    margin: '2rem 0',
    justifyContent: 'center'
  };

  const cardStyle = {
    flex: '1 1 300px',
    padding: '1.5rem',
    borderRadius: '10px',
    background: isDark ? '#1a202e' : '#ffffff',
    color: isDark ? '#ffffff' : '#111111',
    boxShadow: '0 0 16px rgba(0, 204, 255, 0.3)',
    animation: 'pulseGlow 2.5s infinite ease-in-out',
    transition: 'all 0.3s ease'
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h3 style={{ color: '#ff4d4d' }}>{before.title}</h3>
        <ul>{before.points.map((item, i) => <li key={i}>{item}</li>)}</ul>
      </div>
      <div style={cardStyle}>
        <h3 style={{ color: '#00cc99' }}>{after.title}</h3>
        <ul>{after.points.map((item, i) => <li key={i}>{item}</li>)}</ul>
      </div>
      <style>
        {`
          @keyframes pulseGlow {
            0%, 100% { box-shadow: 0 0 16px rgba(0, 204, 255, 0.3); }
            50% { box-shadow: 0 0 28px rgba(0, 204, 255, 0.6); }
          }
        `}
      </style>
    </div>
  );
}