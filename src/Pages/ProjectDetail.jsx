import React, { useEffect } from 'react'
import DetailsTable from '../Components/DetailsTable'
import Carrousel from '../Components/Carrousel'
import { useParams } from 'react-router-dom'
import { useCharStates } from '../Context/Context'
import Button from '../Components/Button'
import Gallery from '../Components/Gallery'

const ProjectDetail = () => {

    const { id } = useParams()
    console.log(id)

    const { getProjectById, project, listProjects } = useCharStates()
    
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
        <div className='flex flex-col justify-around'>
            <h2 className='text-3xl'>{project.name}</h2>
            <Gallery/>
            {/*<img src={project.images[0]} alt={project.name} />*/}
            

            <div className='flex justify-evenly items-center '>
                <a href={project.repository} target="_blank"><Button>Repository</Button></a>
                <a href={project.site} target="_blank"><Button>Site</Button></a>
            </div>

            <DetailsTable project={project} />
            <Carrousel projects={otherProjects} onProjectClick={handleProjectClick} />
        </div>
    )
}

export default ProjectDetail