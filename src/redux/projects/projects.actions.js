import { ProjectActionTypes } from './projects.types';
import { apiCall } from '../../services/apicall';

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
		return new Promise((resolve, reject) => {
			return apiCall(
				'get',
				`http://localhost:5000/api/projects/${id}`
			)
				.then((foundProject) => {
					dispatch(setOneProject(foundProject));
				})
				.then(() => {
					dispatch(projectLoaded());
					resolve();
				})
				.catch((err) => {
					console.log(err);
					reject();
				});
		});
	};
};

export const createProject = (data) => {
	return (dispatch) => {
		return new Promise((resolve, reject) => {
			return apiCall(
				'post',
				'http://localhost:5000/api/projects',
				data
			)
				.then((newProject) => {
					dispatch(projectCreated(newProject));
					console.log(newProject);
					resolve();
				})
				.catch((err) => {
					console.log(err);
					reject();
				});
		});
	};
};

export const getAllProjects = () => {
	return (dispatch) => {
		return new Promise((resolve, reject) => {
			return apiCall('get', `http://localhost:5000/api/projects`)
				.then((projects) => {
					dispatch(setProjects(projects));

					resolve();
				})
				.catch((err) => {
					console.log(err);
					reject();
				});
		});
	};
};
