import React from 'react';
import Layout from '@theme/Layout';
import { motion } from 'framer-motion';
import BrowserOnly from '@docusaurus/BrowserOnly';
import LandingTitle from '../components/LandingTitle.jsx';
import { useColorMode } from '@docusaurus/theme-common';

function HomeInner() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  // Theme-aware section text
  const sectionTextColor = {
    color: isDark ? '#f1f1f1' : '#1e2a36',
  };

  // Shared card style
  const baseCard = {
    borderRadius: '16px',
    padding: '1.8rem',
    marginBottom: '1.8rem',
    backdropFilter: 'blur(4px)',
    transition: 'all 0.4s ease',
  };

  // Who/Purpose cards with extra halo effect in light mode
  const cardBackground = {
    ...baseCard,
    background: isDark ? 'rgba(35,25,50,0.85)' : 'rgba(255,255,255,0.92)',
    border: isDark
      ? '2px solid rgba(160,130,255,0.3)'
      : '2px solid rgba(0,0,0,0.08)',
    boxShadow: isDark
      ? '0 0 45px rgba(150,100,255,0.25), 0 4px 12px rgba(0,0,0,0.5)'
      : '0 0 50px rgba(0,0,0,0.06), 0 0 80px rgba(150,200,255,0.25)',
  };

  return (
    <main
      style={{
        fontFamily: 'system-ui, sans-serif',
        position: 'relative',
        background: isDark
          ? 'linear-gradient(160deg, #0b0b17 0%, #1a132b 100%)'
          : 'linear-gradient(160deg, #f4f9ff 0%, #e9f2ff 100%)',
        minHeight: '100vh',
        width: '100%',
        padding: '4rem 2rem',
        margin: 0,
        lineHeight: '1.8',
        overflow: 'hidden',
      }}
    >
      {/* 🌤️ HERO HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{
          textAlign: 'center',
          marginBottom: '3.5rem',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <h1
          style={{
            fontSize: '3.8rem',
            fontWeight: 900,
            color: isDark ? '#faf8ff' : '#0b1f33',
            margin: 0,
            letterSpacing: '-0.5px',
            textShadow: isDark
              ? '0 0 25px rgba(180,130,255,0.3), 0 0 8px rgba(90,0,180,0.4)'
              : '0 2px 4px rgba(0,0,0,0.08)',
          }}
        >
          CUMULUS UI LIBRARY
        </h1>
      </motion.div>

      {/* ✨ EXPLANATION */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          textAlign: 'center',
          ...sectionTextColor,
          marginBottom: '3rem',
          maxWidth: '1100px',
          marginLeft: 'auto',
          marginRight: 'auto',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <p style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '3rem' }}>
         Built to end scattered documentation and untracked component states, Cumulus UI Library is the foundation your engineering and design teams deserve.
        </p>
        <p style={{ fontSize: '1.1rem', marginBottom: '1.2rem' }}>
          <strong>Cumulus</strong> is your team’s all in one hub for <strong>technical documentation</strong>, <strong>component usage</strong>, <strong>compliance workflows</strong>, and <strong>audit ready SOPs</strong>. It merges <em>Storybook previews</em>, <em>Confluence style SOPs</em>, and <em>MadCap ready PDF exports</em> into a unified design and documentation system.
        </p>
        <p style={{ fontSize: '1.1rem', marginBottom: '1.2rem' }}>
          The platform has been engineered with maintainability in mind, blending <strong>modern design tokens</strong> with <strong>enterprise-level compliance structures</strong>, ensuring your documentation is not only beautiful but also operationally ready for rapid scale.
        </p>
        <p style={{ fontSize: '1.1rem' }}>
          Every section of Cumulus UI Library reflects a focus on <strong>consistency, accessibility, and version control</strong>. Whether you are previewing a component state in Storybook or exporting an SOP for an audit, each piece aligns under one cohesive, corporate-grade style.
        </p>
      </motion.section>
      {/* ✨ WHO IT'S FOR */}
<motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 2, ease: 'easeOut' }}
  style={{
    marginBottom: '3.5rem',
    maxWidth: '1100px',
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative',
    zIndex: 1,
  }}
