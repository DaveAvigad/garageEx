var mongoose = require ('mongoose');
var autoIncrement = require('mongoose-auto-increment');
var schema = mongoose.Schema;
autoIncrement.initialize(mongoose.connection);



var car = new schema (

    {

        Car_id : {type: Number, required:true, index:1, unique:true, autoIncrement:true},
        CarModel: { type: String, required: true},
        CarBrandModel: { type: String, required: true},
        CarPhoto: { data: Buffer, contentType: String },
        CarColor:{type : String, required: true},
        EngineModel: { type: String, required: true},
        EngineVol: { type: String, required: true},
        FuelType: {type : Number, required: true},
        Gear:{ type: String, required: true},
        MileMeter:{type : Number, required: true},
        ModelYear:{type : Number, required: true},
        VehicleOwner:{type : String, required: true},
        VehicleCategory:{type : String, required: true},
        VehicleEngineNumber:{type : Number, required: true},
        OpenCode:{type : Number, required: true},
        VechileLicenseExpiry:{type: Date, default: Date.now}

    },

    {collection: 'car'}

);

car.plugin(autoIncrement.plugin, 'car');

car.set('toJSON', {
    transform: function (doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
    }
});
var user = mongoose.model ('car', car);

module.exports = car;