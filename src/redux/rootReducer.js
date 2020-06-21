import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import TasksReducer from './tasks/tasks.reducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import ProjectsReducer from './projects/projects.reducer';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: [],
	
};

const rootReducer = combineReducers({
	user: userReducer,
	tasks: TasksReducer,
	projects: ProjectsReducer,
});

export default persistReducer(persistConfig, rootReducer);
