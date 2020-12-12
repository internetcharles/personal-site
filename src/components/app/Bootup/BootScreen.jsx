import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import styles from './BootScreen.css';

const BootScreen = () => {

  const [percentage, setPercentage] = useState(0);
  const history = useHistory();
  
  useEffect(() => {
    const id = setInterval(frame, 300);
    function frame() {
      if(percentage >= 100) {
        clearInterval(id);
      } else {
        setPercentage(percentage => percentage + 8);
      }
    }
  }, []);

  if(percentage < 100) return (
    <>
      <div className={styles.windowsScreen}>
        <img src="..\..\..\assets\WindowsLogo.png" />
      </div>
      <div className={styles.loadingFooter}>
        <div className={styles.gradientBar} />
        <div className={styles.barSection}>
          <div className={styles.startingText}>Starting up...</div>
          <div className={styles.loadingBar}>
            <div 
              className={styles.filler} 
              style={{ width: percentage + '%' }} />
          </div>
        </div>
        <div className={styles.copyrightText}>
          Copyright © 1985-1999  Microsoft Corporation
        </div>
      </div>
    </>
  );
  else {
    {history.push('/home');}
  }
};

export default BootScreen;
