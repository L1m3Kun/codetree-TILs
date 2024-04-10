const [a, b] = require("fs").readFileSync(0).toString().split(" ").map(Number);

const isOdd = (num) => num % 2 ? "odd" : "even";

console.log(isOdd(a))
console.log(isOdd(b))