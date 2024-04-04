let [a, b] = require("fs").readFileSync(0).toString().split(" ").map(Number)
a += b
b += a

console.log(a,b)