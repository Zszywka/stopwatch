class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    get x() {
        console.log(this.x);
        return this.x;
    }
    set x(value) {
        console.log('setting x', value);
    }
}
