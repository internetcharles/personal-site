/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';
import Draggable from 'react-draggable';
import PropTypes from 'prop-types';
import styles from './About.css';
import CloseButton from '../../../assets/close-btn.jpg';
import MinimizeButton from '../../../assets/minimise-btn.jpg';
import IconOne from '../../../assets/Icon_1.ico';


export default function About({ handleAboutClick }) {

  return (
    <Draggable
      defaultPosition={{ x: 150, y: 100 }}>
      <div className={styles.wholeWindow}>
        <div className={styles.innerBorder}>
          <div className={styles.documentBar}>
            <img className={styles.iconOne} src={IconOne} />
            <span className={styles.windowsText}>About Me - Notepad</span>
            <div className={styles.minimizeExit}>
              <img src={MinimizeButton} />
              <img src={CloseButton} onClick={handleAboutClick} />
            </div>
          </div>
          <div className={styles.fileButtons}>
            <div>File</div>
            <div>Edit</div>
            <div>Format</div>
            <div>Help</div>
          </div>
          <div className={styles.textWindow}>
            <p>Hi, I'm Charlie. I'm a full-stack engineer from Portland, OR.</p>
            <p>I'm a dynamic and motivated person who has a passion for creating cool stuff!</p>
            <p>Prior to working in tech I worked as an English teacher on an island of 8000 people in Japan.</p>
            <p>You should play the video game I designed, "Chop It"! Click the icon in my portfolio folder for a link
              to its Steam page!</p>
            <p>I program because it's fun! It's a never-ending puzzle, and I think I'm pretty good at it.
              I'm proficient in all kinds of technology, including Javascript, React, Redux, Express, Node and PostgreSQL.
              This website was made in JS and React with Redux!</p>
            <p>The good news for you is I'm currently available for work. E-mail me at <a href="mailto:internetcharles@gmail.com">internetcharles@gmail.com</a>!</p>
          </div>
        </div>
      </div>
    </Draggable>
  );
}

About.propTypes = {
  handleAboutClick: PropTypes.func.isRequired
};

