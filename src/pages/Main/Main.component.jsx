import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

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
				<Suspense fallback={<div>...Loading</div>}>
					<Route exact path='/' component={landingComponent} />
					<Route path='/auth' component={SignInPage} />
					<Route path='/user' component={MainContent} />
				</Suspense>
			</Switch>
		</div>
	);
};

export default Main;
