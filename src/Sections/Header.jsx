import React from 'react'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <Link to={"/"}><h1>LOGO</h1></Link>
        <Navbar/>
        <div>
            <h3>🌐</h3>
            <h3>☀</h3>
        </div>
    </div>
  )
}

export default Header