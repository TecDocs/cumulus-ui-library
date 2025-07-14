import React, { useState } from 'react';
export default function PermissionStatePreview() {
  const [state, setState] = useState('granted');
  const states = ['granted', 'denied', 'pending'];

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <select onChange={(e) => setState(e.target.value)} value={state}>
        {states.map(s => <option key={s} value={s}>{s}</option>)}
      </select>
      <div style={{
        marginTop: '1rem',
        padding: '1rem',
        borderRadius: '8px',
        background: state === 'granted' ? '#d4fcd4' :
                    state === 'denied' ? '#fcd4d4' : '#fcfcd4',
        color: '#222'
      }}>
        Permission: <strong>{state.toUpperCase()}</strong>
      </div>
    </div>
  );
}
