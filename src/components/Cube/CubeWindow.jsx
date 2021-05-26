/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';
import Draggable from 'react-draggable';
import PropTypes from 'prop-types';
import styles from './CubeWindow.css';
import CloseButton from '../../assets/close-btn.jpg';
import MinimizeButton from '../../assets/minimise-btn.jpg';
import CubeIcon from '../../assets/Defragment.ico';
import Cube from './Cube';


export default function CubeWindow({ handleCubeClick }) {

  return (
    <Draggable
      defaultPosition={{ x: 120, y: 100 }}>
      <div className={styles.wholeWindow}>
        <div className={styles.innerBorder}>
          <div className={styles.documentBar}>
            <img className={styles.iconOne} src={CubeIcon} />
            <span className={styles.windowsText}>Cube</span>
            <div className={styles.minimizeExit}>
              <img src={MinimizeButton} />
              <img src={CloseButton} onClick={handleCubeClick} />
            </div>
          </div>
          <div className={styles.fileButtons}>
            <div>File</div>
            <div>Edit</div>
            <div>Format</div>
            <div>Help</div>
          </div>
          <div className={styles.textWindow}>
            <Cube />  
          </div>
        </div>
      </div>
    </Draggable>
  );
}

CubeWindow.propTypes = {
  handleCubeClick: PropTypes.func.isRequired
};

