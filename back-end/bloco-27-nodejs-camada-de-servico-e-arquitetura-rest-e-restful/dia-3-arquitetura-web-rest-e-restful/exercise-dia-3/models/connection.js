// importanto recurso da lib mysql2
const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost', // substitua pelo seu host
  user: 'jlfagundes',
  password: 'Fe@221081',
  database: 'rest_exercicios',
});

module.exports = connection;
