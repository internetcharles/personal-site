import React from 'react';
import Button from './Buttons/Button';
import styles from './Desktop.css';
import GreetingWindow from './GreetingWindow/GreetingWindow';
import StartBar from './StartBar/StartBar';

export default function Desktop() {
  return (
    <div className={styles.desktop}>
      <Button src="src\assets\Dustbin.ico" name="Recycle Bin" />
      <Button src="src\assets\Folder Open.ico" name="Portfolio" />
      <Button src="src\assets\Write.ico" name="About Me" />
      <Button src="src\assets\Icon_2.ico" name="My Resume" />
      <GreetingWindow />
      <StartBar />
    </div>
  );
}
