import React from 'react'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', width: '100vw', padding: '0%' }}>
        <Link to={"/"}><h1>LOGO</h1></Link>
        <Navbar/>
        <div style={{ display: 'flex', justifyContent: 'space-around'}}>
            <h3>🌐</h3>
            <h3>☀</h3>
        </div>
    </div>
  )
}

export default Header