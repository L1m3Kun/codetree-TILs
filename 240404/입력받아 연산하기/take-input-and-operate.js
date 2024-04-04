let [a, b] = require("fs").readFileSync(0).toString().split("\n").map(Number)
a += 87
b %= 10
console.log(`${a}\n${b}`)