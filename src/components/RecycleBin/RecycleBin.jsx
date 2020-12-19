import React from 'react';
import Draggable from 'react-draggable';
import WindowIcon from '../Desktop/Buttons/WindowIcon';
import styles from './RecycleBin.css';
import CloseButton from '../../assets/close-btn.jpg';
import MinimizeButton from '../../assets/minimise-btn.jpg';
import IconOne from '../../assets/Icon_1.ico';
import IconTwo from '../../assets/Icon_2.ico';

const RecycleBin = ({ handleRecycleClick }) => {
  return (
    window ? <Draggable
      defaultPosition={{ x: 150, y: 100 }}>
      <div className={styles.wholeWindow}>
        <div className={styles.innerBorder}>
          <div className={styles.documentBar}>
            <img className={styles.iconOne} src={IconOne} />
            <span className={styles.windowsText}>Recycle Bin</span>
            <div className={styles.minimizeExit}>
              <img src={MinimizeButton} />
              <img src={CloseButton} onClick={handleRecycleClick} />
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
                src={IconTwo}
                projectLink="https://github.com/internetcharles" 
                name="Plans for world domination" />
            </div>
          </div>
        </div>
      </div>
    </Draggable> : null
  );
};

export default RecycleBin;
