import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';

const roles = [
  { emoji: '🎨', title: 'Designer', desc: 'Proposes token updates, ensures visual clarity.' },
  { emoji: '💻', title: 'Engineer', desc: 'Implements components and Storybook states.' },
  { emoji: '📝', title: 'Technical Writer', desc: 'Writes documentation and glossary terms.' },
  { emoji: '🧪', title: 'QA/Accessibility', desc: 'Validates themes, contrast, and behavior.' }
];

export default function ContributionPersonaRow() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const baseStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: '1rem',
    padding: '1.5rem',
    borderRadius: '12px',
    background: isDark ? '#111927' : '#f9f9ff',
    boxShadow: '0 0 16px rgba(100, 100, 255, 0.4)',
    animation: 'pulseGlow 3s infinite ease-in-out'
  };

  const cardStyle = {
    flex: '1 1 220px',
    minHeight: '120px',
    padding: '1rem',
    background: isDark ? '#1e293b' : '#ffffff',
    color: isDark ? '#ffffff' : '#111111',
    borderRadius: '10px',
    textAlign: 'center',
    boxShadow: '0 0 12px rgba(0, 153, 255, 0.4)',
    transition: 'transform 0.3s ease'
  };

  return (
    <div style={baseStyle}>
      {roles.map((role, idx) => (
        <div key={idx} style={cardStyle}>
          <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{role.emoji}</div>
          <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.25rem' }}>{role.title}</div>
          <div style={{ fontSize: '0.95rem', opacity: 0.85 }}>{role.desc}</div>
        </div>
      ))}
      <style>
        {`
          @keyframes pulseGlow {
            0%, 100% { box-shadow: 0 0 12px rgba(0, 153, 255, 0.3); }
            50% { box-shadow: 0 0 24px rgba(0, 153, 255, 0.7); }
          }
        `}
      </style>
    </div>
  );
}