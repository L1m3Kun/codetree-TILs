const a = Number(require("fs").readFileSync(0).toString())
console.log((10 <= a && a <= 20)? "yes" : "no")