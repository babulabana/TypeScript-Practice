interface Person {
  name: string;
  age: number;
  location?: string;
}
    
const bob: Omit<Person, 'name' | 'location'> = {
age: 65
};

console.log(bob);