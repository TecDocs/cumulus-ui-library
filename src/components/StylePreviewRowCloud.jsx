import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';

export default function StylePreviewRowCloud({ goodExampleImg, badExampleImg }) {
  const { colorMode } = useColorMode();

  const glowColor = colorMode === 'dark' ? '#0ff' : '#00aaff';
  const warnColor = colorMode === 'dark' ? '#f0f' : '#ff00aa';

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem',
        marginBottom: '3.5rem', // ✅ Add this
        flexWrap: 'wrap',
      }}
    >
      {/* GOOD EXAMPLE */}
      <div
        style={{
          borderRadius: '1rem',
          padding: '2rem',
          backgroundColor: '#111',
          boxShadow: `0 0 16px ${glowColor}`,
          border: `2px solid ${glowColor}`,
          color: '#fff',
          width: '300px',
        }}
      >
        <strong style={{ display: 'block', marginBottom: '1rem', color: '#7cffc9' }}>
          ✅ Good Example
        </strong>
        <img
          src={goodExampleImg}
          alt="Good example"
          style={{ width: '100%', borderRadius: '0.5rem' }}
        />
      </div>

      {/* NEEDS IMPROVEMENT */}
      <div
        style={{
          borderRadius: '1rem',
          padding: '2rem',
          backgroundColor: '#111',
          boxShadow: `0 0 16px ${warnColor}`,
          border: `2px solid ${warnColor}`,
          color: '#fff',
          width: '300px',
        }}
      >
        <strong style={{ display: 'block', marginBottom: '1rem', color: '#ffb366' }}>
          ⚠️ Needs Improvement
        </strong>
        <img
          src={badExampleImg}
          alt="Needs improvement example"
          style={{ width: '100%', borderRadius: '0.5rem' }}
        />
      </div>
    </div>
  );
}
