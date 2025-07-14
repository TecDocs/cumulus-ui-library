import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';

export default function TokenCalloutCloud({ token, value, alias, note }) {
  const { colorMode } = useColorMode();

  const styles = {
    box: {
      borderRadius: '10px',
      padding: '1rem',
      margin: '1.5rem 0',
      backgroundColor: colorMode === 'dark' ? '#292d3e' : '#f5f7fa',
      color: colorMode === 'dark' ? '#fff' : '#111',
      fontFamily: 'monospace',
      fontSize: '0.95rem',
      boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
    },
    alias: {
      marginTop: '0.5rem',
      fontStyle: 'italic',
      opacity: 0.7,
    },
    note: {
      marginTop: '0.5rem',
      fontSize: '0.85rem',
    }
  };

  return (
    <div style={styles.box}>
      <code>{token}: {value};</code>
      {alias && <div style={styles.alias}>Alias: {alias}</div>}
      {note && <div style={styles.note}>{note}</div>}
    </div>
  );
}
