
import React from 'react';
import styles from './FeatureHighlight.module.css';
import { motion } from 'framer-motion';

const features = [
  { title: '📚 Unified Docs', desc: 'Write once, distribute across Storybook, Docusaurus, and PDF.' },
  { title: '🌩️ Dark Mode Ready', desc: 'Stormy UI support with glowing contrast and accessibility.' },
  { title: '🛡️ Compliance Exports', desc: 'Generate Flare PDFs for finance, health, and enterprise needs.' },
];

export default function FeatureHighlight() {
  return (
    <div className={styles.wrapper}>
      {features.map((f, idx) => (
        <motion.div
          key={idx}
          className={styles.card}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: idx * 0.2 }}
        >
          <h3>{f.title}</h3>
          <p>{f.desc}</p>
        </motion.div>
      ))}
    </div>
  );
}
