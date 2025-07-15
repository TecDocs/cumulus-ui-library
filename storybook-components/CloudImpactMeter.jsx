import React from 'react';

export default function CloudImpactMeter({ title, level, explanation, affectedAreas }) {
  const bg = '#f5f5f5';
  const textColor = '#111';
  const ringColor = level === 'High' ? '#FF6B6B' : level === 'Medium' ? '#FFC300' : '#6BCB77';

  return (
    <div style={{
      backgroundColor: bg,
      padding: '1.5rem',
      borderRadius: '1rem',
      boxShadow: `0 0 20px ${ringColor}55`,
      color: textColor,
      marginBottom: '2rem',
    }}>
      <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{title}</h3>
      <div style={{
        height: '12px',
        width: '100%',
        background: '#ccc',
        borderRadius: '10px',
        overflow: 'hidden',
        marginBottom: '1rem',
      }}>
        <div style={{
          width: level === 'High' ? '100%' : level === 'Medium' ? '66%' : '33%',
          background: ringColor,
          height: '100%',
        }}></div>
      </div>
      <p style={{ marginBottom: '0.5rem' }}>{explanation}</p>
      <ul style={{ paddingLeft: '1.25rem' }}>
        {affectedAreas.map((area, i) => (
          <li key={i}>{area}</li>
        ))}
      </ul>
    </div>
  );
}
