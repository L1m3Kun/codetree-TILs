const a = Number(require("fs").readFileSync(0).toString());

console.log(a%3?"NO":"YES");
console.log(a%5?"NO":"YES");