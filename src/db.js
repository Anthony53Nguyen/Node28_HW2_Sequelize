const mysql = require('mysql2');
const config = require('./config')

const conn = mysql.createConnection({
    host: config.host,
    database: config.database,
    user: config.userName,
    password: config.passWord,
    port: config.port
})

conn.connect(function(err, results) {
  if (err) {throw err};
  console.log('connected');
})

module.exports = conn; 