
import React, { useState, useEffect } from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './CloudDefinitionReal.module.css';

export default function CloudDefinitionReal({ term, children }) {
  const [visible, setVisible] = useState(false);
  const { colorMode } = useColorMode();

  const cloudLight = useBaseUrl('/img/cloud-light.svg');
  const cloudDark = useBaseUrl('/img/cloud-dark.svg');
  const backgroundImage = colorMode === 'dark' ? cloudDark : cloudLight;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.__glossary__ = window.__glossary__ || {};
      if (!window.__glossary__[term]) {
        window.__glossary__[term] = children;
      }
    }
  }, [term, children]);

  return (
    <span
      className={styles.trigger}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onClick={() => setVisible(v => !v)}
    >
      <span className={styles.term}>{term}</span>
      {visible && (
        <div
          className={styles.definitionBox}
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className={styles.textContent}>{children}</div>
        </div>
      )}
    </span>
  );
}
