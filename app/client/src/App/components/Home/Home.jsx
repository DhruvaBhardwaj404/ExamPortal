import React from 'react'
import Head from './Head.jsx'
import Foot from './Foot.jsx'
import Section from './Section.jsx'
import { useHistory } from 'react-router-dom'


 function Home() {
     
    return (
      <React.Fragment>
        <Head/>
        <Section/>
        <Foot/>
      </React.Fragment>
    )
}

export default Home