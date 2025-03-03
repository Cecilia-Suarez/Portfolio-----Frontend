import React, { useState } from "react";
import { useCharStates } from "../Context/Context";
import "../Styles/Components/Gallery.css";

const Gallery = () => {
  const { project } = useCharStates();
  const media = project.images || [];
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  const isVideo = (url) => {
    return url.match(/\.(mp4|webm|ogg)$/i) || url.includes("/video/upload/");
  };

  const MediaSelector = ({ type }) => (
    <div className={type}>
      {media.map((src, index) => (
        type === "thumbnails" ? (
          isVideo(src) ? (
            <video key={index} className={`thumbnail ${index === currentMediaIndex ? "active" : ""}`} onClick={() => setCurrentMediaIndex(index)} muted>
              <source src={src} type="video/mp4" />
            </video>
          ) : (
            <img key={index} src={src} alt={`Thumbnail ${index + 1}`} className={`thumbnail ${index === currentMediaIndex ? "active" : ""}`} onClick={() => setCurrentMediaIndex(index)} />
          )
        ) : (
          <button key={index} className={`dot ${index === currentMediaIndex ? "active" : ""}`} onClick={() => setCurrentMediaIndex(index)} aria-label={`Media ${index + 1}`} />
        )
      ))}
    </div>
  );

  return (
    <section className="containerGallery">
      <div className="mainMediaContainer">
        {media.length > 0 ? (
          isVideo(media[currentMediaIndex]) ? (
            <video src={media[currentMediaIndex]} className="mainMedia" controls autoPlay={false} muted={false} />
          ) : (
            <img src={media[currentMediaIndex]} alt={`Gallery media ${currentMediaIndex + 1}`} className="mainMedia" />
          )
        ) : (
          <p>No media available</p>
        )}
      </div>

      {media.length > 1 && (
        <div className="secondaryMediaContainer">
          <MediaSelector type="thumbnails" />
          <MediaSelector type="dots" />
        </div>
      )}
    </section>
  );
};

export default Gallery;
