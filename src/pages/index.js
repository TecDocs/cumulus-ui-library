import React from 'react';
import Layout from '@theme/Layout';
import { motion } from 'framer-motion';
import LandingTitle from '../components/LandingTitle.jsx';
import FeatureHighlight from '../components/FeatureHighlight.jsx';
import HeroCloudySunny from '../components/HeroCloudySunny.jsx';
import LandingImageRow from '../components/LandingImageRow.jsx';


export default function Home() {
  return (
    <Layout
      title="Cumulus UI Library"
      description="Scalable cloud-native documentation and design system for internal teams."
    >
      <div className="sky">
        <HeroCloudySunny />
      </div>

      <main className="landingMain">
        {/* 🌤️ Hero Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            maxWidth: '700px',
            textAlign: 'center',
            fontSize: '1.2rem',
            lineHeight: '1.8',
            color: 'var(--ifm-font-color-base)',
            margin: '2rem auto 3rem',
          }}
        >
          <h1
            style={{
              fontSize: '3.5rem',
              fontWeight: '900',
              background: 'linear-gradient(to right, #fff, #eef6ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 15px rgba(255,255,255,0.7)',
            }}
          >
            ☁️ CUMULUS UI LIBRARY ☁️
          </h1>

          <p style={{ marginTop: '1rem', fontSize: '1.2rem', fontWeight: 500 }}>
            A scalable design system for internal documentation, component previews, PDF exports, and live process tracking.
          </p>

          <p>
            <strong>Cumulus</strong> is your team's all-in-one hub for technical documentation, component usage, compliance workflows, and audit-ready SOPs. 
            It merges <em>Storybook previews</em>, <em>Confluence-style SOPs</em>, and <em>MadCap-ready PDF exports</em> into a unified design and documentation system.
          </p>

          <p>
            It was designed for <strong>enterprise teams</strong>, <strong>startups with compliance needs</strong>, and <strong>platforms with live UI systems</strong>. Cumulus ensures everything your team builds—UI elements, documentation, internal workflows—is reusable, consistent, and version-controlled.
          </p>
        </motion.div>

        {/* 🧭 Quick Role-Based Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            maxWidth: '760px',
            margin: '2.5rem auto',
            padding: '1.5rem',
            borderRadius: '12px',
            background: 'var(--ifm-background-surface)',
            boxShadow: '0 0 20px rgba(0, 0, 0, 0.08)',
            textAlign: 'center',
            fontSize: '1.05rem',
          }}
        >
          <h2 style={{ fontSize: '1.7rem', marginBottom: '1rem' }}>🧭 Not Sure Where to Start?</h2>
          <p style={{ marginBottom: '1rem' }}>
            Cumulus is modular. Choose what fits your workflow:
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, textAlign: 'left' }}>
            <li><strong>🧑‍💻 Developers and Designers:</strong> Head to <a href="/cumulus-ui-library/docs/storybook/overview">Storybook Components</a> to view real-time UI logic, states, and variants.</li>
            <li><strong>📋 Compliance/QA:</strong> Review <a href="/cumulus-ui-library/docs/confluence/overview">SOPs & Processes</a> with version tracking and PDF generation.</li>
            <li><strong>📚 General Users:</strong> Start in the <a href="/cumulus-ui-library/docs/knowledge-base/intro">Knowledge Base</a> to explore system architecture and docs.</li>
          </ul>
        </motion.div>

        {/* ✨ Feature Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <FeatureHighlight />
        </motion.div>

        {/* 📘 Deep Explanation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ maxWidth: '700px', margin: '3rem auto 2rem', textAlign: 'center', fontSize: '1.1rem' }}
        >
          <p>
            Many tools solve a part of the documentation problem. Cumulus bridges the full gap:
            <strong> developers</strong> see what they’re using, <strong>designers</strong> preview how it will look, and <strong>legal/QA</strong> get the versioned audit trail they need.
          </p>
          <p>
            Storybook allows live, interactive UI testing with edge case support. SOPs follow a markdown+visual flow and include approval states. MadCap outputs mirror those workflows for external regulators.
          </p>
          <p>
            This eliminates tribal knowledge, spreads accountability, and increases product consistency across any team.
          </p>
        </motion.div>

        {/* 🖼️ Visual Workflow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <LandingImageRow />
        </motion.div>

        {/* 📘 Final Navigation CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ marginTop: '3rem' }}
                        >
                          <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  style={{
                    fontSize: '3rem',
                    fontWeight: '900',
                    textAlign: 'center',
                    marginTop: '3rem',
                    marginBottom: '1rem',
                    background: 'linear-gradient(to right, #ffffff, #d6ecff)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '0 0 10px rgba(255, 255, 255, 0.4)',
                  }}
                >
                  ☁️ Explore the Entire Cumulus Ecosystem
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  style={{
                    fontSize: '1.25rem',
                    textAlign: 'center',
                    color: 'var(--ifm-font-color-base)',
                    maxWidth: '720px',
                    margin: '0 auto 2.5rem',
                    lineHeight: '1.8',
                  }}
                >
                  Below you’ll find guided entry points into Cumulus’s most powerful modules:
                  <strong> Confluence-style SOPs</strong> for internal process clarity,
                  <strong> MadCap Flare exports</strong> for audit-proof documentation,
                  and a <strong>central knowledge base</strong> that unites teams across design,
                  product, and engineering.
                </motion.p>
         
          <LandingTitle />
        </motion.div>

        {/* 📎 Footer Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            maxWidth: '700px',
            margin: '4rem auto 3rem',
            textAlign: 'center',
            fontSize: '1.05rem',
            color: 'var(--ifm-color-secondary)',
          }}
        >
        
        </motion.div>
      </main>
    </Layout>
  );
}
