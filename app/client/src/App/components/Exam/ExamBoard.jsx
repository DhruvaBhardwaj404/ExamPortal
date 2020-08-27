import React from 'react'
import { useState } from 'react';
import {setAnswers,setAttempts,setCurrent} from '../../redux/index.js'
import {connect} from 'react-redux'
import sendAnswer from './fetchCalls/sendAnswer.js'
import { useHistory, useLocation } from 'react-router-dom';

function Examboard(props) {
    const location = useLocation()
    console.log(location)
    const history=useHistory()
    var [sel,setSel]=useState(props.answers[num]);
    const [num,setNum]=useState(props.current);
   
    
    const ques=props.questions[num]

    const currentQuestion= (
                            <div><b>
                               <h3>
                               
                                 <u> Question </u> :  {ques.question}
                                 
                               </h3>
                                <br/>
                                <div >
                                <input type="radio" id='1' value='1' name='op' checked={sel==='1'} onChange={e=>setSel(e.target.value)}/>{ques.options[0]} <br/>
                                <input type="radio" id='2' value='2' name='op' checked={sel==='2'} onChange={e=>setSel(e.target.value)}/> {ques.options[1]} <br/>
                                <input type="radio" id='3' value='3' name='op' checked={sel==='3'} onChange={e=>setSel(e.target.value)}/> {ques.options[2]}<br/>
                                <input type="radio" id='4' value='4' name='op' checked={sel==='4'} onChange={e=>setSel(e.target.value)}/> {ques.options[3]}<br/>
                                </div>
                            </b></div>
    )
   
    const dataAttempt= props.questions.map(((el,index)=>{
                                               if(props.attempts[index]){
                                                    return(
                                                        <div className='col-3 m-1'>
                                                          <button onClick={goTo}className='btn btn-success'>
                                                           Question-{index+1}
                                                          </button>    
                                                        </div>
                                                    )
                                                 }
                                                else{
                                                    return(
                                                        <div className='col-3 m-1'>
                                                          <button onClick={()=>goTo(index)}className='btn btn-danger'>
                                                           Question-{index+1}
                                                          </button>    
                                                        </div>
                                                    )
                                                }
                                                }))

    const back=()=>{
        if(num===0)
         alert('Cannot Go Back!!')
        else{
         setNum(num-1); 
         
        }
    }
    const save=()=>{
       var newAns= props.answers;
       var newAtt= props.attempts
       newAtt[num]=true;
       newAns[num]=sel;
       props.setAnswers(newAns)
       props.setAnswers(newAns)
       
    }
    const next=()=>{
         if(num===props.answers.length-1)
           alert('Cannot Go Any further')
         else{
             props.setCurrent(num+1);
             setNum(num+1);
             
         }  
    }

    const goTo=(index)=>{
        setNum(index);
        props.setCurrent(index)
    }

    const submitHandler=async ()=>{
        const res=confirm('You are about to submit your answer!')
        if(res===true){
            const result=await sendAnswer(props.answers,location.state.result.examID)
            
            history.push('/Exam/Result',result)
        }

    }

    return (
        <div style={{paddingTop:'22vh'}} className='container-fluid bg-secondary h-100' >
            <div className='row '>
               <div style={{height:'50vh',overflow:'auto'}} className="col-md-8 bg-white border shadow p-3">
                   {currentQuestion}
               </div>
               <div style={{height:'50vh',overflow:'auto'}} className='col-md-4 bg-white border'>
                  <div className="row   p-1 bg-dark"> 
                          {dataAttempt}
                  </div>
               </div>
            </div>
           <div>
               <center>
                 <button onClick={back} className="btn btn-primary p-3 m-1">Back</button>
                 <button onClick={save} className="btn btn-success p-3 m-1">Save</button>
                 <button onClick={next} className="btn btn-primary p-3 m-1">Next</button>
                 <br/>
                 <button onClick={submitHandler} className='btn btn-primary'>Submit</button>
               </center>
           </div>
        </div>
    )
}


const mapStateToProps=(state)=>{
    return{
        questions:state.examReducer.questions,
        answers:state.examReducer.answers,
        attempts:state.examReducer.attempts,
        current:state.examReducer.current
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        setAnswers:(data)=>dispatch(setAnswers(data)),
        setAttempts:(data)=>dispatch(setAttempts(data)),
        setCurrent:(data)=>dispatch(setCurrent(data))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Examboard)