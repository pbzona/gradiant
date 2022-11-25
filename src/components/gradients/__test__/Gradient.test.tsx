import React from 'react';
import { render, screen } from '@testing-library/react';
import Gradient from '../Gradient';
import Color from '../../../color/Color';

test('renders gradient component with correct number of swatches', () => {
  const colors = [
    new Color('2476FF'),
    new Color('7B4CF9'),
    new Color('D121F2')
  ];
  const { container } = render(<Gradient colors={colors}/>);
  const swatches = container.querySelectorAll('.Swatch');
  expect(swatches.length).toBe(colors.length);
});