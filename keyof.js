function printPersonProperty(person, property) {
    console.log("Printing person property ".concat(property, ": \"").concat(person[property], "\""));
}
var person = {
    name: "Max",
    age: 27,
};
printPersonProperty(person, "name");
function createStringPair(property, value) {
    var _a;
    return _a = {}, _a[property] = value, _a;
}
console.log(JSON.stringify(createStringPair('greeting', 'hello')));
