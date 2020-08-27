//server.js
require('dotenv').config();
const express = require('express');
const cors= require('cors')
const path = require('path');
const bodyParser = require('body-parser');
let app = express();
const https=require('https');
const fs=require('fs');
const mongooose= require('mongoose');
const {checkUser,authenticateUser, getData,getEnrolled,getExam,getAns,getNewExams} = require('../src/UserQueries/UserQueries.js')
const passport = require('passport')
const googleStrat =require('passport-google-oauth2').Strategy
const session = require('express-session')
const MongoStore=require('connect-mongo')(session)

//============== DB connection================//

const DB=process.env.DB;
try{ 
   mongooose.connect(DB,{useNewUrlParser:true,useUnifiedTopology:true});
    console.log('Connected to Database'); 
}
catch(err){
    console.log('Error occurred while connecting to Database =>',err);
}

//++++++++++++++++++++++++++++++++++++++++++++++//


//=============https server=====================//
const sKey= process.env.KEY;
const port = process.env.PORT || 8000;
const server=https.createServer({
    key:fs.readFileSync('app/server/src/key.pem'),
    cert:fs.readFileSync('app/server/src/cert.pem'),
    passphrase:'A1B2C3D4'
},app)

//+++++++++++++++++++++++++++++++++++++++++++++++//



//===============webpack dev server=========//
const webpack=require('webpack');
const middleware=require('webpack-dev-middleware');
const config=require('./../../../webpack.config');
const compiler=webpack(config);
app.use(middleware(compiler));
//++++++++++++++++++++++++++++++++++++++++++//


//======================== middlewares=========================//
app.use(bodyParser.json());
app.use(cors());

app.use(session({secret:process.env.SESSION_SECRET,
                resave:true,
                saveUninitialized:false
                ,cookie:{maxAge:36000000}
                ,store:new MongoStore({mongooseConnection:mongooose.connection})}))
    
app.use(express.static(path.join(__dirname, '../../../build')));

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//====================== setting up passport=================//

app.use(passport.initialize());
app.use(passport.session());

passport.use(new googleStrat({
  clientID: "168105451372-0auh793ccjl2mbqr90q7eiqrjin31hbn.apps.googleusercontent.com",
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "https://localhost:8000/auth/callback",
   },
    (accessToken, refreshToken, profile,done)=> {
      checkUser(profile,accessToken);
      passport.serializeUser((user,done)=>{
        return done(null,{accessToken,id:user.id,email:user.email})
      })
      done(null,profile)
}))


  passport.deserializeUser(async (user,done)=>{
      if(await authenticateUser(user)===true)
         return done(null,user)  
      else 
         return done(null,user)   
   })

//++++++++++++++++++++++++++++++++++++++++++++++++


//===============authentication Routes==========================//


app.get('/auth', passport.authenticate("google",{scope:[ 'profile','email' ],session:true}))

app.get('/auth/callback',passport.authenticate('google',{successRedirect:'https://localhost:8000/Dashboard',failureRedirect:'https://localhost:8000/Home'}));


app.get('/logout',(req,res)=>{
  req.logout();
  res.clearCookie();
  res.redirect('/Home');
  res.send();
})



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//==========================Dashboard routes==================//

app.post('/data',async(req,res)=>{
 // console.log(req.user)
  if(!req.user){
    res.send(JSON.stringify({data:false}))
  }

 else{
       var data=await getData(req.user); 
       if(data===false){
       res.send(JSON.stringify({data:false}))
    }
    else{
      res.send(JSON.stringify({data}));
   }}
})

app.post('/enrolled',async (req,res)=>{
  const result=await getEnrolled(req.user);
  res.send(JSON.stringify({result}))
})

app.post('/getNew',async(req,res)=>{
 const result=await getNewExams();
 //console.log(result)
 res.send(JSON.stringify({result}))

})

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//=========================Exam routes=========================//

app.post('/getExam',async (req,res)=>{
  //console.log(req.user)
   const result= await getExam(await req.user,req.body.examID);
  // console.log(result);
   res.send(JSON.stringify({result}))
})

app.post('/getResult',async (req,res)=>{
  const result= await getAns(await req.user,req.body.ExamID);
  var score=0;
  var i=0;
  const {body:{answers}}=req;
  
  for(i=0;i<answers.length;i++){
    if(await result.Answer[i]===parseInt(answers[i])){
      score++;
    }
  }
  res.send({result:score})
})

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../../build', 'index.html'));
  });
  
  
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

server.listen(port,()=>{
    console.log(`server running on ${port}`);
})



/*
app.listen('8000',()=>{
    console.log("server on port 8000");
})
*/


