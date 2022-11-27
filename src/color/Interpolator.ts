import Color from './Color';

class Interpolator {
  private _start: Color;
  private _end: Color;
  private _length: number;
  
  constructor(start: Color, end: Color, length: number) {
    this._start = start;
    this._end = end;
    this._length = length;
  }

  get _degree() {
    return 1 / (this._length - 1);
  }

  get _hueDistance() {
    const hues = [this._start.hue, this._end.hue];
    return Math.max(...hues) - Math.min(...hues);
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
    let h = this._start.hue + ((this._end.hue - this._start.hue) % 360) * degree;

    const shouldReverse = this._hueDistance > 180;
    if (shouldReverse) {
      const diff = degree * (360 - this._hueDistance);

      // This weird line is necessary because of how JS handles negative numbers
      // in a modulo operation - basically does a double mod to get the 
      // correct sign on the result
      h = ((((this._start.hue - diff) % 360) + 360 ) % 360);
    }

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
  }
}

export default Interpolator;