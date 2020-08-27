import React from 'react'
import {Link} from 'react-router-dom'


function Head() {
     
    

    return (
        <header className='fixed-top container-fluid bg-dark justify-content-center'>
            <div   className="navbar ">
                <div className="navbar navbar-expand-sm bg-dark text-white w-100 ">
                   <div style={{fontSize:'8vh'}} className="navbar-brand active">
                      Exam Portal 
                   </div>
                   
                  <ul className="navbar-nav active">
                     <li>
                        <div className="navbar-item m-1">
                             <button style={{fontSize:'3vh'}} className="navbar-link btn btn-dark">
                                 <Link to='/Dashboard/Profile' />
                                  My Profile
                            </button>
                     </div>
                     </li>
                     </ul>
                     <div className="navbar-item m-1">
                         <a href="https://localhost:8000/logout">
                             <button style={{fontSize:'3vh'}}  className="navbar-link btn btn-dark">
                                  Logout
                            </button>
                        </a>
                    
                     </div>
                   
                
             </div>
            </div>
        </header>
    )
}

export default Head