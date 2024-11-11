import React from 'react'
import Navbar from '../Components/Navbar'

const Footer = () => {
  return (
    <div style={{display: 'flex', justifyContent:'space-around', width: '100vw', padding: '0%'}}>
        <h1>LOGO</h1>
        <Navbar/>
        <div style={{display: 'flex', justifyContent:'space-around', padding: '0%'}}>
            <h4>linkedin</h4>
            <h4>Github</h4>
        </div>
    </div>
  )
}

export default Footer