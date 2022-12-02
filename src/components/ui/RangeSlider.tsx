import React, { ChangeEventHandler } from 'react';
import styles from './RangeSlider.module.css';
import uiStyles from './UIStyles.module.css';

interface IRangeSliderProps {
  label: string;
  min: number;
  max: number;
  value: number;
  text: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const RangeSlider = ({ label, min, max, value, text, onChange }: IRangeSliderProps) => {
  return (
    <div className={styles.container}>
      <input type='range' id={label} name={label} min={min} max={max} value={value} onChange={onChange} />
      <label className={uiStyles.label} htmlFor={label}>{text}</label>
    </div>
  );
};

export default RangeSlider;