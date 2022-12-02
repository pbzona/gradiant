import React, { ChangeEventHandler } from 'react';
import Color from '../../color/Color';
import Panel from '../layout/Panel';
import ColorPicker from '../ui/ColorPicker';
import RangeSlider from '../ui/RangeSlider';
import styles from './Controls.module.css';

interface IControls {
  start: Color;
  end: Color;
  onStartChange: ChangeEventHandler<HTMLInputElement>;
  onEndChange: ChangeEventHandler<HTMLInputElement>;
  length: number;
  onLengthChange: ChangeEventHandler<HTMLInputElement>;
}

const Controls = ({ start, end, onStartChange, onEndChange, length, onLengthChange}: IControls) => {
  return (
    <Panel additionalStyles={styles.panel}>
      <ColorPicker label='Start Color' value={start.toString()} onChange={onStartChange} />
      <ColorPicker label='End Color' value={end.toString()} onChange={onEndChange} />
      <RangeSlider label='Length' min={3} max={8} value={length} text='Length' onChange={onLengthChange} />
    </Panel>
  );
};

export default Controls;