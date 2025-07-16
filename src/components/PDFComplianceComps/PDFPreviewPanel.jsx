import React from 'react';
import { motion } from 'framer-motion';
import { useColorMode } from '@docusaurus/theme-common';

export default function PDFPreviewPanel({ previews }) {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const container = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    margin: '2.5rem auto',
    maxWidth: '1100px',
    justifyItems: 'center'
  };

  const card = {
    borderRadius: '20px',
    padding: '1.8rem',
    textAlign: 'center',
    width: '100%',
    background: isDark ? '#0f172a' : '#f9fafb',
    color: isDark ? '#f1f5f9' : '#1e293b',
    boxShadow: isDark
      ? '0 0 35px rgba(180,180,255,0.65), 0 0 12px rgba(255,255,255,0.25)'
      : '0 0 14px rgba(0,0,0,0.15)',
    transition: 'all 0.3s ease'
  };

  const iconStyle = { width: '50px', height: '50px', marginBottom: '0.8rem' };
  const previewIcon = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      style={iconStyle}>
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
      <line x1="3" y1="9" x2="21" y2="9"/>
      <line x1="9" y1="21" x2="9" y2="9"/>
    </svg>
  );

  return (
    <motion.div style={container}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {previews.map((p, i) => (
        <motion.div key={i} style={card}
          whileHover={{
            scale: 1.06,
            boxShadow: isDark
              ? '0 0 55px rgba(200,200,255,0.8)'
              : '0 0 20px rgba(0,0,0,0.2)'
          }}
          animate={{ y: [0, -4, 0] }}
          transition={{ repeat: Infinity, duration: 4, delay: i * 0.4 }}
        >
          {previewIcon}
          <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.7rem' }}>{p.title}</h3>
          <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>{p.description}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
