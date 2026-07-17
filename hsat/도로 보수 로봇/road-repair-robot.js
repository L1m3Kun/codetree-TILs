const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let line = 0;
const [N, K] = input[line++].split(' ').map(Number);
const positions = input[line++].split(' ').map(Number);

// Please Write your code here.
const check = (limit) => {
    // 필요한 개수가 K가 넘는지 판단    
    let count = 0;
    let i = 0;
    // console.log('limit:', limit)
    while (i < N) {
        let j = i+1;
        while (j < N) {
            // console.log('positions[j]=', positions[j], ', positions[i]=', positions[i])   
            if (positions[j] - positions[i]+1 <= limit){
                j++;
            } else {
                break;
            }
        }
        count++;
        // console.log('i=', i, ', j=', j-1, ', count=', count);
        i = j;
    }
    // console.log(count <= K)
    return count <= K;
}

let [left, right] = [1, positions[N - 1]];

while (left <= right) {
    const mid = (left + right) >> 1;
    // console.log("======")
    // console.log("right=", right, ", left=", left, ", mid=", mid)
    if (check(mid)) {
        right = mid - 1;
        line = mid;
    } else {
        left = mid + 1;
    }
}

console.log(line);