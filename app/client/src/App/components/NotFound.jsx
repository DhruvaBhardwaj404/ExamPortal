import React from 'react';


function NotFound(){
        return (
            <div >    
                 <header className='fixed-top bg-dark'>
                    <div style={{fontSize:'8vh'}} >
                        <div className=" p-3 bg-dark b-3 text-white ">
                             <b>
                            Exam Portal
                             </b>
                        </div>
                
                        </div>
                 </header>
                 <section className="align-items-center">
                    <div  className="container-fluid  h-100">
                     <center>
                         <div className="alert alert-danger display-5 w-75 p-3">
                          Page Not Found!!
                    </div>
                     <br/>
                     </center>
                     </div>
                 </section>  

                 <footer className='fixed-bottom bg-dark p-3'>
                    <center>
                        <div className='row bg-white justify-content-center'>
                             <div className='col-md-6 border display 4'>
                              About us          
                       </div>

                          <div className="col-md-6 border display 4">
                             Contact us
                         </div>
                    </div>
                    </center>
                 </footer>
             </div>
            
        )
    }


export default NotFound
