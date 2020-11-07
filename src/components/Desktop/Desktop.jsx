import React from 'react';
import Button from './Buttons/Button';
import styles from './Desktop.css';
import StartBar from './StartBar/StartBar';

export default function Desktop() {
  return (
    <div className={styles.desktop}>
      <Button src="src\assets\documents.png" name="portfolio" />
      <Button src="src\assets\word95.png" name="about me" />
      <StartBar />
    </div>
  );
}
