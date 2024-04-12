const input = require("fs").readFileSync(0).toString().split("\n")
const a = Number(input[0])
const [b,c,d,e] = input[1].split(" ").map(Number)

console.log(Number(a>b))
console.log(Number(a>c))
console.log(Number(a>d))
console.log(Number(a>e))