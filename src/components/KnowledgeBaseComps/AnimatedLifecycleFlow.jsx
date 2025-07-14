import React from 'react';

export default function AnimatedLifecycleFlow({ steps }) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '1.5rem',
      overflowX: 'auto',
      padding: '2rem 0',
    }}>
      {steps.map((step, i) => (
        <div key={i} style={{
          padding: '1rem 2rem',
          borderRadius: '20px',
          background: '#161B22',
          color: '#f0f0f0',
          border: '1px solid rgba(255,255,255,0.1)',
          boxShadow: '0 0 10px rgba(173,216,230,0.2)',
          position: 'relative',
          minWidth: '180px',
        }}>
          {step}
          {i < steps.length - 1 && (
            <div style={{
              position: 'absolute',
              top: '50%',
              right: '-1.5rem',
              transform: 'translateY(-50%)',
              fontSize: '2rem',
              color: '#7ee8fa'
            }}>
              →
            </div>
          )}
        </div>
      ))}
    </div>
  );
}