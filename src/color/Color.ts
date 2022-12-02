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

type ColorMode = 'rgb' | 'hsv';

class Color implements IColor {
  private _hex: HEX;
  private _rgb: RGB;
  private _hsv: HSV;

  constructor(color: HEX | RGB | HSV, type: ColorMode = 'rgb') {
    this._hex = '000000';
    this._rgb = [ 0, 0, 0 ];
    this._hsv = [ 0, 0, 0 ];
    this.updateColor(color, type);
  }

  updateColor(color: HEX | RGB | HSV, type: ColorMode = 'rgb') {
    if (typeof color === 'string') {
      this._hex = color.replace('#', '');
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

  set hex(val) {
    this.updateColor(val);
  }

  get rgb() {
    return this._rgb;
  }

  set rgb(val) {
    this.updateColor(val, 'rgb');
  }

  get hsv() {
    return this._hsv;
  }

  set hsv(val) {
    this.updateColor(val, 'hsv');
  }

  toString() {
    return `#${this._hex}`;
  }

  // Channel getters and setters
  get red() {
    return this._rgb[0];
  }

  set red(val) {
    this.updateColor([ val, this.green, this.blue ]);
  }

  get green() {
    return this._rgb[1];
  }

  set green(val) {
    this.updateColor([ this.red, val, this.blue ]);
  }

  get blue() {
    return this._rgb[2];
  }

  set blue(val) {
    this.updateColor([ this.red, this.green, val ]);
  }

  get hue() {
    return this._hsv[0];
  }

  set hue(val) {
    this.updateColor([ val, this.saturation, this.value ], 'hsv');
  }

  get saturation() {
    return this._hsv[1];
  }

  set saturation(val) {
    this.updateColor([ this.hue, val, this.value ], 'hsv');
  }

  get value() {
    return this._hsv[2];
  }

  set value(val) {
    this.updateColor([ this.hue, this.saturation, val ], 'hsv');
  }

  get brightness() {
    return this.value;
  }

  // Adjustment methods
  shiftRed(amount: number) {
    const red = (this.red + amount) % 255;
    this.updateColor([ red, this.green, this.blue ]);
  }

  shiftGreen(amount: number) {
    const green = (this.green + amount) % 255;
    this.updateColor([ this.red, green, this.blue ]);
  }

  shiftBlue(amount: number) {
    const blue = (this.blue + amount) % 255;
    this.updateColor([ this.red, this.green, blue ]);
  }

  shiftHue(amount: number) {
    const hue = (this.hue + amount) % 255;
    this.updateColor([ hue, this.saturation, this.value ], 'hsv');
  }
  
  shiftSaturation(amount: number) {
    const saturation = (this.saturation + amount) % 100;
    this.updateColor([ this.hue, saturation, this.value ], 'hsv');
  }
  
  shiftBrightness(amount: number) {
    const brightness = (this.brightness + amount) % 100;
    this.updateColor([ this.hue, this.saturation, brightness ], 'hsv');
  }
  
  clone() {
    return new Color(this.hex);
  }
}

export default Color;