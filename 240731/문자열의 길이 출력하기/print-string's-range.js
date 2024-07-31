const fs = require('fs');
const len = fs.readFileSync(0).toString().trim().length; 
console.log(len-1);