// ExportWorkflowStepper.jsx (redesigned with halo glow and centered layout)
import React from 'react';
import { motion } from 'framer-motion';
import { useColorMode } from '@docusaurus/theme-common';

export default function ExportWorkflowStepper({ steps }) {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1.2rem',
    margin: '2rem auto',
    maxWidth: '800px',
    padding: '2rem',
    borderRadius: '24px',
    textAlign: 'center',
    background: isDark
      ? 'linear-gradient(160deg, #1e293b, #111827)'
      : 'linear-gradient(160deg, #f8fafc, #e2e8f0)',
    boxShadow: isDark
      ? '0 0 35px rgba(186,230,253,0.8)'
      : '0 0 18px rgba(0,0,0,0.08)'
  };

  const stepStyle = {
    flex: '1 1 220px',
    padding: '1.4rem 1rem',
    borderRadius: '18px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontWeight: '700',
    fontSize: '1.1rem',
    lineHeight: '1.6',
    backgroundColor: isDark ? '#0ea5e9' : '#3b82f6',
    color: '#ffffff',
    boxShadow: isDark
      ? '0 0 25px 8px rgba(186,230,253,0.9), 0 0 60px rgba(186,230,253,0.6)'
      : '0 0 20px rgba(59,130,246,0.4)',
    transition: 'transform 0.3s ease',
    textShadow: isDark
      ? '0 0 8px rgba(255,255,255,0.9)'
      : '0 0 6px rgba(255,255,255,0.6)'
  };

  const iconStyle = {
    marginBottom: '0.8rem',
    flexShrink: 0
  };

  const haloIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={iconStyle}
    >
      <circle cx="12" cy="12" r="4" />
      <line x1="12" y1="2" x2="12" y2="4" />
      <line x1="12" y1="20" x2="12" y2="22" />
      <line x1="4.93" y1="4.93" x2="6.34" y2="6.34" />
      <line x1="17.66" y1="17.66" x2="19.07" y2="19.07" />
      <line x1="2" y1="12" x2="4" y2="12" />
      <line x1="20" y1="12" x2="22" y2="12" />
      <line x1="4.93" y1="19.07" x2="6.34" y2="17.66" />
      <line x1="17.66" y1="6.34" x2="19.07" y2="4.93" />
    </svg>
  );

  return (
    <motion.div
      style={containerStyle}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {steps.map((s, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.05 }}
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 3, delay: i * 0.3 }}
          style={stepStyle}
        >
          {haloIcon}
          {s}
        </motion.div>
      ))}
    </motion.div>
  );
}
