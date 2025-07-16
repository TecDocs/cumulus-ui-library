import React from 'react';
import { motion } from 'framer-motion';
import { useColorMode } from '@docusaurus/theme-common';

export default function ExportOptionCarousel({ options }) {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const wrapStyle = {
    display: 'flex',
    gap: '1.6rem',
    overflowX: 'auto',
    padding: '1.4rem 0',
    margin: '2rem auto',
    justifyContent: 'flex-start', // ensures it starts at the first item
    scrollSnapType: 'x mandatory', // enable snapping
    scrollPadding: '0 1rem',
  };

  const itemStyle = {
    flex: '0 0 auto',
    minWidth: '220px',
    maxWidth: '260px',
    padding: '1.5rem',
    borderRadius: '22px',
    textAlign: 'center',
    background: isDark ? '#1e293b' : '#f0f9ff',
    color: isDark ? '#f8fafc' : '#0f172a',
    boxShadow: isDark
      ? '0 0 30px rgba(200,200,255,0.7)'
      : '0 0 12px rgba(0,0,0,0.15)',
    scrollSnapAlign: 'start', // snap each card cleanly
  };

  const cloudIcon = (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        width: '45px',
        height: '45px',
        marginBottom: '0.8rem',
        filter: isDark
          ? 'drop-shadow(0 0 6px rgba(220,220,255,0.8))'
          : 'drop-shadow(0 0 6px rgba(0,0,0,0.08))',
      }}
    >
      <path d="M20 17.58A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 4 16.25" />
    </svg>
  );

  return (
    <motion.div
      style={wrapStyle}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      {options.map((o, i) => (
        <motion.div
          key={i}
          style={itemStyle}
          whileHover={{
            scale: 1.07,
            boxShadow: isDark
              ? '0 0 50px rgba(220,220,255,0.9)'
              : '0 0 18px rgba(0,0,0,0.18)',
          }}
          animate={{ y: [0, -4, 0] }}
          transition={{ repeat: Infinity, duration: 5, delay: i * 0.4 }}
        >
          {cloudIcon}
          <h4
            style={{
              fontWeight: 700,
              fontSize: '1.2rem',
              marginBottom: '0.6rem',
            }}
          >
            {o.title}
          </h4>
          <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>{o.description}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
