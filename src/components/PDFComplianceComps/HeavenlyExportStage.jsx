import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import { motion } from 'framer-motion';
export function HeavenlyExportStage({ title, description }) {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const wrap = {
    background: isDark ? '#1e293b' : '#f3f4f6',
    borderRadius: '24px',
    padding: '2rem',
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
    boxShadow: isDark ? '0 0 45px 15px rgba(0,200,255,0.9)' : '0 0 20px rgba(0,0,0,0.2)',
    margin: '2rem 0'
  };

  const svgStyle = {
    flexShrink: 0,
    width: '90px',
    height: '90px',
    filter: isDark ? 'drop-shadow(0 0 20px rgba(255,255,255,0.9))' : 'drop-shadow(0 0 8px rgba(0,0,0,0.2))'
  };

  const tStyle = {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: isDark ? '#f87171' : '#b91c1c',
    marginBottom: '0.5rem',
  };

  const dStyle = {
    fontSize: '1.2rem',
    lineHeight: '1.8',
  };

  return (
    <motion.div style={wrap} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
      <svg viewBox="0 0 64 64" style={svgStyle} fill="none" stroke="currentColor" strokeWidth="3">
        <path d="M20 40a12 12 0 1 1 24 0h2a10 10 0 0 1 0 20H20a10 10 0 0 1 0-20z" />
        <path d="M32 44l-6 8h6l-4 8 10-10h-6l4-6z" strokeLinecap="round" />
      </svg>
      <div>
        <div style={tStyle}>{title}</div>
        <div style={dStyle}>{description}</div>
      </div>
    </motion.div>
  );
}