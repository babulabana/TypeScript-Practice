"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let value = null;
console.log(typeof value);
value = 'hello';
console.log(typeof value);
value = undefined;
console.log(typeof value);
function printMileage(mileage) {
    console.log(`Mileage: ${mileage ?? 'Not Available'}`);
}
printMileage(null); // Prints 'Mileage: Not Available'
printMileage(0); // Prints 'Mileage: 0'
function getValue() {
    return 'hello';
}
let value1 = getValue();
console.log('value length: ' + value1.length);
let array = [1, 2, 3];
let value2 = array[2];
console.log(value2);
//# sourceMappingURL=nullundefine.js.map