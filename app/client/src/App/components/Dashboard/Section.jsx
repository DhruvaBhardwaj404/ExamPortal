import React from 'react'
import ListOptions from './ListOptions.jsx'
import { Switch, Redirect,Route, BrowserRouter } from 'react-router-dom'
import {listRoutes} from './listRoutes.js'


function Section() {
    return (
     <section className="align-items-center border shadow">
     <div className="row ">
        <div style={{height:'54vh',overflow:'auto'}} className="col-md-3 p-1 bg-dark">
           <ListOptions/>
        </div>
        <div style={{height:'54vh',overflow:'auto'}} className="col-md-8 bg-white">
                
                    <Redirect from="/Dashboard" to="/Dashboard/Enrolled" />
                     {listRoutes.map((el)=><Route {...el} key={el.component}/>)}
                
               
            
        </div> 
     </div>   
     </section>
    )
}

export default Section;