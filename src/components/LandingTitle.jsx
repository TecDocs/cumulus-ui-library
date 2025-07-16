import React from 'react';
import Link from '@docusaurus/Link';
import { motion } from 'framer-motion';
import { useColorMode } from '@docusaurus/theme-common';
import BrowserOnly from '@docusaurus/BrowserOnly';
import './LandingCards.css';
const cards = [
  {
    title: 'Storybook Components',
    description: 'A curated collection of reusable UI stories that demonstrate every state of each component, carefully themed for light and dark variations, providing exhaustive edge case coverage and offering developers and designers a consistent, maintainable source of truth.',
    to: '/docs/storybook-components',
    svg: (
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    title: 'Confluence Integration',
    description: 'Deeply integrated workflows and approval processes that connect live documents with automated status tracking, providing teams with real time updates and enabling seamless collaboration across engineering, design, and compliance departments without ever losing context.',
    to: '/docs/confluence/confluence-sops',
    svg: (
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16v2H4zM4 10h16v2H4zM4 16h16v2H4z" />
      </svg>
    ),
  },
  {
    title: 'Compliance & PDF Exports',
    description: 'Richly formatted templates and downloadable PDF outputs that meet strict legal standards, offering ready to use audit reports and detailed export configurations, giving stakeholders confidence in the accuracy, traceability, and security of all critical assets.',
    to: '/docs/compliance/compliance-overview',
    svg: (
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3v18l12-9L9 3z" />
      </svg>
    ),
  },
  {
    title: 'Knowledge Base',
    description: 'An expansive, evolving library of foundational information including design tokens, system introduction guidelines, onboarding essentials, and carefully crafted best practices that accelerate team adoption and nurture a culture of long term maintainability.',
    to: '/docs/knowledge-base/intro',
    svg: (
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 17A2.5 2.5 0 0 1 4 14.5V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9.5a2.5 2.5 0 0 1-2.5 2.5H6.5z" />
      </svg>
    ),
  },
];

function LandingTitleInner() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <div style={{ textAlign: 'center', margin: '4rem 1rem' }}>
      <h2 style={{
        fontSize: '3rem',
        fontWeight: 900,
        marginBottom: '1rem',
        color: isDark ? '#f9f9f9' : '#111',
        letterSpacing: '-0.6px',
        textShadow: isDark ? '0 0 15px rgba(0,200,255,0.4)' : '0 2px 4px rgba(0,0,0,0.1)'
      }}>Explore All Parts of the Cumulus UI Library</h2>
      <p style={{
        fontSize: '1.3rem',
        maxWidth: '800px',
        margin: '0 auto 3rem',
        color: isDark ? '#ddd' : '#555',
        lineHeight: '1.9',
      }}>Click a card to explore storybook components, confluence SOPs, compliance exports, or the full knowledge base.</p>

      <motion.div
        className="landing-card-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.40 } } }}
      >
        {cards.map(({ title, description, to, svg }, i) => (
          <motion.div
            key={i}
            variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <Link to={to} className={`landing-card ${isDark ? 'dark' : 'light'}`}>
              <div className="landing-icon">{svg}</div>
              <span className="landing-title">{title}</span>
              <p className="landing-desc">{description}</p>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default function LandingTitle() {
  return <BrowserOnly>{() => <LandingTitleInner />}</BrowserOnly>;
}