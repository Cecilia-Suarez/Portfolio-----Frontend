import React from 'react'
import Experience from '../Sections/Experience'
import Education from '../Sections/Education'
import Project from '../Sections/Project'
import Skill from '../Sections/Skill'
import Hero from '../Sections/Hero'
import Contact from '../Sections/Contact'

const Home = () => {
  return (
    <div className='flex-1 p-y-20 p-y-20 text-center'>
        <Hero/>
        <Experience />
        <Education />
        <Skill/>
        <Project/>
        <Contact/>
    </div>
  )
}

export default Home