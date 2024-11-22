import React from 'react';
import { useCharStates } from '../Context/Context';
import Summary from '../Components/Summary';
import lineTime from '../assets/rama.svg';

const Experience = () => {
  const { listExperiences } = useCharStates();

  const sortedExperiences = listExperiences
    .slice()
    .sort((a, b) => a.year - b.year);

  return (
    <div id="experience">
      <h2 className="text-3xl animate-fadeIn">Experience</h2>
      <div className="flex lg:flex-row lg:animate-growthLeft sm:flex-col-reverse sm:animate-growthTop justify-between w-full">
        {sortedExperiences
          .filter((summary) => summary.type === 'EXPERIENCE')
          .map((summary) => (
            <div key={summary.id} className="w-full flex flex-col items-center  ">
              <img src={lineTime} alt='lineTime' className='lg:w-full lg:h-auto lg:rotate-0 lg:m-0 md:w-40 md:h-auto md:-rotate-90 md:mb-14 md:mt-14'/>
              <Summary summary={summary} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Experience;
