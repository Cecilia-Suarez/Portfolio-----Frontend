import React, { useRef } from "react";
import ProjectSlide from "./ProjectSlide"; 
import "../Styles/Components/Carrousel.css"; 
import Loader from '../Components/Loader';
import Button from '../Components/Button';
import arrow from '../assets/arrowDark.svg'

const Carrousel = ({ projects }) => {
  const wrapperRef = useRef(null);

  const scrollAmount = 600; 

  const handleScroll = (direction) => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="containerCarrousel">
      {projects.length === 0 ? (
        <Loader/>
      ) : (
        <>
          <Button src={arrow} onClick={() => handleScroll("left")} className="left"></Button>
          <div className="carouselTrack" ref={wrapperRef}>
            {projects.map((project) => (
              <ProjectSlide key={project.id} project={project} />
            ))}
          </div>
          <Button src={arrow} onClick={() => handleScroll("right")} className="right"></Button>
        </>
      )}
    </div>
  );
};

export default Carrousel;