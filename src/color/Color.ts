import convert from 'color-convert';
import { HEX, HSV, RGB } from 'color-convert/conversions';

interface IColor {
  hex: HEX;
  rgb: RGB;
  hsv: HSV;
}

class Color implements IColor {
  private _hex: HEX;
  private _rgb: RGB;
  private _hsv: HSV;

  constructor(color: HEX | RGB | HSV, type = 'rgb') {
    if (typeof color === 'string') {
      this._hex = color;
      this._rgb = convert.hex.rgb(color);
      this._hsv = convert.hex.hsv(color);
    } else if (type === 'hsv') {
      this._hsv = color;
      this._hex = convert.hsv.hex(color);
      this._rgb = convert.hsv.rgb(color);
    } else {
      this._rgb = color;
      this._hex = convert.rgb.hex(color);
      this._hsv = convert.rgb.hsv(color);
    }
  }

  get hex() {
    return this._hex;
  }

  get rgb() {
    return this._rgb;
  }

  get hsv() {
    return this._hsv;
  }

  toString() {
    return `#${this._hex}`;
  }
}

export default Color;