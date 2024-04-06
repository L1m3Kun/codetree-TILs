const num = Number(require("fs").readFileSync(0).toString())

console.log(`${num}\n${num<0?"minus":""}`)