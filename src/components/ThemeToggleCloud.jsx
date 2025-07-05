import React, { useEffect, useState } from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';

const ThemeToggleCloud = () => {
  const { colorMode, setColorMode } = useColorMode();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const toggleTheme = () => {
    setColorMode(colorMode === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '0.25rem',
        transition: 'transform 0.3s ease',
      }}
    >
      <img
        src={useBaseUrl(colorMode === 'dark' ? '/img/cloud-drizzle.svg' : '/img/cloud-sun.svg')}
        alt="Toggle Theme"
        width="32"
        height="32"
        style={{
          filter: colorMode === 'dark' ? 'brightness(0.85)' : 'brightness(1)',
          transition: 'filter 0.3s ease',
        }}
      />
    </button>
  );
};

export default ThemeToggleCloud;
