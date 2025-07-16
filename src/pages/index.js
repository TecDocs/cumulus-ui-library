import React from 'react';
import Layout from '@theme/Layout';
import { motion } from 'framer-motion';
import BrowserOnly from '@docusaurus/BrowserOnly';
import LandingTitle from '../components/LandingTitle.jsx';
import { useColorMode } from '@docusaurus/theme-common';

function HomeInner() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const sectionTextColor = {
    color: isDark ? '#f9f9f9' : '#222',
  };

  const cardBackground = {
    background: isDark ? 'rgba(40,40,40,0.85)' : 'rgba(255,255,255,0.9)',
    border: isDark
      ? '1px solid rgba(255,255,255,0.1)'
      : '1px solid rgba(0,0,0,0.08)',
    borderRadius: '12px',
    padding: '1.5rem',
    marginBottom: '1.5rem',
    boxShadow: isDark
      ? '0 0 14px rgba(120,200,255,0.3)'
      : '0 4px 14px rgba(0,0,0,0.06)',
  };

  return (
    <main
      style={{
        fontFamily: 'system-ui, sans-serif',
        // 👉 use your background image here
        backgroundImage: 'url(/img/blue-bg.png)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '100vh',
        width: '100%',
        padding: '4rem 2rem',
        margin: 0,
        lineHeight: '1.7',
      }}
    >
      {/* 🌤️ HERO HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{
          textAlign: 'center',
          marginBottom: '3rem',
        }}
      >
        <h1
          style={{
            fontSize: '3.5rem',
            fontWeight: '900',
            color: isDark ? '#ffffff' : '#000000',
            textShadow: 'none',
            margin: 0,
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
          marginBottom: '2.5rem',
          maxWidth: '1100px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <p style={{ fontSize: '1.2rem', fontWeight: 500, marginBottom: '1.2rem' }}>
          A scalable design system for internal documentation, component previews,
          PDF exports, and live process tracking.
        </p>
        <p>
          <strong>Cumulus</strong> is your team’s all‑in‑one hub for <strong>technical documentation</strong>, <strong>component usage</strong>, <strong>compliance workflows</strong>, and <strong>audit‑ready SOPs</strong>.
          It merges <em>Storybook previews</em>, <em>Confluence‑style SOPs</em>, and <em>MadCap‑ready PDF exports</em> into a unified design and documentation system.
        </p>
        <p>
          Built for <strong>enterprise teams</strong>, <strong>startups with compliance needs</strong>, and <strong>platforms with live UI systems</strong>, Cumulus ensures every element you build—UI components, docs, and workflows—is reusable, versioned, and easy to manage.
        </p>
      </motion.section>

      {/* ✨ WHO IT'S FOR */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{
          marginBottom: '2rem',
          maxWidth: '1100px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <div style={cardBackground}>
          <h3 style={{ marginTop: 0, marginBottom: '0.5rem', fontSize: '1.3rem', fontWeight: 700 }}>
            Who is Cumulus UI Library for?
          </h3>
          <ul style={{ paddingLeft: '1.2rem', margin: 0, listStyle: 'disc' }}>
            <li style={{ marginBottom: '0.4rem' }}>Frontend teams needing reusable components</li>
            <li style={{ marginBottom: '0.4rem' }}>Designers previewing live UI states</li>
            <li style={{ marginBottom: '0.4rem' }}>Compliance officers tracking SOPs and audits</li>
            <li>Startups and enterprises aligning docs and code in one hub</li>
          </ul>
        </div>
      </motion.section>

      {/* ✨ PURPOSE */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          marginBottom: '2rem',
          ...sectionTextColor,
          maxWidth: '1100px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <p>
          Instead of scattered documentation, Cumulus brings <strong>one source of truth</strong>.
          Your Storybook, Confluence SOPs, and MadCap exports all live together, letting teams work faster, maintain consistency, and stay ready for audits.
        </p>
      </motion.section>

      {/* ✨ CTA CARD */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{
          textAlign: 'center',
          marginBottom: '3rem',
          padding: '1.5rem',
          borderRadius: '12px',
          background: isDark ? 'rgba(40,40,40,0.85)' : 'rgba(255,255,255,0.95)',
          boxShadow: isDark
            ? '0 0 14px rgba(120,200,255,0.3)'
            : '0 2px 10px rgba(0,0,0,0.08)',
          maxWidth: '1100px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <h2 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>Ready to Explore?</h2>
        <p style={{ fontSize: '1.05rem', marginBottom: '1rem' }}>
          Jump into the sections below to view components, SOPs, compliance exports, and more.
        </p>
      </motion.section>

      {/* ✨ LANDING TITLE CARDS */}
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
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
