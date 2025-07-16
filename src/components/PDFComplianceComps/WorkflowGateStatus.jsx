import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import { motion } from 'framer-motion';
export function WorkflowGateStatus({ title, status, details }) {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const wrap = {
    background: isDark ? '#0f172a' : '#f9fafb',
    borderRadius: '24px',
    padding: '2rem',
    textAlign: 'center',
    boxShadow: isDark ? '0 0 50px 18px rgba(0,255,255,0.9)' : '0 0 20px rgba(0,0,0,0.15)',
    margin: '2rem 0'
  };

  const tStyle = {
    fontSize: '1.8rem',
    fontWeight: 800,
    color: isDark ? '#3b82f6' : '#1d4ed8',
    marginBottom: '0.5rem',
  };

  const sStyle = {
    fontSize: '1.4rem',
    fontWeight: 700,
    color: '#ef4444',
    marginBottom: '0.5rem',
  };

  const dStyle = {
    fontSize: '1.2rem',
    lineHeight: '1.8',
  };

  return (
    <motion.div style={wrap} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
      <div style={tStyle}>{title}</div>
      <div style={sStyle}>{status}</div>
      <div style={dStyle}>{details}</div>
    </motion.div>
  );
}