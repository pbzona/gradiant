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
});

test('should truncate the hash if a full hex code string is supplied', () => {
  const color = new Color('#2476FF');
  expect(color.hex).toEqual('2476FF');
});

test('should shift red by correct amount', () => {
  const color = new Color([218, 86, 100]);
  color.shiftRed(22);
  expect(color.red).toBe(240);
});

test('should shift red by correct amount with overflow', () => {
  const color = new Color([218, 86, 100]);
  color.shiftRed(109);
  expect(color.red).toBe(72);
});

test('should shift green by correct amount', () => {
  const color = new Color([218, 86, 100]);
  color.shiftGreen(22);
  expect(color.green).toBe(108);
});

test('should shift green by correct amount with overflow', () => {
  const color = new Color([218, 86, 100]);
  color.shiftGreen(209);
  expect(color.green).toBe(40);
});

test('should shift blue by correct amount', () => {
  const color = new Color([218, 86, 100]);
  color.shiftBlue(22);
  expect(color.blue).toBe(122);
});

test('should shift blue by correct amount with overflow', () => {
  const color = new Color([218, 86, 100]);
  color.shiftBlue(209);
  expect(color.blue).toBe(54);
});

test('should shift hue by correct amount', () => {
  const color = new Color([218, 86, 100], 'hsv');
  color.shiftHue(22);
  expect(color.hue).toBe(240);
});

test('should shift hue by correct amount with overflow', () => {
  const color = new Color([218, 86, 100], 'hsv');
  color.shiftHue(109);
  expect(color.hue).toBe(72);
});

test('should shift saturation by correct amount', () => {
  const color = new Color([218, 86, 100], 'hsv');
  color.shiftSaturation(10);
  expect(color.saturation).toBe(96);
});

test('should shift saturation by correct amount with overflow', () => {
  const color = new Color([218, 86, 100], 'hsv');
  color.shiftSaturation(30);
  expect(color.saturation).toBe(16);
});

test('should shift brightness by correct amount', () => {
  const color = new Color([218, 86, 90], 'hsv');
  color.shiftBrightness(6);
  expect(color.brightness).toBe(96);
});

test('should shift brightness by correct amount with overflow', () => {
  const color = new Color([218, 86, 90], 'hsv');
  color.shiftBrightness(30);
  expect(color.brightness).toBe(20);
});