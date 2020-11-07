/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';
import styles from './GreetingWindow.css';

export default function GreetingWindow() {
  return (
    <div className={styles.wholeWindow}>
      <div className={styles.innerWindow}>
        Hello! I'm Charlie Smith, a full stack engineer located in Portland, OR.
      </div>
    </div>
  );
}
