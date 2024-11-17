import React from 'react'
import Summary from '../Components/Summary'
import { useCharStates } from '../Context/Context'
import lineTime from '../assets/lineTime.svg'

const Education = () => {
  const { listEducations } = useCharStates()

  const sortedEducations = listEducations
    .slice() 
    .sort((a, b) => a.year - b.year)

  return (
    <div id='education'>
      <h1>Education</h1>
      <div className="flex justify-between w-full">
        {sortedEducations
          .filter(summary => summary.type === 'EDUCATION')
          .map((summary) => (
            <div key={summary.id}
              className="w-full flex flex-col items-center">
              <img src={lineTime} alt="lineTime" />
              <Summary summary={summary} />
            </div>
          ))}
      </div>
    </div>
  )
}

export default Education
