const fs = require("fs")
const [a,b] = fs.readFileSync(0).toString().split(" ").map(Number)

console.log(`${a+b}\n${a-b}\n${parseInt(a/b)}\n${a%b}`)