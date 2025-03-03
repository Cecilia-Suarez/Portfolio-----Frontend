import React from 'react';
import '../Styles/Components/DetailsTable.css'
import { useCharStates } from '../Context/Context';

const DetailsTable = ({ project }) => {
  const { description, year, skills, translations = [] } = project || {};
  const { t, language } = useCharStates();
  const translation = translations?.find(tr => tr.languageCode === language);

  const tableRows = [
    { label: t('labelDescription'), value: translation?.description || description },
    { label: t('labelYear'), value: year },
    {
      label: t('labelSkills'),
      value: skills?.map(skill => {
        const skillTranslation = skill.translations?.find(tr => tr.languageCode === language);
        return skillTranslation ? skillTranslation.name : skill.translations?.[0]?.name || skill.name;
      }).join(' - ') || t('noSkills')
    },
  ];

  return (
    <div className="containerDetailTable">
      <table className="table">
        <tbody>
          {tableRows.map((row, index) => (
            <tr key={index}>
              <th className="tableStyle thStyle">
                {row.label}</th>
              <td className="tableStyle tdStyle">
                {row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DetailsTable;
