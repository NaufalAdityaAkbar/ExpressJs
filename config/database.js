const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 4306,
  user: 'root',
  password: '',
  database: 'db_js'
});

connection.connect((err) => {
  if (err) {
    console.error('Kesalahan koneksi ke database:', err);
    return;
  }
  console.log('Berhasil terhubung ke database');
});

module.exports = connection;