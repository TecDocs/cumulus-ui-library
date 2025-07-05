import React from 'react';
import './storybook.css';

export default function DocusaurusWrapper({ children }) {
  return (
    <div
      className="theme-doc-content"
      style={{
        padding: '2rem',
        maxWidth: '860px',
        margin: '0 auto',
        fontFamily: 'var(--ifm-font-family-base, Inter, sans-serif)',
        backgroundColor: 'var(--ifm-background-color, #fff)',
        color: 'var(--ifm-font-color-base, #111)',
      }}
    >
      {children}
    </div>
  );
}