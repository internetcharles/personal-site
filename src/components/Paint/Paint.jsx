/* eslint-disable max-len */
import React, { useEffect, useRef, useState } from 'react';
import styles from './Paint.css';
import CloseButton from '../../assets/close-btn.jpg';
import MinimizeButton from '../../assets/minimise-btn.jpg';
import PaintIcon from '../../assets/Paint.ico';
import { HuePicker } from 'react-color';
import PropTypes from 'prop-types';

function Paint({ handlePaintClick }) {
  

  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [brushColor, setBrushColor] = useState('black');

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.width  = canvas.offsetWidth * 2;
    canvas.height = canvas.offsetHeight * 2;

    const context = canvas.getContext('2d');
    
    context.scale(2, 2);
    context.lineCap = 'round';
    context.strokeStyle = brushColor;
    context.lineWidth = 5;
    contextRef.current = context;
  }, []);

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = ({ nativeEvent }) => {
    if(!isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  const colorChange = (color, event) => {
    setBrushColor(color.hex);
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.strokeStyle = brushColor;
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    window ?
      <div className={styles.wholeWindow}>
        <div className={styles.innerBorder}>
          <div className={styles.documentBar}>
            <img className={styles.iconOne} src={PaintIcon} />
            <span className={styles.windowsText}>Paint</span>
            <div className={styles.minimizeExit}>
              <img src={MinimizeButton} />
              <img src={CloseButton} onClick={handlePaintClick} />
            </div>
          </div>
          <div className={styles.fileButtons}>
            <div>File</div>
            <div>Edit</div>
            <div>Help</div>
            <div onClick={clearCanvas}>Clear</div>
          </div>
          <div className={styles.paintBar}>
            <HuePicker color={brushColor} onChangeComplete={colorChange} />
          </div>
          <div className={styles.textWindow}>
            <div className={styles.innerWindow}>
              <canvas
                onMouseDown={startDrawing}
                onMouseUp={finishDrawing}
                onMouseMove={draw}
                ref={canvasRef}
              />
            </div>
          </div>
        </div>
      </div> : null
  );
}



export default Paint;
