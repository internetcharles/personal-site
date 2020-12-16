/* eslint-disable max-len */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAbout } from '../../actions/displayActions';
import About from '../app/About/About';
import Resume from '../Resume/Resume';
import Paint from '../Paint/Paint';
import Button from './Buttons/Button';
import Clippy from './Clippy/Clippy';
import styles from './Desktop.css';
import GreetingWindow from './GreetingWindow/GreetingWindow';
import Portfolio from './Portfolio/Portfolio';
import StartBar from './StartBar/StartBar';
import Dustbin from '../../assets/Dustbin.ico';
import WindowOpen from '../../assets/FolderOpen.ico';
import Write from '../../assets/Write.ico';
import Icon2 from '../../assets/Icon_2.ico';
import PaintIcon from '../../assets/Paint.ico';


export default function Desktop() {

  const [aboutMe, setAboutMe] = useState(false);
  const [portfolio, setPortfolio] = useState(false);
  const [resume, setResume] = useState(false);
  const [paint, setPaint] = useState(false);

  const handleAboutClick = () => {
    !aboutMe ? setAboutMe(true) : setAboutMe(false);
  };
  const handlePortfolioClick = () => {
    !portfolio ? setPortfolio(true) : setPortfolio(false);
  };
  const handleResumeClick = () => {
    !resume ? setResume(true) : setResume(false);
  };

  const handlePaintClick = () => {
    !paint ? setPaint(true) : setPaint(false);
  };



  const greetingDisplayed = useSelector(state => state.greetingDisplayed);

  return (
    <div className={styles.desktop}>
      <Button src={Dustbin} name="Recycle Bin" location="desktop" />
      <Button src={WindowOpen} name="Portfolio" handlePortfolioClick={handlePortfolioClick} section="portfolio" />
      <Button src={Write} name="About Me" handleAboutClick={handleAboutClick} section="about" />
      <Button src={Icon2} name="My Resume" handleResumeClick={handleResumeClick} section="resume" />
      <Button src={PaintIcon} name="Paint" handlePaintClick={handlePaintClick} section="paint" />
      { greetingDisplayed ? <GreetingWindow /> : null }
      { aboutMe ? <About handleAboutClick={handleAboutClick} /> : null }
      { portfolio ? <Portfolio handlePortfolioClick={handlePortfolioClick} /> : null}
      { resume ? <Resume handleResumeClick={handleResumeClick} /> : null}
      { paint ? <Paint handlePaintClick={handlePaintClick} /> : null}
      <Clippy handlePortfolioClick={handlePortfolioClick} />
      <StartBar />
    </div>
  );
}
