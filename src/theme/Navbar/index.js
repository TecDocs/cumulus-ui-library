import React, { useEffect, useState } from 'react';
import NavbarLayout from '@theme/Navbar/Layout';
import NavbarContent from '@theme/Navbar/Content';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const icons = [
    {
      href: 'https://joshua-schoen.com',
      label: 'Portfolio',
      icon: 'briefcase.svg',
    },
    {
      href: 'https://github.com/TecDocs/cumulus-ui-library',
      label: 'GitHub',
      icon: 'github.svg',
    },
    {
      href: 'https://www.linkedin.com/in/joshua-schoen-77b742252/',
      label: 'LinkedIn',
      icon: 'linkedin.svg',
    },
    {
      href: 'https://substack.com/@tecdocs',
      label: 'Substack',
      icon: 'Substack.svg',
    },
  ];

  return (
    <NavbarLayout className={`${styles.glassHeader} ${animate ? styles.animateIn : ''}`}>
      <NavbarContent />
      <div className={styles.headerIcons}>
        {icons.map(({ href, label, icon }) => (
          <a
            key={label}
            href={href}
            className={styles.iconLink}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={useBaseUrl(`/img/${icon}`)}
              alt={label}
              className={styles.icon}
            />
          </a>
        ))}
      </div>
    </NavbarLayout>
  );
}
