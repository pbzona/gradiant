import React from 'react';
import Color from '../../color/Color';
import styles from './Swatch.module.css';

interface SwatchProps {
  color: Color;
}

const Swatch = ({ color }: SwatchProps) => (
  <div className={`Swatch ${styles.swatch}`} style={{ backgroundColor: color.toString() }}/>
);

export default Swatch;