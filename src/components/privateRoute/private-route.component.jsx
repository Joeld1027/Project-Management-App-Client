import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({
	children,
	isAuthenticated,
	userRole,
	allowedRoles,
	path,
	...rest
}) {
	const userHasRequiredRole = allowedRoles.includes(userRole);
	const message = userHasRequiredRole
		? 'Please Sign in to view this page'
		: 'Not an authorized route';
	return (
		<Route
			{...rest}
			render={({ location }) =>
				isAuthenticated && userHasRequiredRole ? (
					children
				) : (
					<Redirect
						to={{
							pathname: '/auth',
							state: { from: location },
							alert: message,
						}}
					/>
				)
			}
		/>
	);
}

export default PrivateRoute;
