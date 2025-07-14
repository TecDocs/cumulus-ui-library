import React from 'react';
export default function RoleTagLegend() {
  const tags = [
    { label: 'Admin', color: '#ff6961' },
    { label: 'Editor', color: '#fcd34d' },
    { label: 'Viewer', color: '#9ae6b4' },
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', padding: '1rem' }}>
      {tags.map(tag => (
        <div key={tag.label} style={{
          background: tag.color,
          color: '#222',
          padding: '0.5rem 1rem',
          borderRadius: '9999px',
          fontWeight: 'bold',
        }}>
          {tag.label}
        </div>
      ))}
    </div>
  );
}
