const mongoose = require('mongoose');

const client_schema = new mongoose.Schema({
        Client_id: {
            type: Number,
            required: true,
        },
        ClientFirstName: {
            type: String,
            required: true
        },
        ClientFullName: {
            type: String,
            required: true
        },
        ClientEmail: {
            type: String,
            required: true
        },
        ClientPhone: {
            type: String,
            required: true
        },
        ClientAddress: {
            type: String,
            required: true
        },
        ClientType: {
            type: String,
            required: true,
            default: 'private'
        },
        ClientVechileAmount: {
            type: Number,
            default: 1
        },
        ContactName: {
            type: String,
        },
        ContactPhone: {
            type: String,
        },
        Discount: {
            type: Number,
        }
}
    ,
    {
        collection: 'Clients'
    }
) 

module.exports = mongoose.model('Clients', client_schema)