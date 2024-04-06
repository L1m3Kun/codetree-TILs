const [h, w] = require("fs").readFileSync(0).toString().split(" ").map(Number)

const b = (10000*w)/h*h