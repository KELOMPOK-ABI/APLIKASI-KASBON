const route = require('express').Router()

route.get('/', (req,res) => {
    res.json({
        message: "Home page"
    })
})
const kasbonRoutes = require('./kasbon')
const tambahRoutes =require('./tambah')
const rincianRoutes =require('./rincian')

route.use('/kasbons', kasbonRoutes  )
route.use('/tambahs', tambahRoutes)
route.use('/rincians', rincianRoutes )

module.exports=route
