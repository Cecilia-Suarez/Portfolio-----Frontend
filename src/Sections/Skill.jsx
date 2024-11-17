import React from 'react'
import { useCharStates } from '../Context/Context'

const Skill = () => {
    const { listSkills } = useCharStates()

    return (
        <div id='skills' className='flex items-center flex-col'>
            <h1>Skills</h1>
            <div className='grid grid-cols-4 gap-6'>
              {listSkills.map(skill =>
                <div key={skill.id} className='flex flex-col gap-3 items-center'>
                    <img src={skill.image} alt="Description" className='max-w-36' />
                    <h1 >{skill.name}</h1>                   
                </div>)}  
            </div>
            
        </div>

    )
}

export default Skill