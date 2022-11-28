import React from 'react';
import { render } from '@testing-library/react';
import Gradient from '../Gradient';
import Config from '../../../config/Config';

test('renders gradient component with correct number of swatches', () => {
  const { container } = render(<Gradient />);
  const swatches = container.querySelectorAll('.Swatch');
  expect(swatches.length).toBe(Config.defaultGradientLength);
});