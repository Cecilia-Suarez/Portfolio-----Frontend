import React from 'react'
import { useCharStates } from '../Context/Context'
import { Link } from 'react-router-dom'


const Project = () => {
    const { listProjects } = useCharStates()

    return (
        <div id='proyects'>
            <h1>Projects</h1>
            {listProjects.map(project =>
                <div key={project.id}>
                    <Link to={'/detail/' + project.id}>
                        <h2 >{project.name}</h2>
                    </Link>
                </div>)}

        </div>
    )
}

export default Project

