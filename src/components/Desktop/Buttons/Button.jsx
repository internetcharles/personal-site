import React, { useState } from 'react';
import styles from './Button.css';
import PropTypes from 'prop-types';
import Draggable from 'react-draggable';

export default function Button({ src, name }) {
  const clickedStyle = { 
    backgroundColor: 'rgba(219, 219, 219, 0.514)', 
    color: 'white' };
  const normalStyle = { 
    backgroundColor: '', 
    color: 'white' };
  const [clicked, setClicked] = useState(false);
  const [iconStyle, setIconStyle] = useState(false);

  const handleSelect = () => {
    if(clicked) {
      setClicked(false);
      setIconStyle(normalStyle);
    }
    else {
      setClicked(true);
      setIconStyle(clickedStyle);
    }
  };

  return (
    <Draggable defaultClassName={styles.icon}>
      <div onClick={handleSelect} style={iconStyle} className={styles.icon}>
        <img className={styles.image} src={src} alt={name} />
        <div className={styles.buttonText}>{name}</div>
      </div>
    </Draggable>
  );
}

Button.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};



