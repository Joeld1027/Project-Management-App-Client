import { ProjectActionTypes } from './projects.types';

const INITIAL_STATE = {
	projects: [],
};

const ProjectsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ProjectActionTypes.GET_ALL_PROJECTS:
			return {
				...state,
				projects: action.payload.projects,
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
