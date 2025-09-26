var value = null;
console.log(typeof value);
value = 'hello';
console.log(typeof value);
value = undefined;
console.log(typeof value);
function printMileage(mileage) {
    console.log("Mileage: ".concat(mileage !== null && mileage !== void 0 ? mileage : 'Not Available'));
}
printMileage(null); // Prints 'Mileage: Not Available'
printMileage(0); // Prints 'Mileage: 0'
function getValue() {
    return 'hello';
}
var value1 = getValue();
console.log('value length: ' + value1.length);
var array = [1, 2, 3];
var value2 = array[2];
console.log(value2);
