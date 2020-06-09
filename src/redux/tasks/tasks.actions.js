import { TasksActionTypes } from './tasks.types';
import { apiCall, setState } from '../../services/apicall';

export const isLoading = () => ({
	type: TasksActionTypes.IS_LOADING,
});

export const isDoneLoading = () => ({
	type: TasksActionTypes.IS_DONE_LOADING,
});

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
	return async (dispatch) => {
		const dispatchLoading = await dispatch(isLoading());
		const createdTask = await apiCall(
			'post',
			'http://localhost:5000/api/tasks',
			data
		).then(() => setState(dispatch));
		const dispatchLoadingDone = await dispatch(isDoneLoading());
		try {
			return Promise.all([
				dispatchLoading,
				createdTask,
				dispatchLoadingDone,
			]).then(() => dispatch(taskCreated()));
		} catch (error) {
			console.log(error);
		}
	};
};

export const updateTask = (id, data) => {
	return async (dispatch) => {
		dispatch(isLoading());
		return await apiCall(
			'patch',
			`http://localhost:5000/api/tasks/${id}`,
			data
		)
			.then(() => {
				setState(dispatch);
				dispatch(isDoneLoading());
			})
			.catch((err) => console.log(err));
	};
};
