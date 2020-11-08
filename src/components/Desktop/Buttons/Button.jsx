import React, { useState } from 'react';
import styles from './Button.css';
import PropTypes from 'prop-types';
import Draggable from 'react-draggable';

export default function Button({ src, name }) {

  const [clicked, setClicked] = useState(false);
  const [iconStyle, setIconStyle] = useState(false);

  const handleSelect = () => {
    if(clicked) {
      setClicked(false);
      setIconStyle(styles.icon);
    }
    else {
      setClicked(true);
      setIconStyle(styles.clickedStyle);
    }
  };

  return (
    <Draggable defaultClassName={styles.icon}>
      <div onClick={handleSelect} className={iconStyle}>
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



