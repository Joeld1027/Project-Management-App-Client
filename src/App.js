import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ErrorBoundary from './components/error-boundary/error-boundary.component';
import landingComponent from './pages/landing-page/landing.component';
import SignInPage from './pages/Signin&Singup/SignIn&SignUp-page.component';
import MainContent from './components/main-content/main-content.component';
import jwtDecode from 'jwt-decode';
import {
	setAuthorizationToken,
	setCurrentUser,
	unSetCurrentUser,
} from './redux/user/user.actions';

import store from './redux/store';

if (localStorage.jwToken) {
	const userInfo = { userInfo: jwtDecode(localStorage.jwToken) };
	if (Date.now() >= userInfo.userInfo.exp * 1000) {
		localStorage.clear();
		store.dispatch(unSetCurrentUser({}));
	} else {
		// prevent someone from manually tempering with the token
		setAuthorizationToken(localStorage.jwToken);
		store.dispatch(setCurrentUser(userInfo));
	}
}

function App() {
	return (
		<div>
			<Switch>
				<ErrorBoundary>
					<Route exact path='/' component={landingComponent} />
					<Route path='/auth' component={SignInPage} />
					<Route path='/user' component={MainContent} />
				</ErrorBoundary>
			</Switch>
		</div>
	);
}

export default App;
