const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();
const [h,m] = input.split(":").map(Number);
console.log(`${h+1}:${m}`);