import convert from 'color-convert';
import { HEX, HSV, RGB } from 'color-convert/conversions';

interface IColor {
  hex: HEX;
  rgb: RGB;
  hsv: HSV;
  red: number;
  green: number;
  blue: number;
  hue: number;
  saturation: number;
  value: number;
  brightness: number;
}

class Color implements IColor {
  private _hex: HEX;
  private _rgb: RGB;
  private _hsv: HSV;

  constructor(color: HEX | RGB | HSV, type = 'rgb') {
    this._hex = '000000';
    this._rgb = [0, 0, 0];
    this._hsv = [0, 0, 0];
    this._updateColor(color, type);
  }

  _updateColor(color: HEX | RGB | HSV, type = 'rgb') {
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

  // Channel getters
  get red() {
    return this._rgb[0];
  }

  get green() {
    return this._rgb[1];
  }

  get blue() {
    return this._rgb[2];
  }

  get hue() {
    return this._hsv[0];
  }

  get saturation() {
    return this._hsv[1];
  }

  get value() {
    return this._hsv[2];
  }

  get brightness() {
    return this.value;
  }

  // Adjustment methods
  shiftRed(amount: number) {
    const red = (this.red + amount) % 255;
    this._updateColor([red, this.green, this.blue]);
  }

  shiftGreen(amount: number) {
    const green = (this.green + amount) % 255;
    this._updateColor([this.red, green, this.blue]);
  }

  shiftBlue(amount: number) {
    const blue = (this.blue + amount) % 255;
    this._updateColor([this.red, this.green, blue]);
  }

  shiftHue(amount: number) {
    const hue = (this.hue + amount) % 255;
    this._updateColor([hue, this.saturation, this.value], 'hsv');
  }
  
  shiftSaturation(amount: number) {
    const saturation = (this.saturation + amount) % 100;
    this._updateColor([this.hue, saturation, this.value], 'hsv');
  }
  
  shiftBrightness(amount: number) {
    const brightness = (this.brightness + amount) % 100;
    this._updateColor([this.hue, this.saturation, brightness], 'hsv');
  }
}

export default Color;