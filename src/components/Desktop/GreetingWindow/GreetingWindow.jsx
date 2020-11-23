/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';
import Draggable from 'react-draggable';
import { useDispatch } from 'react-redux';
import { setGreeting } from '../../../actions/displayActions';
import styles from './GreetingWindow.css';


export default function GreetingWindow() {

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setGreeting(false));
    console.log('hello');
  };

  return (
    window ? <Draggable
      defaultPosition={{ x: 150, y: 100 }}>
      <div className={styles.wholeWindow}>
        <div className={styles.innerBorder}>
          <div className={styles.documentBar}>
            <img className={styles.iconOne} src="src\assets\Icon_1.ico" />
            <span className={styles.windowsText}>Hello - Notepad</span>
            <div className={styles.minimizeExit}>
              <img src="src\assets\minimise-btn.jpg" />
              <img src="src\assets\close-btn.jpg" onClick={handleClick} />
            </div>
          </div>
          <div className={styles.fileButtons}>
            <div>File</div>
            <div>Edit</div>
            <div>Format</div>
            <div>Help</div>
          </div>
          <div className={styles.textWindow}>
            <p>Hi, I'm Charlie Smith, a full stack engineer from Portland, OR.
              Welcome to my desktop. Here you can view my portfolio, resume, and learn
              a little bit more about me.
            </p>
            <p>Here are some cool links:</p>
            <p>Portfolio</p>
            <p>Resume</p>
            <p>Ongoing Projects</p>
          </div>
        </div>
      </div>
    </Draggable> : null
  );
}
