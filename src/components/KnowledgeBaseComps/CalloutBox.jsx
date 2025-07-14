import React from 'react';

export default function CalloutBox({ type = 'tip', children }) {
  const styles = {
    tip: {
      borderColor: '#6ee7b7',
      background: 'rgba(16, 185, 129, 0.1)',
      emoji: '💡'
    },
    deprecated: {
      borderColor: '#f87171',
      background: 'rgba(239, 68, 68, 0.1)',
      emoji: '❌'
    },
    caution: {
      borderColor: '#facc15',
      background: 'rgba(253, 224, 71, 0.1)',
      emoji: '⚠️'
    }
  };

  const current = styles[type] || styles.tip;

  return (
    <div style={{
      border: `2px solid ${current.borderColor}`,
      background: current.background,
      borderRadius: '1rem',
      padding: '1.25rem',
      margin: '1rem 0',
    }}>
      <div style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
        {current.emoji} {type.charAt(0).toUpperCase() + type.slice(1)}
      </div>
      <div>{children}</div>
    </div>
  );
}