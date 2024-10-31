const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);
const ans = input.reduce((p,n)=>p+n,0);
console.log(ans);