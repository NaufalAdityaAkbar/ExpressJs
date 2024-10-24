const express = require('express');
const ConnRoutes = require('./routes/ConnRoutes');
const MhsRoutes = require('./routes/MhsRoutes');
const app = express();

// Middleware untuk mengurai JSON
app.use(express.json());

// Menggunakan rute
app.use('/api', ConnRoutes);
app.use('/mui', MhsRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Aplikasi sedang berjalan di http://localhost:${PORT}`);
});

module.exports = app;