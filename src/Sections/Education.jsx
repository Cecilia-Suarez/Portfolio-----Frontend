import React from 'react'
import Summary from '../Components/Summary'
import { useCharStates } from '../Context/Context'
import lineTime from '../assets/rama.svg'

const Education = () => {
  const { listEducations } = useCharStates()

  const sortedEducations = listEducations
    .slice() 
    .sort((a, b) => a.year - b.year)

  return (
    <div id='education' className="flex flex-col items-center bg-[#fcf4f0] pt-12">
      <h2 className='text-3xl animate-fadeIn mb-6'>Education</h2>
      <div className="flex lg:flex-row lg:animate-growthLeft sm:flex-col-reverse sm:animate-growthTop justify-between max-w-full">
        {sortedEducations
          .filter(summary => summary.type === 'EDUCATION')
          .map((summary) => (
            <div key={summary.id}
            className="flex flex-col items-center">
              <img src={lineTime} alt="lineTime" className='lg:w-full lg:h-auto lg:rotate-0 lg:m-0 md:w-40 md:h-auto md:-rotate-90 md:mb-14 md:mt-14'/>
              <Summary summary={summary} />
            </div>
          ))}
      </div>
    </div>
  )
}

export default Education
