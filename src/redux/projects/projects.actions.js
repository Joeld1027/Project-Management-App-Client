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
	return async (dispatch) => {
		try {
			const projects = await fetch(
				'http://localhost:5000/api/projects'
			).then((res) => res.json());
			dispatch(setProjects(projects));
			console.log(projects);
			return projects;
		} catch (error) {
			console.log(error);
		}
	};
};

// return new Promise((resolve, reject) => {
// 			return apiCall('get', `http://localhost:5000/api/projects`)
// 				.then((foundProjects) => {
// 					dispatch(setProjects(foundProjects));
// 					resolve();
// 					console.log(foundProjects);
// 				})
// 				.catch((err) => {
// 					console.log(err);
// 					reject();
// 				});
// 		});
