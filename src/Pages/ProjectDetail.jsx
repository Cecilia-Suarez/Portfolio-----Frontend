import React, { useEffect } from 'react'
import DetailsTable from '../Components/DetailsTable'
import Carrousel from '../Components/Carrousel'
import { useParams } from 'react-router-dom'
import { useCharStates } from '../Context/Context'
import Button from '../Components/Button'
import Gallery from '../Components/Gallery'
import styleProjectDetail from '../Styles/Sections/ProjectDetail.module.css'
import link from '../assets/link.svg'
import gitHub from '../assets/github.svg'
import Loader from '../Components/Loader'

const ProjectDetail = () => {
    const { id } = useParams();
    const { getProjectById, project, listProjects, t, language } = useCharStates();

    useEffect(() => {
        getProjectById(id);
    }, [id, language]);

    if (!project) {
        return <Loader />;
    }

    const otherProjects = listProjects.filter(p => p.id !== project.id);

    return (
        <div className={styleProjectDetail.containerDetail}>
            <h2 className='bgTop'>{project.name}</h2>
            <div className="waves positionBottom"></div>
            <Gallery />
            <div className={styleProjectDetail.containerButtons}>
                <a href={project.repository} target="_blank" rel="noopener noreferrer"><Button src={gitHub} alt="github">{t('repositoryButton')}</Button></a>
                <a href={project.site} target="_blank" rel="noopener noreferrer"><Button src={link} alt='link'>{t('siteButton')}</Button></a>
            </div>
            <div className="waves positionTop slideUp"></div>
            <div className={`bgBottom slideUp ${styleProjectDetail.containerData}`}>
                <DetailsTable project={project} />
                <Carrousel projects={otherProjects} />
            </div>
        </div>
    );
}

export default ProjectDetail;
