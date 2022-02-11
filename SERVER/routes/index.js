const route = require('express').Router()

route.get('/', (req,res) => {
    res.json({
        message: "Home page"
    })
})

const kasbonRoutes = require('./kasbon')
const userRoutes =require('./user')

route.use('/kasbons', kasbonRoutes)
route.use('/users', userRoutes )

module.exports=route

