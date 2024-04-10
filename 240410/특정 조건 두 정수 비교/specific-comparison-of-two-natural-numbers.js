const [a, b] = require("fs").readFileSync(0).toString().split(" ").map(Number);

console.log(a<b?1:0, a===b?1:0);