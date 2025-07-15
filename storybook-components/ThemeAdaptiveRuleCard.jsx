import React from 'react';

const ThemeAdaptiveRuleCard = ({ title, lightImg, darkImg, description }) => {
  // default to light mode image
  const imageSrc = lightImg;

  return (
    <div style={{
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 0 10px rgba(0,0,0,0.05)',
      backgroundColor: '#ffffff',
      padding: '1.5rem',
      maxWidth: '700px',
      margin: '2rem auto',
      textAlign: 'center',
      color: '#000000'
    }}>
      <h3 style={{ marginBottom: '1rem' }}>{title}</h3>
      <img src={imageSrc} alt={title} style={{ width: '100%', borderRadius: '10px' }} />
      <p style={{ marginTop: '1rem', fontSize: '0.95rem' }}>{description}</p>
    </div>
  );
};

export default ThemeAdaptiveRuleCard;
