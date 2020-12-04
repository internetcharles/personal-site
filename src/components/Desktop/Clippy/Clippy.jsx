/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styles from './Clippy.css';

export default function Clippy({ handlePortfolioClick }) {
  return (
    <div>
      <img className={styles.clippy} src="src\assets\1zfr.gif" />
      <div className={styles.dialogueBox}>
        <p>It looks like you're looking to hire a full stack engineer!</p>
        <p>Would you like to see Charlie's portfolio?</p>
        <div className={styles.buttons}>        
          <button onClick={handlePortfolioClick}>Yes</button>
          <button>No</button>
        </div>
      </div>
    </div>
  );
}
