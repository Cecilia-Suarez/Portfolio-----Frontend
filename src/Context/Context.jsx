import { createContext, useContext, useReducer, useEffect } from 'react'
import { reducer } from '../reducers/reducer';
import axios from 'axios';

const CharStates = createContext();

const initialState = {
    listExperiences: [],
    listEducations: [],
    listSkills: [],
    listProjects: [],
    //theme
    //language
}

const Context = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const {listExperiences, listEducations, listSkills, listProjects} = state

    const url = 'http://localhost:8080/summaries/all'

    useEffect(() => {
        axios(url)
        .then(response => dispatch({type: 'GET_EXPERIENCES', payload: response.data }))
    }, [])

    useEffect(() => {
        axios(url)
        .then(response => dispatch({type: 'GET_EDUCATIONS', payload: response.data }))
    }, [])

    const urlAllSkills = 'http://localhost:8080/skills/all'

    useEffect(() => {
        axios(urlAllSkills)
        .then(response => dispatch({type: 'GET_SKILLS', payload: response.data }))
    }, [])

    const urlAllProjects = 'http://localhost:8080/projects/all'

    useEffect(() => {
        axios(urlAllProjects)
        .then(response => dispatch({type: 'GET_PROJECTS', payload: response.data }))
    }, [])
    

    return (
        <CharStates.Provider value={{listExperiences, listEducations, listSkills, listProjects, dispatch}}>
            {children}
        </CharStates.Provider>
    )
}

export default Context

export const useCharStates = () => useContext(CharStates)

