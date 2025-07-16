import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import { motion } from 'framer-motion';

export function CloudPipelineVisualizer({ title, description }) {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const container = {
    background: isDark ? '#0f172a' : '#e0f7ff',
    borderRadius: '24px',
    padding: '2.5rem',
    margin: '2rem 0',
    color: isDark ? '#f8fafc' : '#0f172a',
    boxShadow: isDark ? '0 0 50px 20px rgba(0,225,255,0.8)' : '0 0 20px rgba(0,0,0,0.2)',
    textAlign: 'center',
  };

  const titleStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: isDark ? '#60a5fa' : '#1e40af',
    marginBottom: '1rem',
  };

  const descStyle = {
    fontSize: '1.25rem',
    lineHeight: '1.9',
    marginBottom: '1.5rem',
  };

  return (
    <motion.div style={container} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
      <div style={titleStyle}>{title}</div>
      <div style={descStyle}>{description}</div>
      <svg viewBox="0 0 400 60" width="100%" height="60" stroke="currentColor" fill="none" strokeWidth="4">
        <circle cx="50" cy="30" r="20"/>
        <circle cx="150" cy="30" r="20"/>
        <circle cx="250" cy="30" r="20"/>
        <circle cx="350" cy="30" r="20"/>
        <path d="M70 30h60M170 30h60M270 30h60" strokeLinecap="round"/>
      </svg>
    </motion.div>
  );
}