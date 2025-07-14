import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';

export default function ComponentUsageExamplesCloud() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const cardStyle = {
    flex: 1,
    padding: '1rem',
    margin: '0.5rem',
    borderRadius: '10px',
    background: isDark ? '#2e2e2e' : '#ffffff',
    boxShadow: isDark
      ? '0 0 10px rgba(0,200,255,0.35)'
      : '0 0 6px rgba(0,0,0,0.1)',
    textAlign: 'center',
  };

  const wrapper = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    justifyContent: 'center',
    marginBottom: '2rem',
  };

  return (
    <div style={wrapper}>
      <div style={cardStyle}><strong>Button</strong><br />Uses <code>--radius-sm</code>, <code>--color-primary</code></div>
      <div style={cardStyle}><strong>Card</strong><br />Uses <code>--spacing-md</code>, <code>--radius-card</code></div>
      <div style={cardStyle}><strong>Input</strong><br />Uses <code>--font-size-md</code>, <code>--color-surface</code></div>
    </div>
  );
}