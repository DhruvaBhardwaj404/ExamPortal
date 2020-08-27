import React from 'react'

import { useHistory } from 'react-router-dom';


function Section() {
    const history=useHistory();
   
    return (
        <section className="align-items-center">
         <div  className="container-fluid  h-100">
             <center>
                 <div className="bg-dark text-white display-5 w-75 p-3">
                   To Check Your Dashboard login with your registered Gmail account
                 </div>
                 <br/>
                 <a href="https://localhost:8000/auth">
                    <button className='btn btn-light shadow' >
                       <img src="./Google.png" height="20%" width="20%" />
                       <h4>
                       Login With Google
                       </h4>
                    </button>
                    </a>
                    
                   <div className='bg-dark text-white w-50 p-3 m-5'>
                      You can also Register by Clicking the above button!
                      <br/>
                      
                </div>
               
             </center>
            
         </div>
     </section>
    )
}

export default Section;