let a = Number(require("fs").readFileSync(0).toString());

if (a%2) a += 3;

if (!(a%3)) a /= 3;


console.log(a);