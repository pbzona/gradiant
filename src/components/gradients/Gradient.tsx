import React, { ChangeEvent, useEffect, useState } from 'react';
import Color from '../../color/Color';
import Interpolator from '../../color/Interpolator';
import Config from '../../config/Config';
import Controls from './Controls';
import styles from './Gradient.module.css';
import Swatch from './Swatch';

const _start = Config.defaultGradientStart;
const _end = Config.defaultGradientEnd;
const _length = Config.defaultGradientLength;
const init = new Interpolator(_start, _end, _length).getRGBInterpolation();

const Gradient = () => {
  // Note to future me:
  // Need to figure out whether to use state for full color object,
  // string value (hex code) or both. There are a bunch of type mismatches
  // now because the value returned by a change on the color picker
  // cannot be assigned to the start and end

  // Do I actually need to use this much state here at all? Or should state
  // just be managed by the color objects themselves, which will inhabit
  // state in this component?

  const [ startColor, setStartColor ] = useState(_start);
  const [ endColor, setEndColor ] = useState(_end);

  const [ length, setLength ] = useState(_length);
  const [ colors, setColors ] = useState(init);

  const interpolator = new Interpolator(startColor, endColor, length);
  const updateColors = () => setColors(interpolator.getRGBInterpolation());

  useEffect(() => {
    updateColors();
  }, [startColor, endColor, length]);

  const handleStartChange = (event: ChangeEvent) => {
    const updatedValue = (event.target as HTMLInputElement).value;
    const newColor = startColor.clone();
    newColor.hex = updatedValue;
    setStartColor(newColor);
  };

  const handleEndChange = (event: ChangeEvent) => {
    const updatedValue = (event.target as HTMLInputElement).value;
    const newColor = endColor.clone();
    newColor.hex = updatedValue;
    setEndColor(newColor);
  };

  return (
    <div className={styles.container}>
      <div className={styles.gradient}>
        { colors ? colors.map(color => (
          <Swatch key={color.toString()} color={color} />
        )) : init.map(color => (
          <Swatch key={color.toString()} color={color} />
        ))}
      </div>
      <Controls 
        start={startColor}
        end={endColor}
        onStartChange={handleStartChange}
        onEndChange={handleEndChange}
      />
    </div>
  );
};

export default Gradient;