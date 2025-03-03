import React from "react";
import { useCharStates } from "../Context/Context";
import { Link } from "react-router-dom";
import "../Styles/Components/ProjectSlide.css";

const ProjectSlide = ({ project: propProject }) => {
  const { project: contextProject, language } = useCharStates();
  const project = propProject || contextProject;

  if (!project) return null;

  const translation = project.translations.find((t) => t.languageCode === language);

  const isVideo = (url) => {
    return url.match(/\.(mp4|webm|ogg)$/i) || url.includes("/video/upload/");
  };

  return (
    <div className="projectSlide">
      <Link to={`/detail/${project.id}`} className="projectLink">
        {isVideo(project.images[0]) ? (
          <video src={project.images[0]} className="projectImage" autoPlay muted loop />
        ) : (
          <img src={project.images[0]} alt={translation.name} className="projectImage" />
        )}
        <h5 className="projectTitle">{translation.name}</h5>
      </Link>
    </div>
  );
};

export default ProjectSlide;

