import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import TicketsReducer from './tickets/tickets.reducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['user', 'tickets'],
};

const rootReducer = combineReducers({
	user: userReducer,
	tickets: TicketsReducer,
});

export default persistReducer(persistConfig, rootReducer);
