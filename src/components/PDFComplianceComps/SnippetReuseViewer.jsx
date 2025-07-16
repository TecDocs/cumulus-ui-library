import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import { motion } from 'framer-motion';

export default function SnippetReuseViewer() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1.5rem',
    margin: '1.5rem 0',
    borderRadius: '16px',
    backgroundColor: isDark ? '#0f172a' : '#f8fafc',
    color: isDark ? '#e0f2fe' : '#0f172a',
    boxShadow: isDark ? '0 0 30px rgba(56,189,248,0.9)' : '0 0 12px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease'
  };

  const snippetStyle = {
    padding: '0.8rem 1rem',
    borderRadius: '12px',
    margin: '0.5rem',
    backgroundColor: isDark ? '#1e293b' : '#e0f2fe',
    boxShadow: isDark ? '0 0 12px rgba(56,189,248,0.8)' : '0 0 6px rgba(0,0,0,0.1)',
    fontWeight: '700',
    fontSize: '1rem'
  };

  const topicStyle = {
    padding: '0.6rem 0.8rem',
    borderRadius: '8px',
    margin: '0.3rem',
    backgroundColor: isDark ? '#334155' : '#ffffff',
    boxShadow: isDark ? '0 0 10px rgba(56,189,248,0.6)' : '0 0 4px rgba(0,0,0,0.1)',
    fontSize: '0.9rem',
    fontWeight: '600'
  };

  return (
    <motion.div style={containerStyle} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: 'easeOut' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={snippetStyle}>Snippet: Company Contact Info</div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.6 }} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '1rem' }}>
          <div style={topicStyle}>Topic A: Legal Notices</div>
          <div style={topicStyle}>Topic B: Support Guide</div>
          <div style={topicStyle}>Topic C: Onboarding Manual</div>
        </motion.div>
      </div>
      <p style={{ marginTop: '1rem', textAlign: 'center', maxWidth: '500px', fontSize: '1.1rem' }}>This snippet is reused across multiple topics, demonstrating single-sourced content control.</p>
    </motion.div>
  );
}
