export interface Bitmap {
  Histogram: any;
  width: number;
  height: number;
  size: number;
  arrayBuffer: ArrayBuffer;
  data: Uint8Array;
  getValueAt(x: number | Point, y: number): number;
  indexToPoint(index: number): Point;
  pointToIndex(pointOrX: number | Point, y: number): number;
  copy(iterator: Function): Bitmap;
  histogram(): Histogram;
}

export interface Curve {
  n: number;
  tag: Array;
  c: Array;
  alphaCurve: number;
  vertex: Array;
  alpha: Array;
  alpha0: Array;
  beta: Array;
}

export interface Histogram {
  COLOR_DEPTH: number;
  COLOR_RANGE_END: number;
  data: any;
  pixels: number;
  _sortedIndexes: any;
  _cachedStats: any;
  _lookupTableH: any;
  MODE_LUMINANCE: string;
  MODE_R: string;
  MODE_G: string;
  MODE_B: string;
  index(x: number, y: number): void;
  normalizeMinMax(levelMin: number, levelMax: number): Array<number>;
  Histogram(imageSource: number | Bitmap | Jimp, mode: string): void;
  _createArray(imageSize: number): Uint8Array | Uint16Array | Uint32Array;
  _collectValuesJimp(source: Jimp, mode: string): void;
  _collectValuesBitmap(source: Bitmap): void;
  _getSortedIndexes(refresh: any): Array<any>;
  _thresholdingBuildLookupTable(): Float64Array;
  multiLevelThresholding(
    amount: number,
    levelMin: number,
    levelMax: number
  ): Array<number>;
  autoThreshold(levelMin: number, levelMax: number): null | number;
  getDominantColor(
    levelMin: number,
    levelMax: number,
    tolerance: number
  ): number;
  getStats(levelMin: number, levelMax: number): any;
}

export interface Opti {
  pen: number;
  c: Array<Point>;
  t: number;
  s: number;
  alpha: number;
}

export interface Path {
  area: number;
  len: number;
  curve: any;
  pt: Array;
  minX: number;
  minY: number;
  maxX: number;
  maxY: number;
}

export interface Point {
  x: number;
  y: number;
  copy(): Point;
}

export interface Quad {
  data: Array<number>;
  at(x: number, y: number): Array<number>;
}

export interface Sum {
  x: number;
  y: number;
  xy: number;
  x2: number;
  y2: number;
}

export interface Potrace {
  _luminanceData: any;
  _pathList: Array<any>;
  _imageLoadingIdentifier: any;
  _imageLoaded: any;
  _processed: any;
  _params: any;
  COLOR_AUTO: string;
  COLOR_TRANSPARENT: string;
  THRESHOLD_AUTO: number;
  TURNPOLICY_BLACK: string;
  TURNPOLICY_WHITE: string;
  TURNPOLICY_LEFT: string;
  TURNPOLICY_RIGHT: string;
  TURNPOLICY_MINORITY: string;
  TURNPOLICY_MAJORITY: string;
  SUPPORTED_TURNPOLICY_VALUES: Array<string>;
  _bmToPathlist(): void;
  _processPath(): void;
  _validateParameters(params: any): void;
  _processLoadedImage(image: any): void;
  loadImage(target: string | Buffer | Jimp, callback: Function): void;
  setParameters(newParams: any): void;
  getPathTag(fillColor: string, scale: number): string;
  getSymbol(id: string): string;
  getSVG(): string;
}

export interface Posterizer {
  _potrace: Potrace;
  _calculatedThreshold: any;
  _params: any;
  STEPS_AUTO: number;
  FILL_SPREAD: string;
  FILL_DOMINANT: string;
  FILL_MEDIAN: string;
  FILL_MEAN: string;
  RANGES_AUTO: string;
  RANGES_EQUAL: string;
  _addExtraColorStop(ranges: any): any;
  _calcColorIntensity(colorStops: Array<number>): any;
  _getImageHistogram(): Histogram;
  _getRanges(): any;
  _getRangesAuto(): any;
  _getRangesEquallyDistributed(): any;
  _paramSteps(count: boolean): number | Array<number>;
  _paramThreshold(): number;
  _pathTags(noFillColor: boolean): Array<string>;
  loadImage(target: string | Buffer | Jimp, callback: Function): void;
  setParameters(params: any): void;
  getSymbol(id: string): string;
  getSVG(): string;
}

export interface utils {
  getAttrRegexp(attrName: string): string;
  setHtmlAttr(html: string, attrName: string, value: string): string;
  fixed(number: number): number;
  mod(a: number, n: number): number;
  xprod(p1: number, p2: number): number;
  cyclic(a: number, b: number, c: number): boolean;
  sign(i: number): number;
  quadForm(Q: Quad, w: any): number;
  interval(lambda: number, a: any, b: any): Point;
  dorth_infty(p0: any, p2: any): Point;
  ddenom(p0: any, p2: any): number;
  dpara(p0: any, p1: any, p2: any): number;
  cprod(p0: any, p1: any, p2: any, p3: any): number;
  iprod(p0: any, p1: any, p2: any): number;
  iprod1(p0: any, p1: any, p2: any, p3: any): number;
  ddist(p: any, q: any): number;
  luminance(r: number, g: number, b: number): number;
  between(val: number, min: number, max: number): boolean;
  clamp(val: number, min: number, max: number): number;
  isNumber(val: number): boolean;
  renderCurve(curve: Curve, scale: number): string;
  bezier(t: number, p0: any, p1: any, p2: any, p3: any): Point;
  tangent(p0: any, p1: any, p2: any, p3: any, q0: any, q1: any): number;
}

export default interface Potrace {
  trace(file: string | Buffer | Jimp, options: any, cb: Function): void;
  posterize(file: string | Buffer | Jimp, options: any, cb: Function): void;
  Potrace: Potrace;
  Posterizer: Posterizer;
}
