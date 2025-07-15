import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';

export default function A11yChecklistCloud({ checks }) {
  const { colorMode } = useColorMode();
  const baseColor = colorMode === 'dark' ? '#fff' : '#111';

  return (
    <div style={{
      background: colorMode === 'dark' ? '#1a1a1a' : '#f0f0f0',
      borderRadius: '1rem',
      padding: '1.5rem',
      color: baseColor,
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
