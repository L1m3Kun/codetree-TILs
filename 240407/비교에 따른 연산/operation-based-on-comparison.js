const [a, b] = require("fs").readFileSync(0).toString().split(" ").map(Number)
if (a > b){
    console.log(a* b)
} else {
    console.log(parseInt(b/a))
}