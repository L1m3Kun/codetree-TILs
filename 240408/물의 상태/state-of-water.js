const n = Number(require("fs").readFileSync(0).toString());

console.log(n < 0 ? "ice" : n >= 100 ? "vapor" : "water");