/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';
import Draggable from 'react-draggable';
import { useDispatch } from 'react-redux';
import { setGreeting } from '../../../actions/displayActions';
import styles from './GreetingWindow.css';
import CloseButton from '../../../assets/close-btn.jpg';
import MinimizeButton from '../../../assets/minimise-btn.jpg';
import IconOne from '../../../assets/Icon_1.ico';

export default function GreetingWindow() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setGreeting(false));
    console.log('hello');
  };

  return window ? (
    <Draggable defaultPosition={{ x: 150, y: 100 }}>
      <div className={styles.wholeWindow}>
        <div className={styles.innerBorder}>
          <div className={styles.documentBar}>
            <img className={styles.iconOne} src={IconOne} />
            <span className={styles.windowsText}>Hello - Notepad</span>
            <div className={styles.minimizeExit}>
              <img src={MinimizeButton} />
              <img src={CloseButton} className={styles.exit} onClick={handleClick} />
            </div>
          </div>
          <div className={styles.fileButtons}>
            <div>File</div>
            <div>Edit</div>
            <div>Format</div>
            <div>Help</div>
          </div>
          <div className={styles.textWindow}>
            <p>
              **This site is not optimized for mobile users! Hop on your desktop!**
            </p>
            <p>
							Hi, I'm Charlie Smith, a full stack engineer from Portland, OR.
							Welcome to my desktop. Here you can view my portfolio, resume, and
							learn a little bit more about me.
            </p>
            <p>Simply double-click the icons to navigate through the OS.</p>
          </div>
        </div>
      </div>
    </Draggable>
  ) : null;
}
