import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';

export default function ComponentStructureOverlay({ caption }) {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const styles = {
    container: {
      position: 'relative',
      width: '100%',
      maxWidth: '400px',
      margin: '2rem auto',
      padding: '1rem 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    node: {
      background: isDark ? 'rgba(0, 192, 255, 0.1)' : 'rgba(255, 255, 255, 0.96)',
      border: isDark
        ? '1px solid rgba(0, 192, 255, 0.5)'
        : '1px solid rgba(0, 0, 0, 0.08)',
      color: isDark ? '#ffffff' : '#111111',
      padding: '6px 14px',
      borderRadius: '6px',
      fontWeight: 600,
      fontSize: '0.85rem',
      textAlign: 'center',
      boxShadow: isDark
        ? '0 0 12px rgba(0, 255, 255, 0.8), 0 0 24px rgba(0, 255, 255, 0.4)'
        : '0 2px 8px rgba(0, 0, 0, 0.12)',
      backdropFilter: isDark ? 'blur(6px)' : 'none',
      marginBottom: '20px',
      position: 'relative',
      zIndex: 2,
    },
    arrow: {
      width: '2px',
      height: '24px',
      backgroundColor: isDark ? 'rgba(0, 192, 255, 0.4)' : 'rgba(0, 0, 0, 0.2)',
      marginBottom: '20px',
    },
    caption: {
      marginTop: '2rem',
      fontStyle: 'italic',
      textAlign: 'center',
      fontSize: '0.95rem',
      opacity: 0.85,
      color: isDark ? '#ffffff' : '#111111',
    },
  };

  const labels = ['Header Zone', 'Body Content', 'Interaction Row', 'Feedback Zone'];

  return (
    <div style={styles.container}>
      {labels.map((text, index) => (
        <React.Fragment key={index}>
          <div style={styles.node}>{text}</div>
          {index < labels.length - 1 && <div style={styles.arrow} />}
        </React.Fragment>
      ))}
      {caption && <p style={styles.caption}>{caption}</p>}
    </div>
  );
}
