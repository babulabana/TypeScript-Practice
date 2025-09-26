"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createPair(v1, v2) {
    return [v1, v2];
}
console.log(createPair("hello", 42));
// or
function createPair2(v1, v2) {
    return [v1, v2];
}
console.log(createPair2("vishal", 450));
class NamedValue {
    name;
    _value;
    constructor(name) {
        this.name = name;
    }
    setValue(value) {
        this._value = value;
    }
    getValue() {
        return this._value;
    }
    toString() {
        return `${this.name}: ${this._value}`;
    }
}
const value = new NamedValue("myNumber");
value.setValue(10);
console.log(value.toString()); // myNumber: 10
//# sourceMappingURL=generics.js.map