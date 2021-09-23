const fs = require('fs');

fs.readFile('./arquivo.txt', (err, content) => {
  if (err) {
    console.error(`Erro ao ler arquivo: ${err.message}`);
    return;
  }

  console.log(`Arquivo lido com sucesso/; ${content.toString('utf8')}`);
});
