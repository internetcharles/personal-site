/* eslint-disable max-len */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAbout } from '../../actions/displayActions';
import About from '../app/About/About';
import Button from './Buttons/Button';
import Clippy from './Clippy/Clippy';
import styles from './Desktop.css';
import GreetingWindow from './GreetingWindow/GreetingWindow';
import Portfolio from './Portfolio/Portfolio';
import StartBar from './StartBar/StartBar';

export default function Desktop() {

  const [aboutMe, setAboutMe] = useState(false);

  const handleAboutClick = () => {
    !aboutMe ? setAboutMe(true) : setAboutMe(false);
  };

  const greetingDisplayed = useSelector(state => state.greetingDisplayed);

  return (
    <div className={styles.desktop}>
      <Button src="src\assets\Dustbin.ico" name="Recycle Bin" location="desktop" />
      <Button src="src\assets\Folder Open.ico" name="Portfolio" location="desktop" />
      <Button src="src\assets\Write.ico" name="About Me" handleAboutClick={handleAboutClick} section="about" location="desktop" />
      <Button src="src\assets\Icon_2.ico" name="My Resume" />
      { greetingDisplayed ? <GreetingWindow /> : null }
      { aboutMe ? <About handleAboutClick={handleAboutClick} /> : null }
      <Portfolio />
      <Clippy />
      <StartBar />
    </div>
  );
}
