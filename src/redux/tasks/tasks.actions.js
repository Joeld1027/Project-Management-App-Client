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

export const createdComment = (comment, taskId) => ({
	type: TasksActionTypes.CREATE_TASK_COMMENT,
	payload: {
		comment,
		taskId,
	},
});

export const updatedTaskComment = (comment, taskId) => ({
	type: TasksActionTypes.UPDATE_TASK_COMMENT,
	payload: {
		comment,
		taskId,
	},
});

export const deleteTaskComment = (commentId, taskId) => ({
	type: TasksActionTypes.DELETE_TASK_COMMENT,
	payload: {
		commentId,
		taskId,
	},
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

export const createTaskComment = (comment, taskId) => {
	return async (dispatch) => {
		try {
			await dispatch(isLoading());
			let createdTaskComment = await apiCall(
				'post',
				'/api/comments',
				comment
			);
			await dispatch(createdComment(createdTaskComment, taskId));
			await dispatch(isDoneLoading());
		} catch (err) {
			console.log(err);
		}
	};
};

export const updateComment = (commentId, commentData, taskId) => {
	return async (dispatch) => {
		try {
			await dispatch(isLoading());
			let updatedComment = await apiCall(
				'patch',
				`/api/comments/${commentId}`,
				commentData
			);
			await dispatch(updatedTaskComment(updatedComment, taskId));
			await dispatch(isDoneLoading());
		} catch (err) {
			console.log(err);
		}
	};
};
export const deleteComment = (commentId, updateTaskId) => {
	let updateTaskIdObj = { updateTaskId: updateTaskId };
	return async (dispatch) => {
		try {
			await dispatch(isLoading());
			await apiCall(
				'patch',
				`/comments/${commentId}`,
				updateTaskIdObj
			);
			await apiCall('delete', `/comments/${commentId}`);
			await dispatch(deleteTaskComment(commentId, updateTaskId));
			await dispatch(isDoneLoading());
		} catch (err) {
			console.log(err);
		}
	};
};
