let [a, b] = [3, 5];
let tmp = a;
[a, b] = [b, tmp];
console.log(`${a}\n${b}`);