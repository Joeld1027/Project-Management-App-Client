import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import persistReducer from './rootReducer';

const middleware = [thunk];

if (process.env.NODE_ENV === 'development') {
	middleware.push(logger);
}

export const store = createStore(
	persistReducer,
	compose(
		applyMiddleware(...middleware),
		window.__REDUX_DEVTOOLS_EXTENSION__ &&
			window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

export const persistor = persistStore(store);

export default { store, persistor };
