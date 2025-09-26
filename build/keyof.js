"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printPersonProperty(person, property) {
    console.log(`Printing person property ${property}: "${person[property]}"`);
}
let person = {
    name: "Max",
    age: 27,
};
printPersonProperty(person, "name");
function createStringPair(property, value) {
    return { [property]: value };
}
console.log(JSON.stringify(createStringPair('greeting', 'hello')));
//# sourceMappingURL=keyof.js.map