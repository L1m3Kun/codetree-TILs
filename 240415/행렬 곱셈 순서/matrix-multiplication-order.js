const input = require("fs").readFileSync(0).toString().split("\n")
const N = Number(input[0])
const nums = []
for (let i = 1; i <= N ; i++){
    if (i == 1){
        nums.push(Number(input[i].split(" ")[0]))
        nums.push(Number(input[i].split(" ")[1]))
    }
    else{
        nums.push(Number(input[i].split(" ")[1]))
    }
}

const dp = []

for (let i = 0; i <= N; i++){
    dp.push(Array(N+1).fill(0))
}


// for (let i = 0 ; i<= N; i++) dp[i][i] = nums[i]


for (let cnt = 0 ; cnt <= N ; cnt++){
    for (let i = 1; i <= N-cnt ; i++){
        const j = i + cnt
        if (cnt > 0){
            let minv = 500**3
            for (let p = i; p < j ; p++){
                minv = Math.min(minv, dp[i][p]+dp[p+1][j]+nums[i-1]*nums[p]*nums[j])
            }
            dp[i][j] = minv
        }
    }
}
// console.log(nums)
// console.log(dp)
console.log(dp[1][N])