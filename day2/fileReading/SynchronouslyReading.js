const fs=require('fs');

const content = fs.readFileSync('message.txt');
console.log(content)