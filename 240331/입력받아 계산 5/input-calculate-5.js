const fs = require("fs");
const input = fs.readFileSync(0).toString();
const [a, b] = input.split(" ").map(Number);

console.log(a+b);