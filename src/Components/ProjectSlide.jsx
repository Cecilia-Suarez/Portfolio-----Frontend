import React from 'react'
import { useCharStates } from '../Context/Context'
import { Link } from 'react-router-dom'

const ProjectSlide = ({ project: propProject }) => {
  const { project: contextProject } = useCharStates();
  const project = propProject || contextProject;

  return (
    <div className='flex flex-col gap-6 items-center w-2/12 animate-spinnerGrow'>
      <Link to={'/detail/' + project.id} className="flex flex-col items-center gap-2">
        {/*<img src={project.images[0]} alt={project.name} className='w-48 h-auto object-cover hover:scale-110 rounded-lg'' />*/}
        <h5 className='text-lg'>{project.name}</h5>
      </Link>
    </div>
  );
};

export default ProjectSlide;
