import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';

export default function CloudGlowCard({ children }) {
  const { colorMode } = useColorMode();
  const glowColor = colorMode === 'dark' ? '0 0 30px rgba(173,216,230,0.5)' : '0 0 10px rgba(0,0,0,0.08)';

  return (
    <div style={{
      borderRadius: '40px',
      backdropFilter: 'blur(8px)',
      background: colorMode === 'dark' ? 'rgba(20, 20, 20, 0.6)' : 'rgba(255, 255, 255, 0.7)',
      padding: '2rem',
      boxShadow: glowColor,
      border: colorMode === 'dark' ? '1px solid rgba(173,216,230,0.3)' : '1px solid rgba(0,0,0,0.1)',
      transition: 'all 0.4s ease-in-out',
    }}>
      {children}
    </div>
  );
}