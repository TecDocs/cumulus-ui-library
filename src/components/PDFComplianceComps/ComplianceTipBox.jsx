import React from 'react';
import { motion } from 'framer-motion';
import { useColorMode } from '@docusaurus/theme-common';

export default function ComplianceTipBox({ tip }) {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const boxStyle = {
    margin: '2rem auto',
    padding: '1.6rem',
    maxWidth: '800px',
    borderRadius: '22px',
    textAlign: 'center',
    background: isDark ? '#1e293b' : '#f8fafc',
    color: isDark ? '#f9fafb' : '#0f172a',
    fontSize: '1.1rem',
    lineHeight: '1.7',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: isDark
      ? '0 0 40px rgba(180,180,255,0.75), 0 0 20px rgba(255,255,255,0.25)'
      : '0 0 14px rgba(0,0,0,0.15)',
    transition: 'all 0.3s ease'
  };

  const iconStyle = {
    width: '42px',
    height: '42px',
    marginRight: '0.8rem',
    flexShrink: 0
  };

  const haloIcon = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      style={iconStyle}>
      <circle cx="12" cy="12" r="5"/>
      <circle cx="12" cy="12" r="9" strokeOpacity="0.4"/>
    </svg>
  );

  return (
    <motion.div
      style={boxStyle}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.03,
        boxShadow: isDark
          ? '0 0 60px rgba(200,200,255,0.9)'
          : '0 0 22px rgba(0,0,0,0.18)'
      }}
    >
      {haloIcon}
      <span style={{ fontWeight: 700 }}>{tip}</span>
    </motion.div>
  );
}
