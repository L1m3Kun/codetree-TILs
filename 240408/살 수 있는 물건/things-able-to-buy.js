const n = Number(require("fs").readFileSync(0).toString());
console.log(n >= 3000 ? "book" : n >= 1000 ? "mask" : "no");