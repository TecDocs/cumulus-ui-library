import React from 'react';
import styles from './HoverExplain.module.css';
import cloudLight from '../../assets/cloud-light.svg';
import cloudDark from '../../assets/cloud-dark.svg';



import { useColorModeSafe } from '../../utils/useColorModeSafe';

export default function HoverExplain({ term, definition }) {
  const { colorMode } = useColorModeSafe();
  const cloudSrc = colorMode === 'dark' ? cloudDark : cloudLight;

  return (
    <span className={styles.wrapper}>
      <span className={styles.term}>{term}</span>
      <span className={`${styles.tooltip} ${colorMode === 'dark' ? styles.dark : styles.light}`}>
        <div className={styles.cloudWrapper}>
          <img
            src={cloudSrc}
            alt="Tooltip Cloud Background"
            className={styles.cloudImage}
            loading="lazy"
            draggable={false}
          />
          <span className={styles.definitionText}>{definition}</span>
        </div>
      </span>
    </span>
  );
}
