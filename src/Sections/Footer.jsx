import React from 'react';
import Navbar from '../Components/Navbar';
import { useNavigate } from 'react-router-dom';
import stylesFooter from '../Styles/Sections/Footer.module.css';
import logo from '../assets/logo.svg';
import gitHub from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';
import { useCharStates } from '../Context/Context';

const SocialLinks = () => (
  <div className='icons'>
    <a href="https://github.com/Cecilia-Suarez" target="_blank" rel="noopener noreferrer">
      <img src={gitHub} alt="GitHub" className="iconTransform"/>
    </a>
    <a href="https://www.linkedin.com/in/cecilia-suarez-chaves" target="_blank" rel="noopener noreferrer">
      <img src={linkedin} alt="LinkedIn" className="iconTransform"/>
    </a>
  </div>
);

const Footer = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const { t } = useCharStates();

  return (
    <div className={`${stylesFooter.containerFooter} bgDark slideUp`}>
      <div className={stylesFooter.firstSection}>
        <img src={logo} alt="logo" onClick={handleLogoClick} role="button" className='logo' />
        <Navbar isFooter />
        <SocialLinks />
      </div>
      <div className={stylesFooter.secondSection}>
        <span>{t('rightsReserved')}</span>
      </div>
    </div>
  );
};

export default Footer;
