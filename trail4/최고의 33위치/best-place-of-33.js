const fs = require('fs');
const inputs = fs.readFileSync(0).toString().trim().split("\n");
const N = +inputs[0];
const grid = inputs.slice(1).map((l)=>l.split(" ").map(Number));
let maxV = 0;
for (let i = 0; i <= N - 3; i++) {
    for (let j = 0; j <= N-3; j ++) {
        let coins = 0;
        for (let l = 0; l < 3; l++) {
            for (let m=0; m<3; m++) {
                coins += grid[i+l][j+m];
            }
        }
        maxV = Math.max(coins, maxV);
    }
}
console.log(maxV);