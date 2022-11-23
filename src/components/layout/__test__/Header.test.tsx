import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../Header';

test('renders header title', () => {
  render(<Header />);
  const title = screen.getByText(/gradiant/i);
  expect(title).toBeInTheDocument();
});