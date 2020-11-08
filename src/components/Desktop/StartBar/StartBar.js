import React from 'react';
import styles from './StartBar.css';

export default function StartBar() {

  const getTime = () => {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    hours < 10 ? hours = '0' + hours : null;
    minutes < 10 ? minutes = '0' + minutes : null;
    return hours + ':' + minutes;
  };

  return (
    <div className={styles.bar}>
      <div className={styles.shadingBar} />
      <div className={styles.logoBox}>
        <img className={styles.logo} src="src/assets/windows-start-logo.png" />
        <div className={styles.start}>Start</div>
        <div className={styles.dateBox}>
          <img className={styles.volume} src="src\assets\Icon_5.ico" />
          <div className={styles.time}>{getTime()}</div>
        </div>
      </div>
    </div>
  );
}
