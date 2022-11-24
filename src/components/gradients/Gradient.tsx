import React from 'react';
import styles from './Gradient.module.css';
import Swatch from './Swatch';

interface GradientProps {
  colors: string[];
}

const Gradient = ({ colors }: GradientProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.gradient}>
        { colors.map(color => (
          <Swatch key={color} color={color} />
        ))}
      </div>
    </div>
  );
};

export default Gradient;