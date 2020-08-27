const mongoose = require('mongoose');
const {Schema} = require('mongoose');


const ExamList= new Schema({
    name:String,
    list:[Object],
},{timestamps:true})

module.exports=mongoose.model('ExamList',ExamList,'ExamList');