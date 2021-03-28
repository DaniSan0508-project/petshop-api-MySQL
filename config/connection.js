var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database:'agenda-petshop',
  port:3307
});


module.exports = connection;