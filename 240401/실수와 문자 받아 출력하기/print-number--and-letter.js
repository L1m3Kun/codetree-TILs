const fs = require("fs");
const input = fs.readFileSync(0).toString().split("\n");
const [[c], [a, b]] = [input[0], input.slice(1,3).map(Number)];

console.log(c);
console.log(a.toFixed(2));
console.log(b.toFixed(2));