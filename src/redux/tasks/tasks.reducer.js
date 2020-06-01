import { TasksActionTypes } from './tasks.types';

const INITIAL_STATE = {
	tasks: [],
	isLoading: false,
};

const TasksReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case TasksActionTypes.FETCHING_TASKS:
			return {
				isLoading: true,
			};
		case TasksActionTypes.SET_ALL_TASKS:
			return {
				...state,
				tasks: action.payload,
			};
		case TasksActionTypes.FETCHING_SUCCESS:
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
