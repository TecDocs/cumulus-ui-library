import React from 'react';

export default function OnboardingChecklistCloud() {
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
      background: '#f1f7fb',
      color: '#111111',
      padding: '3rem 2rem',
      borderRadius: '2rem',
      border: '1px solid #d0dce6',
      boxShadow: '0 4px 16px #ccd6ddaa',
      overflow: 'hidden'
    }}>
      <svg
        viewBox="0 0 600 200"
        preserveAspectRatio="none"
        style={{
          position: 'absolute',
          top: '-40px',
          left: '-40px',
          width: '140%',
          height: '200%',
          opacity: 0.12,
          zIndex: 0,
          pointerEvents: 'none'
        }}
      >
        <path
          d="M120,60 Q180,20 240,60 T360,60 Q420,20 480,60 T600,60 V200 H0 V60 Q60,20 120,60 Z"
          fill="#a0c8ff"
        />
      </svg>
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
              backgroundColor: '#ffffffcc',
              boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
            }}
          >
            <span style={{ fontSize: '1.3rem', color: '#3f8cff' }}>☑️</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
