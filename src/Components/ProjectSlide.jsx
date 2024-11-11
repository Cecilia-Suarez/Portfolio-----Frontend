import React from 'react'
import { useCharStates } from '../Context/Context'
import { Link } from 'react-router-dom'

const ProjectSlide = ({ project: propProject }) => {
  const { project: contextProject } = useCharStates();
  const project = propProject || contextProject;

  return (
    <div>
      <Link to={'/detail/' + project.id}>
        <h2>{project.name}</h2>
      </Link>
    </div>
  );
};

export default ProjectSlide