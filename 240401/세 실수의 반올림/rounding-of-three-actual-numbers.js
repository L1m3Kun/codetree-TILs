const fs = require("fs");
const input = fs.readFileSync(0).toString().split("\n");
const [a, b, c] = input.map(Number);

console.log(a.toFixed(3));
console.log(b.toFixed(3));
console.log(c.toFixed(3));