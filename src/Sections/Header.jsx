import React from 'react';
import Navbar from '../Components/Navbar';
import Button from '../Components/Button'
import { Link } from 'react-router-dom';
import { useCharStates } from '../Context/Context'
import stylesHeader from '../Styles/Sections/Header.module.css';
import logo from '../assets/logo.svg';
import moon from '../assets/moon.svg';
import earth from '../assets/earth.svg';
import sun from '../assets/sun.svg';

const Header = () => {
  const { theme, handleChangeTheme, handleChangeLanguage, language } = useCharStates();

  return (
    <div className={`${stylesHeader.headerContainer} bgDark`}>
      <Link to="/"><img src={logo} alt="logo" className='logo' /></Link>
      <Navbar className={stylesHeader.navbar} />
      <div className='icons'>
        <Button onClick={handleChangeLanguage} src={earth} className="iconTransform">{language === 'es' ? 'EN' : 'ES'}</Button>
        <Button onClick={handleChangeTheme} className="iconTransform"> {theme === 'light' ? (<img src={moon} alt="moon" className={stylesHeader.moon} />) : (<img src={sun} alt="sun" className={stylesHeader.sun} />)} </Button>
      </div>
    </div>
  );
};

export default Header;
