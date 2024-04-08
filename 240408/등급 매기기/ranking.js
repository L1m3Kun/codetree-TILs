const score = Number(require("fs").readFileSync(0).toString());
console.log(score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : score >= 60 ? "D" : "F");