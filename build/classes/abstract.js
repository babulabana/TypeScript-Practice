"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Polygon {
    toString() {
        return `Polygon[area=${this.getArea()}]`;
    }
}
class Rectangle extends Polygon {
    width;
    height;
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
const myRect = new Rectangle(10, 20);
console.log(myRect.getArea());
//# sourceMappingURL=abstract.js.map