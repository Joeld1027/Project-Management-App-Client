import React from 'react';
import { Switch, Route } from 'react-router-dom';
import landingComponent from '../../components/landing/landing.component';
import SignInPage from '../Signin&Singup/SignIn&SignUp-page.component';
import MainContent from '../../components/main-content/main-content.component';

const Main = () => {
	return (
		<div>
			<Switch>
				<Route exact path='/' component={landingComponent} />
				<Route path='/auth' component={SignInPage} />
				<Route path='/user' component={MainContent} />
			</Switch>
		</div>
	);
};

export default Main;
