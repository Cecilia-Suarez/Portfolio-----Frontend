import React from 'react'
import Summary from '../Components/Summary'
import { useCharStates } from '../Context/Context'
import styleLineTime from '../Styles/Sections/LineTime.module.css'
import branch from "../assets/branch.webp"
import Loader from '../Components/Loader'

const Education = () => {
  const { listEducations, t } = useCharStates()

  const sortedEducations = listEducations
    .filter((summary) => summary.type === 'EDUCATION')
    .sort((a, b) => a.year - b.year);

  return (
    <div id='education' className={styleLineTime.containerLineTime}>
      <h2>{t('education')}</h2>
      <div className={styleLineTime.containerSummaries}>
        {listEducations.length === 0 ? (
          <Loader />
        ) : (
          sortedEducations.map((summary) => (
            <div key={summary.id} className={styleLineTime.summary}>
              <img src={branch} alt='lineTime' className={styleLineTime.branch} />
              <Summary summary={summary} />
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Education
