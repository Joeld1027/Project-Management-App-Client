import { TasksActionTypes } from './tasks.types';
import { setCommentToTask } from './tasks.utils';

const INITIAL_STATE = {
	tasks: [],
	isLoading: false,
};

const TasksReducer = (state = INITIAL_STATE, action) => {
	console.log(action);
	console.log(state.tasks);
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
