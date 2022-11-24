import React from 'react';
import styles from './Swatch.module.css';

interface SwatchProps {
  color: string;
}

const Swatch = ({ color }: SwatchProps) => (
  <div className={`Swatch ${styles.swatch}`} style={{ backgroundColor: color }}/>
);

export default Swatch;