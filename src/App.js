import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Dimmer, Loader } from 'semantic-ui-react';

import ErrorBoundary from './components/error-boundary/error-boundary.component';
import landingComponent from './components/landing/landing.component';
import SignInPage from './pages/Signin&Singup/SignIn&SignUp-page.component';
import MainContent from './components/main-content/main-content.component';

function App() {
	return (
		<div>
			<Switch>
				<ErrorBoundary>
					<Suspense
						fallback={
							<Dimmer active>
								<Loader size='massive'>...Loading</Loader>
							</Dimmer>
						}
					>
						<Route exact path='/' component={landingComponent} />
						<Route path='/auth' component={SignInPage} />
						<Route path='/user' component={MainContent} />
					</Suspense>
				</ErrorBoundary>
			</Switch>
		</div>
	);
}

export default App;
