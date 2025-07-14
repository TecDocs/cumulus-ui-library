import React, { useState } from 'react';
import { useColorMode } from '@docusaurus/theme-common';

export default function VersionSwitcherToggle({ onToggle }) {
  const [on, setOn] = useState(false);
  const { colorMode } = useColorMode();

  const handleClick = () => {
    const newValue = !on;
    setOn(newValue);
    if (onToggle) onToggle(newValue);
  };

  const labelStyle = (active) => ({
    fontWeight: active ? 700 : 500,
    color: active
      ? (colorMode === 'dark' ? '#34d399' : '#047857') // green if active
      : (colorMode === 'dark' ? '#ccc' : '#555'),
    transition: 'color 0.3s ease',
    fontSize: '1rem',
  });

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1.25rem',
        margin: '2.5rem 0 1.5rem',
        justifyContent: 'center',
      }}
    >
      <span style={labelStyle(!on)}>v1.0</span>

      <div
        onClick={handleClick}
        style={{
          width: '64px',
          height: '32px',
          background: on ? '#10b981' : '#f87171',
          borderRadius: '9999px',
          cursor: 'pointer',
          position: 'relative',
          transition: 'background 0.3s ease',
          boxShadow: on
            ? '0 0 12px rgba(34,197,94,0.5)'
            : '0 0 8px rgba(239,68,68,0.5)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '4px',
            left: on ? '36px' : '4px',
            width: '24px',
            height: '24px',
            background: '#fff',
            borderRadius: '50%',
            transition: 'all 0.3s ease',
          }}
        />
      </div>

      <span style={labelStyle(on)}>v2.0</span>
    </div>
  );
}
