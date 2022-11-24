import React from 'react';
import { render, screen } from '@testing-library/react';
import Gradient from '../Gradient';

test('renders gradient component with correct number of swatches', () => {
  const colors = [
    '#2476FF', '#7B4CF9', '#D121F2'
  ];
  const { container } = render(<Gradient colors={colors}/>);
  const swatches = container.querySelectorAll('.Swatch');
  expect(swatches.length).toBe(colors.length);
});