import { ProjectActionTypes } from './projects.types';
import { apiCall, setState } from '../../services/apicall';

export const projectLoading = () => ({
	type: ProjectActionTypes.PROJECT_LOADING,
});

export const projectLoaded = () => ({
	type: ProjectActionTypes.PROJECT_LOADED,
});

export const setProjects = (projects) => ({
	type: ProjectActionTypes.GET_ALL_PROJECTS,
	payload: projects,
});

export const projectCreated = (newProject) => ({
	type: ProjectActionTypes.PROJECT_CREATED,
	payload: newProject,
});

export const setOneProject = (project) => ({
	type: ProjectActionTypes.SET_ONE_PROJECT,
	payload: project,
});

export const getOneProject = (id) => {
	return (dispatch) => {
		dispatch(projectLoading());

		return apiCall('get', `/api/projects/${id}`)
			.then((foundProject) => {
				dispatch(setOneProject(foundProject));
			})
			.then(() => {
				dispatch(projectLoaded());
			})
			.catch((err) => {
				console.log(err);
			});
	};
};

export const createProject = (data) => {
	return (dispatch) => {
		dispatch(projectLoading());
		return apiCall('post', '/api/projects', data)
			.then(() => {
				setState(dispatch);
				dispatch(projectLoaded());
			})
			.catch((err) => {
				console.log(err);
			});
	};
};

export const getAllProjects = () => {
	return async (dispatch) => {
		try {
			const projects = await apiCall('get', '/projects');
			dispatch(setProjects(projects));
			return projects;
		} catch (error) {
			console.log(error);
		}
	};
};
