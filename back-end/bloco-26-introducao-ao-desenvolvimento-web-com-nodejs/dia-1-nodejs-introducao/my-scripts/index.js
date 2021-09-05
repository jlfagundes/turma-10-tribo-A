const peso = 85;
const altura = 175

function calcImc() {
  const imc = (peso / Math.pow(altura / 100, 2)).toFixed(2);
  console.log(imc);
}

calcImc();
