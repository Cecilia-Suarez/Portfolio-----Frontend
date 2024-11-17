import React from 'react'
import ProjectSlide from './ProjectSlide'
import { useState } from 'react';


const Carrousel = ({ projects, onProjectClick }) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleSlides = 3;

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + visibleSlides) % projects.length
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - visibleSlides + projects.length) % projects.length
    );
  };

  const visibleProjects = projects.slice(currentIndex, currentIndex + visibleSlides);

  return (
    <div className='flex items-center justify-around gap-6'>
      <button onClick={handlePrev}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-8 w-8">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </button>

      <div className='flex items-center justify-around'>
        {visibleProjects.map((project) => (
          <ProjectSlide
            key={project.id}
            project={project}
            onClick={() => onProjectClick(project.id)}
          />
        ))}
      </div>

      <button onClick={handleNext}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-8 w-8">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </button>


    </div>
  );
}

export default Carrousel