const mongoose =require('mongoose');
const {Schema} =require('mongoose');

const Users=new Schema({
    email:String,
    token:String,
    given_name:String,
    family_name:String,
    exams:[Object],
},{timestamps:true})

module.exports= mongoose.model('Users',Users,'Users');