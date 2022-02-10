const rincianRoute =require('express').Router();
const rincianController = require('../controller/RincianController.js')

rincianRoute.get('/', rincianController.getRincians)
rincianRoute.get('/info/:rincian', rincianController.info)
rincianRoute.post('/create', rincianController.create)
rincianRoute.delete('/delete/:rincian', rincianController.delete)
rincianRoute.put('/update/:rincian', rincianController.update)

module.exports = kasbonRoute