import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import TicketsReducer from './tickets/tickets.reducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import ProjectsReducer from './projects/projects.reducer';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['user', 'projects'],
};

const rootReducer = combineReducers({
	user: userReducer,
	tickets: TicketsReducer,
	projects: ProjectsReducer,
});

export default persistReducer(persistConfig, rootReducer);
