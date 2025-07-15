import React from 'react';
import { motion } from 'framer-motion';

export default function GlossaryCloudTerm({ title, children }) {
  const containerStyle = {
    backgroundColor: '#f0fdfa',
    border: '1px solid #bae6fd',
    borderRadius: '16px',
    padding: '2rem',
    paddingTop: '2.5rem',
    marginBottom: '2rem',
    color: '#0f172a',
    boxShadow: '0 0 12px rgba(0,0,0,0.08)',
    overflowWrap: 'anywhere',
    position: 'relative',
    overflow: 'hidden',
  };

  const titleStyle = {
    fontSize: '1.5rem',
    fontWeight: 700,
    marginBottom: '1rem',
    color: '#0369a1',
    display: 'flex',
    alignItems: 'center',
    gap: '0.65rem',
    position: 'relative',
    zIndex: 2,
  };

  const contentStyle = {
    fontSize: '1.075rem',
    lineHeight: '1.75',
    marginTop: '0.25rem',
    position: 'relative',
    zIndex: 2,
  };

  const cloudIcon = (
    <motion.svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={{ y: [0, -2, 0, 2, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      style={{ marginTop: '-3px' }}
    >
      <motion.path
        fill="#0ea5e9"
        d="M6 19a5 5 0 1 1 1-9.9 6 6 0 0 1 11.4 1.3A4.5 4.5 0 1 1 18 19H6z"
      />
    </motion.svg>
  );

  const sparklePositions = [
    { top: '8%', left: '10%' },
    { top: '25%', left: '80%' },
    { top: '50%', left: '20%' },
    { top: '70%', left: '60%' },
    { top: '85%', left: '90%' },
  ];

  const SparkleSky = () =>
    sparklePositions.map((pos, i) => (
      <motion.svg
        key={i}
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        style={{
          position: 'absolute',
          top: pos.top,
          left: pos.left,
          opacity: 0.35,
          zIndex: 1,
        }}
        animate={{ scale: [1, 1.3, 1], rotate: [0, 20, -20, 0] }}
        transition={{
          duration: 3 + i * 0.3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <path
          d="M12 2l1.2 3.6L17 7l-3.6 1.2L12 12l-1.2-3.6L7 7l3.6-1.2L12 2z"
          fill="#fde68a"
        />
      </motion.svg>
    ));

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={containerStyle}
    >
      <SparkleSky />
      <div style={titleStyle}>{cloudIcon}{title}</div>
      <div style={contentStyle}>{children}</div>
    </motion.div>
  );
}
