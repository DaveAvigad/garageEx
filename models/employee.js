var mongoose = require ('mongoose');
var autoIncrement = require('mongoose-auto-increment');
var schema = mongoose.Schema;
autoIncrement.initialize(mongoose.connection);



var employee = new schema (

    {

        Employee_id : {type: Number, required:true, index:1, unique:true, autoIncrement:true},
        EmployeeFirstName: { type: String, required: true},
        EmployeeFullName: { type: String, required: true},
        EmployeePhone: { type: Number, required: true},
        EmployeeEmail:{type : String, required: true},
        EmployeeAddress: { type: String, required: true},
        EmployeeProfession: { type: String, required: true}


    },

    {collection: 'employee'}

);

employee.plugin(autoIncrement.plugin, 'employee');

employee.set('toJSON', {
    transform: function (doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
    }
});
var employee = mongoose.model ('employee', employee);

module.exports = employee;