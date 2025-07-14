import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';

export default function CloudTokenLineage({ root, children }) {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const container = {
    margin: '2rem 0',
    textAlign: 'center',
  };

  const rootStyle = {
    fontWeight: 'bold',
    fontSize: '1.2rem',
    color: isDark ? '#a8c1ff' : '#4b3eff',
    marginBottom: '0.8rem',
  };

  const branchStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '1rem',
  };

  const childStyle = {
    padding: '0.6rem 1.2rem',
    borderRadius: '10px',
    backgroundColor: isDark ? 'rgba(173, 194, 255, 0.15)' : '#e0ecff',
    color: isDark ? '#e5eaff' : '#1a1a1a',
    fontSize: '0.95rem',
    fontFamily: 'monospace',
    boxShadow: isDark
      ? '0 0 6px rgba(173, 194, 255, 0.25)'
      : '0 0 4px rgba(0, 0, 0, 0.05)',
    transition: 'background-color 0.3s, color 0.3s',
  };

  return (
    <div style={container}>
      <div style={rootStyle}>{root}</div>
      <div style={branchStyle}>
        {children.map((child, i) => (
          <div key={i} style={childStyle}>{child}</div>
        ))}
      </div>
    </div>
  );
}
