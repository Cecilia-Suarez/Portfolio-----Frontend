import { createContext, useContext, useReducer, useEffect } from 'react'
import { reducer } from '../reducers/reducer';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const CharStates = createContext();

const initialState = {
    listExperiences: [],
    listEducations: [],
    listSkills: [],
    listProjects: [],
    listCategories: [],
    project: null,
    theme: 'light',
    language: 'es'
}

const Context = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)
    const { t, i18n } = useTranslation();
    const { listExperiences, listEducations, listSkills, listProjects, listCategories, project, theme, language } = state
    const url = 'https://portfolio-backend-production-81b1.up.railway.app/'

    useEffect(() => {
        document.body.classList.remove('light', 'dark');
        document.body.classList.add(theme);
    }, [theme]);

    const handleChangeLanguage = () => {
        const lang = state.language === 'es' ? 'en' : 'es';
        i18n.changeLanguage(lang);
        dispatch({ type: 'CHANGE_LANGUAGE', payload: lang });
    };

    const urlSummaries = url + 'summaries/all'

    useEffect(() => {
        axios(urlSummaries)
            .then(response => dispatch({ type: 'GET_EXPERIENCES', payload: response.data }))
    }, [])

    useEffect(() => {
        axios(urlSummaries)
            .then(response => dispatch({ type: 'GET_EDUCATIONS', payload: response.data }))
    }, [])

    const urlAllSkills = url + 'skills/all'

    useEffect(() => {
        axios(urlAllSkills)
            .then(response => dispatch({ type: 'GET_SKILLS', payload: response.data }))
    }, [])

    const urlAllCategories = url + 'categories/all'
    useEffect(() => {
        axios(urlAllCategories)
            .then(response => dispatch({ type: 'GET_CATEGORIES', payload: response.data }))
    }, [])

    const urlAllProjects = url + 'projects/all'

    useEffect(() => {
        axios(urlAllProjects)
            .then(response => dispatch({ type: 'GET_PROJECTS', payload: response.data }))
    }, [])

    const getProjectById = (id) => {
        const urlProject = url + `projects/detail/${id}/translations`;

        axios.get(urlProject, {
            headers: {
                'Accept-Language': language
            }
        })
            .then(response => dispatch({ type: 'GET_PROJECT_BY_ID', payload: response.data }))
            .catch(error => console.error('Error fetching project:', error));
    };

    const handleChangeTheme = () => {
        dispatch({
            type: 'CHANGE_THEME', payload: theme === 'light' ? 'dark' : 'light'
        });
    };

    return (
        <CharStates.Provider value={{
            listExperiences, listEducations, listSkills, listProjects, listCategories, project, getProjectById, dispatch, theme, handleChangeTheme, language,
            handleChangeLanguage, t
        }}>
            {children}
        </CharStates.Provider>
    )
}

export default Context

export const useCharStates = () => useContext(CharStates)

