import React from 'react';
import { motion } from 'framer-motion';
import { useColorMode } from '@docusaurus/theme-common';

export function FloatInPlace({ children, glow = true, pulse = false, delay = 0.2 }) {
  const { colorMode } = useColorMode();

  const floatVariants = {
    float: {
      y: [0, -6, 0, 6, 0],
      scale: pulse ? [1, 1.02, 1, 0.98, 1] : 1,
      transition: {
        duration: 3.5,
        ease: 'easeInOut',
        repeat: Infinity,
        delay,
      },
    },
  };

  const baseStyle = {
    textAlign: 'center',
    fontSize: '2.4rem',
    fontWeight: 800,
    color: colorMode === 'dark' ? '#fff' : '#1a1a1a',
    textShadow: glow
      ? colorMode === 'dark'
        ? '0 0 12px rgba(255,255,255,0.8)'
        : '0 0 8px rgba(0,0,0,0.15)'
      : 'none',
    marginBottom: '1.5rem',
  };

  return (
    <motion.div
      variants={floatVariants}
      animate="float"
      style={baseStyle}
    >
      {children}
    </motion.div>
  );
}

export default FloatInPlace;