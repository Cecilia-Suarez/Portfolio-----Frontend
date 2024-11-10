import React from 'react'
import { useCharStates } from './Context/Context'

const Project = () => {
    const { listProjects } = useCharStates()

    return (
        <div id='proyects'>
            <h1>Projects</h1>
            {listProjects.map(project => <h2 key={project.id}>{project.name}</h2>)}
        </div>
    )
}

export default Project

