const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const ans = input + '\n' + input;
console.log(ans);