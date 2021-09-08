const fetch = require('node-fetch');


// requisição do tipo GET
fetch('https://postman-echo.com/get?param1=teste')
  .then((response) => {
    //Ao receber a resposta verificamos se esta tudo bem
    if (!response.ok) {
      //Forçamos a promisse a ser rejeitada
      return Promise.reject(response);
    }
    //Caso esteja tudo bem
    return response.json();
  })
  .then((data) => {
    // escrevemos o bady no console
    console.log('data');
  })
  .catch((errosOrResponse) => {
    // Em caso de falha simples (a request completou com um status diferente de 2xx)
    // simplesmente logamos o status no console
    if (errosOrResponse.status) {
      return console.error(`Erro falha de status: ${errosOrResponse.status}`);
    }
    // Caso tenha acontecido um erro de rede (não foi possível completar a request)
    // logamos o erro todo
    console.error(errorOrResponse);
  });
  