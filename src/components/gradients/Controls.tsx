import React, { ChangeEventHandler } from 'react';
import Color from '../../color/Color';
import './Controls.module.css';

interface IControls {
  start: Color;
  end: Color;
  onStartChange: ChangeEventHandler<HTMLInputElement>;
  onEndChange: ChangeEventHandler<HTMLInputElement>;
}

const Controls = ({ start, end, onStartChange, onEndChange}: IControls) => {
  return (
    <div>
      <h1>Controls</h1>
      <input type='color' id='start' name='start' value={start.toString()} onChange={onStartChange}/>
      <label htmlFor='start'>Start Color</label>
      <input type='color' id='end' name='end' value={end.toString()} onChange={onEndChange} />
      <label htmlFor='end'>End Color</label>
    </div>
  );
};

export default Controls;