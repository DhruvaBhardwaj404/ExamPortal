const mongoose = require('mongoose');
const {Schema} = require('mongoose');
const { Int32, Timestamp } = require('mongodb');

const Exams= new Schema({
    ExamID:String,
    Desc:String,
    Question:[Object],
    Answer:[Number]
},{timestamps:true})

module.exports=mongoose.model('Exams',Exams,'Exams');