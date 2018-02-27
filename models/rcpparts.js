var mongoose = require ('mongoose');
var autoIncrement = require('mongoose-auto-increment');
var schema = mongoose.Schema;
autoIncrement.initialize(mongoose.connection);



var rcppart = new schema (

    {//ALL THE REST HE שרוי FROM rcp

        RcpPart_id : {type: Number, required:true, index:1, unique:true, autoIncrement:true},
        Part_id : {type: Number, required:true, index:1, unique:true, autoIncrement:true},
        Amount :{type : Number, required: true}

    },

    {collection: 'rcppart'}

);

rcppart.plugin(autoIncrement.plugin, 'rcppart');

rcppart.set('toJSON', {
    transform: function (doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
    }
});
var rcppart = mongoose.model ('rcppart', rcppart);

module.exports = rcppart;