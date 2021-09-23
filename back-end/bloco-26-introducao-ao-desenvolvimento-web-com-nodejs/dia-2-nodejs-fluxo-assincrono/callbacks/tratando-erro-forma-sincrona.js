function dividirNumero(num1, num2) {
  if (num2 == 0) throw new Error('Não da certo dividir por zero');
  return num1 / num2;
}

try {
  console.log(dividirNumero(1, 2))
} catch(e) {
  console.log(e.message);
}
