const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

if (input[0].length > input[1].length) {
    console.log(input[0], input[0].length);
}else if (input[0].length < input[1].length){
    console.log(input[1], input[1].length);
} else {
    console.log('same');
}