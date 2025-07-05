import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import styles from './HeroCloudySunny.module.css';

export default function HeroCloudySunny() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <div className={`${styles.sky} ${isDark ? styles.stormy : ''}`}>
      {isDark ? (
        // 🌑 Nighttime solar eclipse (black moon in front of glowing corona)
        <div className={styles.eclipseContainer}>
          <div className={styles.eclipseSunRing} />
          <div className={styles.eclipseMoonDisc} />
        </div>
      ) : (
        // 🌞 Daytime eclipse (partial sun eclipse effect)
        <div className={styles.eclipseContainer}>
          <div className={styles.eclipseSunBody} />
          <div className={styles.eclipseCoverDisc} />
        </div>
      )}
    </div>
  );
}
