import React from 'react'
import { useCharStates } from '../Context/Context'
import ProjectSlide from '../Components/ProjectSlide'


const Project = () => {
    const { listProjects } = useCharStates()

    return (
        <div id='proyects' className='flex flex-col items-center'>
            <h1>Projects</h1>
            <div className='flex gap-y-3.5 w-6/12 h-max'>
             {listProjects.map(project => <ProjectSlide key={project.id} project={project}/>)}   
            </div>
            
        </div>
    )
}

export default Project

