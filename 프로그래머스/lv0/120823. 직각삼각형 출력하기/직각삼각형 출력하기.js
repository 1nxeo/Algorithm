const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
    const num = Number(input[0]);
    for(i=1; i<=num; i++){
        console.log('*'.repeat(i))
    }
    rl.close();
}).on('close', function () {
});