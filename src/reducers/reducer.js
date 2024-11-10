export const reducer = (state, action) => {
    switch (action.type) {
        case 'GET_EXPERIENCES':
            return {...state, listExperiences: action.payload}

        case 'GET_EDUCATIONS':
            return {...state, listEducations: action.payload}

        case 'GET_SKILLS':
            return {...state, listSkills: action.payload}

        case 'GET_PROJECTS':
            return {...state, listProjects: action.payload}

        case 'GET_PROJECT':
            return {}

        /*case 'CHANGE_THEME':
            return {}

        case 'CHANGE_LANGUAGE':
            return {}*/
    }
}