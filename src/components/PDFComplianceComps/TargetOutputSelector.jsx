// TargetOutputSelector.jsx (redesigned)
import React, { useState } from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import { motion } from 'framer-motion';

export default function TargetOutputSelector() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const [active, setActive] = useState('PDF');

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    margin: '2rem auto',
    borderRadius: '20px',
    maxWidth: '600px',
    backgroundColor: isDark ? '#1e293b' : '#f1f5f9',
    color: isDark ? '#e0f2fe' : '#1e293b',
    boxShadow: isDark ? '0 0 25px rgba(100, 180, 255, 0.7)' : '0 0 15px rgba(0, 0, 0, 0.08)',
    textAlign: 'center'
  };

  const buttonStyle = (name) => ({
    margin: '0.5rem',
    padding: '0.6rem 1.2rem',
    borderRadius: '12px',
    cursor: 'pointer',
    fontWeight: '700',
    fontSize: '1rem',
    border: 'none',
    backgroundColor: active === name ? (isDark ? '#3b82f6' : '#2563eb') : 'transparent',
    color: active === name ? '#fff' : (isDark ? '#e0f2fe' : '#0f172a'),
    boxShadow: active === name ? (isDark ? '0 0 12px rgba(59,130,246,0.9)' : '0 0 6px rgba(0,0,0,0.1)') : 'none',
    transition: 'all 0.3s ease'
  });

  const cloudSvg = (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight:'0.4rem', verticalAlign:'middle'}}>
      <path d="M20 17.58A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 4 16.25"/>
    </svg>
  );

  const description = {
    'PDF': 'PDF Target provides a compliance ready layout with embedded metadata.',
    'HTML5': 'HTML5 Target creates responsive web based documentation for browsers.',
    'Word': 'Word Target generates an editable file for internal reviews.'
  };

  return (
    <motion.div style={containerStyle} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: 'easeOut' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.2rem', flexWrap: 'wrap' }}>
        {['PDF','HTML5','Word'].map((name)=>(
          <button key={name} style={buttonStyle(name)} onClick={()=>setActive(name)}>{cloudSvg}{name}</button>
        ))}
      </div>
      <p style={{ fontSize: '1.1rem', maxWidth: '480px', lineHeight: '1.6' }}>{description[active]}</p>
    </motion.div>
  );
}