import React from 'react';
import { motion } from 'framer-motion';
import { useColorMode } from '@docusaurus/theme-common';
import AnimatedFigureCaption from './AnimatedFigureCaption';

export default function HeroStackCloud() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const glow = isDark ? '0 0 25px #99e2ff' : '0 0 10px #66b3ff';
  const textColor = isDark ? '#ffffff' : '#111111';

  return (
    <div style={{
      textAlign: 'center',
      padding: '3rem 1rem',
      background: isDark ? '#121212' : '#f0f8ff',
      borderRadius: '20px',
      boxShadow: glow,
      transition: 'all 0.4s ease-in-out',
    }}>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          fontSize: '2.8rem',
          color: textColor,
          fontWeight: 700,
        }}
      >
        Welcome to the Cumulus UI Knowledge Base
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        style={{
          fontSize: '1.2rem',
          color: textColor,
          maxWidth: '700px',
          margin: '1rem auto 0',
        }}
      >
        This is your centralized hub for scalable, interactive documentation. Like an operating system for your design and engineering workflows.
      </motion.p>
      <AnimatedFigureCaption text="Figure 1. Cumulus UI as a design system OS, elevating structure, clarity, and scalability." />
    </div>
  );
}