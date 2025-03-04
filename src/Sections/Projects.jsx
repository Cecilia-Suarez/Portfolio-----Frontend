import React, { useState, useEffect } from 'react';
import { useCharStates } from '../Context/Context';
import Carrousel from '../Components/Carrousel';
import Button from '../Components/Button';
import styles from '../Styles/Sections/Projects.module.css';
import search from '../assets/search.svg';
import clear from '../assets/clear.svg';
import arrow from "../assets/arrow.svg";
import arrowDark from "../assets/arrowDark.svg"

const Projects = () => {
  const { listProjects, listSkills, listCategories, t, language, theme } = useCharStates();

  const [filters, setFilters] = useState({ skills: [], category: '' });
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);
  const [displayedProjects, setDisplayedProjects] = useState(listProjects);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(`.${styles.dropdown}`)) {
        setIsSkillsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleSkillChange = (skill) => {
    setFilters((prev) => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter((s) => s !== skill)
        : [...prev.skills, skill],
    }));
  };

  const handleCategoryChange = (e) => {
    setFilters((prev) => ({ ...prev, category: e.target.value }));
  };

  const handleSearch = () => {
    const filtered = listProjects.filter((project) => {
      const projectSkillNames = project.skills.map((skill) =>
        skill.translations.find((t) => t.languageCode === language)?.name || skill.name
      );

      const skillsMatch =
        filters.skills.length === 0 || filters.skills.every((skill) => projectSkillNames.includes(skill));

      const projectCategoryName = project.category.translations.find(
        (t) => t.languageCode === language
      )?.name || project.category.name;

      const categoryMatch = !filters.category || projectCategoryName === filters.category;

      return skillsMatch && categoryMatch;
    });

    setDisplayedProjects(filtered);
    setHasSearched(true);
  };

  const handleClear = () => {
    setFilters({ skills: [], category: '' });
    setDisplayedProjects(listProjects);
    setHasSearched(false);
  };

  return (
    <div id="projects" className={styles.containerProjects}>
      <h2>{t('projects')}</h2>
      <p>{t('projectsExplication')}</p>

      <div className={styles.filtersContainer}>
        <div className={styles.dropdown} >
          <div className={`${styles.dropdownHeader} dropdownSkills`} onClick={() => setIsSkillsOpen(!isSkillsOpen)}>
            <p>{t('skills')} </p>
            <img
              src={theme === 'light' ? arrow : arrowDark}
              alt={theme === 'light' ? "arrow" : "arrowDark"}
              className={`${styles.dropdownArrow} ${isSkillsOpen ? styles.open : ''}`}
            />
          </div>

          {isSkillsOpen && (
            <div className={`${styles.dropdownMenu} dropdownSkills`}>
              {listSkills.map((skill) => {
                const skillTranslation = skill.translations.find((t) => t.languageCode === language)?.name || skill.name;
                return (
                  <label key={skill.id} className={styles.dropdownItem}>
                    <input type="checkbox" value={skillTranslation} checked={filters.skills.includes(skillTranslation)} onChange={() => handleSkillChange(skillTranslation)} className={styles.dropdownCheckbox}/>
                    {skillTranslation}
                  </label>
                );
              })}
            </div>
          )}
        </div>

        <select value={filters.category} onChange={handleCategoryChange} className={`${styles.categorySelect} ${theme === 'light' ? '' : styles.darkMode}`}>
          <option value="">{t('filterCategory')}</option>
          {listCategories.map((category) => {
            const categoryName = category.translations.find((t) => t.languageCode === language)?.name || category.name;
            return (
              <option key={category.id} value={categoryName}>
                {categoryName}
              </option>
            );
          })}
        </select>

        <div className={styles.buttonGroup}>
          <Button src={search} alt="search" onClick={handleSearch}>{t('searchButton')}</Button>
          <Button src={clear} alt="clear" onClick={handleClear}>{t('clearButton')}</Button>
        </div>
      </div>

      <div id="results">
        {!hasSearched ? (
          <Carrousel projects={listProjects} />
        ) : displayedProjects.length > 0 ? (
          <Carrousel projects={displayedProjects} />
        ) : (
          <p>{t('noResults')}</p>
        )}
      </div>
    </div>
  );
};

export default Projects;
