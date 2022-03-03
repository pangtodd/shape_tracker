export default class Pentagram {
  constructor(side1, side2, side3, side4, side5) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
    this.side4 = side4;
    this.side5 = side5;
  }

  getPerimeter() {
    return this.side1 + this.side2 + this.side3 + this.side4 + this.side5;
    // this.perimeter = this.side1 + this.side2 + this.side3 + this.side4 + this.side5;
  }
}