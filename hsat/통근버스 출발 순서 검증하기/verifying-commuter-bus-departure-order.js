const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = parseInt(input[0]);
const arr = input[1].split(' ').map(Number);
let ans = 0;
// Please Write your code here.
for (let i = 0; i< n-2 ; i++) {
    let big = 0;
    for (let j = i; j <n; j++){
        if (arr[i] < arr[j]) big ++;
        else ans += big;
    }
}
console.log(ans);