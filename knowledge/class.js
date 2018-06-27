//the class construction:
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return `(${this.x}, ${this.y})`;
    }     //(no ; and no , between methods)
}

// use the method:
var p = new Point(1,2);
p.toString();            //"1, 2"

// the calss may have statistical methods
// statistical methods - they do not require an instance.
// this method is not called in the context of any object

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return `(${this.x}, ${this.y})`;
    }
    static print(text) {
      console.log(text);
    }
}

// ude the staic method:
Point.print('Hello world!');
