const mongoose = require('mongoose');
const schema = mongoose.Schema;
module.exports = mongoose.model('AutoParts', new schema({
        part_id: {
            type: Number,
            required: true,
            index: 1,
            unique: true,
            autoIncrement: true
        },
        PartDescription: {
            type: String,
            required: true
        },
        AmmountInStock: {
            type: String,
            required: true
        }
    }
    /*  , {
     collection: 'AutoParts'
     } */
))