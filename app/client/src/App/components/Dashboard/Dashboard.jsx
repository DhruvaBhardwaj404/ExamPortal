import React from 'react'
import Head from './Head.jsx'
import Foot from './Foot.jsx'
import Section from './Section.jsx'
import userInfo from './fetchCalls/userInfo.js'
import { useEffect } from 'react'
import { useState } from 'react'
import {connect} from 'react-redux'
import {userSetAction} from '../../redux/index'
import { useHistory } from 'react-router-dom'

function Dashboard(props) {
    const [log,setLog]=useState(false);
    const history=useHistory()
   
    const checkLog=async ()=>{
        const res= await userInfo();
        if(await res!==false){
           const init={ logged:true, data:res}
           props.setUser(init)
           setLog(true)
        }
        else{  
           history.push('/Home')
        }
    
    }
     
    useEffect(()=>{
       checkLog()   
    },[])

    if(log) {
    return (
        <div>
            <Head/>
            <Section/>
            <Foot/>
        </div>
    )
    }
    else{
        return(
        <div>
        <Head/>
        <section>
            <div className='alert alert-danger'>
                You are not Logged in!
            </div>
        </section>
        <Foot/>
       </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        log:state.userSetReducer.logged,
        data:state.userSetReducer.data
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        setUser:(data)=>dispatch(userSetAction(data))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)