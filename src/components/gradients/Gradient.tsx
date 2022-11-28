import React, { useEffect, useState } from 'react';
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
  const [ start, setStart ] = useState(_start);
  const [ end, setEnd] = useState(_end);
  const [ length, setLength ] = useState(_length);
  const [ colors, setColors ] = useState(init);

  const interpolator = new Interpolator(start, end, length);
  const updateColors = () => setColors(interpolator.getRGBInterpolation());

  useEffect(() => {
    updateColors();
  }, [start, end, length]);

  return (
    <div className={styles.container}>
      <div className={styles.gradient}>
        { colors ? colors.map(color => (
          <Swatch key={color.toString()} color={color} />
        )) : init.map(color => (
          <Swatch key={color.toString()} color={color} />
        ))}
      </div>
      <Controls />
    </div>
  );
};

export default Gradient;