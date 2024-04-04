const [a, b, c] = require("fs").readFileSync(0).toString().split(" ").map(Number)
const [sum, average] = [a+b+c, (a+b+c)/3]
console.log(`${sum}\n${average}\n${sum-average}`)