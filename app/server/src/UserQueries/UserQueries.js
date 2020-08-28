const mongoose = require('mongoose');
const ExamList=require('../models/ExamList.js')
const Exams = require('../models/Exams.js');
const Users = require('../models/Users.js');


async function checkUser(profile,accesstoken){
  try{
    if(await Users.exists({email:profile.email})){
       await Users.updateOne({email:profile.email},{token:accesstoken})
       return true;  
    }
    else{
        const {email,given_name,family_name}=profile;
        const exams=["Test","Test2"];
        await  Users.create({email,given_name,family_name,token:accesstoken,exams})
        return true;
    }   
    }
    catch(err){
        console.log("Error occurred =>",err);
        return false;
    }
}

async function authenticateUser(user){
    try{
        const res=await Users.exists({email:user.email,token:user.accessToken})
        return  res
    }catch(err){
        console.log('error in athencticate user',err)
        return false;
    }    
}

async function getData(user){
    try{
        const {accessToken,email}=user;
        if(await Users.exists({email,token:accessToken})){
            const res= await Users.findOne({email,token:accessToken})
            return {email:res.email,given_name:res.given_name,family_name:res.family_name,exams:res.exams};
         }
        else{
            return false;
         }
    }
    catch(err){
        console.log('Error in getData',err)
      return false
    }     
}

async function getEnrolled(user){
   try{ 
    const getUserExams= await Users.findOne({email:user.email})
   // console.log(getUserExams.exams)
    const getExams=await Exams.find({ExamID:{$in: getUserExams.exams}},{ExamID:1,Desc:1})
    //console.log(getExams);
    return getExams;
   }
   catch(err){
       console.log('Error while getting enrolled exams',err)
       return false
   }
}

async function getExam(user,examID){
    try{
        
         const User=await Users.findOne({email:user.email}) 
          const result=await Exams.findOne({ExamID:examID})
          //console.log(result);
          return {result:result.Question,examID:result.ExamID};
     
    }catch(err){
     console.log("error in getExam",err)
     return false
    }
}

async function getAns(user,examID){
    try{
        
         const User=await Users.findOne({email:user.email}) 
          const result=await Exams.findOne({ExamID:examID})
          //console.log(result);
          return result;
     
    }catch(err){
     console.log("error in getExam",err)
     return false
    }
}

async function getNewExams(){
    try{
       const result = await ExamList.find().sort({$natural:-1}).limit(10);
       return result;
    }
    catch(err){
        console.log("error in getNewExam",err)
        return false
    }
}

module.exports={checkUser,authenticateUser,getData,getEnrolled,getExam,getAns,getNewExams}

