const [a, b, c] = require("fs").readFileSync(0).toString().split(" ").map(Number)
console.log(`${a+b+c}\n${parseInt((a+b+c)/3)}`)