import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import { motion } from 'framer-motion';
export function ExportAutomationInsight({ title, insight }) {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const wrap = {
    background: isDark ? '#111827' : '#f3f4f6',
    borderRadius: '24px',
    padding: '2rem',
    textAlign: 'center',
    boxShadow: isDark ? '0 0 55px 20px rgba(0,200,255,0.85)' : '0 0 20px rgba(0,0,0,0.15)',
    margin: '2rem 0'
  };

  const tStyle = {
    fontSize: '1.8rem',
    fontWeight: 800,
    color: isDark ? '#60a5fa' : '#1d4ed8',
    marginBottom: '1rem',
  };

  const iStyle = {
    fontSize: '1.2rem',
    lineHeight: '1.8',
    maxWidth: '700px',
    margin: '0 auto',
  };

  return (
    <motion.div style={wrap} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
      <svg viewBox="0 0 64 64" width="80" height="80" style={{ marginBottom: '1rem', filter: isDark ? 'drop-shadow(0 0 15px #fff)' : 'drop-shadow(0 0 8px rgba(0,0,0,0.3))' }} fill="none" stroke="currentColor" strokeWidth="3">
        <circle cx="32" cy="32" r="12" />
        <path d="M12 32h8M44 32h8M32 12v8M32 44v8" strokeLinecap="round" />
        <path d="M16 48l4-4M44 20l4-4M48 48l-4-4M20 20l-4-4" strokeLinecap="round" />
      </svg>
      <div style={tStyle}>{title}</div>
      <div style={iStyle}>{insight}</div>
    </motion.div>
  );
}