>
  <motion.div
    animate={{ y: [0, -5, 0] }}
    transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
    style={{
      borderRadius: '16px',
      padding: '2.2rem',
      marginBottom: '1.8rem',
      background: isDark
        ? 'linear-gradient(160deg, rgba(45,30,70,0.95) 0%, rgba(30,20,50,0.9) 100%)'
        : 'linear-gradient(160deg, rgba(255,255,255,0.97) 0%, rgba(245,250,255,0.94) 100%)',
      border: isDark
        ? '1px solid rgba(160,130,255,0.3)'
        : '1px solid rgba(0,0,0,0.08)',
      boxShadow: isDark
        ? '0 0 30px rgba(150,100,255,0.25), 0 4px 20px rgba(0,0,0,0.6)'
        : '0 0 30px rgba(0,0,0,0.05), 0 0 60px rgba(100,160,255,0.15)',
      backdropFilter: 'blur(4px)',
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke={isDark ? '#d5c8ff' : '#3a5ca9'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ marginRight: '0.8rem', flexShrink: 0 }}
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12h8M12 8v8" />
      </svg>
      <h3
        style={{
          margin: 0,
          fontSize: '1.5rem',
          fontWeight: 700,
          color: isDark ? '#faf8ff' : '#1e2a36',
          letterSpacing: '0.2px',
        }}
      >
        Who is Cumulus UI Library for?
      </h3>
    </div>
    <p style={{ marginBottom: '1rem', fontSize: '1.05rem', lineHeight: '1.7' }}>
      Cumulus is designed with a wide variety of teams in mind, ensuring that different stakeholders can interact with the same source of truth. 
      Below are examples of where it fits, helping to align design systems, engineering workflows, and documentation practices:
    </p>
    <ul
      style={{
        paddingLeft: '1.2rem',
        margin: 0,
        listStyle: 'disc',
        fontSize: '1rem',
        lineHeight: '1.8',
      }}
    >
      <li style={{ marginBottom: '0.6rem' }}>Frontend teams needing reusable components across projects</li>
      <li style={{ marginBottom: '0.6rem' }}>Designers who require live previews of UI states to iterate quickly</li>
      <li style={{ marginBottom: '0.6rem' }}>Compliance officers tracking SOPs, process audits, and sign-offs</li>
      <li>Startups and enterprises seeking to align design, engineering, and documentation in a single hub</li>
    </ul>
  </motion.div>
</motion.section>

{/* ✨ PURPOSE */}
<motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
  style={{
    marginBottom: '3.5rem',
    maxWidth: '1100px',
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative',
    zIndex: 1,
  }}
>
  <motion.div
    animate={{ y: [0, -5, 0] }}
    transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
    style={{
      borderRadius: '16px',
      padding: '2.2rem',
      marginBottom: '1.8rem',
      background: isDark
        ? 'linear-gradient(160deg, rgba(45,30,70,0.95) 0%, rgba(30,20,50,0.9) 100%)'
        : 'linear-gradient(160deg, rgba(255,255,255,0.97) 0%, rgba(245,250,255,0.94) 100%)',
      border: isDark
        ? '1px solid rgba(160,130,255,0.3)'
        : '1px solid rgba(0,0,0,0.08)',
      boxShadow: isDark
        ? '0 0 30px rgba(150,100,255,0.25), 0 4px 20px rgba(0,0,0,0.6)'
        : '0 0 30px rgba(0,0,0,0.05), 0 0 60px rgba(100,160,255,0.15)',
      backdropFilter: 'blur(4px)',
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke={isDark ? '#d5c8ff' : '#3a5ca9'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ marginRight: '0.8rem', flexShrink: 0 }}
      >
        <path d="M12 20h9" />
        <path d="M12 4h9" />
        <path d="M12 4a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4" />
      </svg>
      <h3
        style={{
          margin: 0,
          fontSize: '1.5rem',
          fontWeight: 700,
          color: isDark ? '#faf8ff' : '#1e2a36',
          letterSpacing: '0.2px',
        }}
      >
        Why Cumulus exists
      </h3>
    </div>
    <p style={{ marginBottom: '1rem', fontSize: '1.05rem', lineHeight: '1.7' }}>
      Engineering teams often struggle with scattered documentation, untracked component states, and separate compliance workflows. 
      This fragmentation leads to inefficiency and missed details that can slow down product delivery and introduce risk.
    </p>
    <p style={{ marginBottom: '1rem', fontSize: '1.05rem', lineHeight: '1.7' }}>
      Cumulus UI Library solves this by merging <strong>design systems, documentation, and regulatory exports</strong> into a single environment. 
      Every visual choice, from the soft blue gradients to the clean headings, was intentionally designed to support clarity and operational excellence.
    </p>
    <p style={{ marginBottom: '1rem', fontSize: '1.05rem', lineHeight: '1.7' }}>
      These cards demonstrate the core philosophy: generous spacing, subtle shadows, and carefully chosen iconography that provide focus without distraction. 
      Whether previewing a Storybook component or auditing an SOP, teams get a seamless experience.
    </p>
    <p style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
      This level of detail allows teams to collaborate better, iterate faster, and maintain confidence in their documentation and design systems for years to come.
    </p>
  </motion.div>
</motion.section>

{/* ✨ CTA CARD - UNIQUE TRANSITION */}
<motion.section
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: 'easeOut' }}
  style={{
    textAlign: 'center',
    marginBottom: '4rem',
    padding: '2.2rem',
    borderRadius: '18px',
    background: isDark
      ? 'linear-gradient(160deg, rgba(55,35,90,0.95) 0%, rgba(30,20,50,0.9) 100%)'
      : 'linear-gradient(160deg, rgba(245,250,255,0.97) 0%, rgba(230,240,255,0.94) 100%)',
    boxShadow: isDark
      ? '0 0 40px rgba(150,100,255,0.35), 0 6px 24px rgba(0,0,0,0.7)'
      : '0 0 40px rgba(0,0,0,0.08), 0 0 80px rgba(100,160,255,0.25)',
    maxWidth: '1100px',
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative',
    zIndex: 1,
    backdropFilter: 'blur(6px)',
  }}
