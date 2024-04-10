const n = Number(require("fs").readFileSync(0).toString());

const dp = Array(n+1).fill(1)

dp[2] = 2

for (let i = 3; i<=n; i++){
    dp[i] += dp[i-2]
}
for (let i = 3; i<=n; i++){
    dp[i] += dp[i-3]
}

console.log(dp[n])