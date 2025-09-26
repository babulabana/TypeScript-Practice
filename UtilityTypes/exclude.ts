type Primitive = string | number | boolean;

const value: Exclude<Primitive, string> = 4564;

console.log(typeof value);