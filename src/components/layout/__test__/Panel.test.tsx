import React from 'react';
import { render, screen } from '@testing-library/react';
import Panel from '../Panel';

test('renders panel with child element', () => {
  render(<Panel><h1>Hello Panel!</h1></Panel>);
  const title = screen.getByText(/hello panel/i);
  expect(title).toBeInTheDocument();
});