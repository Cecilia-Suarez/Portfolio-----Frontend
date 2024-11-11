import React from 'react'
import { useCharStates } from '../Context/Context'

const Skill = () => {
    const { listSkills } = useCharStates()

    return (
        <div id='skills'>
            <h1>Skills</h1>
            {listSkills.map(skill =>
                <div key={skill.id}>
                    <img src={skill.image} alt="Description" />
                    <h1 >{skill.name}</h1>                   
                </div>)}
        </div>

    )
}

export default Skill