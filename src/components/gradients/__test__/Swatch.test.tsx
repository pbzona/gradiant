import React from 'react';
import { render } from '@testing-library/react';
import Swatch from '../Swatch';
import Color from '../../../color/Color';

test('renders swatch component with correct backgroundColor', () => {
  // Kind of a weird test - the purpose is to check the background color is set properly
  // The thing here is that we will usually (always?) pass the color value as a hex, but
  // it gets converted to rgb implicitly so I need to also do that conversion to
  // test whether the background color has been set correctly

  const testColor = new Color('2476FF');

  const { container } = render(<Swatch color={testColor} />);
  const bgColor = (container.firstChild as HTMLElement).style.backgroundColor;
  const bgColorValues = bgColor.match(/\d+/g)?.map(val => parseInt(val));

  expect(bgColorValues).toEqual(testColor.rgb);
})