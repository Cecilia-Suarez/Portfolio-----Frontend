import React from 'react'
import Summary from './Components/Summary'
import { useCharStates } from './Context/Context'

const Education = () => {

  const {listEducations} = useCharStates()

  return (
    <div id='education'>
        <h1>Education</h1>
        {listEducations.filter(summary => summary.type === 'EDUCATION').map(summary => <Summary summary={summary} key={summary.id}/>)}
    </div>
  )
}

export default Education