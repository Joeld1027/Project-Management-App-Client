import React, { lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import {
	Route,
	Switch,
	useRouteMatch,
	Redirect,
} from 'react-router-dom';

import { SignInPageContainer } from './Signin-page.styles';
import { Dimmer, Loader } from 'semantic-ui-react';

import AlertMessage from '../../components/alerts/alertMessage';
const SignIn = lazy(() =>
	import('../../components/signin/sign-in.component')
);
const SignUp = lazy(() =>
	import('../../components/signup/sign-up.component')
);

const SignInPage = ({ isAuthenticated, ...rest }) => {
	let { alert } = rest.location;
	let { path } = useRouteMatch();

	if (isAuthenticated) {
		return <Redirect to='/user' />;
	} else {
		return (
			<SignInPageContainer>
				<Switch>
					<Suspense
						fallback={
							<Dimmer active>
								<Loader size='massive'>...Loading</Loader>
							</Dimmer>
						}
					>
						{alert ? <AlertMessage alert={alert} /> : null}
						<Route exact path={`${path}`} component={SignIn} />
						<Route exact path={`${path}/signup`} component={SignUp} />
					</Suspense>
				</Switch>
			</SignInPageContainer>
		);
	}
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.user.isAuthenticated,
});

export default connect(mapStateToProps, null)(SignInPage);
