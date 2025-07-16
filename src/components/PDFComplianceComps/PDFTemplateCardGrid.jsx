// PDFTemplateCardGrid.jsx (three cards stretched, larger text)
import React from 'react';
import { motion } from 'framer-motion';
import { useColorMode } from '@docusaurus/theme-common';

export default function PDFTemplateCardGrid({ templates }) {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const gridStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '2rem',
    margin: '2rem auto',
    flexWrap: 'wrap'
  };

  const cardStyle = {
    flex: '1 1 30%',
    minWidth: '240px',
    borderRadius: '20px',
    padding: '2rem 1.4rem',
    backgroundColor: isDark ? '#0f172a' : '#f0f9ff',
    color: isDark ? '#e0f2fe' : '#0f172a',
    boxShadow: isDark ? '0 0 30px rgba(56,189,248,0.9)' : '0 0 14px rgba(0,0,0,0.12)',
    textAlign: 'center',
    cursor: 'default',
    transition: 'all 0.3s ease'
  };

  const iconStyle = {
    marginBottom: '1rem',
    width: '44px',
    height: '44px',
    stroke: 'currentColor'
  };

  return (
    <motion.div
      style={gridStyle}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {templates.map((t, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.06 }}
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 3, delay: i * 0.3 }}
          style={cardStyle}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round"
            strokeLinejoin="round" style={iconStyle}>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
          </svg>
          <h3 style={{ fontSize: '1.35rem', fontWeight: '800', marginBottom: '0.8rem' }}>{t.title}</h3>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7rem' }}>{t.description}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
