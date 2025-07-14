import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';

export default function TokenDependencyTree() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const style = {
    fontFamily: 'monospace',
    padding: '1rem',
    background: isDark ? '#1a1a1a' : '#f0f8ff',
    color: isDark ? '#e6ffff' : '#111',
    borderRadius: '8px',
    boxShadow: isDark
      ? '0 0 10px rgba(0,255,255,0.4)'
      : '0 0 5px rgba(0,0,0,0.1)',
    whiteSpace: 'pre',
  };

  return (
    <div style={style}>
{`--color-primary
├── --color-primary-hover
├── --color-primary-border
└── --color-primary-button
    └── used in <Button />
`}
    </div>
  );
}