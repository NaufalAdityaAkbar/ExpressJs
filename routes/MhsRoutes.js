const express = require('express');
const router = express.Router();
const MhsController = require('../controllers/MhsController');

// Endpoint untuk GET semua mahasiswa
router.get('/mahasiswa', MhsController.getAllMhs);

// Endpoint untuk POST data mahasiswa baru
router.post('/mahasiswa', MhsController.postMhs);

// Endpoint untuk DELETE mahasiswa berdasarkan npm
router.delete('/mahasiswa/:npm', MhsController.deleteMhs);

// Endpoint untuk UPDATE mahasiswa berdasarkan npm
router.put('/mahasiswa/:npm', MhsController.updateMhs);


router.put('/mahasiswa/:npm', MhsController.getAllMhs);
module.exports = router;
