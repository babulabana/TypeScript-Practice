const names: string[] = [];

names.push("mukesh", "vishal", "labana"); // works fine
console.log(names);

const str: readonly string[] = ["Dylan"];

// str.push("vishal"); 
console.log(str);    

const numbers = [1, 2, 3]; 
numbers.push(4); 
let head: number = numbers[3]; 