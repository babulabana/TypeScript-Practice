var names = [];
names.push("mukesh", "vishal", "labana"); // works fine
console.log(names);
var str = ["Dylan"];
// str.push("vishal"); 
console.log(str);
var numbers = [1, 2, 3]; // inferred to type number[]
numbers.push(4);
var head = numbers[3]; // no error
console.log(head);
