const score = Number(require("fs").readFileSync(0).toString())
if (score >= 80){
    console.log("pass")
} else{
    console.log(`${80-score} more score`)
}