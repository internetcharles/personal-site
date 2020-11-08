import React from 'react';
import Button from './Buttons/Button';
import styles from './Desktop.css';
import StartBar from './StartBar/StartBar';

export default function Desktop() {
  return (
    <div className={styles.desktop}>
      <Button src="src\assets\Dustbin.ico" name="Recycle Bin" />
      <Button src="src\assets\Folder Open.ico" name="portfolio" />
      <Button src="src\assets\Write.ico" name="about me" />
      <StartBar />
    </div>
  );
}
