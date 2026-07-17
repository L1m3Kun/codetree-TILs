const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [n, k] = input[0].split(" ").map(Number);
let grid = input.slice(1, n + 1).map(line => line.split(" ").map(Number));

const MAX_DIFFERENT = 100000000;

// Please Write your code here.
const dp = Array.from(
    {length: 100},
    () => Array.from(
        {length: 100}, 
        () => Array(101).fill(-1)
    )
);

let ans = MAX_DIFFERENT;

const dir = [
    [1,0],
    [-1,0],
    [0,1],
    [0,-1],
]

const searchMinMaxRoute = (i, j, l) => {
    if (dp[i][j][l] >= 0) {
        return dp[i][j][l];
    }
    if (l === 1) {
        dp[i][j][l] = 0;
        return dp[i][j][l];
    }
    dp[i][j][l] = MAX_DIFFERENT;

    for(const [di, dj] of dir) {
        const [ni, nj] = [i + di, j + dj];
        if (ni < 0 || ni >= n || nj < 0 || nj >= n) continue;
        if (grid[ni][nj] <= grid[i][j]) continue;
        dp[i][j][l] = Math.min(dp[i][j][l], Math.max(searchMinMaxRoute(ni, nj, l-1), grid[ni][nj] - grid[i][j]));
    }
    return dp[i][j][l];
}

for (let i = 0 ; i < n ; i++) {
    for (let j = 0; j < n; j++) {
        ans = Math.min(ans, searchMinMaxRoute(i,j,k));
    }
}
// console.log(dp)
// console.log(ans)
console.log(ans === MAX_DIFFERENT ? -1 : ans);