/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import styles from './Clippy.css';

export default function Clippy({ handlePortfolioClick }) {

  const [message, setMessage] = useState(
    <div><p>It looks like you're looking to hire a full stack engineer!</p>
      <p>Would you like to see Charlie's portfolio?</p></div>
  );

  const handleNoClick = () => {
    setMessage(<div>
      <p>
        Did you think that would make me go away? 
      </p>
      <p>
        I'm here to stay. Deal with it.
      </p>
    </div>);
  };

  return (
    <div>
      <img className={styles.clippy} src="src\assets\1zfr.gif" />
      <div className={styles.dialogueBox}>
        {message}
        <div className={styles.buttons}>        
          <button onClick={handlePortfolioClick}>Yes</button>
          <button onClick={handleNoClick}>No</button>
        </div>
      </div>
    </div>
  );
}
