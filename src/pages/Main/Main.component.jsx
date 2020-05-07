import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import ErrorBoundary from '../../components/error-boundary/error-boundary.component';
import { Dimmer, Loader } from 'semantic-ui-react';

const landingComponent = lazy(() =>
	import('../../components/landing/landing.component')
);
const SignInPage = lazy(() =>
	import('../Signin&Singup/SignIn&SignUp-page.component')
);
const MainContent = lazy(() =>
	import('../../components/main-content/main-content.component')
);

const Main = () => {
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
						<Route component={NoMatch} />
					</Suspense>
				</ErrorBoundary>
			</Switch>
		</div>
	);
};

const NoMatch = () => <h1>404 page not found</h1>;

export default Main;
