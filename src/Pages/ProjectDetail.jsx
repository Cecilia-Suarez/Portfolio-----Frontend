import React, { useEffect } from 'react'
import DetailsTable from '../Components/DetailsTable'
import Carrousel from '../Components/Carrousel'
import { useParams } from 'react-router-dom'
import { useCharStates } from '../Context/Context'

const ProjectDetail = () => {

    const {id} = useParams()
    console.log(id)

    const {getProjectById, project} = useCharStates()
    console.log(project)

    useEffect(() => {
        getProjectById(id);
    }, [id, getProjectById]);

    if (!project) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{project.name}</h1>
            <button>GitHub</button>
            <button>Site</button>
            <DetailsTable project={project}/>
            <Carrousel/>
        </div>
    )
}

export default ProjectDetail