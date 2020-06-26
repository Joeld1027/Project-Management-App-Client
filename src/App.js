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

	const history = useHistory();

	const checkToken = () => {
		if (localStorage.jwToken) {
			let userInfo = { userInfo: jwtDecode(localStorage.jwToken) };
			if (Date.now() >= userInfo.userInfo.exp * 1000) {
				setAuthorizationToken();
				dispatch(unSetCurrentUser({}));
				localStorage.clear();
				return history.push('/auth');
			}

			// prevent someone from manually tempering with the token
			try {
				setAuthorizationToken(localStorage.jwToken);
				dispatch(setCurrentUser(userInfo));
			} catch (err) {
				dispatch(unSetCurrentUser({}));
			}
		}
	};
	checkToken();
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
