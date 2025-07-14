import React from 'react';
import styles from './TokenBranchCloud.module.css';

export default function TokenBranchCloud() {
  return (
    <div className={styles.tree}>
      <div className={styles.rootToken}>🎯 --color-brand-primary</div>
      <div className={styles.branchLine}>┃</div>
      <div className={styles.child}>🔵 Button</div>
      <div className={styles.branchLine}>┃</div>
      <div className={styles.child}>🟣 Card</div>
      <div className={styles.branchLine}>┃</div>
      <div className={styles.child}>🟢 Header</div>
    </div>
  );
}
