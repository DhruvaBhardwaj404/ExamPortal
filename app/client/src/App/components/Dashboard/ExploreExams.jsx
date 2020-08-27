import React,{useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import getNewExams from './fetchCalls/getNewExams.js'

function ExploreExams() {
    const [data,setData]=useState((<div><div className=" spinner-border"></div><br />under Construction..</div>))
    const history =useHistory();
/*
   const getData=async ()=>{
     const data= await getNewExams()
     console.log(await data)
     const pData=await data.result.map((el)=>{
         return(
            <table className='table table-dark'>
            <thead>
            </thead>
            <tbody>
              {pData}
            </tbody>
          </table>
         )
     })
     const tab=(
             
     )
     setData(tab)
   }

   useEffect(()=>{
      getData()
   },[])
   */
   return (
       <div className="container-fluid h-100 ">
         <div style={{height:'100%' ,width:'100%' ,display:'flex', alignItems:'center',justifyContent:'center'}}>
         {data}
         </div>
       </div>
   )
}

export default ExploreExams;