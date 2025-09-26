"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name; // tells TS: "I will assign this later"
}
const person = new Person();
person.name = "Jane";
console.log(person);
//# sourceMappingURL=memberstypes.js.map