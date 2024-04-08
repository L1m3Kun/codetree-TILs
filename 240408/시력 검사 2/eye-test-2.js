const a = Number(require("fs").readFileSync(0).toString());
console.log(a >= 1.0 ? "High" : a >= 0.5 ? "Middle" : "Low");