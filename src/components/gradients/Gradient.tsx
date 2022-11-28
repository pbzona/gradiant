import React, { useEffect, useState } from 'react';
import Color from '../../color/Color';
import Interpolator from '../../color/Interpolator';
import styles from './Gradient.module.css';
import Swatch from './Swatch';

const _start = new Color('2476FF');
const _end = new Color('D121F2');
const _length = 5;
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

  interpolator.on('update', () => {
    interpolator.updateStart(start);
    interpolator.updateEnd(end);
    interpolator.updateLength(length);
    updateColors();
  })


  return (
    <div className={styles.container}>
      <div className={styles.gradient}>
        { colors ? colors.map(color => (
          <Swatch key={color.toString()} color={color} />
        )) : init.map(color => (
          <Swatch key={color.toString()} color={color} />
        ))}
      </div>
    </div>
  );
};

export default Gradient;