// src/components/LandingImageRow.jsx
import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './LandingImageRow.module.css';

const images = [
  { src: '/img/storybook-preview.png', caption: 'Explore it all in the Storybook section below' },
  { src: '/img/confluence-mock.png', caption: 'Confluence-style SOPs, view all the SOPS in the Confluence section below' },
  { src: '/img/madcap-export.png', caption: 'PDF Output with MadCap Flare, download the whole PDF below' },
];

export default function LandingImageRow() {
  return (
    <div className={styles.row}>
      {images.map((img, idx) => (
        <div key={idx} className={styles.imageBox}>
          <img src={useBaseUrl(img.src)} alt={img.caption} />
          <p>{img.caption}</p>
        </div>
      ))}
    </div>
  );
}
