import React from 'react'
import { Link } from 'react-router-dom'

function ListOptions() {
    return (
        <center>
        <table className="table table-bordered bg-white w-100">
           <tbody style={{fontSize:'2vh'}}>
              
               <tr>
                   <td>
                       <Link to="/Dashboard/ExploreExams">
                       Explore Exams
                       </Link>
                    </td>
                       
               </tr>
               <tr>
                   <td>
                       <Link to="/Dashboard/Enrolled">
                       Enrolled Exams
                       </Link>   
                    </td>

               </tr>
             
           </tbody>
        </table>
        </center>
    )
}
export default ListOptions;