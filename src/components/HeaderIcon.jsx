import React from 'react';
import clsx from 'clsx';
import styles from './HeaderIcon.module.css';

export default function HeaderIcon({ href, label, children }) {
  return (
    <a
      href={href}
      className={clsx('header-icon-link')}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
