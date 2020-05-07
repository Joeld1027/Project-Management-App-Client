import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import ErrorBoundary from '../../components/error-boundary/error-boundary.component';

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
					<Suspense fallback={<div>...Loading</div>}>
						<Route exact path='/' component={landingComponent} />
						<Route path='/auth' component={SignInPage} />
						<Route path='/user' component={MainContent} />
					</Suspense>
				</ErrorBoundary>
			</Switch>
		</div>
	);
};

export default Main;
