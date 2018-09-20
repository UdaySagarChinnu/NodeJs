var mongoose = require('mongoose');
var employeeSchema = new mongoose.Schema({
    empId : Number,
    name : String,
    degination : String,
    mobile : Number,
    salary : Number,
    address : String
})

module.exports=mongoose.model('Employee',employeeSchema);