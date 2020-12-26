/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';
import Draggable from 'react-draggable';
import WindowIcon from '../Buttons/WindowIcon';
import styles from './Portfolio.css';
import CloseButton from '../../../assets/close-btn.jpg';
import MinimizeButton from '../../../assets/minimise-btn.jpg';
import IconOne from '../../../assets/Icon_1.ico';
import Font from '../../../assets/Font.ico';
import Defragment from '../../../assets/Defragment.ico';
import Server from '../../../assets/Server.ico';
import NetworkComputer from '../../../assets/NetworkComputer.ico';


export default function Portfolio({ handlePortfolioClick }) {
  return (
    window ? <Draggable
      defaultPosition={{ x: 150, y: 100 }}>
      <div className={styles.wholeWindow}>
        <div className={styles.innerBorder}>
          <div className={styles.documentBar}>
            <img className={styles.iconOne} src={IconOne} />
            <span className={styles.windowsText}>Portfolio</span>
            <div className={styles.minimizeExit}>
              <img src={MinimizeButton} />
              <img src={CloseButton} className={styles.exit} onClick={handlePortfolioClick} />
            </div>
          </div>
          <div className={styles.fileButtons}>
            <div>File</div>
            <div>Edit</div>
            <div>Format</div>
            <div>Help</div>
          </div>
          <div className={styles.textWindow}>
            <div className={styles.iconList}>
              <WindowIcon 
                src={Font}
                projectLink="https://page-trade.netlify.app/" 
                name="PageTrade" />
              <WindowIcon 
                src={Defragment}
                projectLink="https://store.steampowered.com/app/812580/Chop_It/" 
                name="Chop It!" />
              <WindowIcon 
                src={Server}
                projectLink="https://detestination.netlify.app/" 
                name="Detestination" />
              <WindowIcon 
                src={NetworkComputer}
                projectLink="https://github.com/Team-Formerly-Known-As-Mega-Calendar/Terminus-Front-End" 
                name="Terminus" />
            </div>
          </div>
        </div>
      </div>
    </Draggable> : null
  );
}
