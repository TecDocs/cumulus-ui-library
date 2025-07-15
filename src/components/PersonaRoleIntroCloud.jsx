import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';

export default function PersonaRoleIntroCloud() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const roleBlocks = [
    {
      icon: '🧑',
      title: 'Designer',
      description: 'Focus on layout rules, accessible color combinations, and component affordances during handoff.',
      color: isDark ? '#5eead4' : '#0284c7'
    },
    {
      icon: '👨‍💻',
      title: 'Engineer',
      description: 'Prioritize prop-driven behavior, token alignment, and integration of RoleTags and state logic.',
      color: isDark ? '#60a5fa' : '#2563eb'
    },
    {
      icon: '📊',
      title: 'PM',
      description: 'Track visibility, component maturity, and user experience clarity across the onboarding journey.',
      color: isDark ? '#facc15' : '#ca8a04'
    }
  ];

  return (
    <div style={{
      position: 'relative',
      backgroundColor: isDark ? '#1f2937' : '#f9fafb',
      padding: '3rem 2rem',
      borderRadius: '1.75rem',
      boxShadow: isDark
        ? '0 0 32px #00f0ff55'
        : '0 4px 18px rgba(0, 0, 0, 0.07)',
      border: isDark ? '1px solid #334155' : '1px solid #d1d5db',
      overflow: 'hidden',
      color: isDark ? '#f9fafb' : '#1f2937',
      transition: 'all 0.3s ease-in-out'
    }}>
      {/* Glowing Cloud Background */}
      <svg
        viewBox="0 0 600 200"
        preserveAspectRatio="none"
        style={{
          position: 'absolute',
          top: '-30px',
          left: '-60px',
          width: '160%',
          height: '240%',
          opacity: isDark ? 0.15 : 0.12,
          zIndex: 0,
          pointerEvents: 'none'
        }}
      >
        <path
          d="M120,60 Q180,20 240,60 T360,60 Q420,20 480,60 T600,60 V200 H0 V60 Q60,20 120,60 Z"
          fill={isDark ? '#00f0ff' : '#93c5fd'}
        />
      </svg>

      {/* Role-Based Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {roleBlocks.map((role, index) => (
          <div key={index} style={{ marginBottom: '2rem' }}>
            <div style={{
              fontWeight: 700,
              fontSize: '1.15rem',
              color: role.color,
              marginBottom: '0.5rem'
            }}>
              {role.icon} {role.title}
            </div>
            <div style={{ fontSize: '1.05rem', lineHeight: '1.6' }}>
              {role.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
