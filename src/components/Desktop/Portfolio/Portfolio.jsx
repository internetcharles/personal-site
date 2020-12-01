/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';
import Draggable from 'react-draggable';
import { useDispatch } from 'react-redux';
import { setPortfolio } from '../../../actions/displayActions';
import Button from '../Buttons/Button';
import WindowIcon from '../Buttons/WindowIcon';
import styles from './Portfolio.css';


export default function Portfolio() {

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setPortfolio(false));
    console.log('hello');
  };

  return (
    window ? <Draggable
      defaultPosition={{ x: 150, y: 100 }}>
      <div className={styles.wholeWindow}>
        <div className={styles.innerBorder}>
          <div className={styles.documentBar}>
            <img className={styles.iconOne} src="src\assets\Icon_1.ico" />
            <span className={styles.windowsText}>Portfolio</span>
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
          <div className={styles.iconList}>
            <WindowIcon 
              src="src\assets\Font.ico" 
              projectLink="https://page-trade.netlify.app/" 
              name="PageTrade" />
            <WindowIcon 
              src="src\assets\Defragment.ico" 
              projectLink="https://store.steampowered.com/app/812580/Chop_It/" 
              name="Chop It!" />
            <WindowIcon 
              src="src\assets\Server.ico" 
              projectLink="https://detestination.netlify.app/" 
              name="Detestination" />
            <WindowIcon 
              src="src\assets\NetworkComputer.ico" 
              projectLink="https://github.com/Team-Formerly-Known-As-Mega-Calendar/Terminus-Front-End" 
              name="Terminus" />
          </div>
        </div>
      </div>
    </Draggable> : null
  );
}
