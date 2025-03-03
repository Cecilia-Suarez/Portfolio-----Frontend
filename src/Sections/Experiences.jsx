import React from 'react';
import { useCharStates } from '../Context/Context';
import Summary from '../Components/Summary';
import styleLineTime from '../Styles/Sections/LineTime.module.css';
import branch from "../assets/branch.webp"
import Loader from '../Components/Loader';

const Experience = () => {
 const { listExperiences, t } = useCharStates();

  const sortedExperiences = listExperiences
    .filter((summary) => summary.type === 'EXPERIENCE')
    .sort((a, b) => a.year - b.year);

  return (
    <div id="experience" className={styleLineTime.containerLineTime}>
      <h2>{t('experience')}</h2>
      <div className={styleLineTime.containerSummaries}>
         {listExperiences.length === 0 ? (
          <Loader/>
        ) : (
          sortedExperiences.map((summary) => (
            <div key={summary.id} className={styleLineTime.summary}>
              <img src={branch} alt='lineTime' className={styleLineTime.branch}/>
              <Summary summary={summary} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Experience;

