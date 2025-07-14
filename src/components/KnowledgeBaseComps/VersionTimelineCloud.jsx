import React from 'react';
import { motion } from 'framer-motion';
import styles from './VersionTimelineCloud.module.css';

const versions = [
  { label: 'v1.0', text: 'Token Created' },
  { label: 'v1.1', text: 'Adopted by Button' },
  { label: 'v1.2', text: 'Theme Override Added' },
  { label: 'v2.0', text: 'Deprecated & Replaced' },
];

export default function VersionTimelineCloud() {
  return (
    <motion.div
      className={styles.timelineWrapper}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.4 },
        },
      }}
    >
      {versions.map((v, i) => (
        <motion.div
          key={i}
          className={styles.versionBox}
          whileHover={{ scale: 1.05 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 20 },
          }}
        >
          <div className={styles.versionLabel}>{v.label}</div>
          <div className={styles.versionText}>{v.text}</div>
          {i !== versions.length - 1 && <div className={styles.arrow}>➔</div>}
        </motion.div>
      ))}
    </motion.div>
  );
}
