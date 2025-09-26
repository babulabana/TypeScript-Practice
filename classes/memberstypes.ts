
class Person {
  name!: string; // tells TS: "I will assign this later"
}

const person = new Person();
person.name = "Jane";

console.log(person);
