import React from 'react'
import getQuestions from './fetchCalls/getQuestions.js'
import { useHistory } from 'react-router-dom';
import {connect} from 'react-redux'
import  {setQuestions,setAnswers,setAttempts} from '../../redux/index.js'


function StartPage(props) {
    const history =useHistory()
    const startExam= async ()=>{

        const res=await getQuestions(props.ExamID);
        const {result:{result}}=res
        //console.log('res in startpage',result)
        console.log("inside result ",result)
        const answer=new Array(await result.length)
         props.setQuestions(await result);
         props.setAnswers(answer);
        props.setAttempts(answer);
        history.push('/Exam/on',res)
     }

     const exitExam=()=>{
         history.push('/Dashboard')
     }

    return (
        <div style={{height:'100vh',width:'100vw'}} className="conatiner-fluid ">
           <div style={{height:'100vh',paddingTop:'30vh',paddingBottom:'30vh'}} className="container-fluid border shadow bg-secondary">
               <div className='container-fluid bg-white p-3 '>
                   <center>
                    <b>
                    <h3>
                        You are About to Start this exam!
                        Make Sure You Do Not open any other tab!
                    </h3>
                    </b>
                    <br/>
                    <div className='border shadow w-75 p-5'>
                        <b> Name of Exam </b> : {props.ExamID}
                        <br/>
                       <b> Description </b>  : {props.Desc}
                    </div>
                    <button className="btn btn-danger p-1 m-1" onClick={exitExam}>Go Back</button>
                    <button className="btn btn-success p-1 m-1" onClick={startExam}>Start</button>
                    </center>
               </div>
           </div>
        </div>
    )
}


const mapStateToProps=(state)=>{
    return{
        questions:state.examReducer.questions,
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        setQuestions:(data)=>dispatch(setQuestions(data)),
        setAnswers:(data)=>dispatch(setAnswers(data)),
        setAttempts:(data)=>dispatch(setAttempts(data)),
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(StartPage)