import React from 'react';
import { render, screen } from '@testing-library/react';
import ColorPicker from '../ColorPicker';
import Config from '../../../config/Config';

const defaultValue = Config.defaultGradientStart.hex;

test('renders color picker with correct label', () => {
  render(<ColorPicker label='ColorPickerTest' value={defaultValue} onChange={() => null} />);
  const label = screen.getByText(/colorpickertest/i);
  expect(label).toBeInTheDocument();
});