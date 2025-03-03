import React from 'react'
import Button from '../Components/Button'
import stylesHero from '../Styles/Sections/Hero.module.css'
import download from '../assets/download.svg'
import { useCharStates } from '../Context/Context';
import BlurText from "../utils/BlurText";
import gretting from "../assets/animateTop.webp"

const Hero = () => {

  const { t } = useCharStates();

  const urlCV = "https://res.cloudinary.com/portfoliocsuarez/image/upload/Cecilia_Suarez_CV_vsb4cl.pdf"

  return (
    <>
      <div className={`${stylesHero.container} bgTop`}>
        <section className={stylesHero.textContent}>
          <BlurText as="h1" text={t('greeting')}  />
          <p>{t('description')}</p>
          <Button src={download} alt='download'><a href={urlCV} target="_blank" rel="noopener noreferrer"> CV </a></Button>
        </section>
        <figure className={stylesHero.imageWrapper}>
          <img src={gretting} alt="Greeting" />
        </figure>
      </div>
      <div className="waves positionBottom"></div>
    </>
  )
}

export default Hero
