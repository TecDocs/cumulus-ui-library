import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';

export default function PermissionFlowCloud() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const containerStyle = {
    padding: '1.25rem',
    marginTop: '1rem',
    borderRadius: '12px',
    backgroundColor: isDark ? '#1a1f2e' : '#f4f7fa',
    border: `1px solid ${isDark ? '#3c4b63' : '#cbd5e0'}`,
    boxShadow: isDark
      ? '0 0 12px rgba(50, 180, 255, 0.2)'
      : '0 2px 10px rgba(0, 0, 0, 0.05)',
    transition: 'all 0.3s ease-in-out',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const textStyle = {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: isDark ? '#ffffff' : '#111111',
    letterSpacing: '0.5px',
    textAlign: 'center',
  };

  return (
    <div style={containerStyle}>
      <p style={textStyle}>
        User → Role Check → Permission Rules → Component Access
      </p>
    </div>
  );
}
