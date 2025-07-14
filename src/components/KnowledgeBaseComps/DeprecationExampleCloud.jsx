import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';

export default function DeprecationExampleCloud() {
  const { colorMode } = useColorMode();

  const bgColor = colorMode === 'dark'
    ? 'linear-gradient(135deg, #1f2937, #111827)'
    : 'linear-gradient(135deg, #e0f7fa, #f0fdf4)';

  const codeStyle = {
    padding: '0.4rem 0.8rem',
    borderRadius: '8px',
    fontSize: '1rem',
    fontFamily: 'monospace',
    background: colorMode === 'dark' ? '#374151' : '#d1fae5',
    color: colorMode === 'dark' ? '#d1d5db' : '#065f46',
  };

  return (
    <div
      style={{
        background: bgColor,
        borderRadius: '20px',
        padding: '2rem 2.5rem',
        textAlign: 'center',
        margin: '2rem auto',
        maxWidth: '700px',
        boxShadow: '0 0 20px rgba(100, 200, 255, 0.12)',
      }}
    >
      <h3 style={{ fontSize: '1.3rem', marginBottom: '1.25rem' }}>
        Deprecated Token ➜ Replacement
      </h3>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1.25rem',
        flexWrap: 'wrap',
        marginBottom: '1rem',
      }}>
        <span style={codeStyle}>--color-brand-old</span>

        {/* SVG Arrow */}
        <svg
          width="40"
          height="24"
          viewBox="0 0 40 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 12H36M36 12L28 4M36 12L28 20"
            stroke={colorMode === 'dark' ? '#67e8f9' : '#047857'}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <span style={codeStyle}>--color-brand-primary</span>
      </div>

      <p style={{
        fontSize: '1.05rem',
        maxWidth: '600px',
        margin: '0 auto',
        color: colorMode === 'dark' ? '#d1d5db' : '#111',
      }}>
        This update preserves legacy support, while nudging all new usage toward the replacement.
      </p>
    </div>
  );
}
