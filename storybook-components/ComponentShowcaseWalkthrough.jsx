import React from 'react';

export default function ComponentShowcaseWalkthrough() {
  return (
    <div
      style={{
        padding: '2rem',
        border: '1px solid #d8d8d8',
        background: '#ffffff',
        borderRadius: '12px',
        color: '#111',
        fontSize: '1.05rem',
        lineHeight: '1.6',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        maxWidth: '960px',
        margin: '0 auto',
        transition: 'all 0.3s ease-in-out'
      }}
    >
      <h3 style={{ marginTop: 0, fontSize: '1.4rem' }}>
        🚀 Interactive Component Walkthrough
      </h3>
      <p style={{ marginBottom: '1.2rem' }}>
        Each element below represents a building block of Cumulus UI. Try interacting with them to see how they respond in real-time across themes and layouts.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '1.25rem',
          alignItems: 'center',
          marginBottom: '1.5rem'
        }}
      >
        <button style={{
          padding: '0.6rem 1.2rem',
          borderRadius: '6px',
          border: 'none',
          backgroundColor: '#3f8cff',
          color: '#fff',
          fontWeight: 600,
          cursor: 'pointer'
        }}>
          Primary Button
        </button>

        <span style={{
          display: 'inline-block',
          backgroundColor: '#e0e0e0',
          padding: '0.4rem 0.8rem',
          borderRadius: '20px',
          fontSize: '0.9rem',
          fontWeight: 500
        }}>
          ✨ Badge Example
        </span>

        <div style={{
          padding: '0.8rem',
          backgroundColor: '#f4f4f4',
          borderRadius: '8px',
          border: '1px solid #ddd',
          fontSize: '0.95rem'
        }}>
          💬 Card block with supporting text.
        </div>

        <div style={{
          height: '40px',
          width: '100%',
          background: 'linear-gradient(90deg, #e66465, #9198e5)',
          borderRadius: '6px'
        }}></div>
      </div>

      <p style={{ fontSize: '0.95rem', opacity: 0.85 }}>
        These are only a few examples. Your product can scale infinitely using the patterns, tokens, and interactive elements built into Cumulus UI.
      </p>
    </div>
  );
}
