import React, { ChangeEventHandler } from 'react';
import styles from './ColorPicker.module.css';
import uiStyles from './UIStyles.module.css';

interface IColorPickerProps {
  label: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const ColorPicker = ({ label, value, onChange}: IColorPickerProps) => {
  return (
    <div className={styles.container}>
      <input type='color' id={label} name={label} value={value} onChange={onChange}/>
      <label className={uiStyles.label} htmlFor={label}>{label}</label>
    </div>
  );
};

export default ColorPicker;