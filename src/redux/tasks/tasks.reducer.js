import { TasksActionTypes } from './tasks.types';
import {
	setCommentToTask,
	updateTaskComment,
	deleteTaskComment,
} from './tasks.utils';

const INITIAL_STATE = {
	tasks: [],
	isLoading: false,
};

const TasksReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case TasksActionTypes.IS_LOADING:
			return {
				...state,
				isLoading: true,
			};
		case TasksActionTypes.CREATE_TASK_COMMENT:
			return {
				...state,
				tasks: setCommentToTask(action.payload, state.tasks),
			};
		case TasksActionTypes.UPDATE_TASK_COMMENT:
			return {
				...state,
				tasks: updateTaskComment(action.payload, state.tasks),
			};
		case TasksActionTypes.DELETE_TASK_COMMENT:
			return {
				...state,
				tasks: deleteTaskComment(action.payload, state.tasks),
			};
		case TasksActionTypes.SET_ALL_TASKS:
			return {
				...state,
				tasks: action.payload,
			};
		case TasksActionTypes.IS_DONE_LOADING:
			return {
				...state,
				isLoading: false,
			};
		case TasksActionTypes.TASK_CREATED:
			return state;
		default:
			return state;
	}
};

export default TasksReducer;
