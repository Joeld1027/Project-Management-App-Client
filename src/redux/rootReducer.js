import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import TasksReducer from './tasks/tasks.reducer';
import errorMessage from './errors/errors.reducer';
import ProjectsReducer from './projects/projects.reducer';

const rootReducer = combineReducers({
	user: userReducer,
	error: errorMessage,
	tasks: TasksReducer,
	projects: ProjectsReducer,
});

export default rootReducer;
