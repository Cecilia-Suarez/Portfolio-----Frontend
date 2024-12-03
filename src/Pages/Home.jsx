import {useEffect, useState} from 'react'
import Experience from '../Sections/Experience'
import Education from '../Sections/Education'
import Project from '../Sections/Project'
import Skill from '../Sections/Skill'
import Hero from '../Sections/Hero'
import Contact from '../Sections/Contact'
import HomeSkeleton from '../Components/SkeletonLoader/HomeSkeleton'

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(loadTimeout);
  }, []);

  if (isLoading) {
    return <HomeSkeleton />;
  }

  return (
    <div className='flex-1 p-y-20 p-y-20 text-center'>
      <Hero />
      <Experience />
      <Education />
      <Skill />
      <Project />
      <Contact />
    </div>
  )
}

export default Home