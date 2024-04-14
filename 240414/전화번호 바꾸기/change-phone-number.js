const num = require("fs").readFileSync(0).toString().split("-")
console.log(`010-${num[2]}-${num[1]}`)