// create a class based on a different class
// use word-extends
// constructor need to existing class -> Point
// a new class -> ColorPoint
class ColorPoint extends Point {
    constructor(x, y, color) {
      // passing arguments from the existing class
        super(x, y);
        this.color = color;
    }
    toString() {
      // overwriting method .toString in class Point:
        return super.toString() + ' in ' + this.color;
    }
}
