import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import { motion } from 'framer-motion';
import AnimatedFigureCaption from './AnimatedFigureCaption';

export default function CloudCTA() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.8 }}
      style={{
        background: isDark ? '#0f2b38' : '#ddf7ff',
        padding: '2rem',
        borderRadius: '20px',
        textAlign: 'center',
        margin: '3rem 0',
        boxShadow: isDark ? '0 0 18px #22e3ff' : '0 0 10px #55ddff',
        color: isDark ? '#ffffff' : '#111111',
      }}
    >
      <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Ready to dive deeper?</h2>
      <p style={{ fontSize: '1rem', marginBottom: '1rem' }}>
        Start with <strong>Design Tokens</strong> or jump into <strong>Component Structure</strong>. Every decision has a rationale—and now it’s documented.
      </p>
      <AnimatedFigureCaption text="Figure 4. Cumulus encourages guided exploration through intelligent linking and system clarity." />
    </motion.div>
  );
}