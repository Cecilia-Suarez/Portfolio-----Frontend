import React from 'react';
import { useCharStates } from '../Context/Context'

const Summary = ({ summary }) => {

  const {year, translations} = summary
  const {language} = useCharStates();

  const translation = translations.find((t) => t.languageCode === language);

  return (
    <div >
      <p>{year}</p>
      <h5>{translation.name}</h5>
      <p>{translation.location}</p>
    </div>
  );
};

export default Summary;
