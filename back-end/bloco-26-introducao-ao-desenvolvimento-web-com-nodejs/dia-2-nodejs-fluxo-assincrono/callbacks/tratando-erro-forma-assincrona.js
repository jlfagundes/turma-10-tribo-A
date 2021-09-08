function dividirNumero(num1, num2) {
  const promise = new Promise((resolve, reject) => {
    if (num2 == 0) reject(new Error('Não da certo dividir por zero'));
    const resultado = num1 / num2;
    resolve

  });
}