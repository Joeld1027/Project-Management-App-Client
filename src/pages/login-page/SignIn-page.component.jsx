import React from 'react';
import { useLocation } from 'react-router-dom';

const SignInPage = () => {
	let location = useLocation();

	let { from } = location.state || { from: { pathname: '/' } };

	return (
		<div>
			<p>You must log in to view the page at {from.pathname}</p>
			<button>Log in</button>
		</div>
	);
};

export default SignInPage;
