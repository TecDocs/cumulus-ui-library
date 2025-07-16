import React from 'react';
import Link from '@docusaurus/Link';
import { motion } from 'framer-motion';
import { useColorMode } from '@docusaurus/theme-common';
import BrowserOnly from '@docusaurus/BrowserOnly';

const cards = [
  {
    title: 'Storybook Components',
    description: 'Reusable stories for every state, theme, and edge case.',
    to: '/docs/storybook-components',
    svg: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    title: 'Confluence Integration',
    description: 'Workflows, approval flows, and real-time connected docs.',
    to: '/docs/confluence/confluence-sops',
    svg: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16v2H4zM4 10h16v2H4zM4 16h16v2H4z" />
      </svg>
    ),
  },
  {
    title: 'Compliance & PDF Exports',
    description: 'Templates and exports for audit and legal compliance.',
    to: '/docs/compliance/compliance-overview',
    svg: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3v18l12-9L9 3z" />
      </svg>
    ),
  },
  {
    title: 'Knowledge Base',
    description: 'Design tokens, system intro, and onboarding essentials.',
    to: '/docs/knowledge-base/intro',
    svg: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 17A2.5 2.5 0 0 1 4 14.5V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9.5a2.5 2.5 0 0 1-2.5 2.5H6.5z" />
      </svg>
    ),
  },
];

function LandingTitleInner() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const headingColor = isDark ? '#f9f9f9' : '#111';
  const subColor = isDark ? '#ddd' : '#444';
  const cardBg = isDark ? 'rgba(40,40,40,0.85)' : '#fff';
  const cardBorder = isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid #ddd';
  const shadowNormal = isDark ? '0 4px 12px rgba(255,255,255,0.05)' : '0 4px 12px rgba(0,0,0,0.04)';
  const shadowHover = isDark ? '0 8px 20px rgba(255,255,255,0.08)' : '0 8px 20px rgba(0,0,0,0.08)';
  const iconColor = isDark ? '#90cdf4' : '#0056d6';
  const descColor = isDark ? '#ccc' : '#555';

  return (
    <div style={{ textAlign: 'center', marginBottom: '3rem', marginTop: '3rem' }}>
      <h2
        style={{
          fontSize: '2.2rem',
          fontWeight: 800,
          marginBottom: '0.75rem',
          color: headingColor,
        }}
      >
        Explore All Parts of the Cumulus UI Library
      </h2>
      <p
        style={{
          fontSize: '1.1rem',
          maxWidth: '700px',
          margin: '0 auto 2rem',
          color: subColor,
        }}
      >
        Click a card to explore components, approvals, compliance exports, or the full knowledge base.
      </p>

      <motion.div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.5rem',
        }}
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
        {cards.map(({ title, description, to, svg }, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4 }}
          >
            <Link
              to={to}
              style={{
                textDecoration: 'none',
                color: 'inherit',
                background: cardBg,
                border: cardBorder,
                borderRadius: '12px',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                boxShadow: shadowNormal,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px) scale(1.02)';
                e.currentTarget.style.boxShadow = shadowHover;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = shadowNormal;
              }}
            >
              <div style={{ marginBottom: '0.75rem', color: iconColor }}>{svg}</div>
              <span
                style={{
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  marginBottom: '0.35rem',
                  textAlign: 'center',
                  color: headingColor,
                }}
              >
                {title}
              </span>
              <p
                style={{
                  fontSize: '0.95rem',
                  textAlign: 'center',
                  color: descColor,
                  margin: 0,
                }}
              >
                {description}
              </p>
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
