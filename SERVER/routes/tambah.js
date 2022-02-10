const tambahRoute =require('express').Router();
const TambahController = require('../controller/tambahController')

tambahRoute.get('/', TambahController.gettambahs)
tambahRoute.get('/info/:tambah', TambahController.info)
tambahRoute.post('/create', TambahController.create)
tambahRoute.delete('/delete/:tambah', TambahController.delete)
tambahRoute.put('/update/:tambah', TambahController.update)

module.exports = kasbonRoute