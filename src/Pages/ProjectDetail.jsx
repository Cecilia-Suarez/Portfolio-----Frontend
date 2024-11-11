import React, { useEffect } from 'react'
import DetailsTable from '../Components/DetailsTable'
import Carrousel from '../Components/Carrousel'
import { useParams } from 'react-router-dom'
import { useCharStates } from '../Context/Context'

const ProjectDetail = () => {

    const {id} = useParams()
    console.log(id)

    const {getProjectById, project, listProjects} = useCharStates()
    console.log(project)

    useEffect(() => {
        getProjectById(id);
    }, [id, getProjectById]);

    if (!project) {
        return <div>Loading...</div>;
    }

    const otherProjects = listProjects.filter(p => p.id !== project.id);

    const handleProjectClick = (projectId) => {
        navigate(`/projects/${projectId}`);
    };

    return (
        <div>
            <h1>{project.name}</h1>
            <a href={project.repository} target="_blank" rel="noopener noreferrer"><button>Repository</button></a>
            <a href={project.site} target="_blank" rel="noopener noreferrer"><button>Site</button></a>
            <DetailsTable project={project}/>
            <Carrousel projects={otherProjects} onProjectClick={handleProjectClick}/>
        </div>
    )
}

export default ProjectDetail