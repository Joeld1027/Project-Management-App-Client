import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { store, persistor } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';
import {
	setAuthorizationToken,
	setCurrentUser,
	unSetCurrentUser,
} from './redux/user/user.actions';

import './index.css';

if (localStorage.jwToken) {
	setAuthorizationToken(localStorage.jwToken);
	let userInfo={ userInfo: jwtDecode(localStorage.jwToken)}
	// prevent someone from manually tempering with the token
	try {
		store.dispatch(setCurrentUser(userInfo));
	} catch (err) {
		store.dispatch(unSetCurrentUser({}));
	}
}

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<PersistGate persistor={persistor}>
				<App />
			</PersistGate>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);

// <React.StrictMode>
// 		</React.StrictMode>
