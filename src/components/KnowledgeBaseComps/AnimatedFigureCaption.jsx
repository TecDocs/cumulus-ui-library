// AnimatedFigureCaption.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useColorMode } from '@docusaurus/theme-common';

export default function AnimatedFigureCaption({ children }) {
  const { colorMode } = useColorMode();

  const textColor = colorMode === 'dark' ? '#eee' : '#222';

  return (
    <motion.figcaption
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        fontSize: '0.95rem',
        marginTop: '0.5rem',
        textAlign: 'center',
        color: textColor,
        fontStyle: 'italic',
        maxWidth: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      {children}
    </motion.figcaption>
  );
}
