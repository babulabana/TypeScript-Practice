let ourTuple: [number, boolean, string];

ourTuple = [5, false, "Coding God was here"];

ourTuple.push("Something new and wrong");

console.log(ourTuple);



const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];


// ourReadonlyTuple.push('Coding God took a day off');
console.log(ourReadonlyTuple);

const graph: [x: number, y: number] = [55.2, 41.3];
console.log(graph);
const graph1: [number, number] = [5685.2, 4156.3];
const [x, y] = graph1;
console.log(graph1);