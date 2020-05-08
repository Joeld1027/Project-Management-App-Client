import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ children, isAuthenticated, ...rest }) {
	return (
		<Route
			{...rest}
			render={({ location }) =>
				isAuthenticated ? (
					children
				) : (
					<Redirect
						to={{
							pathname: '/auth',
							state: { from: location },
							alert: 'Need to Sing in first',
						}}
					/>
				)
			}
		/>
	);
}

export default PrivateRoute;
