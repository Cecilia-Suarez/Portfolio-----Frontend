import React from 'react'
import { useCharStates } from './Context/Context'

const Skill = () => {
    const { listSkills } = useCharStates()

    return (
        <>
            <h1>Skills</h1>
            {listSkills.map(skill =>
                <div key={skill.id}>
                    <h1 >{skill.name}</h1>
                    <img src={skill.image} alt="Description" />
                    <div />
                </div>)}
        </>

    )
}

export default Skill