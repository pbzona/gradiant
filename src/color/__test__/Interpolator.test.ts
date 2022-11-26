import Color from '../Color';
import Interpolator from '../Interpolator';

const start = new Color('EFF74F');
const end = new Color('FF3A24');

test('should interpolate correctly in RGB mode', () => {
  const int = new Interpolator(start, end, 5);
  const colors = int.getRGBInterpolation();

  expect(colors[0].hex).toBe('EFF74F');
  expect(colors[1].hex).toBe('F3C844');
  expect(colors[2].hex).toBe('F7993A');
  expect(colors[3].hex).toBe('FB692F');
  expect(colors[4].hex).toBe('FF3A24');
});

test('should interpolate correctly in HSV mode', () => {
  const int = new Interpolator(start, end, 5);
  const colors = int.getHSVInterpolation();

  expect(colors[0].hex).toBe('EFF74F');
  expect(colors[1].hex).toBe('F9D745');
  expect(colors[2].hex).toBe('FBA93A');
  expect(colors[3].hex).toBe('FD742F');
  expect(colors[4].hex).toBe('FF3A24');
});

test('should update length of output arrays when calling updateLength()', () => {
  const int = new Interpolator(start, end, 5);
  let colors = int.getHSVInterpolation();
  expect(colors.length).toBe(5);
  
  int.updateLength(3);
  colors = int.getHSVInterpolation();
  expect(colors.length).toBe(3);
})