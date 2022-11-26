import Color from './Color';

class Interpolator {
  private _start: Color;
  private _end: Color;
  private _length: number;
  private _degree: number;
  
  constructor(start: Color, end: Color, length: number) {
    this._start = start;
    this._end = end;
    this._length = length;
    this._degree = 1 / (length - 1);
  }
  
  _RGB(degree: number): Color {
    const r = this._start.red + ((this._end.red - this._start.red) % 255) * degree;
    const g = this._start.green + ((this._end.green - this._start.green) % 255) * degree;
    const b = this._start.blue + ((this._end.blue - this._start.blue) % 255) * degree;

    return new Color([r, g, b]);
  }

  getRGBInterpolation(): Color[] {
    return new Array(this._length).fill(null).map((_, i) => {
      return this._RGB(this._degree * i);
    });
  }

  _HSV(degree: number): Color {
    const h = this._start.hue + ((this._end.hue - this._start.hue) % 255) * degree;
    const s = this._start.saturation + ((this._end.saturation - this._start.saturation) % 100) * degree;
    const v = this._start.value + ((this._end.value - this._start.value) % 100) * degree;

    return new Color([h, s, v], 'hsv');
  }

  getHSVInterpolation(): Color[] {
    return new Array(this._length).fill(null).map((_, i) => {
      return this._HSV(this._degree * i);
    });
  }

  updateLength(length: number) {
    this._length = length;
    this._degree = 1 / (length - 1);
  }
}

export default Interpolator;