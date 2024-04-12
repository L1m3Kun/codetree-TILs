const [a, b] = require("fs").readFileSync(0).toString().split(" ").map(Number)

console.log(Number(a >= b))
console.log(Number(a > b))
console.log(Number(a <= b))
console.log(Number(a < b))