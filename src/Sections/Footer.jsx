import React from 'react'
import Navbar from '../Components/Navbar'
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div style={{display: 'flex', justifyContent:'space-around', width: '100vw', padding: '0%'}}>
        <h1 onClick={handleLogoClick}>LOGO</h1>
        <Navbar/>
        <div style={{display: 'flex', justifyContent:'space-around', padding: '0%'}}>
            <h4>linkedin</h4>
            <h4>Github</h4>
        </div>
    </div>
  )
}

export default Footer