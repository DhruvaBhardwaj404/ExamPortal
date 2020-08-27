import React from 'react'
import { useLocation, Route } from 'react-router-dom';
import Head from './Head.jsx'
import StartPage from './StartPage.jsx'
import ExamBoard from './ExamBoard.jsx'
import Result from './Result.jsx'

function Exam() {

     const location= useLocation()
     const {state:{Desc,ExamID}}=location
     
     
    return (
        <React.Fragment>
            <Head/> 
             <Route exact path='/Exam'><StartPage Desc={Desc} ExamID={ExamID}/></Route> 
             <Route path='/Exam/on' > <ExamBoard/> </Route>
             <Route path='/Exam/result' ><Result/></Route>
        </React.Fragment>
    )
}

export default Exam;
