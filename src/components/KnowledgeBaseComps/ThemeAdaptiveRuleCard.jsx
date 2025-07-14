import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';

const ThemeAdaptiveRuleCard = ({ title, lightImg, darkImg, description }) => {
  const { colorMode } = useColorMode();
  const imageSrc = colorMode === 'dark' ? darkImg : lightImg;

  const backgroundColor = colorMode === 'dark' ? '#1f1f1f' : '#ffffff';
  const textColor = colorMode === 'dark' ? '#ffffff' : '#000000';
  const glow = colorMode === 'dark' ? '0 0 50px #00ffff' : '0 0 10px rgba(0,0,0,0.05)';

  return (
    <div style={{
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: glow,
      backgroundColor,
      transition: 'all 0.3s ease',
      padding: '1.5rem',
      maxWidth: '700px',
      margin: '2rem auto',
      textAlign: 'center',
      color: textColor
    }}>
      <h3 style={{ marginBottom: '1rem' }}>{title}</h3>
      <img src={imageSrc} alt={title} style={{ width: '100%', borderRadius: '10px' }} />
      <p style={{ marginTop: '1rem', fontSize: '0.95rem' }}>{description}</p>
    </div>
  );
};

export default ThemeAdaptiveRuleCard;