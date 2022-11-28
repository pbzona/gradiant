import React from 'react';
import { render, screen } from '@testing-library/react';
import Gradient from '../Gradient';
import Color from '../../../color/Color';

test('renders gradient component with correct number of swatches', () => {
  const { container } = render(<Gradient />);
  const swatches = container.querySelectorAll('.Swatch');
  expect(swatches.length).toBe(5); // Todo: make this a config option instead of hardcoding
});