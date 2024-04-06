const [h, w] = require("fs").readFileSync(0).toString().split(" ").map(Number)

const b = parseInt((10000*w)/(h*h))
console.log(`${b}\n${b>=25?"Obesity":""}`)