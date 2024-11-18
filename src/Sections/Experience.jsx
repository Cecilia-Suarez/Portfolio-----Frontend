import React from 'react'
import { useCharStates } from '../Context/Context'
import Summary from '../Components/Summary'
import lineTime from '../assets/lineTime.svg'

const Experience = () => {
  const { listExperiences } = useCharStates()

  const sortedExperiences = listExperiences
    .slice() 
    .sort((a, b) => a.year - b.year)

  return (
    <div id='experience'>
      <h2 className='text-3xl'>Experience</h2>
      <div className="flex justify-between w-full">
        {sortedExperiences
          .filter(summary => summary.type === 'EXPERIENCE') 
          .map((summary) => (
            <div key={summary.id} className="w-full flex flex-col items-center">
              <img src={lineTime} alt="lineTime"/>
              <Summary summary={summary}/>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Experience
