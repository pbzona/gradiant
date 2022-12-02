import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import { render, screen } from '@testing-library/react';
import ColorPicker from '../ColorPicker';
import Config from '../../../config/Config';

const defaultValue = Config.defaultGradientStart.hex;

test('renders an input with type color', (() => {
  const div = document.createElement('div');

  act(() => {
    const root = createRoot(div!);
    root.render(<ColorPicker label='ColorPickerTest' value={defaultValue} onChange={() => null} />);
  });

  expect(div.querySelector('input')).toHaveAttribute('type', 'color');
}));

test('renders color picker with correct label', () => {
  render(<ColorPicker label='ColorPickerTest' value={defaultValue} onChange={() => null} />);
  const label = screen.getByText(/colorpickertest/i);
  expect(label).toBeInTheDocument();
});