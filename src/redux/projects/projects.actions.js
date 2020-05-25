import { ProjectActionTypes } from './projects.types';
import { apiCall } from '../../services/apicall';

export const setProjects = (projects) => ({
	type: ProjectActionTypes.GET_ALL_PROJECTS,
	payload: projects,
});

export const projectCreated = (newProject) => ({
	type: ProjectActionTypes.PROJECT_CREATED,
	payload: newProject,
});

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
