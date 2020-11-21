/* eslint-disable max-len */
import React, { useState } from 'react';
import { useAboutMeDisplayed } from '../../hooks/desktopHooks';
import Button from './Buttons/Button';
import Clippy from './Clippy/Clippy';
import styles from './Desktop.css';
import GreetingWindow from './GreetingWindow/GreetingWindow';
import StartBar from './StartBar/StartBar';

export default function Desktop() {
  const aboutMeDisplayed = useAboutMeDisplayed(true);
  const displayAboutMe = () => {
    aboutMeDisplayed ? null : useAboutMeDisplayed(true);
  };

  
  
  return (
    <div className={styles.desktop}>
      <Button src="src\assets\Dustbin.ico" name="Recycle Bin" />
      <Button src="src\assets\Folder Open.ico" name="Portfolio" />
      <Button src="src\assets\Write.ico" name="About Me" handleClick={displayAboutMe} />
      <Button src="src\assets\Icon_2.ico" name="My Resume" />
      { aboutMeDisplayed ? <GreetingWindow window={window} /> : null }
      <Clippy />
      <StartBar />
    </div>
  );
}
