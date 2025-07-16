import React from 'react';
import { motion } from 'framer-motion';
import { useColorMode } from '@docusaurus/theme-common';

export default function OutputQualityMeter({ score }) {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const wrapStyle = {
    margin: '2rem auto',
    maxWidth: '650px',
    textAlign: 'center',
    padding: '1.6rem',
    borderRadius: '20px',
    background: isDark ? '#0f172a' : '#f9fafb',
    boxShadow: isDark
      ? '0 0 35px rgba(200,200,255,0.75)'
      : '0 0 12px rgba(0,0,0,0.12)'
  };

  const barWrap = {
    width: '100%',
    height: '18px',
    background: isDark ? '#334155' : '#e2e8f0',
    borderRadius: '9px',
    overflow: 'hidden',
    marginTop: '1rem'
  };

  const bar = {
    width: `${score}%`,
    height: '100%',
    background: isDark
      ? 'linear-gradient(90deg,#93c5fd,#a5b4fc,#c084fc)'
      : 'linear-gradient(90deg,#2563eb,#60a5fa,#a78bfa)',
    transition: 'width 0.8s ease'
  };

  return (
    <motion.div
      style={wrapStyle}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.03,
        boxShadow: isDark
          ? '0 0 50px rgba(200,200,255,0.85)'
          : '0 0 18px rgba(0,0,0,0.18)'
      }}
    >
      <h3 style={{ fontWeight: 700, fontSize: '1.25rem', marginBottom: '0.6rem' }}>Compliance Readiness</h3>
      <div style={barWrap}>
        <div style={bar}></div>
      </div>
      <p style={{ marginTop: '0.6rem', fontSize: '1rem', fontWeight: 600 }}>{score}% Ready</p>
    </motion.div>
  );
}
