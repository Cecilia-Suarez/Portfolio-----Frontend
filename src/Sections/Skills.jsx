import React from 'react';
import { useCharStates } from '../Context/Context';
import stylesSkill from '../Styles/Sections/Skill.module.css';
import Loader from '../Components/Loader';

const Skill = () => {
    const { listSkills, t, language } = useCharStates();

    return (
        <section id="skills" className={stylesSkill.containerSkill} aria-labelledby="skills-title">
            <h2 id="skills-title">{t('skills')}</h2>
            <div className={stylesSkill.skillsColumn}>
                {listSkills.length === 0 ? (
                    <Loader />
                ) : (
                    listSkills.map(skill => {
                        const translation = skill.translations.find(t => t.languageCode === language);
                        return (
                            <div key={skill.id} className={stylesSkill.skill} aria-label={`Skill: ${translation?.name || skill.name}`}>
                                <img className={stylesSkill.image} src={skill.image || '/placeholder.png'} alt={translation?.name || 'Skill image'} />
                                <h5>{translation?.name || 'Unnamed Skill'}</h5>
                            </div>
                        );
                    })
                )}
            </div>
        </section>
    );
};

export default Skill;

