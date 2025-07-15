import React from 'react';

export default function PersonaRoleIntroCloud() {
  const roleBlocks = [
    {
      icon: '🧑',
      title: 'Designer',
      description: 'Focus on layout rules, accessible color combinations, and component affordances during handoff.',
      color: '#0284c7'
    },
    {
      icon: '👨‍💻',
      title: 'Engineer',
      description: 'Prioritize prop-driven behavior, token alignment, and integration of RoleTags and state logic.',
      color: '#2563eb'
    },
    {
      icon: '📊',
      title: 'PM',
      description: 'Track visibility, component maturity, and user experience clarity across the onboarding journey.',
      color: '#ca8a04'
    }
  ];

  return (
    <div style={{
      position: 'relative',
      backgroundColor: '#f9fafb',
      padding: '3rem 2rem',
      borderRadius: '1.75rem',
      boxShadow: '0 4px 18px rgba(0, 0, 0, 0.07)',
      border: '1px solid #d1d5db',
      color: '#1f2937',
    }}>
      <svg
        viewBox="0 0 600 200"
        preserveAspectRatio="none"
        style={{
          position: 'absolute',
          top: '-30px',
          left: '-60px',
          width: '160%',
          height: '240%',
          opacity: 0.12,
          zIndex: 0,
          pointerEvents: 'none'
        }}
      >
        <path
          d="M120,60 Q180,20 240,60 T360,60 Q420,20 480,60 T600,60 V200 H0 V60 Q60,20 120,60 Z"
          fill="#93c5fd"
        />
      </svg>
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
