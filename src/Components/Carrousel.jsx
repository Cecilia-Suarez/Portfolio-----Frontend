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
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <button onClick={handlePrev}>&lt;</button>

      <div style={{ display: 'flex', overflow: 'hidden' }}>
        {visibleProjects.map((project) => (
          <ProjectSlide 
            key={project.id} 
            project={project} 
            onClick={() => onProjectClick(project.id)} 
          />
        ))}
      </div>

      <button onClick={handleNext}>&gt;</button>
    </div>
  );
}

export default Carrousel