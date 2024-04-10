let a = Number(require("fs").readFileSync(0).toString());

if (!(a % 2)) a /= 2 ;
if (a % 2) a = (a+1)/2;

console.log(a);