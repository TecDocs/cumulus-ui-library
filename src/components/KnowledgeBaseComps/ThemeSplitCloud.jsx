import React from 'react';

export default function ThemeSplitCloud({ lightLabel, darkLabel, tokenName, lightValue, darkValue }) {
  const container = {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    margin: '2rem 0',
  };

  const half = (bgColor, textColor) => ({
    flex: 1,
    borderRadius: '12px',
    padding: '1.2rem',
    backgroundColor: bgColor,
    color: textColor,
    boxShadow: '0 6px 14px rgba(0,0,0,0.07)',
  });

  const label = {
    fontSize: '0.85rem',
    fontWeight: 'bold',
    opacity: 0.75,
  };

  const tokenBlock = {
    marginTop: '0.4rem',
    fontSize: '1.1rem',
    fontFamily: 'monospace',
  };

  return (
    <div style={container}>
      <div style={half('#f9f9f9', '#111')}>
        <div style={label}>{lightLabel}</div>
        <div style={tokenBlock}>{lightValue}</div>
      </div>
      <div style={half('#1A1A1A', '#fff')}>
        <div style={label}>{darkLabel}</div>
        <div style={tokenBlock}>{darkValue}</div>
      </div>
    </div>
  );
}
