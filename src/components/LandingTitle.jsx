import React from 'react';
import styles from './LandingTitle.module.css';
import { motion } from 'framer-motion';
import Link from '@docusaurus/Link';

const cards = [
 {
    title: '📚 Storybook Components',
    description: 'Reusable stories for every state, theme, and edge case.',
    to: '/docs/storybook-components', // ✅ fix this
  },
  {
    title: '📓 Confluence Integration',
    description: 'Workflows, approval flows, and real-time connected docs.',
    to: '/docs/confluence/confluence-sops',
  },
  {
    title: '🛡️ Compliance & PDF Exports',
    description: 'Templates and exports for audit and legal compliance.',
    to: '/docs/compliance/compliance-overview',
  },
  {
    title: '📘 Knowledge Base',
    description: 'Design tokens, system intro, and onboarding essentials.',
    to: '/docs/knowledge-base/intro',
  },
];

export default function LandingTitle() {
  return (
    <div className={styles.landingTitleContainer}>
      <h2 className={styles.landingTitle}>☁️ Explore All Parts of the Cumulus UI Library</h2>
      <p className={styles.landingSubtitle}>
        Click a card to explore components, approvals, compliance exports, or the full knowledge base.
      </p>

      <motion.div
        className={styles.sectionStackedGrid}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {cards.map(({ title, description, to }, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            <Link to={to} className={styles.floatingCard}>
              <span>{title}</span>
              <p>{description}</p>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
