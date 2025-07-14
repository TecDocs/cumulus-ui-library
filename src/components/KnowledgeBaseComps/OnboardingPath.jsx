import React from 'react';
import { motion } from 'framer-motion';
import { useColorMode } from '@docusaurus/theme-common';
import AnimatedFigureCaption from './AnimatedFigureCaption';

export default function OnboardingPath() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const steps = [
    'Understand Cumulus OS',
    'Learn Design Tokens',
    'Explore Components',
    'Study Versioning',
    'Access Contribution Guide',
    'Use Style Rules',
    'Navigate Auth Permissions',
    'Glossary Terms'
  ];

  return (
    <div style={{ overflowX: 'auto', padding: '1rem 0' }}>
      <div style={{ display: 'flex', gap: '1rem', paddingBottom: '1rem' }}>
        {steps.map((step, idx) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={idx}
            style={{
              minWidth: '200px',
              padding: '1rem',
              borderRadius: '12px',
              background: isDark ? '#1c1c28' : '#e7faff',
              color: isDark ? '#fff' : '#111',
              textAlign: 'center',
              boxShadow: isDark ? '0 0 12px #33ccff' : '0 0 6px #a8eaff',
              fontWeight: 600
            }}
          >
            {step}
          </motion.div>
        ))}
      </div>
      <AnimatedFigureCaption text="Figure 5. The recommended onboarding path for mastering Cumulus from token to glossary." />
    </div>
  );
}