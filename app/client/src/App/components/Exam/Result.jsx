import React from 'react'
import { useLocation, useHistory } from 'react-router-dom';

function Result() {
   const location=useLocation();
   console.log(location)
   const history=useHistory();

    return (
        <div style={{height:'100vh',width:'100vw'}} className="conatiner-fluid ">
        <div style={{height:'100vh',paddingTop:'30vh',paddingBottom:'30vh'}} className="container-fluid border shadow bg-secondary">
            <div className='container-fluid bg-white p-3 '>
                <center>
                 <b>
                 <h3>
                     Successfully Submitted the Result
                 </h3>
                 </b>
                 <br/>
                 <div className='border shadow w-75 p-5'>
                     Your result is
                     <br/>
                     <div className='alert alert-success'>
                       <b> {location.state.result} </b>
                     </div>
                 </div>
                 <button className="btn btn-success p-1 m-1" onClick={()=>{history.push('/Dashboard')}}>Dashboard</button>
                 </center>
            </div>
        </div>
     </div>
    )
}

export default Result;