import Color from '../Color';

test('should work with hex code provided in constructor', () => {
  const color = new Color('2476FF');
  expect(color.hex).toEqual('2476FF');
  expect(color.rgb).toEqual([36, 118, 255]);
  expect(color.hsv).toEqual([218, 86, 100]);
});

test('should work with rgb values provided in constructor', () => {
  const color = new Color([36, 118, 255], 'rgb');
  expect(color.hex).toEqual('2476FF');
  expect(color.rgb).toEqual([36, 118, 255]);
  expect(color.hsv).toEqual([218, 86, 100]);
});

test('should work with hsv values provided in constructor', () => {
  const color = new Color([218, 86, 100], 'hsv');
  expect(color.hex).toEqual('2474FF'); // Slight difference in hsv conversion algo
  expect(color.rgb).toEqual([36, 116, 255]); // Slight difference in hsv conversion algo
  expect(color.hsv).toEqual([218, 86, 100]);
});

test('should return a full hex code with hash when toString method is called', () => {
  const color = new Color('2476FF');
  expect(color.toString()).toEqual('#2476FF');
})