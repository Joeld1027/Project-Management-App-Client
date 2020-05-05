import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import configureStore from './redux/store';
import { Provider } from 'react-redux';

import App from './App';
import {
	setAuthorizationToken,
	setCurrentUser,
} from './redux/user/user.actions';

import './index.css';

const store = configureStore();
if (localStorage.jwToken) {
	setAuthorizationToken(localStorage.jwToken);
	// prevent someone from manually tempering with the token
	try {
		store.dispatch(setCurrentUser(jwtDecode(localStorage.jwToken)));
	} catch (err) {
		store.dispatch(setCurrentUser({}));
	}
}

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
