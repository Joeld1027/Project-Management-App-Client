import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage.component';
import './App.css';
import SignInPage from './pages/login-page/SignIn-page.component';

const logged = true;
function App() {
	return (
		<div className='App'>
			<Switch>
				<Route
					exact
					path='/'
					render={() =>
						logged ? (
							<Redirect from='/' to='/user' />
						) : (
							<Redirect from='/' to='/signin' />
						)
					}
				/>
				<PrivateRoute path='/user'>
					<Homepage />
				</PrivateRoute>
				<Route path='/signin' component={SignInPage} />
				<Route path='*' component={NoMatch} />
			</Switch>
		</div>
	);
}

function PrivateRoute({ children, ...rest }) {
	return (
		<Route
			{...rest}
			render={({ location }) =>
				logged ? (
					children
				) : (
					<Redirect
						to={{
							pathname: '/signin',
							state: { from: location },
						}}
					/>
				)
			}
		/>
	);
}

const NoMatch = () => <h1>404 page not found</h1>;

export default App;
