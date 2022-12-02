import React from 'react';
import { render, screen } from '@testing-library/react';
import ColorPicker from '../ColorPicker';
import Config from '../../../config/Config';

const defaultValue = Config.defaultGradientStart.hex;

test('renders color picker with correct label and input type', () => {
  const { getByLabelText } = render(<ColorPicker label='ColorPickerTest' value={defaultValue} onChange={() => null} />);
  const input = getByLabelText(/ColorPickerTest/i);
  expect(input).toBeInTheDocument();
  expect(input).toHaveAttribute('type', 'color');
});