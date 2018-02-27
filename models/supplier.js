var mongoose = require ('mongoose');
var autoIncrement = require('mongoose-auto-increment');
var schema = mongoose.Schema;
autoIncrement.initialize(mongoose.connection);



var supplier = new schema (

    {

        Supplier_id : {type: Number, required:true, index:1, unique:true, autoIncrement:true},
        SupplierName: { type: String, required: true},
        SupplierAddress: { type: String, required: true},
        SupplierPhone: { type: Number, required: true},
        DeliveryType:{type : String, required: true},

    },

    {collection: 'supplier'}

);

supplier.plugin(autoIncrement.plugin, 'supplier');

supplier.set('toJSON', {
    transform: function (doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
    }
});
var supplier = mongoose.model ('supplier', supplier);

module.exports = supplier;