import React from 'react';

export default function StylePreviewRowCloud({ goodExampleImg, badExampleImg }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem',
        marginBottom: '3.5rem',
        flexWrap: 'wrap',
      }}
    >
      <div
        style={{
          borderRadius: '1rem',
          padding: '2rem',
          backgroundColor: '#111',
          boxShadow: `0 0 16px #00aaff`,
          border: `2px solid #00aaff`,
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
      <div
        style={{
          borderRadius: '1rem',
          padding: '2rem',
          backgroundColor: '#111',
          boxShadow: `0 0 16px #ff00aa`,
          border: `2px solid #ff00aa`,
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
