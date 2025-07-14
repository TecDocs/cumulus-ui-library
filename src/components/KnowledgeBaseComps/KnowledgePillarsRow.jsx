import React from 'react';
import { motion } from 'framer-motion';
import { useColorMode } from '@docusaurus/theme-common';
import AnimatedFigureCaption from './AnimatedFigureCaption';

const pillars = [
  {
    title: '🧬 System Thinking',
    description: 'Tokens and components are not isolated—they evolve as a system. This pillar helps you trace patterns that scale across design and engineering.',
    icon: '/cumulus-ui-library/img/system-thinking.svg',
  },
  {
    title: '🔍 Transparent Decisions',
    description: 'Every style, name, and deprecation has a reason. Transparency builds trust, reduces rework, and accelerates reviews.',
    icon: '/cumulus-ui-library/img/transparent-decisions.svg',
  },
  {
    title: '🚀 Accelerated Onboarding',
    description: 'New team members should onboard in hours, not weeks. Cumulus visualizes logic paths, decisions, and reusable knowledge.',
    icon: '/cumulus-ui-library/img/accelerated-onboarding.svg',
  },
];

export default function KnowledgePillarsRow() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <div style={{ padding: '3rem 1rem', textAlign: 'center' }}>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {pillars.map((pillar, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index, duration: 0.6 }}
            whileHover={{ scale: 1.06 }}
            style={{
              background: isDark ? '#1c1c24' : '#f4faff',
              color: isDark ? '#fefefe' : '#111',
              borderRadius: '18px',
              padding: '2rem 2rem 2.5rem',
              boxShadow: isDark ? '0 0 16px #66ccff' : '0 0 10px #a9e5ff',
              width: '300px',
              minHeight: '280px',
              textAlign: 'left',
              position: 'relative',
              transition: 'all 0.3s ease-in-out',
            }}
          >
            <img
              src={pillar.icon}
              alt={pillar.title}
              style={{ width: '44px', height: '44px', marginBottom: '1rem' }}
            />
            <div style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>
              {pillar.title}
            </div>
            <div style={{ fontSize: '1rem', fontWeight: 400, lineHeight: '1.6' }}>
              {pillar.description}
            </div>
          </motion.div>
        ))}
      </div>
      <AnimatedFigureCaption text="Figure 2. Cumulus Pillars—foundational values that support scalable knowledge systems and long-term UI trust." />
    </div>
  );
}
