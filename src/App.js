import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ErrorBoundary from './components/error-boundary/error-boundary.component';
import landingComponent from './pages/landing-page/landing.component';
import SignInPage from './pages/Signin&Singup/SignIn&SignUp-page.component';
import MainContent from './components/main-content/main-content.component';

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
