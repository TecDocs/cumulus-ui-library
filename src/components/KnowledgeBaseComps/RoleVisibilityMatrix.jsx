import React from 'react';
export default function RoleVisibilityMatrix() {
  const roles = ['Admin', 'Editor', 'Viewer'];
  const features = ['Create Post', 'Edit Post', 'Delete Post', 'View Analytics'];
  const accessMatrix = {
    Admin: [true, true, true, true],
    Editor: [true, true, false, true],
    Viewer: [false, false, false, true],
  };

  return (
    <div style={{ maxWidth: '600px', margin: '2rem auto', fontFamily: 'sans-serif' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ borderBottom: '2px solid #ccc', textAlign: 'left' }}>Role</th>
            {features.map((f, i) => (
              <th key={i} style={{ borderBottom: '2px solid #ccc' }}>{f}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {roles.map((role, i) => (
            <tr key={i}>
              <td style={{ padding: '0.5rem 0' }}>{role}</td>
              {accessMatrix[role].map((hasAccess, j) => (
                <td key={j} style={{ textAlign: 'center' }}>
                  {hasAccess ? '✅' : '❌'}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
