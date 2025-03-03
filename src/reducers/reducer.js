export const reducer = (state, action) => {
    switch (action.type) {
        case 'GET_EXPERIENCES':
            return { ...state, listExperiences: action.payload }

        case 'GET_EDUCATIONS':
            return { ...state, listEducations: action.payload }

        case 'GET_SKILLS':
            return { ...state, listSkills: action.payload }

        case 'GET_PROJECTS':
            return { ...state, listProjects: action.payload }

        case 'GET_PROJECT_BY_ID':
            return { ...state, project: action.payload }

        case 'GET_CATEGORIES':
            return { ...state, listCategories: action.payload }

        case 'CHANGE_THEME':
            return { ...state, theme: action.payload };

        case 'CHANGE_LANGUAGE':
            return { ...state, language: action.payload };

        default:
            return state;
    }
}