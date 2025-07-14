import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useColorMode } from '@docusaurus/theme-common';

export default function CloudVersioningDiagram() {
  const { colorMode } = useColorMode();
  const imgSrc = useBaseUrl('/cumulus-ui-library/img/versioning-diagram-placeholder.png');

  return (
    <div style={{
      padding: '2rem',
      borderRadius: '10px',
      background: colorMode === 'dark' ? '#222831' : '#ffffff',
      boxShadow: colorMode === 'dark' ? '0 0 14px #81d4fa' : '0 0 4px #b0bec5'
    }}>
      <img src={imgSrc} alt="Cloud versioning diagram" style={{
        width: '100%',
        height: 'auto',
        borderRadius: '8px'
      }} />
    </div>
  );
}
