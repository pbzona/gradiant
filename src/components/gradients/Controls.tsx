import React, { ChangeEventHandler } from 'react';
import Color from '../../color/Color';
import './Controls.module.css';

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
    <div>
      <input type='color' id='start' name='start' value={start.toString()} onChange={onStartChange}/>
      <label htmlFor='start'>Start Color</label>
      <input type='color' id='end' name='end' value={end.toString()} onChange={onEndChange} />
      <label htmlFor='end'>End Color</label>
      <input type='range' id='length' name='length' min='3' max='10' value={length} onChange={onLengthChange} />
      <label htmlFor='volume'>Length</label>
    </div>
  );
};

export default Controls;