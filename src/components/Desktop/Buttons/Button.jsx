/* eslint-disable max-len */
import React, { useState } from 'react';
import styles from './Button.css';
import PropTypes from 'prop-types';
import Draggable from 'react-draggable';

export default function Button({ src, name, handlePortfolioClick, handleResumeClick, handleAboutClick, section }) {

  const [clicked, setClicked] = useState(false);
  const [iconStyle, setIconStyle] = useState(false);

  const clicks = [];
  let timeout;

  const singleClick = () => {
    if(clicked) {
      setClicked(false);
      setIconStyle(styles.icon);
    }
    else {
      setClicked(true);
      setIconStyle(styles.clickedStyle);
    }
  };

  const doubleClick = () => {
    setClicked(true);
    setIconStyle(styles.clickedStyle);
    if(section == 'about') {
      handleAboutClick();
    }
    if(section == 'portfolio') {
      handlePortfolioClick();
    }
    if(section == 'resume') {
      handleResumeClick();
    }
  };

  const clickHandler = (event) => {
    event.preventDefault();
    clicks.push(new Date().getTime());
    window.clearTimeout(timeout);
    timeout = window.setTimeout(() => {
      if(clicks.length > 1 && clicks[clicks.length - 1] - clicks[clicks.length - 2] < 200) {
        doubleClick(event.target);
      } else {
        singleClick(event.target);
      }
    }, 200);
  };

  return (
    <Draggable defaultClassName={styles.icon}>
      <div onClick={clickHandler} className={iconStyle}>
        <img className={styles.image} src={src} alt={name} />
        <div className={styles.buttonText}>{name}</div>
      </div>
    </Draggable>
  );
}

Button.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func
};



