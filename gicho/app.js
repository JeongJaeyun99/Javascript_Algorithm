const fs = require('fs');
const filePath = process.platform == 'linux' ? '/dev/stdin' : './gicho/input.txt';
let input = fs.readFileSync(filePath).toString().split('/n')

input = input[0]
input = input.split(' ').map((item => +item))
console.log(solution(input[0],input[1]))

function solution(a , b){
    return a + b
}