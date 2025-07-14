import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';

export default function GuidedPathwayCloud() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const containerStyle = {
    position: 'relative',
    background: isDark ? '#1e293b' : '#f0f9ff',
    color: isDark ? '#f8fafc' : '#0f172a',
    padding: '3rem 2rem',
    borderRadius: '1.75rem',
    boxShadow: isDark
      ? '0 0 28px #00e1ff66'
      : '0 4px 14px rgba(0, 0, 0, 0.07)',
    border: isDark ? '1px solid #334155' : '1px solid #cbd5e1',
    fontSize: '1.1rem',
    lineHeight: '1.6',
    overflow: 'hidden',
    transition: 'all 0.3s ease-in-out',
    zIndex: 1
  };

  const stepStyle = {
    marginBottom: '1.5rem',
    fontWeight: 600,
    fontSize: '1.08rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem'
  };

  const steps = [
    'Step 1: Choose your role',
    'Step 2: Follow token setup instructions',
    'Step 3: Interact with key components',
    'Step 4: Understand access boundaries',
    'Step 5: Review permissions and state previews'
  ];

  return (
    <div style={containerStyle}>
      {/* Cloud Glow Background SVG */}
      <svg
        viewBox="0 0 700 180"
        preserveAspectRatio="none"
        style={{
          position: 'absolute',
          top: '-20px',
          left: '-40px',
          width: '150%',
          height: '200%',
          opacity: isDark ? 0.12 : 0.1,
          zIndex: 0,
          pointerEvents: 'none'
        }}
      >
        <path
          d="M160,60 Q220,20 280,60 T400,60 Q460,20 520,60 T680,60 V180 H0 V60 Q80,20 160,60 Z"
          fill={isDark ? '#00e1ff' : '#38bdf8'}
        />
      </svg>

      {/* Foreground Steps */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {steps.map((step, index) => (
          <div key={index} style={stepStyle}>
            <span style={{
              fontSize: '1.3rem',
              color: isDark ? '#67e8f9' : '#0284c7'
            }}>
              🌤️
            </span>
            <span>{step}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
