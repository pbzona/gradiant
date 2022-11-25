import React from 'react';
import { render } from '@testing-library/react';
import convert from 'color-convert';
import Swatch from '../Swatch';

test('renders swatch component with correct backgroundColor', () => {
  // Kind of a weird test - the purpose is to check the background color is set properly
  // The thing here is that we will usually (always?) pass the color value as a hex, but
  // it gets converted to rgb implicitly so I need to also do that conversion to
  // test whether the background color has been set correctly

  const testColor = '2476FF';

  const { container } = render(<Swatch color={'#'+testColor} />);
  const bgColor = (container.firstChild as HTMLElement).style.backgroundColor;
  // @ts-ignore
  const bgColorToHex = convert.rgb.hex(bgColor.match(/\d+/g));

  expect(bgColorToHex).toEqual(testColor);
})