/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { useDispatch } from 'react-redux';
import { setAbout } from '../../../actions/displayActions';
import styles from './About.css';


export default function About({ handleAboutClick }) {

  return (
    <Draggable
      defaultPosition={{ x: 150, y: 100 }}>
      <div className={styles.wholeWindow}>
        <div className={styles.innerBorder}>
          <div className={styles.documentBar}>
            <img className={styles.iconOne} src="src\assets\Icon_1.ico" />
            <span className={styles.windowsText}>About Me - Notepad</span>
            <div className={styles.minimizeExit}>
              <img src="src\assets\minimise-btn.jpg" />
              <img src="src\assets\close-btn.jpg" onClick={handleAboutClick} />
            </div>
          </div>
          <div className={styles.fileButtons}>
            <div>File</div>
            <div>Edit</div>
            <div>Format</div>
            <div>Help</div>
          </div>
          <div className={styles.textWindow}>
            <p>Did you know?</p>
            <p>I spent three years teaching on a small island in Japan.</p>
            <p>I designed a virtual reality game called Chop It!</p>
            <p>I'm a pretty nice guy.</p>
          </div>
        </div>
      </div>
    </Draggable>
  );
}
