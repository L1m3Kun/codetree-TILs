const [a, b, c] = require("fs").readFileSync(0).toString().split(" ").map(Number)

if (a < b && b <c) console.log(1)
else console.log(0)