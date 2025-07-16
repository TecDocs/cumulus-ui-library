// ConditionTagPreview.jsx (redesigned)
import React, { useState } from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import { motion } from 'framer-motion';

export default function ConditionTagPreview() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const [mode, setMode] = useState('Internal');

  const wrapperStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    borderRadius: '24px',
    margin: '2rem auto',
    maxWidth: '650px',
    background: isDark ? 'linear-gradient(135deg, #1e3a8a 0%, #1e293b 100%)' : 'linear-gradient(135deg, #e0f2fe 0%, #f8fafc 100%)',
    color: isDark ? '#f0f9ff' : '#0f172a',
    boxShadow: isDark ? '0 0 28px rgba(147,197,253,0.8)' : '0 0 14px rgba(0,0,0,0.08)',
    textAlign: 'center'
  };

  const buttonStyle = (active) => ({
    margin: '0.6rem',
    padding: '0.6rem 1.4rem',
    borderRadius: '12px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: '700',
    fontSize: '1rem',
    backgroundColor: active ? (isDark ? '#0ea5e9' : '#2563eb') : 'transparent',
    color: active ? '#ffffff' : (isDark ? '#e0f2fe' : '#0f172a'),
    boxShadow: active ? (isDark ? '0 0 12px rgba(14,165,233,0.9)' : '0 0 8px rgba(0,0,0,0.1)') : 'none',
    transition: 'all 0.3s ease'
  });

  const cloudCheckSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ marginRight: '0.5rem', verticalAlign: 'middle' }}
    >
      <path d="M17.5 19a4.5 4.5 0 0 0 .5-9h-1.26A8 8 0 1 0 4 16.25" />
      <polyline points="16 14 12.5 17.5 11 16" />
    </svg>
  );

  const internalText = 'Internal audience view shows sensitive notes and development details.';
  const externalText = 'External audience view shows public facing instructions only.';

  return (
    <motion.div
      style={wrapperStyle}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.2rem', fontSize: '1.2rem', fontWeight: '700' }}>
        {cloudCheckSvg} Condition Preview
      </div>
      <div style={{ marginBottom: '1.4rem' }}>
        <button style={buttonStyle(mode === 'Internal')} onClick={() => setMode('Internal')}>Internal</button>
        <button style={buttonStyle(mode === 'External')} onClick={() => setMode('External')}>External</button>
      </div>
      <p style={{ fontSize: '1.05rem', maxWidth: '500px', lineHeight: '1.6' }}>
        {mode === 'Internal' ? internalText : externalText}
      </p>
    </motion.div>
  );
}