>
  {/* Floating cloud icon */}
  <motion.div
    animate={{ y: [0, -6, 0] }}
    transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
    style={{
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '1rem',
    }}
  >
    <svg
      width="48"
      height="30"
      viewBox="0 0 64 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ flexShrink: 0 }}
    >
      <path
        d="M20 30c-8 0-14-6-14-14s6-14 14-14c6 0 11 3 13 8 1-0.3 2-0.4 3-0.4 5 0 9 4 9 9s-4 9-9 9H20z"
        fill={isDark ? '#6da9ff' : '#2f2f2f'}
        opacity={isDark ? 0.9 : 0.7}
      />
    </svg>
  </motion.div>

  <h2
    style={{
      fontSize: '2.2rem',
      marginBottom: '0.8rem',
      fontWeight: 800,
      color: isDark ? '#f9f9ff' : '#122232',
      letterSpacing: '-0.5px',
      textShadow: isDark
        ? '0 0 12px rgba(180,150,255,0.4)'
        : '0 1px 2px rgba(0,0,0,0.08)',
    }}
  >
    Ready to Explore?
  </h2>
  <p
    style={{
      fontSize: '1.15rem',
      marginBottom: '0',
      color: isDark ? '#dcd3ff' : '#333',
      lineHeight: '1.7',
      maxWidth: '800px',
      marginLeft: 'auto',
      marginRight: 'auto',
    }}
  >
    Discover the full breadth of the Cumulus UI Library. Dive into storybook component previews, explore compliance-ready SOPs, 
    and experience how a unified design and documentation system can transform your team’s workflow.
  </p>
</motion.section>


      {/* ✨ LANDING TITLE CARDS */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <LandingTitle />
      </div>
    </main>
  );
}

export default function Home() {
  return (
    <Layout
      title="Cumulus UI Library"
      description="Scalable cloud-native documentation and design system for internal teams."
    >
      <BrowserOnly>{() => <HomeInner />}</BrowserOnly>
    </Layout>
  );
}
