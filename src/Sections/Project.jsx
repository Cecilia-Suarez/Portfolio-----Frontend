import React from 'react'
import { useCharStates } from '../Context/Context'
import ProjectSlide from '../Components/ProjectSlide'


const Project = () => {
    const { listProjects } = useCharStates()

    return (
        <div id='proyects'>
            <h1>Projects</h1>
            {listProjects.map(project => <ProjectSlide key={project.id} project={project}/>)}
        </div>
    )
}

export default Project

