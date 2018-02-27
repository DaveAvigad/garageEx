var mongoose = require ('mongoose');
var autoIncrement = require('mongoose-auto-increment');
var schema = mongoose.Schema;
autoIncrement.initialize(mongoose.connection);



var rcp = new schema (

    {//ALL THE REST HE שרוי FROM CARID and autoPart

        Rcp_id : {type: Number, required:true, index:1, unique:true, autoIncrement:true},
        Carpets: { type: String, required: true},
        CarpetsFiters: { type: String, required: true},
        ExternalDefects: { type: String, required: true},
        RightSideView:{type : String, required: true},
        LeftSideView: { type: String, required: true},
        FrontView: { type: String, required: true},
        RearView: {type : Number, required: true},
        DamageBoxNote:{ type: String, required: true},
        FrontRightMirror:{type : Number, required: true},
        FrontLeftMirror:{type : Number, required: true},
        CabinMainLight :{type : String, required: true},
        WheelCover:{type : String, required: true},
        Mudflaps:{type : Number, required: true},
        Logos: { data: Buffer, contentType: String },
        Wipers:{type: Date, default: Date.now}
        RightFrontTire:{type : Number, required: true},
        RightRearTire:{type : Number, required: true},
        LeftFrontTire:{type : Number, required: true},
        LeftRearTire:{type : Number, required: true},
        FixDescription:{type : Number, required: true},
        FormDate:{type : Number, required: true},
        SumParts:{type : Number, required: true},
        SumPartsTax:{type : Number, required: true},
        TreatmentEndDate:{type : Number, required: true}

    },

    {collection: 'rcp'}

);

rcp.plugin(autoIncrement.plugin, 'rcp');

rcp.set('toJSON', {
    transform: function (doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
    }
});
var rcp = mongoose.model ('rcp', rcp);

module.exports = rcp;