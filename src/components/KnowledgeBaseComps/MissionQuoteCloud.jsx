import React from 'react';
import { motion } from 'framer-motion';
import { useColorMode } from '@docusaurus/theme-common';
import AnimatedFigureCaption from './AnimatedFigureCaption';

export default function MissionQuoteCloud() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        background: isDark ? '#1f1f2f' : '#e6f7ff',
        borderLeft: '6px solid #33cfff',
        padding: '1.5rem 2rem',
        margin: '2rem 0',
        borderRadius: '15px',
        boxShadow: isDark ? '0 0 20px #33cfff' : '0 0 10px #66ccff',
        color: isDark ? '#ffffff' : '#111111',
        fontStyle: 'italic',
      }}
    >
      “Documentation isn’t just reference. It’s infrastructure. Cumulus ensures it scales with your team, not against it.”
      <AnimatedFigureCaption text="Figure 2. Quote from the system’s design philosophy, embodying Cumulus' intent." />
    </motion.div>
  );
}