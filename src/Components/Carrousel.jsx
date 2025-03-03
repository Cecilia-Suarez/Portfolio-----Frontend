import React, { useMemo, useRef, useEffect } from "react";
import ProjectSlide from "./ProjectSlide"; 
import "../Styles/Components/Carrousel.css"; 
import Loader from '../Components/Loader'

const Carrousel = ({ projects }) => {
  const wrapperRef = useRef(null);
  const scrollInterval = useRef(null);

  const duplicatedProjects = useMemo(() => [...projects, ...projects, ...projects], [projects]);

  useEffect(() => {
    const wrapper = wrapperRef.current;

    if (!wrapper) return;

    const scrollWidth = wrapper.scrollWidth / 3;

    const handleScroll = () => {
      const scrollLeft = wrapper.scrollLeft;
      if (scrollLeft <= 0) {
        wrapper.scrollLeft = scrollWidth;
      } else if (scrollLeft >= scrollWidth * 2) {
        wrapper.scrollLeft = scrollWidth;
      }
    };

    wrapper.addEventListener("scroll", handleScroll);

    return () => {
      wrapper.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollControl = (direction) => {
    clearInterval(scrollInterval.current);
    scrollInterval.current = setInterval(() => {
      if (direction === "right") {
        wrapperRef.current.scrollLeft += 2;
      } else {
        wrapperRef.current.scrollLeft -= 2;
      }
    }, 16);
  };

  const stopScrolling = () => {
    clearInterval(scrollInterval.current);
  };

  return (
    <div className="containerCarrousel">
      {projects.length === 0 ? (
        <Loader/>
      ) : (
        <>
          <div className="scrollArea left" onMouseEnter={() => handleScrollControl("left")} onMouseLeave={stopScrolling}></div>
          <div className="scrollArea right" onMouseEnter={() => handleScrollControl("right")} onMouseLeave={stopScrolling}></div>

          <div className="carouselTrack" ref={wrapperRef}>
            {duplicatedProjects.map((project, index) => (
              <ProjectSlide key={`${project.id}-${index}`} project={project} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Carrousel;