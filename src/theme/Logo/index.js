import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function CustomLogo() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const logoSrc = useBaseUrl(isDark ? '/img/cloud.svg' : '/img/stormcloud.svg');

  return (
    <img
      src={logoSrc}
      alt="Cumulus Logo"
      style={{ width: '32px', height: '32px', objectFit: 'contain' }}
    />
  );
}
