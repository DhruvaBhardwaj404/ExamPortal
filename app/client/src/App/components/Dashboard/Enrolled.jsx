import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import getEnrolled from './fetchCalls/getEnrolled.js'
import { Link, useHistory } from 'react-router-dom'



function Enrolled() {
    const [data,setData]=useState((<div><div className=" spinner-border"></div><br />Loading..</div>))
     const history =useHistory();

    const getData=async ()=>{
      const data= await getEnrolled()
      console.log(await data)
      const pData=await data.result.map((el)=>{return(
                                   <tr key={el.ExamID}>
                                      <td colSpan='2'>{el.ExamID}</td>
                                      <td colSpan='3'>{el.Desc}</td>
                                      <td><button onClick={()=>{history.push('/Exam',el)}} className='btn bg-white'>Take test</button></td>
                                   </tr>
      )})
      const tab=(
              <table className='table table-dark'>
                <thead>
                  <tr>
                    <th colSpan='2'> <b> Name </b> </th>
                    <th colSpan='5'> <b> Description </b> </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {pData}
                </tbody>
              </table>
      )
      setData(tab)
    }

    useEffect(()=>{
       getData()
    },[])
    return (
        <div className="container-fluid h-100 ">
          <div style={{height:'100%' ,width:'100%' ,display:'flex', alignItems:'center',justifyContent:'center'}}>
          {data}
          </div>
        </div>
    )
}

export default Enrolled