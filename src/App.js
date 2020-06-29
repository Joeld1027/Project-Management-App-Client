import React from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

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

function App() {
	const dispatch = useDispatch();

	if (localStorage.jwToken) {
		setAuthorizationToken(localStorage.jwToken);
		const userInfo = { userInfo: jwtDecode(localStorage.jwToken) };
		const checkTokenDate = () => {
			if (Date.now() >= userInfo.userInfo.exp * 1000) {
				dispatch(unSetCurrentUser({}));
				localStorage.clear();
			}
		};
		checkTokenDate();
		try {
			// prevent someone from manually tempering with the token
			dispatch(setCurrentUser(userInfo));
		} catch (error) {
			dispatch(unSetCurrentUser({}));
		}
	}

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
