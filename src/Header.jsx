import React from 'react'
import Navbar from './Components/Navbar'

const Header = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', width: '100vw', padding: '0%' }}>
        <h1>LOGO</h1>
        <Navbar/>
        <div style={{ display: 'flex', justifyContent: 'space-around'}}>
            <h3>🌐</h3>
            <h3>☀</h3>
        </div>
    </div>
  )
}

export default Header