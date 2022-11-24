import React from 'react';
import { render } from '@testing-library/react';
import convert from 'color-convert';
import Swatch from '../Swatch';

test('renders swatch component', () => {
  const testColor = '2476FF';

  const { container } = render(<Swatch color={'#'+testColor} />);
  const bgColor = (container.firstChild as HTMLElement).style.backgroundColor;
  // @ts-ignore
  const bgColorToHex = convert.rgb.hex(bgColor.match(/\d+/g));

  expect(bgColorToHex).toEqual(testColor);
})