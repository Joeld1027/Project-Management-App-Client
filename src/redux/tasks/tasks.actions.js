import { TasksActionTypes } from './tasks.types';
import { apiCall } from '../../services/apicall';

export const setAllTasks = (tasks) => ({
	type: TasksActionTypes.SET_ALL_TASKS,
	payload: tasks,
});

export const taskCreated = () => ({
	type: TasksActionTypes.TASK_CREATED,
});

export const getAllTasks = () => {
	return async (dispatch) => {
		apiCall('get', 'http://localhost:5000/api/tasks')
			.then((tasks) => {
				dispatch(setAllTasks(tasks));
			})
			.catch((err) => {
				console.log(err);
			});
	};
};

export const createTask = (data) => {
	return (dispatch) => {
		return new Promise((resolve, reject) => {
			return apiCall('post', 'http://localhost:5000/api/tasks', data)
				.then(() => {
					dispatch(taskCreated());
				})
				.then(() => resolve())
				.catch((err) => {
					console.log(err);
					reject();
				});
		});
	};
};
