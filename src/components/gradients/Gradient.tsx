import React from 'react';
import Color from '../../color/Color';
import styles from './Gradient.module.css';
import Swatch from './Swatch';

interface GradientProps {
  colors: Color[];
}

const Gradient = ({ colors }: GradientProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.gradient}>
        { colors.map(color => (
          <Swatch key={color.toString()} color={color} />
        ))}
      </div>
    </div>
  );
};

export default Gradient;