import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';

export default function BeforeAfterTokenDemo() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const wrapperStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '1rem',
    padding: '1rem',
    borderRadius: '12px',
    background: isDark ? '#1e1e1e' : '#f9f9f9',
    boxShadow: isDark
      ? '0 0 12px rgba(0,200,255,0.4)'
      : '0 0 8px rgba(0,0,0,0.1)',
  };

  const boxStyle = {
    flex: 1,
    padding: '1rem',
    borderRadius: '8px',
    background: isDark ? '#333' : '#fff',
    border: '1px solid #ccc',
  };

  return (
    <div style={wrapperStyle}>
      <div style={boxStyle}>
        <h4>❌ Before</h4>
        <code>font-size: 20px;</code><br />
        <code>padding: 16px;</code><br />
        <code>color: #3F8CFF;</code>
      </div>
      <div style={boxStyle}>
        <h4>✅ After</h4>
        <code>font-size: var(--font-size-lg);</code><br />
        <code>padding: var(--spacing-md);</code><br />
        <code>color: var(--color-primary);</code>
      </div>
    </div>
  );
}