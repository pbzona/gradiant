import React from 'react';
import { render, screen } from '@testing-library/react';
import ColorPicker from '../ColorPicker';
import Config from '../../../config/Config';

const defaultValue = Config.defaultGradientStart.hex;

test('renders an input with type color', (() => {
  const { container } = render(<ColorPicker label='ColorPickerTest' value={defaultValue} onChange={() => null} />);
  const input = container.querySelector('input');
  expect(input).toHaveAttribute('type', 'color');
}));

test('renders color picker with correct label', () => {
  render(<ColorPicker label='ColorPickerTest' value={defaultValue} onChange={() => null} />);

  const label = screen.getByLabelText('ColorPickerTest');
  expect(label).toBeInTheDocument();
});