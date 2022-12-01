import React, { ChangeEventHandler } from 'react';
import Color from '../../color/Color';
import Panel from '../layout/Panel';
import ColorPicker from '../ui/ColorPicker';
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
    <Panel>
      <ColorPicker label='Start Color' value={start.toString()} onChange={onStartChange} />
      <ColorPicker label='End Color' value={end.toString()} onChange={onEndChange} />
      <input type='range' id='length' name='length' min='3' max='10' value={length} onChange={onLengthChange} />
      <label htmlFor='volume'>Length</label>
    </Panel>
  );
};

export default Controls;