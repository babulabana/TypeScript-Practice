"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name;
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
const person = new Person("Jane");
console.log(person.getName());
//# sourceMappingURL=membersvisibility.js.map