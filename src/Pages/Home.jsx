import { useEffect, useState } from 'react'
import Experiences from '../Sections/Experiences'
import Educations from '../Sections/Educations'
import Projects from '../Sections/Projects'
import Skills from '../Sections/Skills'
import Hero from '../Sections/Hero'
import Contact from '../Sections/Contact'

const Home = () => {

  return (
    <div>
      <Hero />
      <Experiences />
      <Educations />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}



export default Home