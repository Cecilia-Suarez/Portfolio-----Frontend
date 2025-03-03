import React, { useState } from 'react';
import Form from '../Components/Form';
import '../App.css';
import stylesContact from '../Styles/Sections/Contact.module.css';
import { useCharStates } from '../Context/Context';
import messageEs from "../assets/animateBottomEs.webp";
import messageEn from "../assets/animateBottomEn.webp";
import Send from "../Components/Send";

const Contact = () => {
  const [show, setShow] = useState(false);
  const { t, language } = useCharStates();
  const [userName, setUserName] = useState(""); 

  const image = language === 'es' ? messageEs : messageEn;

  return (
    <div>
      <div className="waves positionTop slideUp"></div>
      <div id="contact" className="bgBottom slideUp">
        <h2>{t('contact')}</h2>
        <div className={`${stylesContact.containerContact} ${show ? stylesContact.centered : ""}`}>
          {show ? (
            <Send name={userName}/>
          ) : (
            <>
              <img src={image} alt="contact" loading="lazy" className={stylesContact.contactImage} />
              <Form show={show} setShow={setShow} setUserName={setUserName}/>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
