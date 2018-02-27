const accCtrl = require('../controllers/accounts.ctrl')
const router = require('express').Router()
const Client = require('../models/clients')

router.post('/add_client', accCtrl.add_car)

router.get('/status', (req, res) => {
    Client.find({}, (err, client) => {
        res.send(client)
    })
})

module.exports = router