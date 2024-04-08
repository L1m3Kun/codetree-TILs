const n = Number(require("fs").readFileSync(0).toString());
console.log(n === 1 ? "John" : n === 2? "Tom" : n ===3 ? "Paul" : "Vacancy");