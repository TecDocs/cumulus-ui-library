import React from 'react';
export default function LockedFeatureCallout() {
  return (
    <div style={{
      padding: '2rem',
      margin: '2rem auto',
      textAlign: 'center',
      borderRadius: '12px',
      background: '#eee',
      filter: 'blur(0.5px)',
      color: '#666',
      maxWidth: '400px',
    }}>
      🔒 This feature is locked. Upgrade your plan to access.
    </div>
  );
}
