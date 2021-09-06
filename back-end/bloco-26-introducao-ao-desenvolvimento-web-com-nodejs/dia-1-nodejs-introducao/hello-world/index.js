const readline = require('readline-sync');

const name = readline.question('Whats your name?' );
const age = readline.questionInt('What your age? ')

console.log(`Hello, ${name} you are ${age} years old!`);
