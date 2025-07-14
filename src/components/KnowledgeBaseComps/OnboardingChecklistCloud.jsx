import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';

export default function OnboardingChecklistCloud() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const items = [
    'Connect to the component system',
    'Understand role permissions',
    'Preview token behavior',
    'Explore interactive states',
    'Link to docs or usage guides'
  ];

  return (
    <div style={{
      position: 'relative',
      background: isDark ? '#1b1f28' : '#f1f7fb',
      color: isDark ? '#ffffff' : '#111111',
      padding: '3rem 2rem',
      borderRadius: '2rem',
      border: isDark ? '1px solid #3b3b3b' : '1px solid #d0dce6',
      boxShadow: isDark ? '0 0 24px #00cfff55' : '0 4px 16px #ccd6ddaa',
      overflow: 'hidden',
      transition: 'all 0.4s ease'
    }}>
      {/* SVG Cloud Background */}
      <svg
        viewBox="0 0 600 200"
        preserveAspectRatio="none"
        style={{
          position: 'absolute',
          top: '-40px',
          left: '-40px',
          width: '140%',
          height: '200%',
          opacity: isDark ? 0.08 : 0.12,
          zIndex: 0,
          pointerEvents: 'none'
        }}
      >
        <path
          d="M120,60 Q180,20 240,60 T360,60 Q420,20 480,60 T600,60 V200 H0 V60 Q60,20 120,60 Z"
          fill={isDark ? '#00e1ff' : '#a0c8ff'}
        />
      </svg>

      {/* Checklist Items */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {items.map((item, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              fontSize: '1.1rem',
              fontWeight: 600,
              marginBottom: '1.25rem',
              padding: '0.6rem 1rem',
              borderRadius: '12px',
              backgroundColor: isDark ? '#252c38' : '#ffffffcc',
              boxShadow: isDark
                ? '0 0 12px #00d4ff55'
                : '0 2px 6px rgba(0,0,0,0.06)',
              transition: 'transform 0.2s ease',
            }}
          >
            <span style={{
              fontSize: '1.3rem',
              color: isDark ? '#00e1ff' : '#3f8cff'
            }}>
              ☑️
            </span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
