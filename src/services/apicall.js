import axios from 'axios';
import { getAllProjects } from '../redux/projects/projects.actions';
import { getAllTasks } from '../redux/tasks/tasks.actions';
import { getAllUsers } from '../redux/user/user.actions';

export function setTokenHeader(token) {
	if (token) {
		axios.defaults.headers.common[
			'Authorization'
		] = `Bearer ${token}`;
	} else {
		delete axios.defaults.headers.common['Authorization'];
	}
}

export function apiCall(method, path, data) {
	return new Promise((resolve, reject) => {
		return axios[method](path, data)
			.then((res) => {
				return resolve(res.data);
			})
			.catch((err) => {
				return reject(err.response.data.error);
			});
	});
}

export function setState(dispatch) {
	const fetchAll = async () => {
		return Promise.all([
			dispatch(getAllProjects()),
			dispatch(getAllUsers()),
			dispatch(getAllTasks()),
		]).then(() => {
			console.log('state set');
		});
	};
	fetchAll();
}
