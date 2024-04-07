const [a, b] = require("fs").readFileSync(0).toString().split(" ").map(Number)

console.log(Math.max(a,b))