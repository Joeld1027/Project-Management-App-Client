import { ProjectActionTypes } from './projects.types';

const INITIAL_STATE = {
	projects: [],
	oneProject: {},
	isLoading: false,
};

const ProjectsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ProjectActionTypes.GET_ALL_PROJECTS:
			return {
				...state,
				projects: action.payload.projects,
			};
		case ProjectActionTypes.PROJECT_LOADING:
			return {
				...state,
				isLoading: true,
			};
		case ProjectActionTypes.PROJECT_LOADED:
			return {
				...state,
				isLoading: false,
			};
		case ProjectActionTypes.PROJECT_CREATED:
			return {
				...state,
			};
		case ProjectActionTypes.SET_ONE_PROJECT:
			return {
				...state,
				oneProject: action.payload,
			};
		default:
			return state;
	}
};

export default ProjectsReducer;
