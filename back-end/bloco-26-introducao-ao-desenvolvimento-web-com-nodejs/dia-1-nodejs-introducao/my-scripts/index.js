const readline = require('readline-sync');

const peso = readline.questionInt('Qual o seu peso? ');
const altura = readline.questionInt('Qual a sua altura? ');

function calcImc() {
  
  const imc = (peso / Math.pow(altura / 100, 2)).toFixed(2);
  console.log(imc);
}

calcImc();
