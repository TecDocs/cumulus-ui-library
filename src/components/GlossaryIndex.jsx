import React, { useEffect, useState } from 'react';
import styles from './GlossaryIndex.module.css';

export default function GlossaryIndex() {
  const [terms, setTerms] = useState({});

  useEffect(() => {
    if (typeof window !== 'undefined' && window.__glossary__) {
      setTerms(window.__glossary__);
    }
  }, []);

  const sortedTerms = Object.entries(terms).sort(([a], [b]) => a.localeCompare(b));

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>📖 Glossary Index</h2>
      {sortedTerms.length === 0 ? (
        <p className={styles.empty}>No glossary terms defined yet.</p>
      ) : (
        <ul className={styles.list}>
          {sortedTerms.map(([term, definition]) => (
            <li key={term} className={styles.item}>
              <strong>{term}</strong>: {definition}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}