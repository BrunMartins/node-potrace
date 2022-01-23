export declare class Bitmap {
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

export declare class Curve {
  n: number;
  tag: Array;
  c: Array;
  alphaCurve: number;
  vertex: Array;
  alpha: Array;
  alpha0: Array;
  beta: Array;
}

export declare class Histogram {
  COLOR_DEPTH: number;
  COLOR_RANGE_END: number;
  data: any;
  pixels: number;
  private _sortedIndexes: any;
  private _cachedStats: any;
  private _lookupTableH: any;
  MODE_LUMINANCE: string;
  MODE_R: string;
  MODE_G: string;
  MODE_B: string;
  index(x: number, y: number): void;
  normalizeMinMax(levelMin: number, levelMax: number): Array<number>;
  Histogram(imageSource: number | Bitmap | Jimp, mode: string): void;
  private _createArray(
    imageSize: number
  ): Uint8Array | Uint16Array | Uint32Array;
  private _collectValuesJimp(source: Jimp, mode: string): void;
  private _collectValuesBitmap(source: Bitmap): void;
  private _getSortedIndexes(refresh: any): Array<any>;
  private _thresholdingBuildLookupTable(): Float64Array;
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

export declare class Opti {
  pen: number;
  c: Array<Point>;
  t: number;
  s: number;
  alpha: number;
}

export declare class Path {
  area: number;
  len: number;
  curve: any;
  pt: Array;
  minX: number;
  minY: number;
  maxX: number;
  maxY: number;
}

export declare class Point {
  x: number;
  y: number;
  copy(): Point;
}

export declare class Quad {
  data: Array<number>;
  at(x: number, y: number): Array<number>;
}

export declare class Sum {
  x: number;
  y: number;
  xy: number;
  x2: number;
  y2: number;
}
export declare class Posterizer {
  private _potrace: Potrace;
  private _calculatedThreshold: any;
  private _params: any;
  STEPS_AUTO: number;
  FILL_SPREAD: string;
  FILL_DOMINANT: string;
  FILL_MEDIAN: string;
  FILL_MEAN: string;
  RANGES_AUTO: string;
  RANGES_EQUAL: string;
  private _addExtraColorStop(ranges: any): any;
  private _calcColorIntensity(colorStops: Array<number>): any;
  private _getImageHistogram(): Histogram;
  private _getRanges(): any;
  private _getRangesAuto(): any;
  private _getRangesEquallyDistributed(): any;
  private _paramSteps(count: boolean): number | Array<number>;
  private _paramThreshold(): number;
  private _pathTags(noFillColor: boolean): Array<string>;
  loadImage(target: string | Buffer | Jimp, callback: Function): void;
  setParameters(params: any): void;
  getSymbol(id: string): string;
  getSVG(): string;
}

export declare class utils {
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

export declare class Potrace {
  private _luminanceData: any;
  private _pathList: Array<any>;
  private _imageLoadingIdentifier: any;
  private _imageLoaded: any;
  private _processed: any;
  private _params: any;
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
  constructor(options: any): void;
  private _bmToPathlist(): void;
  private _processPath(): void;
  private _validateParameters(params: any): void;
  private _processLoadedImage(image: any): void;
  loadImage(target: string | Buffer | Jimp, callback: Function): void;
  setParameters(newParams: any): void;
  getPathTag(fillColor: string, scale: number): string;
  getSymbol(id: string): string;
  getSVG(): string;
}

declare function trace(
  file: string | Buffer | Jimp,
  options: any,
  cb?: (err: Error | null, svg: string, instance?: Potrace) => void
): void;
declare function trace(
  file: string | Buffer | Jimp,
  cb?: (err: Error | null, svg: string, instance?: Potrace) => void
): void;

declare function posterize(
  file: string | Buffer | Jimp,
  options: any,
  cb?: (err: Error | null, svg: string, instance?: Potrace) => void
): void;
declare function posterize(
  file: string | Buffer | Jimp,
  cb?: (err: Error | null, svg: string, instance?: Potrace) => void
): void;

declare const lib: {
  trace: typeof trace;
  posterize: typeof posterize;
  Potrace: typeof Potrace;
  Posterizer: typeof Posterizer;
};

export default lib;
