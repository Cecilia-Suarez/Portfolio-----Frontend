import React, { useRef, useEffect, useState } from "react";
import ProjectSlide from "./ProjectSlide"; 
import "../Styles/Components/Carrousel.css"; 
import Loader from '../Components/Loader';

const Carrousel = ({ projects }) => {
  const wrapperRef = useRef(null);
  const scrollInterval = useRef(null);
  const [isTouching, setIsTouching] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const handleScroll = () => {
      const scrollWidth = wrapper.scrollWidth;
      const maxScroll = wrapper.scrollWidth - wrapper.clientWidth;
      
      if (wrapper.scrollLeft <= 0) {
        wrapper.scrollLeft = maxScroll;
      } else if (wrapper.scrollLeft >= maxScroll) {
        wrapper.scrollLeft = 0;
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

  const handleTouchStart = (e) => {
    setIsTouching(true);
    setStartX(e.touches[0].pageX - wrapperRef.current.offsetLeft);
    setScrollLeft(wrapperRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isTouching) return;
    const x = e.touches[0].pageX - wrapperRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    wrapperRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsTouching(false);
  };

  return (
    <div className="containerCarrousel">
      {projects.length === 0 ? (
        <Loader />
      ) : (
        <>
          <div className="scrollArea left" onMouseEnter={() => handleScrollControl("left")} onMouseLeave={stopScrolling}></div>
          <div className="scrollArea right" onMouseEnter={() => handleScrollControl("right")} onMouseLeave={stopScrolling}></div>
          <div 
            className="carouselTrack" 
            ref={wrapperRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {projects.map((project) => (
              <ProjectSlide key={project.id} project={project} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Carrousel;
