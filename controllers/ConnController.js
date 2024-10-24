const dbConnection = require('../config/database');

exports.connDB = (req, res) => {
  dbConnection.query('SELECT 1', (err) => { // Menggunakan query sederhana untuk cek koneksi
    if (err) {
      res.status(500).send('Sorry, DB!');
      console.error('Kesalahan saat mengakses database:', err);
    } else {
      res.send('Hello, DB!');
      console.log('Berhasil terhubung ke database');
}
});
};