/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';
import Draggable from 'react-draggable';
import styles from './Resume.css';


export default function Resume({ handleResumeClick }) {
  return (
    window ? <Draggable
      defaultPosition={{ x: 150, y: 100 }}>
      <div className={styles.wholeWindow}>
        <div className={styles.innerBorder}>
          <div className={styles.documentBar}>
            <img className={styles.iconOne} src="src\assets\Icon_1.ico" />
            <span className={styles.windowsText}>Resume</span>
            <div className={styles.minimizeExit}>
              <img src="src\assets\minimise-btn.jpg" />
              <img src="src\assets\close-btn.jpg" onClick={handleResumeClick} />
            </div>
          </div>
          <div className={styles.fileButtons}>
            <div>File</div>
            <div>Edit</div>
            <div>Format</div>
            <div>Help</div>
          </div>
          <div className={styles.textWindow}>
            <p>Here is a link to my fancy <a href="src\assets\resume.pdf">RESUME</a>.</p>
          </div>
        </div>
      </div>
    </Draggable> : null
  );
}
