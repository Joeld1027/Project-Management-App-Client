import { ProjectActionTypes } from './projects.types';

const INITIAL_STATE = {
	allProjects: [],
};

const ProjectsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ProjectActionTypes.GET_ALL_PROJECTS:
			return {
				...state,
				allProjects: action.payload,
			};
		case ProjectActionTypes.PROJECT_CREATED:
			return {
				...state,
			};
		default:
			return state;
	}
};

export default ProjectsReducer;
