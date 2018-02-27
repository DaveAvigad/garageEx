const express = require('express')
const mongoose = require('mongoose')
const db = require('./models/db.config')
const AccountsRouter = require('./routes/accounts') 
const bodyParser = require('body-parser')
const morgan = require('morgan')

const app = express()
const PORT = process.env.port || 3100
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Headers', '*')
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept')
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    app.set('json spaces', 4)
    res.set('Content-Type', 'application/json')
    next()
})
app.use([
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true }),
    morgan('dev')
])
app.locals.DB = db


// app.get('/', (req, res, next) => {
//     console.log(`running on port ${PORT}`)  
//     db.find({}, (err, obj) => {
//         res.send(obj)
//     })
// })

app.use('/accounts', AccountsRouter)

app.listen(PORT, () => console.log('server is running'))