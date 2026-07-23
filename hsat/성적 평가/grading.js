const fs = require('fs');
const inputs = fs.readFileSync(0).toString().trim().split("\n");
const N = +inputs[0];
const grid = inputs.slice(1).map((l) => l.split(" ").map(Number));

const makeScoreBoard = (maxLen, arr, contest) => {
    const scores = Array.from({ length: maxLen }, () => new Set());
    arr.forEach((score, person) => {
        scores[score].add(person);
    });
    let rank = 1;
    for (let idx = maxLen - 1; idx >= 0; idx--) {
        const people = scores[idx];
        if (people.size === 0) continue;
        // console.log(idx, people, contest)
        people.forEach((person) => {
            ranks[contest][person] = rank;
        });
        rank += people.size;
    }
};

const ranks = Array.from({ length: grid.length + 1 }, () => Array(N).fill(0));

grid.forEach((peopleScore, contest) => {
    // console.log(contest, peopleScore)
    makeScoreBoard(1001, peopleScore, contest);
});



const totalRankScores = Array(N).fill(0);

for (let person = 0; person < N; person++) {
    for (let con = 0; con < grid.length; con++) {
        totalRankScores[person] += grid[con][person];
    }
}

// console.log(totalRankScores)
makeScoreBoard(3001, totalRankScores, grid.length);

// console.log(ranks)
console.log(ranks.map(l => l.join(" ")).join("\n"));
