
// VariableConditionViewer.jsx (redesigned)
import React from 'react';
import { motion } from 'framer-motion';
import { useColorMode } from '@docusaurus/theme-common';

export default function VariableConditionViewer({ variableText, internalOutput, externalOutput }) {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const [mode, setMode] = React.useState('internal');

  const wrapperStyle = {
    padding: '2rem',
    borderRadius: '20px',
    margin: '2rem auto',
    maxWidth: '600px',
    textAlign: 'center',
    backgroundColor: isDark ? '#0f172a' : '#f8fafc',
    color: isDark ? '#f0f9ff' : '#0f172a',
    boxShadow: isDark ? '0 0 22px rgba(59,130,246,0.7)' : '0 0 12px rgba(0,0,0,0.1)'
  };

  const buttonStyle = (active) => ({
    margin: '0.5rem',
    padding: '0.5rem 1.2rem',
    borderRadius: '10px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: '700',
    backgroundColor: active ? (isDark ? '#0ea5e9' : '#2563eb') : 'transparent',
    color: active ? '#fff' : (isDark ? '#e0f2fe' : '#0f172a'),
    boxShadow: active ? (isDark ? '0 0 10px rgba(14,165,233,0.8)' : '0 0 6px rgba(0,0,0,0.08)') : 'none',
    transition: 'all 0.3s ease'
  });

  const stormSvg = (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight:'0.4rem', verticalAlign:'middle'}}>
      <path d="M20 17.58A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 4 16.25"/>
      <line x1="13" y1="13" x2="13" y2="21"/>
      <line x1="16" y1="16" x2="10" y2="22"/>
    </svg>
  );

  return (
    <motion.div style={wrapperStyle} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: 'easeOut' }}>
      <div style={{ marginBottom: '1rem', fontSize:'1.2rem', fontWeight:'600', display:'flex', justifyContent:'center', alignItems:'center' }}>{stormSvg}{variableText}</div>
      <div style={{ marginBottom: '1.2rem' }}>
        <button style={buttonStyle(mode === 'internal')} onClick={() => setMode('internal')}>Internal</button>
        <button style={buttonStyle(mode === 'external')} onClick={() => setMode('external')}>External</button>
      </div>
      <div style={{ fontSize: '1rem', lineHeight: '1.6' }}>{mode === 'internal' ? internalOutput : externalOutput}</div>
    </motion.div>
  );
}
