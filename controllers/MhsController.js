const dbConnection = require('../config/database');

// Fungsi untuk GET semua mahasiswa
exports.getAllMhs = (req, res) => {
  dbConnection.query('SELECT * FROM mahasiswa', (err, rows) => {
    if (err) {
      res.status(500).send('Sorry, DB!');
      console.error('Kesalahan saat mengakses database:', err);
    } else {
      res.json(rows);
      console.log('Berhasil mengambil data mahasiswa');
    }
  });
};

// Fungsi untuk POST data mahasiswa baru
exports.postMhs = (req, res) => {
  const { npm, nama, no_hp } = req.body;

  if (!npm || !nama || !no_hp) {
    return res.status(400).send('Data mahasiswa tidak lengkap!');
  }

  const query = 'INSERT INTO mahasiswa (npm, nama, no_hp) VALUES (?, ?, ?)';
  
  dbConnection.query(query, [npm, nama, no_hp], (err, result) => {
    if (err) {
      res.status(500).send('Gagal menambahkan data mahasiswa!');
      console.error('Kesalahan saat memasukkan data:', err);
    } else {
      res.status(201).json({ message: 'Data mahasiswa berhasil ditambahkan!', data: { npm, nama, no_hp } });
      console.log('Berhasil menambahkan data mahasiswa');
    }
  });
};

// Fungsi untuk DELETE mahasiswa berdasarkan npm
exports.deleteMhs = (req, res) => {
  const { npm } = req.params;

  const query = 'DELETE FROM mahasiswa WHERE npm = ?';
  
  dbConnection.query(query, [npm], (err, result) => {
    if (err) {
      res.status(500).send('Gagal menghapus data mahasiswa!');
      console.error('Kesalahan saat menghapus data:', err);
    } else if (result.affectedRows === 0) {
      res.status(404).send('Mahasiswa tidak ditemukan!');
    } else {
      res.json({ message: 'Data mahasiswa berhasil dihapus!' });
      console.log('Berhasil menghapus data mahasiswa');
    }
  });
};

// Fungsi untuk UPDATE mahasiswa berdasarkan npm
exports.updateMhs = (req, res) => {
  const { npm } = req.params;
  const { nama, no_hp } = req.body;

  const query = 'UPDATE mahasiswa SET nama = ?, no_hp = ? WHERE npm = ?';
  
  dbConnection.query(query, [nama, no_hp, npm], (err, result) => {
    if (err) {
      res.status(500).send('Gagal memperbarui data mahasiswa!');
      console.error('Kesalahan saat memperbarui data:', err);
    } else if (result.affectedRows === 0) {
      res.status(404).send('Mahasiswa tidak ditemukan!');
    } else {
      res.json({ message: 'Data mahasiswa berhasil diperbarui!' });
      console.log('Berhasil memperbarui data mahasiswa');
    }
  });
};
