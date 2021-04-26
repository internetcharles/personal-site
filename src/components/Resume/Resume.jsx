/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';
import Draggable from 'react-draggable';
import styles from './Resume.css';
import CloseButton from '../../assets/close-btn.jpg';
import MinimizeButton from '../../assets/minimise-btn.jpg';
import IconOne from '../../assets/Icon_1.ico';
import ResumePDF from '../../assets/resume.pdf';


export default function Resume({ handleResumeClick }) {
  return (
    window ? <Draggable
      defaultPosition={{ x: 150, y: 100 }}>
      <div className={styles.wholeWindow}>
        <div className={styles.innerBorder}>
          <div className={styles.documentBar}>
            <img className={styles.iconOne} src={IconOne} />
            <span className={styles.windowsText}>Resume</span>
            <div className={styles.minimizeExit}>
              <img src={MinimizeButton} />
              <img src={CloseButton} onClick={handleResumeClick} />
            </div>
          </div>
          <div className={styles.fileButtons}>
            <div>File</div>
            <div>Edit</div>
            <div>Format</div>
            <div>Help</div>
          </div>
          <div className={styles.textWindow}>
            <p>Here is a link to my fancy <a href={ResumePDF}>RESUME</a>.</p>
          </div>
        </div>
      </div>
    </Draggable> : null
  );
}
