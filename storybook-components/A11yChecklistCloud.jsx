import React from 'react';

export default function A11yChecklistCloud({ checks }) {
  return (
    <div style={{
      background: '#f0f0f0',
      borderRadius: '1rem',
      padding: '1.5rem',
      color: '#111',
      boxShadow: `0 0 10px rgba(0, 0, 0, 0.1)`,
      marginBottom: '2rem',
    }}>
      <h3 style={{ marginBottom: '1rem' }}>Accessibility Checklist</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {checks.map((item, index) => (
          <li key={index} style={{
            marginBottom: '0.75rem',
            display: 'flex',
            alignItems: 'center',
          }}>
            <span style={{
              display: 'inline-block',
              width: '1.25rem',
              height: '1.25rem',
              borderRadius: '50%',
              background: item.pass ? '#6BCB77' : '#FF6B6B',
              marginRight: '0.75rem',
              boxShadow: item.pass ? '0 0 6px #6BCB77aa' : '0 0 6px #FF6B6Baa',
            }} />
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
