const mysql = require('mysql');

const pool = mysql.createPool({
  host: 'us-cdbr-east-03.cleardb.com',
  user: 'b0a4da6ce0854d',
  password: 'fd5828d2',
  database: 'heroku_21e880135017970',
  port: '3306'
});

module.exports = pool;
