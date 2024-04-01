const fs = require("fs");
const input = fs.readFileSync(0).toString().split("\n");
const [[a,b],c] = [input[0].split(" ").map(Number), Number(input[1])];
console.log(a,b,c);