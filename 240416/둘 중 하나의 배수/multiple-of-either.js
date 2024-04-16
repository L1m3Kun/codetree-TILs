const a = Number(require("fs").readFileSync(0).toString())

if (!(a%3) || !(a%5)) console.log(1)
else console.log(0)