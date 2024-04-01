const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("-");
console.log(`010-${input[2]}-${input[1]}`);