const [n, m, k] = require("fs").readFileSync(0).toString().split(" ").map(Number)

const dp = []
for (let y = 0 ; y < n ; y++){
    dp.push(Array(m).fill(1))
}
for (let y=1;y<n;y++){
    for (let x=1;x<m;x++){
        dp[y][x] = dp[y][x-1] + dp[y-1][x]
    }
}

if (k){
    let [i,j] = [parseInt(k/m), k%m-1]
    if (j < 0) {
        i -= 1
        j = m-1
    }
    
    console.log(dp[i][j] * dp[n-i-1][m-j-1])
}else{
    console.log(dp[n-1][m-1])
}