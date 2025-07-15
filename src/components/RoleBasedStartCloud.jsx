import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';

export default function RoleBasedStartCloud() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const containerStyle = {
    border: '2px dashed',
    borderColor: isDark ? '#38bdf8' : '#0ea5e9',
    borderRadius: '12px',
    padding: '2rem',
    marginTop: '2.5rem',
    background: isDark ? '#0f172a' : '#e0f2fe',
    color: isDark ? '#f8fafc' : '#082f49',
    transition: 'all 0.3s ease',
    fontSize: '1rem',
  };

  const buttonStyle = {
    background: isDark ? '#1e40af' : '#3b82f6',
    color: '#fff',
    borderRadius: '6px',
    padding: '0.5rem 1.2rem',
    marginRight: '1rem',
    marginTop: '1rem',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '0.95rem',
  };

  return (
    <div style={containerStyle}>
      <div style={{ fontWeight: 'bold', marginBottom: '1rem' }}>Choose your starting path:</div>
      <button style={buttonStyle}>Design-Focused</button>
      <button style={buttonStyle}>Code-First</button>
      <button style={buttonStyle}>Audit-Oriented</button>
    </div>
  );
}
