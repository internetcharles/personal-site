import React from 'react';
import styles from './StartBar.css';

export default function StartBar() {
  return (
    <div className={styles.bar}>
      <div className={styles.shadingBar} />
      <div className={styles.logoBox}>
        <img className={styles.logo} src="src/assets/windows-start-logo.png" />
      </div>
    </div>
  );
}
