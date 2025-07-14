import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';

export default function CloudTokenGrid({ tokens }) {
  const { colorMode } = useColorMode();

  const styles = {
    gridWrapper: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
      gap: '1.5rem',
      margin: '2rem 0',
    },
    tokenCard: {
      borderRadius: '12px',
      padding: '1rem',
      background: colorMode === 'dark' ? '#2a2a2a' : '#f4f9ff',
      boxShadow: '0 8px 18px rgba(0,0,0,0.08)',
      color: colorMode === 'dark' ? '#fff' : '#111',
    },
    tokenName: {
      fontWeight: 'bold',
      fontSize: '0.95rem',
      marginBottom: '0.25rem',
    },
    tokenValue: {
      fontFamily: 'monospace',
      marginBottom: '0.25rem',
      color: '#6c63ff',
    },
    tokenUsage: {
      fontSize: '0.85rem',
      color: colorMode === 'dark' ? '#ccc' : '#555',
    },
  };

  return (
    <div style={styles.gridWrapper}>
      {tokens.map((token, i) => (
        <div key={i} style={styles.tokenCard}>
          <div style={styles.tokenName}>{token.name}</div>
          <div style={styles.tokenValue}>{token.value}</div>
          <div style={styles.tokenUsage}>{token.usage}</div>
        </div>
      ))}
    </div>
  );
}
