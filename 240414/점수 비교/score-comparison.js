const input = require("fs").readFileSync(0).toString().split("\n")
const a = input[0].split(" ").map(Number)
const b = input[1].split(" ").map(Number)

console.log((a[0] > b[0] && a[1] > b[1]) ? 1 : 0)