import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../redux/user/user.actions';

function Landing(props) {
	const logout = (e) => {
		e.preventDefault();
		props.logout();
	};
	return (
		<div>
			<h1>Home Page</h1>
			<button onClick={logout}>logout</button>
		</div>
	);
}
export default connect(null, { logout })(Landing);
