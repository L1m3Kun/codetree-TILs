let score = Number(require("fs").readFileSync(0).toString())

score /= 10
console.log(score >= 10? "pass":"failure")