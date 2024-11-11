import React from 'react'
import { useCharStates } from '../Context/Context'
import Summary from '../Components/Summary'

const Experience = () => {
  
  const {listExperiences} = useCharStates()

  return (
    <div id='experience'>
        <h1>Experience</h1>
        {listExperiences.filter(summary => summary.type === 'EXPERIENCE').map(summary => <Summary summary={summary} key={summary.id}/>)}
    </div>
  )
}

export default Experience