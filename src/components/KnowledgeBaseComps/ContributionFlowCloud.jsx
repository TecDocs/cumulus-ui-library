import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';

export default function ContributionFlowCloud({ steps }) {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <div
      style={{
        display: 'flex',
        overflowX: 'auto',
        padding: '1.5rem 1rem',
        gap: '1.5rem',
        alignItems: 'center'
      }}
    >
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <div
            style={{
              flex: '0 0 auto',
              padding: '1rem 1.25rem',
              minWidth: '160px',
              background: isDark ? '#283247' : '#f0f4ff',
              borderRadius: '12px',
              boxShadow: '0 0 16px rgba(0, 140, 255, 0.35)',
              textAlign: 'center',
              fontWeight: 600,
              animation: 'pulseGlow 3s infinite ease-in-out',
              color: isDark ? '#ffffff' : '#000000',
              whiteSpace: 'nowrap'
            }}
          >
            {step}
          </div>

          {index < steps.length - 1 && (
            <div
              style={{
                flex: '0 0 auto',
                fontSize: '1.75rem',
                fontWeight: 700,
                color: isDark ? '#70d6ff' : '#0080ff',
                padding: '0 0.5rem',
                userSelect: 'none'
              }}
            >
              →
            </div>
          )}
        </React.Fragment>
      ))}
      <style>
        {`
          @keyframes pulseGlow {
            0%, 100% { box-shadow: 0 0 16px rgba(0, 140, 255, 0.3); }
            50% { box-shadow: 0 0 30px rgba(0, 140, 255, 0.6); }
          }
        `}
      </style>
    </div>
  );
}
