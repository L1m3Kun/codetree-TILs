const fs = require('fs');
const input = fs.readFileSync(0).toString();
const n = Number(input);

console.log((n*30.48).toFixed(1));