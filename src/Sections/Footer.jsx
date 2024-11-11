import React from 'react'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div style={{display: 'flex', justifyContent:'space-around', width: '100vw', padding: '0%'}}>
        <Link to={"/"}><h1>LOGO</h1></Link>
        <Navbar/>
        <div style={{display: 'flex', justifyContent:'space-around', padding: '0%'}}>
            <h4>linkedin</h4>
            <h4>Github</h4>
        </div>
    </div>
  )
}

export default Footer