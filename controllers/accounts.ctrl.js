const Client = require('../models/clients')


module.exports = {
    add_car: (req, res) => {
        // const { c_info } = req.body
        const c_info = req.body.c_info
        const client = new Client(c_info)

        client.save((err, status) => {
            if (err) throw err

            console.log(status)
            res.send(status)
        })
    },
    remove_car: (req, res) => {
        // answer
    }
}