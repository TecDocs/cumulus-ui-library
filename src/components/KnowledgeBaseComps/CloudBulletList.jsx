import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CloudBulletList = ({ items = [] }) => {
  const { colorMode } = useColorMode();

  return (
    <ul style={{ paddingLeft: 0, listStyle: 'none', margin: '2rem 0' }}>
      {items.map((item, i) => {
        const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

        return (
          <motion.li
            ref={ref}
            key={i}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '0.5rem 0',
              marginBottom: '0.9rem',
              borderRadius: '0.25rem',
              color: colorMode === 'dark' ? '#ffffff' : '#1a1a1a',
              fontSize: '1.1rem',
              fontWeight: 600,
              backgroundColor: 'transparent',
              boxShadow: 'none',
              border: 'none',
              textShadow: colorMode === 'dark' ? '0 0 8px #ffffffcc' : 'none',
            }}
          >
            <span
              role="img"
              aria-label="Cloud"
              style={{
                fontSize: '1.5rem',
                filter: colorMode === 'dark'
                  ? 'drop-shadow(0 0 4px #ffffffaa)'
                  : 'drop-shadow(0 0 1px rgba(200, 200, 255, 0.3))',
                minWidth: '1.6rem',
                flexShrink: 0,
              }}
            >
              ☁️
            </span>
            <span style={{ flexGrow: 1 }}>{item}</span>
          </motion.li>
        );
      })}
    </ul>
  );
};

export default CloudBulletList;
