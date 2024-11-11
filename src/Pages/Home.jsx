import React from 'react'
import Experience from '../Sections/Experience'
import Education from '../Sections/Education'
import Project from '../Sections/Project'
import Skill from '../Sections/Skill'
import Hero from '../Sections/Hero'
import Contact from '../Sections/Contact'


const Home = () => {
  return (
    <>
        <Hero/>
        <Experience />
        <Education />
        <Skill/>
        <Project/>
        <Contact/>
    </>
  )
}

export default Home