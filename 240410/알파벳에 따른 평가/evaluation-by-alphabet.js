const s = require("fs").readFileSync(0).toString().trim()


let ans = "";

switch (s){
    case "S":
        ans = "Superior";
        break
    case "A":
        ans = "Excellent";
        break
    case "B":
        ans = "Good";
        break
    case "C":
        ans = "Usually";
        break
    case "D":
        ans = "Effort";
        break
    default:
        ans = "Failure";

}
console.log(ans)