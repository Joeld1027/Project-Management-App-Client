import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import SignIn from '../../components/signin/sign-in.component';
import { SignInPageContainer } from './Signin-page.styles';
import SignUp from '../../components/signup/sign-up.component';
import { Dimmer, Loader } from 'semantic-ui-react';

const SignInPage = ({ isLoading }) => {
	// let location = useLocation();

	let { path } = useRouteMatch();
	// let { from } = location.state || { from: { pathname: '/' } };
	return (
		<SignInPageContainer>
			{isLoading ? (
				<Dimmer active>
					<Loader size='massive'>...Loading</Loader>
				</Dimmer>
			) : (
				<Switch>
					<Route exact path={`${path}`} component={SignIn} />
					<Route exact path={`${path}/signup`} component={SignUp} />
					<Route component={NoMatch} />
				</Switch>
			)}
		</SignInPageContainer>
	);
};
const NoMatch = () => <h1>404 page not found</h1>;

const mapStateToProps = (state) => ({
	isLoading: state.user.isLoading,
});

export default connect(mapStateToProps, null)(SignInPage);
