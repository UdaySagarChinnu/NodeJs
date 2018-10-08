var mongoose = require('mongoose');
var movieSchema = new mongoose.Schema({
    movId:Number,
    name:String,
})
module.exports=mongoose.model('movieShow',movieSchema);