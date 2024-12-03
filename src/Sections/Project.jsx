import React from 'react'
import { useCharStates } from '../Context/Context'
import ProjectSlide from '../Components/ProjectSlide'


const Project = () => {
    const { listProjects } = useCharStates()

    return (
        <div>
            <div className='shapedividers_com-9668 h-44'>

            </div>
            <div id='proyects' className='flex flex-col items-center animate-slideInLeft bg-[#94e1fe]'>
                <h2 className='text-3xl animate-fadeIn mb-6'>Projects</h2>
                <div className='grid lg:grid-cols-5 sm:grid-cols-3 justify-center max-w-3xl mx-auto gap-6'>
                    {listProjects.map(project => <ProjectSlide key={project.id} project={project} />)}
                </div>

            </div>

        </div>
    )
}

export default Project

