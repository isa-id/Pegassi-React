const mongoose=require('mongoose')
const { Schema } = mongoose;
const Car = new Schema({
    carname:String,
    carprice:Number,
    carimage:String
});

module.exports=mongoose.model('Car', Car);